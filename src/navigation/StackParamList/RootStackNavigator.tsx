import {SearchResultScreen} from '@/screens/main/SearchResultScreen';
import {SearchScreen} from '@/screens/main/SearchScreen';
import {VoiceSearchScreen} from '@/screens/main/VoiceSearchScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigatorScreenParams} from '@react-navigation/native';

export enum QueryType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export type SearchStackParamList = {
  Search: undefined;
  SearchResults: {query: string; queryType: QueryType};
  VoiceSearch: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Search: NavigatorScreenParams<SearchStackParamList>;
  Saved: undefined;
};

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

export const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="SearchResults"
        component={SearchResultScreen}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="VoiceSearch"
        component={VoiceSearchScreen}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};
