import React from 'react';
import {ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from '@/components/styled/Text';
import {Box} from '@/components/styled/Box';
import {BASE_COLORS} from 'theme/elements';

interface ImagesTabContentProps {
  query: string;
}

export const ImagesTabContent: React.FC<ImagesTabContentProps> = ({query}) => {
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = (screenWidth - 40) / 3;

  const images = [
    {
      id: '1',
      url: 'https://unsplash.com/photos/MGaFENpDCsw',
      title: 'Test image 1',
    },
    {id: '2', url: 'https://via.placeholder.com/150', title: 'Test image 2'},
    {id: '3', url: 'https://via.placeholder.com/150', title: 'Test image 3'},
    {id: '4', url: 'https://via.placeholder.com/150', title: 'Test image 4'},
    {id: '5', url: 'https://via.placeholder.com/150', title: 'Test image 5'},
    {id: '6', url: 'https://via.placeholder.com/150', title: 'Test image 6'},
  ];

  return (
    <ScrollView style={styles.container}>
      <Box padding="md">
        <Text color="textPrimary" fontSize={18} fontFamily="medium">
          Image results for "{query}"
        </Text>

        <Box
          marginTop="lg"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between">
          {images.map(image => (
            <Box
              key={image.id}
              width={columnWidth}
              marginBottom="md"
              borderRadius="md"
              overflow="hidden">
              <Image
                source={{uri: image.url}}
                style={{width: columnWidth, height: columnWidth}}
                resizeMode="cover"
              />
              <Text color="textSecondary" fontSize={12} marginTop="xs">
                {image.title}
              </Text>
            </Box>
          ))}
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
