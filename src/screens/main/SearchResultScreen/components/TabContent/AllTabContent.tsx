import React from 'react';
import {Text} from '@/components/styled/Text';
import {Box} from '@/components/styled/Box';
import {QueryType} from '@/navigation/StackParamList/RootStackNavigator';
import {
  SearchResultsList,
  SearchResultItem,
} from '@/components/molecules/SearchResultsList';
import {DictionaryCard} from '@/components/atoms/DictionaryCard.tsx';
import {ThemedScrollView} from '@/components/styled/ScrollView';

const mockSearchResults: SearchResultItem[] = [
  {
    id: '1',
    title: 'ScienceDirect.com',
    url: 'https://www.sciencedirect.com',
    description:
      'The HI assay is classically used for the diagnosis and classification of flaviviruses (Nagarkatti and Nagarkatti, 1980). HI assays measure total...',
    logoSource: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    title: 'HiMedia',
    url: 'https://www.himedialabs.com',
    description:
      'Hi-Sensitivity™ Test Agar is recommended for antimicrobial susceptibility tests. The thiamine and thymidine content is very low which makes media...',
    logoSource: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    title: 'HI-TEST LABORATORIES',
    url: 'https://www.hitestlabs.com',
    description:
      'ABOUT HI-TEST LABORATORIES · HI-TEST will test your equipment 24 hours a day, 7 days a week · Testing programs will never incur delays due to...',
    logoSource: 'https://picsum.photos/200/300',
  },
];

interface AllTabContentProps {
  query: string;
  queryType: QueryType;
}

export const AllTabContent: React.FC<AllTabContentProps> = ({query}) => {
  const handleResultPress = (item: SearchResultItem) => {
    console.log('Pressed result:', item);
  };

  return (
    <ThemedScrollView
      flex={1}
      borderWidth={1}
      borderColor={'red'}
      backgroundColor={'primary'}
      showsVerticalScrollIndicator={false}>
      <Box paddingY="md">
        <Text color="textPrimary" px={'lg'} fontSize={16} fontFamily="medium">
          Search results for "{query}"
        </Text>
        <Box marginTop="lg" px={'md'}>
          <DictionaryCard title={query} />
        </Box>

        <SearchResultsList
          data={mockSearchResults}
          onResultPress={handleResultPress}
        />
      </Box>
    </ThemedScrollView>
  );
};
