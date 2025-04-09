import React from 'react';
import {TouchableOpacity, StyleSheet, TextInput, View} from 'react-native';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';
import GoogleMicIcon from '@/assets/svg/google-mic.svg';
import GoogleLensIcon from '@/assets/svg/google-lens.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '@/components/styled/Button';
import {CenterBox} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {QueryType} from '@/navigation/StackParamList/RootStackNavigator';

export type SearchBarVariant = 'standard' | 'pill';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onBackPress: () => void;
  variant?: SearchBarVariant;
  type?: QueryType;
  onSearchPress?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onBackPress,
  variant = 'standard',
  type = 'TEXT',
  onSearchPress,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleVoiceSearch = () => {
    navigation.navigate('VoiceSearch');
  };

  const handleGoogleLens = () => {
    navigation.navigate('Lens');
  };

  const handleSearchPress = () => {
    if (onSearchPress) {
      onSearchPress();
    }
  };

  if (variant === 'standard') {
    return (
      <>
        <Row style={styles.searchBarContainer}>
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={BASE_COLORS.textPrimary} />
          </TouchableOpacity>

          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder={
                type === 'TEXT' ? 'Search...' : 'Search for images...'
              }
              placeholderTextColor={BASE_COLORS.textPrimary}
              value={value}
              onChangeText={onChangeText}
              autoFocus
            />
          </View>

          <Button onPress={handleVoiceSearch}>
            <GoogleMicIcon width={35} height={35} />
          </Button>

          <Button onPress={handleGoogleLens}>
            <GoogleLensIcon width={35} height={35} />
          </Button>
        </Row>

        <View style={styles.divider} />
      </>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleSearchPress}>
      <CenterBox
        borderRadius={'full'}
        width={'100%'}
        paddingX={'xl'}
        backgroundColor={'secondary'}
        paddingY={'md'}
        justifyContent={'space-between'}
        alignSelf={'center'}
        alignItems={'center'}
        height={60}>
        <CenterBox justifyContent={'flex-start'} style={{gap: 15}}>
          <Icon name={'search'} size={28} color={BASE_COLORS.textSecondary} />
          <Text color={'textSecondary'} fontFamily={'regular'} fontSize={18}>
            {type === 'TEXT' ? 'Search' : 'Search for images'}
          </Text>
        </CenterBox>
        <Row style={{gap: 10}}>
          <Button onPress={handleVoiceSearch}>
            <GoogleMicIcon width={35} height={35} />
          </Button>
          <Button onPress={handleGoogleLens}>
            <GoogleLensIcon width={35} height={35} />
          </Button>
        </Row>
      </CenterBox>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginHorizontal: 8,
  },
  searchInput: {
    color: BASE_COLORS.textPrimary,
    fontSize: 16,
    height: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 4,
  },
});
