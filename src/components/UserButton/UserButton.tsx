import React from 'react';
import {Button} from '../styled/Button';
import {Text} from '../styled/Text';
import {useBottomSheet} from '@/context/BottomSheetContext';

type UserButtonProps = {
  displayPicture?: string;
};

export const UserButton: React.FC<UserButtonProps> = ({}) => {
  // Use the bottom sheet context
  const {openUserBottomSheet} = useBottomSheet();

  return (
    <Button
      onPress={openUserBottomSheet}
      borderRadius="2xl"
      width={35}
      height={35}
      bg={'accentBlue'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Text color={'textPrimary'} fontSize={'large'}>
        A
      </Text>
    </Button>
  );
};
