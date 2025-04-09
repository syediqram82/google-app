import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@/components/styled/Text';
import {CenterBox} from '@/components/styled/Box';
import {BASE_COLORS} from 'theme/elements';

interface EmptyTabContentProps {
  tabName: string;
  query: string;
}

export const EmptyTabContent: React.FC<EmptyTabContentProps> = ({
  tabName,
  query,
}) => {
  return (
    <CenterBox style={styles.container}>
      <Text
        color="textSecondary"
        fontSize={18}
        fontFamily="medium"
        textAlign="center">
        No {tabName} results found for "{query}"
      </Text>
      <Text
        color="textSecondary"
        fontSize={14}
        marginTop="md"
        textAlign="center">
        Try different search terms or browse other categories
      </Text>
    </CenterBox>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.primary,
    paddingHorizontal: 20,
  },
});
