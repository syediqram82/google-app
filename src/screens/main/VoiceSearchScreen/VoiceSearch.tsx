import {CenterBox} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';

export const VoiceSearchScreen = () => {
  return (
    <CenterBox style={{flex: 1}} backgroundColor={'primary'} borderWidth={1}>
      <Text fontSize={'large'} color="primary" font="bold">
        I am inside Voice Search Screen
      </Text>
    </CenterBox>
  );
};
