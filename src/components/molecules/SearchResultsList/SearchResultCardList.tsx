import React from 'react';
import {Box} from '@/components/styled/Box';
import {SearchResultCard} from '@/components/atoms/SearchResultCard';

export interface SearchResultItem {
  id: string;
  title: string;
  url: string;
  description: string;
  logoSource: string;
}

interface SearchResultsListProps {
  subtitle?: string;
  data: SearchResultItem[];
  onResultPress?: (item: SearchResultItem) => void;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  data,
  onResultPress,
}) => {
  return (
    <Box marginTop="lg">
      <Box marginTop="md" style={{gap: 16}}>
        {data.map(item => (
          <SearchResultCard
            key={item.id}
            title={item.title}
            url={item.url}
            description={item.description}
            logoSource={item.logoSource}
            onPress={() => onResultPress?.(item)}
          />
        ))}
      </Box>
    </Box>
  );
};
