import React from 'react';

import {Text} from '@/components/styled/Text';
import {CenterBox} from '@/components/styled/Box';

export const EmptyTabContent = () => {
  return (
    <CenterBox flex={1} backgroundColor={'primary'} flexDirection={'column'}>
      <Text
        color="textSecondary"
        fontSize={18}
        fontFamily="medium"
        textAlign="center">
        I just created All and Images tabs
      </Text>
    </CenterBox>
  );
};
