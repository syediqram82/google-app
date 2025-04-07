import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, CenterBox} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {BASE_COLORS} from 'theme/elements';
import {Row} from '@/components/styled/Row';
import SearchHistoryItemIcon from '@/assets/svg/search-history.svg';

export interface SearchHistoryItem {
  id: string;
  query: string;
  type?: 'image' | 'general';
}

interface SearchHistoryListProps {
  query: string;
  type: 'image' | 'general';
}

export const SearchHistoryList: React.FC<SearchHistoryListProps> = ({
  query,
  type,
}) => {
  return (
    <Row
      alignItems={'center'}
      paddingX={'lg'}
      paddingY={'md'}
      style={styles.historyItem}>
      <CenterBox
        backgroundColor={BASE_COLORS.secondary}
        padding={8}
        borderRadius={'full'}>
        <SearchHistoryItemIcon
          width={28}
          height={28}
          color={BASE_COLORS.textSecondary}
        />
      </CenterBox>

      <Box flex={1}>
        <Text color="textPrimary" fontSize={16}>
          {query}
        </Text>
        {type === 'image' && (
          <Text color="textSecondary" fontSize={14}>
            Images
          </Text>
        )}
      </Box>
    </Row>
  );
};

const styles = StyleSheet.create({
  historyItem: {
    gap: 15,
  },
});
