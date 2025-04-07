import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, CenterBox} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {BASE_COLORS} from 'theme/elements';
import SearchHistoryIcon from '@/assets/svg/search-history.svg';
import TrendingSeachIcon from '@/assets/svg/trending.svg';
import {Button} from '@/components/styled/Button';

export interface SearchItemProps {
  query: string;
  subtitle?: string;
  type: 'history' | 'trending';
  itemType?: 'image' | 'general';
  onPress?: () => void;
}

export const SearchItem: React.FC<SearchItemProps> = ({
  query,
  subtitle,
  type,
  itemType,
  onPress,
}) => {
  return (
    <Button
      flexDirection={'row'}
      display={'flex'}
      paddingX="lg"
      paddingY="lg"
      alignItems={'center'}
      style={styles.itemContainer}
      onPress={onPress}>
      {type === 'history' ? (
        <CenterBox
          backgroundColor={BASE_COLORS.secondary}
          padding={8}
          borderRadius={'full'}>
          <SearchHistoryIcon
            width={28}
            height={28}
            color={BASE_COLORS.textSecondary}
          />
        </CenterBox>
      ) : (
        <CenterBox
          backgroundColor={BASE_COLORS.secondary}
          padding={8}
          borderRadius={'full'}>
          <TrendingSeachIcon
            width={28}
            height={28}
            color={BASE_COLORS.textSecondary}
          />
        </CenterBox>
      )}

      <Box flex={1}>
        <Text color="textPrimary" fontSize={16}>
          {query}
        </Text>

        {(subtitle || itemType === 'image') && (
          <Text color="textSecondary" fontSize={14}>
            {subtitle || 'Images'}
          </Text>
        )}
      </Box>
    </Button>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    gap: 15,
  },
  trendingIcon: {
    marginLeft: 8,
  },
});
