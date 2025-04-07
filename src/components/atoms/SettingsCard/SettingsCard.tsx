import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';

export const SettingsCard = () => {
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
        <Icon
          name="settings"
          size={20}
          color={BASE_COLORS.accentBlue}
          style={{marginRight: 8}}
        />
        <Text color="accentBlue" fontSize={20} fontWeight="semiBold">
          Settings
        </Text>
      </Row>
      <Text color="textSecondary" fontSize="medium" fontWeight="regular">
        Customise your space
      </Text>
    </Box>
  );
};
