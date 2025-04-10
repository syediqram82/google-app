import {Button} from '@/components/styled/Button';
import {AppThemeColors, BASE_COLORS} from 'theme/elements';

export type QuickLinkItemProps = {
  id?: number;
  onPress: () => void;
  icon: React.ReactNode;
  bgColor: AppThemeColors;
};

export const QuickLinkItem: React.FC<QuickLinkItemProps> = ({
  onPress,
  icon,
  bgColor,
}) => {
  return (
    <Button
      onPress={onPress}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={BASE_COLORS[bgColor]}
      width={80}
      paddingY={12}
      borderRadius={'full'}>
      {icon}
    </Button>
  );
};
