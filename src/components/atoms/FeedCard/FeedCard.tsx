import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';

interface FeedCardProps {
  title: string;
  imageUrl?: ImageSourcePropType;
  source: string;
  timeAgo: string;
  sponsored?: boolean;
  videoLength?: string;
  videoChannel?: string;
}

export const FeedCard: React.FC<FeedCardProps> = ({
  title,
  imageUrl,
  source,
  timeAgo,
  sponsored = false,
  videoLength,
  videoChannel,
}) => {
  return (
    <Box
      backgroundColor={BASE_COLORS.secondary}
      borderRadius={'2xl'}
      overflow={'hidden'}
      marginBottom={'lg'}
      width={'100%'}>
      {/* Image section (if exists) */}
      {imageUrl && (
        <Box width={'100%'} height={250}>
          <Image source={imageUrl} style={styles.image} resizeMode="cover" />
          {videoLength && (
            <Box
              position="absolute"
              bottom={8}
              left={8}
              backgroundColor="rgba(0,0,0,0.7)"
              borderRadius={'md'}
              paddingX={'xs'}
              paddingY={2}>
              <Text color="textPrimary" fontSize="small">
                {videoLength}
              </Text>
            </Box>
          )}
          {/* Video Channel Logo (if exists) */}
          {videoChannel && (
            <Box
              position="absolute"
              bottom={8}
              left={8}
              backgroundColor="primary"
              borderRadius={'full'}
              width={36}
              height={36}
              justifyContent="center"
              alignItems="center">
              <Text color="textPrimary" fontSize="small">
                {videoChannel.substring(0, 1)}
              </Text>
            </Box>
          )}
        </Box>
      )}
      {/* Content section */}
      <Box padding={'md'}>
        <Text
          color="textPrimary"
          fontSize="large"
          fontFamily={'regular'}
          fontWeight="semiBold"
          marginBottom={'md'}>
          {title}
        </Text>

        <Row justifyContent="space-between" alignItems="center">
          <Row alignItems="center">
            {sponsored ? (
              <Text color="textSecondary" fontSize="medium">
                Sponsored
              </Text>
            ) : (
              <>
                <Box
                  width={24}
                  height={24}
                  backgroundColor="primary"
                  borderRadius="full"
                  justifyContent="center"
                  alignItems="center"
                  marginRight={'xs'}>
                  <Text color="textPrimary" fontSize="small">
                    {source.substring(0, 1)}
                  </Text>
                </Box>
                <Text
                  color="textSecondary"
                  fontSize="medium"
                  marginRight={'xs'}>
                  {source}
                </Text>
                <Text color="textSecondary" fontSize="medium">
                  • {timeAgo}
                </Text>
              </>
            )}
          </Row>

          <TouchableOpacity>
            <Icon
              name="more-vert"
              size={24}
              color={BASE_COLORS.textSecondary}
            />
          </TouchableOpacity>
        </Row>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
