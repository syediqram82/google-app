import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';
import {SearchItem} from '../SearchItem';
import {Box} from '@/components/styled/Box';
import {Button} from '@/components/styled/Button';

export interface SearchHistoryItem {
  id: string;
  query: string;
  itemType?: 'image' | 'general';
}

export interface TrendingItem {
  id: string;
  query: string;
  subtitle?: string;
}

interface SearchListProps {
  historyItems: SearchHistoryItem[];
  trendingItems: TrendingItem[];
  onManageHistoryPress: () => void;
  onItemPress?: (query: string) => void;
}

export const SearchList: React.FC<SearchListProps> = ({
  historyItems,
  trendingItems,
  onManageHistoryPress,
  onItemPress,
}) => {
  const renderItem = ({
    item,
    type,
  }: {
    item: any;
    type: 'history' | 'trending';
  }) => {
    const handlePress = () => {
      if (onItemPress) {
        onItemPress(item.query);
      }
    };

    return (
      <SearchItem
        query={item.query}
        subtitle={item.subtitle}
        type={type}
        itemType={item.itemType}
        onPress={handlePress}
      />
    );
  };

  const combinedData = [
    ...historyItems.map(item => ({
      ...item,
      type: 'history' as const,
    })),
    {
      id: 'manage-history',
      type: 'manage-history' as const,
    },

    {
      id: 'trending-header',
      type: 'trending-header' as const,
    },

    ...trendingItems.map(item => ({
      ...item,
      type: 'trending' as const,
    })),
  ];

  const renderListItem = ({item}: {item: any}) => {
    // Render appropriate item based on type
    if (item.type === 'history') {
      return renderItem({item, type: 'history'});
    } else if (item.type === 'trending') {
      return renderItem({item, type: 'trending'});
    } else if (item.type === 'manage-history') {
      return (
        <Button
          borderWidth={1}
          borderColor={BASE_COLORS.textSecondary}
          paddingX={'lg'}
          width={'50%'}
          alignSelf={'center'}
          marginBottom={'md'}
          borderRadius={'full'}
          paddingY={'md'}
          onPress={onManageHistoryPress}>
          <Row
            justifyContent="center"
            alignItems="center"
            style={styles.manageHistoryRow}>
            <Icon name="edit" size={18} color={BASE_COLORS.accentBlue} />
            <Text color="textPrimary" fontSize={16}>
              Manage history
            </Text>
          </Row>
        </Button>
      );
    } else if (item.type === 'trending-header') {
      return (
        <>
          <Box height={1} backgroundColor={BASE_COLORS.textSecondary} />
          <Text color="textSecondary" fontSize={16} style={styles.sectionTitle}>
            Trending searches
          </Text>
        </>
      );
    }

    return null;
  };

  return (
    <FlatList
      data={combinedData}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  manageHistoryRow: {
    gap: 10,
  },
});
