import {Row} from '@/components/styled/Row';
import {HomeNotification} from '../HomeNotification';
import {UserButton} from '@/components/UserButton';

export const HomeHeader = () => {
  return (
    <Row
      justifyContent={'flex-end'}
      alignItems={'center'}
      paddingX={20}
      marginTop={3}
      width={'100%'}
      style={{gap: 20}}>
      <HomeNotification />
      <UserButton />
    </Row>
  );
};
