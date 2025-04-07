import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Box} from '@/components/styled/Box';
import {useNavigation} from '@react-navigation/native';
import {BASE_COLORS} from 'theme/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Import components
import {SearchBar} from './components/SearchBar';
import {
  SearchList,
  SearchHistoryItem,
  TrendingItem,
} from './components/SearchList';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const {top} = useSafeAreaInsets();

  const searchHistory: SearchHistoryItem[] = [
    {id: '1', query: 'jsonlint'},
    {id: '2', query: 'google play support'},
    {id: '3', query: 'app store connect'},
    {id: '4', query: 'farmmate agro app'},
    {id: '5', query: 'using p12 keystore android release'},
    {id: '6', query: 'creating a keystore file from a p12 file android.'},
    {id: '7', query: 'weather srinagar'},
    {id: '8', query: 'placeholder image', itemType: 'image'},
    {id: '9', query: 'ghibli image', itemType: 'image'},
    {id: '10', query: 'png images', itemType: 'image'},
  ];

  const trendingSearches: TrendingItem[] = [
    {id: '11', query: 'Dire wolf', subtitle: 'Animal'},
    {id: '12', query: 'Super Cup', subtitle: 'Football competition'},
    {id: '13', query: 'rbi repo rate cut'},
    {id: '14', query: 'zimbabwe u19 vs ireland u19 odi'},
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleManageHistory = () => {
    console.log('Manage history pressed');
  };

  const handleItemPress = (query: string) => {
    setSearchText(query);
    console.log('Search for:', query);
  };

  return (
    <Box flex={1} paddingTop={top} backgroundColor={BASE_COLORS.primary}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={BASE_COLORS.secondary}
      />

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        onBackPress={handleBack}
      />

      <SearchList
        historyItems={searchHistory}
        trendingItems={trendingSearches}
        onManageHistoryPress={handleManageHistory}
        onItemPress={handleItemPress}
      />
    </Box>
  );
};
