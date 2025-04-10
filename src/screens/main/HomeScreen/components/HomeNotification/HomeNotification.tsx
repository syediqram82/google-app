import {TouchableOpacity} from 'react-native';
import {BASE_COLORS} from 'theme/elements';
import NotificationIcon from '@/assets/svg/notification.svg';

export const HomeNotification = () => {
  const onPress = () => {};
  return (
    <TouchableOpacity onPress={onPress}>
      <NotificationIcon width={30} height={30} fill={BASE_COLORS.textPrimary} />
    </TouchableOpacity>
  );
};
