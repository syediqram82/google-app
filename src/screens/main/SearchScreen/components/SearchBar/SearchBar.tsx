import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
} from 'react-native';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';
import GoogleMicIcon from '@/assets/svg/google-mic.svg';
import GoogleLensIcon from '@/assets/svg/google-lens.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '@/components/styled/Button';
import {CenterBox} from '@/components/styled/Box';
import {QueryType} from '@/navigation/StackParamList/RootStackNavigator';
import {ThemedImage} from '@/components/styled/ThemedImage';
import {Formik} from 'formik';

export type SearchBarVariant = 'standard' | 'pill';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onBackPress: () => void;
  variant?: SearchBarVariant;
  type?: QueryType;
  onSearchPress?: () => void;
}

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

  const handleSearchSubmit = (values: {search: string}) => {
    // Dismiss keyboard
    Keyboard.dismiss();

    // Navigate to search results with the query
    if (values.search.trim()) {
      navigation.navigate('SearchResults', {
        query: values.search.trim(),
        queryType: type,
      });
    }
  };

  const handleSearchPress = () => {
    if (onSearchPress) {
      onSearchPress();
    }
  };

  if (variant === 'standard') {
    return (
      <Formik
        initialValues={{search: value}}
        onSubmit={handleSearchSubmit}
        enableReinitialize>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Row paddingX={'xs'}>
              <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <Icon
                  name="arrow-back"
                  size={24}
                  color={BASE_COLORS.textPrimary}
                />
              </TouchableOpacity>

              <View style={styles.searchBar}>
                <TextInput
                  style={styles.searchInput}
                  placeholder={
                    type === 'TEXT' ? 'Search...' : 'Search for images...'
                  }
                  placeholderTextColor={BASE_COLORS.textPrimary}
                  value={values.search}
                  autoFocus={true}
                  onChangeText={text => {
                    handleChange('search')(text);
                    onChangeText(text);
                  }}
                  returnKeyType="search"
                  onSubmitEditing={() => handleSubmit()}
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
        )}
      </Formik>
    );
  }

  return (
    <Formik
      initialValues={{search: value}}
      onSubmit={handleSearchSubmit}
      enableReinitialize>
      {({values, handleChange, handleSubmit}) => (
        <>
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
                <Icon
                  name={'search'}
                  size={28}
                  color={BASE_COLORS.textSecondary}
                />
                {type === QueryType.IMAGE ? (
                  <ThemedImage
                    source={{uri: value}}
                    $width={50}
                    $height={30}
                    resizeMode={'cover'}
                    borderRadius={5}
                  />
                ) : (
                  <TextInput
                    style={styles.searchInput}
                    placeholder={
                      type === 'TEXT' ? 'Search...' : 'Search for images...'
                    }
                    placeholderTextColor={BASE_COLORS.textPrimary}
                    value={values.search}
                    onChangeText={text => {
                      handleChange('search')(text);
                      onChangeText(text);
                    }}
                    returnKeyType="search"
                    onSubmitEditing={() => handleSubmit()}
                  />
                )}
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
        </>
      )}
    </Formik>
  );
};
