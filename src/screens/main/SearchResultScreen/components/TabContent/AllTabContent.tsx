import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from '@/components/styled/Text';
import {Box} from '@/components/styled/Box';
import {BASE_COLORS} from 'theme/elements';

interface AllTabContentProps {
  query: string;
}

export const AllTabContent: React.FC<AllTabContentProps> = ({query}) => {
  return (
    <ScrollView style={styles.container}>
      <Box padding="md">
        <Text color="textPrimary" fontSize={18} fontFamily="medium">
          Search results for "{query}"
        </Text>
        <Box marginTop="lg">
          <Text color="textPrimary" fontSize={32} fontFamily="medium">
            Dictionary
          </Text>
          <Text color="textSecondary" fontSize={16} marginTop="xs">
            Definitions from Oxford Languages
          </Text>

          <Box
            marginTop="lg"
            paddingY="md"
            paddingX="lg"
            borderWidth={1}
            borderColor="rgba(255,255,255,0.2)"
            borderRadius="lg">
            <Text color="textPrimary" fontSize={16}>
              English
            </Text>
          </Box>

          <Box marginTop="lg" flexDirection="row" alignItems="center">
            <Box
              width={60}
              height={60}
              borderRadius={30}
              backgroundColor="#a4c3f5"
              justifyContent="center"
              alignItems="center">
              <Text color="primary" fontSize={24}>
                🔊
              </Text>
            </Box>
            <Box marginLeft="md">
              <Text color="textPrimary" fontSize={24} fontFamily="bold">
                test¹
              </Text>
              <Text color="textSecondary" fontSize={16}>
                /test/
              </Text>
            </Box>
          </Box>

          <Text color="textSecondary" fontSize={18} marginTop="lg">
            noun
          </Text>

          <Box marginTop="md">
            <Text color="textPrimary" fontSize={18}>
              1. a procedure intended to establish the quality, performance, or
              reliability of something, especially before it is taken into
              widespread use.
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.primary,
  },
});
