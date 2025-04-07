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

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onBackPress: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onBackPress,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleVoiceSearch = () => {
    navigation.navigate('VoiceSearch');
  };

  const handleGoogleLens = () => {
    navigation.navigate('GoogleLens');
  };
  return (
    <>
      <Row style={styles.searchBarContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={BASE_COLORS.textPrimary} />
        </TouchableOpacity>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={BASE_COLORS.textPrimary}
            value={value}
            onChangeText={onChangeText}
            autoFocus
          />
        </View>

        <Button padding={'md'} onPress={handleVoiceSearch}>
          <GoogleMicIcon width={35} height={35} />
        </Button>

        <Button padding={'md'} onPress={handleGoogleLens}>
          <GoogleLensIcon width={35} height={35} />
        </Button>
      </Row>

      <View style={styles.divider} />
    </>
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
