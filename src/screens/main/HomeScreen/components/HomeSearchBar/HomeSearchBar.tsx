import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CenterBox} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import GoogleMicIcon from '@/assets/svg/google-mic.svg';
import GoogleLensIcon from '@/assets/svg/google-lens.svg';
import {BASE_COLORS} from 'theme/elements';
import {Row} from '@/components/styled/Row';
import {RootStackParamList} from '@/navigation/StackParamList/RootStackNavigator';
import {Button} from '@/components/styled/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const HomeSearchBar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSearchPress = () => {
    navigation.navigate('Search', {
      screen: 'Search',
    });
  };

  const handleVoiceSearch = () => {
    navigation.navigate('Search', {
      screen: 'VoiceSearch',
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleSearchPress}>
      <CenterBox
        borderRadius={'full'}
        width={'100%'}
        paddingX={'3xl'}
        backgroundColor={'secondary'}
        paddingY={'md'}
        justifyContent={'space-between'}
        alignSelf={'center'}
        alignItems={'center'}
        height={80}>
        <CenterBox justifyContent={'flex-start'} style={{gap: 15}}>
          <Icon name={'search'} size={32} color={BASE_COLORS.textSecondary} />
          <Text color={'textSecondary'} fontFamily={'regular'} fontSize={22}>
            Search
          </Text>
        </CenterBox>
        <Row style={{gap: 10}}>
          <Button padding={'md'} onPress={handleVoiceSearch}>
            <GoogleMicIcon width={45} height={45} />
          </Button>
          <Button padding={'md'}>
            <GoogleLensIcon width={45} height={45} />
          </Button>
        </Row>
      </CenterBox>
    </TouchableOpacity>
  );
};
