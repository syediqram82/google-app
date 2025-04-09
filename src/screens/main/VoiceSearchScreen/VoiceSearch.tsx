/* eslint-disable no-catch-shadow */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  StatusBar,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Text} from '@/components/styled/Text';
import {Box} from '@/components/styled/Box';
import {startSpeechToText} from 'react-native-voice-to-text';
import {BASE_COLORS} from 'theme/elements';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MusicNoteIcon from '@/assets/svg/music-note.svg';
import {Row} from '@/components/styled/Row';
import {VoiceHeader} from './components/VoiceHeader/VoiceHeader';
import {ThemedImage} from '@/components/styled/ThemedImage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  QueryType,
  SearchStackParamList,
} from '@/navigation/StackParamList/RootStackNavigator';
import {Button} from '@/components/styled/Button';

export const VoiceSearchScreen = () => {
  const [text, setText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackParamList>>();
  const {top} = useSafeAreaInsets();

  const blueDotAnim = useRef(new Animated.Value(1)).current;
  const redDotAnim = useRef(new Animated.Value(1)).current;
  const yellowDotAnim = useRef(new Animated.Value(1)).current;
  const greenDotAnim = useRef(new Animated.Value(1)).current;
  const dotsAnimationRef = useRef<Animated.CompositeAnimation | null>(null);

  const startDotsAnimation = () => {
    const createDotAnimation = (animValue: Animated.Value) => {
      return Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1.5,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 1,
          duration: 300,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]);
    };

    dotsAnimationRef.current = Animated.loop(
      Animated.stagger(150, [
        createDotAnimation(blueDotAnim),
        createDotAnimation(redDotAnim),
        createDotAnimation(yellowDotAnim),
        createDotAnimation(greenDotAnim),
      ]),
    );

    dotsAnimationRef.current.start();
  };

  const stopDotsAnimation = () => {
    if (dotsAnimationRef.current) {
      dotsAnimationRef.current.stop();
      blueDotAnim.setValue(1);
      redDotAnim.setValue(1);
      yellowDotAnim.setValue(1);
      greenDotAnim.setValue(1);
    }
  };

  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message:
              'This app needs access to your microphone for voice search',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      const startListeningOnMount = async () => {
        await startListening();
      };
      startListeningOnMount();
      return () => {
        stopDotsAnimation();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  useEffect(() => {
    if (isListening) {
      startDotsAnimation();
    } else {
      stopDotsAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening]);

  const startListening = async () => {
    setIsListening(true);
    setError(null);

    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
      setError('Microphone permission denied');
      setIsListening(false);
      return;
    }

    try {
      const audioText = await startSpeechToText();
      if (audioText && typeof audioText === 'string') {
        setText(audioText);

        setTimeout(() => {
          navigation.navigate('SearchResults', {
            query: audioText,
            queryType: QueryType.TEXT,
          });
        }, 1000);
      }
    } catch (error: any) {
      console.log({error});
      setError(error?.message || 'Speech recognition failed');
    } finally {
      setIsListening(false);
    }
  };

  const handleRetry = () => {
    startListening();
  };

  const renderGoogleDots = () => {
    return (
      <Row justifyContent="space-between" width={85}>
        <Animated.View
          style={[
            styles.dot,
            styles.blueDot,
            {transform: [{scale: blueDotAnim}]},
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            styles.redDot,
            {transform: [{scale: redDotAnim}]},
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            styles.yellowDot,
            {transform: [{scale: yellowDotAnim}]},
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            styles.greenDot,
            {transform: [{scale: greenDotAnim}]},
          ]}
        />
      </Row>
    );
  };

  return (
    <Box flex={1} paddingTop={top} backgroundColor={BASE_COLORS.secondary}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BASE_COLORS.secondary}
      />

      <VoiceHeader />

      <Box
        height={'100%'}
        flex={1}
        justifyContent={'space-evenly'}
        alignItems={'center'}>
        {/* Status text */}
        <Text
          fontSize={'large'}
          fontFamily={'regular'}
          color={'textSecondary'}
          textAlign={'center'}>
          {isListening
            ? "I'm listening..."
            : error
            ? "Couldn't hear that. Tap to try again"
            : text
            ? 'Searching for...'
            : 'Speak now'}
        </Text>
        {isListening ? (
          <Box height={70} justifyContent="center" alignItems="center">
            {renderGoogleDots()}
          </Box>
        ) : (
          <ThemedImage
            source={require('@/assets/png/google-voice.png')}
            width={150}
            height={70}
          />
        )}
        {!isListening && text ? (
          <Text
            color="textPrimary"
            fontSize={20}
            fontFamily="regular"
            textAlign="center"
            paddingX="lg">
            "{text}"
          </Text>
        ) : null}

        {!isListening && error ? (
          <Button
            marginY="lg"
            backgroundColor="textPrimary"
            borderRadius="lg"
            paddingX="xl"
            paddingY="md"
            onPress={handleRetry}>
            <Text color="primary" fontSize={16}>
              Try Again
            </Text>
          </Button>
        ) : null}

        <Row
          justifyContent="center"
          paddingX={'lg'}
          paddingY={'sm'}
          borderRadius={'full'}
          alignItems="center"
          borderWidth={0.5}
          borderColor={BASE_COLORS.textSecondary}
          backgroundColor={'primary'}
          style={styles.manageHistoryRow}>
          <MusicNoteIcon
            width={18}
            height={18}
            color={BASE_COLORS.accentBlue}
          />
          <Text color="textPrimary" fontFamily={'regular'} fontSize={16}>
            Search a song
          </Text>
        </Row>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  manageHistoryRow: {
    gap: 10,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  blueDot: {
    backgroundColor: '#4285F4',
  },
  redDot: {
    backgroundColor: '#EA4335',
  },
  yellowDot: {
    backgroundColor: '#FBBC05',
  },
  greenDot: {
    backgroundColor: '#34A853',
  },
});
