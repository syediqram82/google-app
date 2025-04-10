import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';

interface AirQualityCardProps {
  airQualityIndex?: number;
  status?: string;
}

export const AirQualityCard: React.FC<AirQualityCardProps> = ({
  airQualityIndex = 146,
  status = 'Moderate',
}) => {
  return (
    <Box
      borderWidth={0.5}
      borderColor="textSecondary"
      borderRadius={'2xl'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      padding={'lg'}
      width={200}
      height={100}>
      <Row alignItems="center">
        <Text
          color="textPrimary"
          fontSize="medium"
          fontWeight="medium"
          marginRight={'xs'}>
          Air quality
        </Text>
        <Text color="textPrimary" fontSize="medium" fontWeight="regular">
          • {airQualityIndex}
        </Text>
      </Row>
      <Row justifyContent="space-between" alignItems="center">
        <Text
          color="textPrimary"
          fontSize={20}
          fontWeight="medium"
          fontFamily={'regular'}>
          {status}
        </Text>
        <Box
          backgroundColor={'#FCD34D'}
          width={32}
          height={32}
          borderRadius={'full'}
          justifyContent="center"
          alignItems="center">
          <Icon name="waves" size={20} color={BASE_COLORS.primary} />
        </Box>
      </Row>
    </Box>
  );
};
