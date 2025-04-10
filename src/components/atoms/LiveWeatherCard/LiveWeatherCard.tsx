import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface LiveWeatherCardProps {
  location?: string;
  temperature?: number;
  weatherIcon?: string;
}

export const LiveWeatherCard: React.FC<LiveWeatherCardProps> = ({
  location = 'Gurugram',
  temperature = 32,
  weatherIcon = 'sunny',
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
      <Text
        color="textPrimary"
        fontSize="medium"
        fontWeight="regular"
        marginBottom={'xs'}>
        {location}
      </Text>
      <Row justifyContent="space-between" alignItems="center">
        <Text color="textPrimary" fontSize={28} fontWeight="bold">
          {temperature}°
        </Text>
        <Icon name={weatherIcon} size={32} color={'#FFD700'} />
      </Row>
    </Box>
  );
};
