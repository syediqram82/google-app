import {Row} from '@/components/styled/Row';
import BackIcon from '@/assets/svg/arrow-back-new.svg';
import LanguageIcon from '@/assets/svg/language.svg';
import {BASE_COLORS} from 'theme/elements';
import {Button} from '@/components/styled/Button';
import {useNavigation} from '@react-navigation/native';

export const VoiceHeader = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Row
      paddingX={'lg'}
      marginTop={'lg'}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <Button
        onPress={handleBack}
        backgroundColor={'primary'}
        padding={8}
        borderRadius={'full'}>
        <BackIcon width={21} height={21} color={BASE_COLORS.textSecondary} />
      </Button>
      <Button backgroundColor={'primary'} padding={8} borderRadius={'full'}>
        <LanguageIcon
          width={23}
          height={23}
          color={BASE_COLORS.textSecondary}
        />
      </Button>
    </Row>
  );
};
