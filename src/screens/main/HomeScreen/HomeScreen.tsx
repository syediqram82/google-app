import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeHeader} from './components/HomeHeader/HomeHeader';
import {ThemedScrollView} from '@/components/styled/ScrollView';
import {ThemedImage} from '@/components/styled/ThemedImage';
import {HomeSearchBar} from './components/HomeSearchBar';
import {Box} from '@/components/styled/Box';
import {QuickLinksList} from '@/components/molecules/QuickLinksList';
import {InfoCardList} from '@/components/molecules/InfoCardsList';
import {FeedList} from '@/components/molecules/FeedList';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <ThemedScrollView
      flex={1}
      showsVerticalScrollIndicator={false}
      paddingTop={top}
      backgroundColor={'primary'}
      stickyHeaderIndices={[2]}>
      <HomeHeader />
      <ThemedImage
        source={require('@/assets/png/google-logo.png')}
        alignSelf={'center'}
        height={90}
        width={160}
      />
      <Box paddingX={'md'}>
        <HomeSearchBar />
      </Box>

      <Box
        paddingX={'md'}
        paddingBottom={'2xl'}
        borderBottomWidth={0.5}
        borderBottomColor={'textPrimary'}>
        <QuickLinksList />
      </Box>

      <Box style={{gap: 20}} marginTop={10}>
        <InfoCardList />
        <FeedList />
      </Box>
    </ThemedScrollView>
  );
};
