import {CenterBox} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';

export const NotificationScreen = () => {
  return (
    <CenterBox style={{flex: 1}}>
      <Text fontSize={'large'} color="primary" font="bold">
        I am inside Saved Notification Screen
      </Text>
    </CenterBox>
  );
};
