import React from 'react';
import {TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';

export interface TrendingItem {
  id: string;
  query: string;
  subtitle?: string;
}

interface TrendingSearchesProps {
  data: TrendingItem[];
}

export const TrendingSearches: React.FC<TrendingSearchesProps> = ({data}) => {
  const renderTrendingItem = ({item}: {item: TrendingItem}) => (
    <TouchableOpacity style={styles.trendingItem}>
      <Icon
        name="trending-up"
        size={24}
        color={BASE_COLORS.textSecondary}
        style={styles.trendingIcon}
      />
      <Box flex={1}>
        <Text color="textPrimary" fontSize={16}>
          {item.query}
        </Text>
        {item.subtitle && (
          <Text color="textSecondary" fontSize={14}>
            {item.subtitle}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );

  return (
    <Box>
      <Text color="textSecondary" fontSize={16} style={styles.sectionTitle}>
        Trending searches
      </Text>

      <FlatList
        data={data}
        renderItem={renderTrendingItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  trendingIcon: {
    marginRight: 16,
    opacity: 0.7,
  },
});
