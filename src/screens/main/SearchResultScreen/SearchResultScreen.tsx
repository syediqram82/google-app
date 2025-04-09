import {Box} from '@/components/styled/Box';
import {SearchBar} from '../SearchScreen/components/SearchBar';
import {BASE_COLORS} from 'theme/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchTabView} from './components/SearchTabView';
import {QueryType} from '@/navigation/StackParamList/RootStackNavigator';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {StatusBar} from 'react-native';

export const SearchResultScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();

  // Get query from route params or use a default
  const params = route.params as
    | {query: string; queryType: QueryType}
    | undefined;
  const query = params?.query || 'test';
  const queryType = params?.queryType || QueryType.TEXT;

  const [searchValue, setSearchValue] = useState(query);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Box
      style={{flex: 1}}
      backgroundColor={BASE_COLORS.primary}
      paddingTop={top}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BASE_COLORS.secondary}
      />

      <SearchBar
        value={searchValue}
        onChangeText={setSearchValue}
        onBackPress={handleBackPress}
        variant="standard"
        type={queryType}
      />

      <SearchTabView query={query} />
    </Box>
  );
};
