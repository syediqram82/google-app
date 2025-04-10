import {Box} from '@/components/styled/Box';
import {SearchBar} from '../SearchScreen/components/SearchBar';
import {BASE_COLORS} from 'theme/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchTabView} from './components/SearchTabView';
import {QueryType} from '@/navigation/StackParamList/RootStackNavigator';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {StatusBar, Text} from 'react-native';

interface SearchResultScreenProps {
  customParams?: {
    query: string;
    queryType: QueryType;
  };
}

export const SearchResultScreen = ({customParams}: SearchResultScreenProps) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as
    | {query: string; queryType: QueryType}
    | undefined;
  const query = params?.query || customParams?.query;
  const queryType = params?.queryType || customParams?.queryType;

  const [searchValue, setSearchValue] = useState(query);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Box
      style={{flex: 1}}
      backgroundColor={BASE_COLORS.primary}
      px={'xs'}
      paddingTop={top}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BASE_COLORS.secondary}
      />

      <SearchBar
        value={query || searchValue || ''}
        onChangeText={setSearchValue}
        onBackPress={handleBackPress}
        variant="pill"
        type={queryType}
      />

      <SearchTabView
        query={query || ''}
        queryType={queryType || QueryType.TEXT}
      />
    </Box>
  );
};
