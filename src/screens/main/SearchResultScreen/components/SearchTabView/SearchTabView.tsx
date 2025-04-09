import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {AllTabContent, ImagesTabContent, EmptyTabContent} from '../TabContent';
import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {BASE_COLORS} from 'theme/elements';
import {ThemedScrollView} from '@/components/styled/ScrollView';
import {Button} from '@/components/styled/Button';

interface SearchTabViewProps {
  query: string;
}

type TabRoute = {
  key: string;
  title: string;
};

export const SearchTabView: React.FC<SearchTabViewProps> = ({query}) => {
  // Define the initial routes - all tab options
  const [routes] = useState<TabRoute[]>([
    {key: 'all', title: 'All'},
    {key: 'images', title: 'Images'},
    {key: 'videos', title: 'Videos'},
    {key: 'shopping', title: 'Shopping'},
    {key: 'news', title: 'News'},
    {key: 'forums', title: 'Forums'},
  ]);

  // Track the current index
  const [index, setIndex] = useState(0);

  // Render the scene for each tab
  const renderScene = SceneMap({
    all: () => <AllTabContent query={query} />,
    images: () => <ImagesTabContent query={query} />,
    videos: () => <EmptyTabContent tabName="Videos" query={query} />,
    shopping: () => <EmptyTabContent tabName="Shopping" query={query} />,
    news: () => <EmptyTabContent tabName="News" query={query} />,
    forums: () => <EmptyTabContent tabName="Forums" query={query} />,
  });

  // Create a custom tab bar from scratch
  const renderTabBar = () => {
    return (
      <Box backgroundColor={BASE_COLORS.primary}>
        <ThemedScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          paddingLeft={10}>
          {routes.map((route, i) => (
            <Button
              key={route.key}
              style={[styles.tabItem, i === index && styles.activeTabItem]}
              onPress={() => setIndex(i)}>
              <Text
                color={i === index ? 'textPrimary' : 'textSecondary'}
                fontSize={13}
                fontFamily={i === index ? 'medium' : 'regular'}>
                {route.title}
              </Text>
              {i === index && <View style={styles.indicator} />}
            </Button>
          ))}
        </ThemedScrollView>
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      renderTabBar={() => renderTabBar()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    position: 'relative',
    alignItems: 'center',
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: BASE_COLORS.textPrimary,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 0.2,
    backgroundColor: 'red',
  },
});
