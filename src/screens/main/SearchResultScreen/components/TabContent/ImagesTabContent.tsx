import React from 'react';
import {Text} from '@/components/styled/Text';
import {Box} from '@/components/styled/Box';
import {Row} from '@/components/styled/Row';
import {BASE_COLORS} from 'theme/elements';
import {ThemedImage} from '@/components/styled/ThemedImage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from '@/components/styled/Button';
import {ThemedScrollView} from '@/components/styled/ScrollView';

interface ImagesTabContentProps {
  query: string;
}

interface ProductItem {
  id: string;
  imageUrl: any;
  title: string;
  price?: string;
  store: {
    name: string;
    logo: any;
  };
}

export const ImagesTabContent: React.FC<ImagesTabContentProps> = ({}) => {
  const products: ProductItem[] = [
    {
      id: '1',
      imageUrl: 'https://loremflickr.com/200/300/',
      title:
        "GuliriFei Women's Two Piece Outfit Short Sleeve V-Neck Knit Top and Pants Set",
      store: {
        name: 'Amazon.com',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/200/300',
      title: 'Trendyol Striped Cotton Top - Tops for Women',
      price: '₹659*',
      store: {
        name: 'Myntra',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/200/300',
      title:
        "GuliriFei Women's Two Piece Outfit Short Sleeve V-Neck Knit Top and Pants Set",
      store: {
        name: 'Amazon.com',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '4',
      imageUrl: 'https://picsum.photos/200/300',
      title: 'Trendyol Striped Cotton Top - Tops for Women',
      price: '₹659*',
      store: {
        name: 'Myntra',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '5',
      imageUrl: 'https://picsum.photos/200/300',
      title:
        "GuliriFei Women's Two Piece Outfit Short Sleeve V-Neck Knit Top and Pants Set",
      store: {
        name: 'Amazon.com',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '6',
      imageUrl: 'https://picsum.photos/200/300',
      title: 'Trendyol Striped Cotton Top - Tops for Women',
      price: '₹659*',
      store: {
        name: 'Myntra',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '7',
      imageUrl: 'https://picsum.photos/200/300',
      title:
        "GuliriFei Women's Two Piece Outfit Short Sleeve V-Neck Knit Top and Pants Set",
      store: {
        name: 'Amazon.com',
        logo: 'https://picsum.photos/200/300',
      },
    },
    {
      id: '8',
      imageUrl: 'https://picsum.photos/200/300',
      title: 'Trendyol Striped Cotton Top - Tops for Women',
      price: '₹659*',
      store: {
        name: 'Myntra',
        logo: 'https://picsum.photos/200/300',
      },
    },
  ];

  return (
    <ThemedScrollView flex={1} backgroundColor={'primary'}>
      <Box padding="md" flexDirection="row" alignItems="center">
        <Icon name="info-outline" size={20} color={BASE_COLORS.textSecondary} />
        <Text color="textSecondary" fontSize={14} marginLeft="xs">
          Results for people are limited
        </Text>
      </Box>
      <Box paddingY="md">
        <Row marginBottom="md">
          <Box flex={1} flexDirection="row" flexWrap="wrap" style={{gap: 10}}>
            {products.map(product => (
              <Button
                key={product.id}
                backgroundColor={BASE_COLORS.secondary}
                width={'48%'}
                borderRadius="lg"
                overflow="hidden"
                marginBottom="xs">
                <ThemedImage
                  source={{uri: product.imageUrl}}
                  $width="100%"
                  $height={150}
                  resizeMode="cover"
                />

                <Box padding="xs">
                  <Row alignItems="center" marginBottom="xs">
                    <ThemedImage
                      source={product.store.logo}
                      $width={20}
                      $height={20}
                      resizeMode="contain"
                      borderRadius={50}
                    />
                    <Text color="textSecondary" fontSize={12} marginLeft="xs">
                      {product.store.name}
                    </Text>
                  </Row>
                  <Text color="textPrimary" fontSize={12} numberOfLines={2}>
                    {product.title}
                  </Text>
                  {product.price && (
                    <Box
                      backgroundColor="primary"
                      borderRadius="md"
                      paddingX="sm"
                      paddingY="xs"
                      marginTop="xs"
                      alignSelf="flex-start">
                      <Row alignItems="center">
                        <Icon
                          name="local-offer"
                          size={12}
                          color={BASE_COLORS.textPrimary}
                        />
                        <Text
                          color="textPrimary"
                          fontSize={14}
                          fontWeight="bold"
                          marginLeft="xs">
                          {product.price}
                        </Text>
                      </Row>
                    </Box>
                  )}
                </Box>
              </Button>
            ))}
          </Box>
        </Row>
      </Box>
    </ThemedScrollView>
  );
};
