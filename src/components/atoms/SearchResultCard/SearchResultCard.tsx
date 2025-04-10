import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {TouchableOpacity} from '@/components/styled/TouchableOpacity';
import {ThemedImage} from '@/components/styled/ThemedImage';

interface SearchResultCardProps {
  title: string;
  url: string;
  description: string;
  logoSource: string;
  onPress?: () => void;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  title,
  url,
  description,
  logoSource,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Box flexDirection="row" alignItems="center" marginBottom="md">
        <Box
          width={40}
          height={40}
          borderRadius={20}
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#1e1e1e">
          <ThemedImage
            source={{uri: logoSource}}
            $width={24}
            $height={24}
            resizeMode="contain"
          />
        </Box>
        <Box marginLeft="md" flex={1}>
          <Text color="textPrimary" fontSize={13} fontFamily="medium">
            {title}
          </Text>
          <Text color="textSecondary" fontSize={10}>
            {url}
          </Text>
        </Box>
      </Box>
      <Text
        color="textSecondary"
        fontFamily="regular"
        fontSize={14}
        numberOfLines={3}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderColor: '#B0B0B0',

    marginVertical: 8,
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
