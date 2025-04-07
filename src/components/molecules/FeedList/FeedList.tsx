import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FeedCard} from '@/components/atoms/FeedCard';

// Sample data based on the screenshots with local placeholder images
const feedItems = [
  {
    id: '1',
    title:
      'Onitsuka Tiger Sneakers Are Still Making Adidas Sweat in the It-Shoe Race, According to Kaia Gerber',
    source: 'Marie Claire Magazine',
    timeAgo: '1d',
    imageUrl: require('@/assets/png/google-logo.png'), // Replace with your actual image
  },
  {
    id: '2',
    title:
      'Cursor Co-Founder Aman Sanger on the Journey from 0-$100M in 12 Months',
    source: 'YouTube',
    timeAgo: '4d',
    videoChannel: 'Peak XV',
    videoLength: '28:48',
    imageUrl: require('@/assets/png/google-logo.png'), // Replace with your actual image
  },
  {
    id: '3',
    title:
      'Google Cloud. Build, test and deploy with ease. Get $300 to try Google Cloud now.',
    source: 'Google Cloud',
    timeAgo: '',
    sponsored: true,
    imageUrl: require('@/assets/png/google-logo.png'), // Replace with your actual image
  },
  {
    id: '4',
    title:
      'Your dream MacBook Pro is now over 70% off — and it even comes with the discontinued Touch Bar',
    source: 'Mashable',
    timeAgo: '9h',
    imageUrl: require('@/assets/png/google-logo.png'), // Replace with your actual image
  },
  {
    id: '5',
    title: 'GOOGLE SUMMER OF CODE 2025 CONTRIBUTOR APPLICATIONS NOW OPEN!',
    source: 'Frontlines Media',
    timeAgo: '1d',
    imageUrl: require('@/assets/png/google-logo.png'), // Replace with your actual image
  },
];

export const FeedList = () => {
  const renderItem = ({item}: {item: (typeof feedItems)[0]}) => (
    <FeedCard
      title={item.title}
      source={item.source}
      timeAgo={item.timeAgo}
      imageUrl={item.imageUrl}
      sponsored={item.sponsored}
      videoLength={item.videoLength}
      videoChannel={item.videoChannel}
    />
  );

  return (
    <FlatList
      data={feedItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});
