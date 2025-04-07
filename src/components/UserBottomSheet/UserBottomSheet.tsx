import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import {BottomSheet, BottomSheetRef} from '@/components/styled/BottomSheet';
import {MenuOption} from '@/components/atoms/MenuOption';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';
import {ThemedImage} from '../styled/ThemedImage';
import {Button} from '../styled/Button';
import DropDownIcon from '@/assets/svg/arrow-drop.svg';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

export interface UserBottomSheetRef {
  open: () => void;
  close: () => void;
}

export const UserBottomSheet = forwardRef<UserBottomSheetRef, {}>(
  (props, ref) => {
    const bottomSheetRef = useRef<BottomSheetRef>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const [openDropDown, setOpenDropDown] = useState(false);
    const dropdownHeight = useRef(new Animated.Value(0)).current;
    const dropdownOpacity = useRef(new Animated.Value(0)).current;

    const toggleDropDown = () => {
      if (openDropDown) {
        Animated.parallel([
          Animated.timing(dropdownHeight, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(dropdownOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start(() => setOpenDropDown(false));
      } else {
        setOpenDropDown(true);
        Animated.parallel([
          Animated.timing(dropdownHeight, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(dropdownOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start();
      }
    };

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      open: () => {
        bottomSheetRef.current?.open();
      },
      close: () => {
        bottomSheetRef.current?.close();
      },
    }));

    const handleClose = () => {
      bottomSheetRef.current?.close();
    };

    const handleSheetChanges = useCallback((index: number) => {
      // Index 1 corresponds to '100%' snap point (assuming we have ['85%', '100%'])
      setIsFullScreen(index === 1);
      console.log(
        'Sheet changed to index:',
        index,
        'isFullScreen:',
        index === 1,
      );
    }, []);

    // Apply different border radius based on fullscreen state
    const topSectionRadius = 'xl';
    const bottomSectionRadius = 'xl';

    return (
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['80%', '100%']}
        backdrop={true}
        sheetWidth={isFullScreen ? '100%' : '95%'}
        borderRadius={isFullScreen ? 0 : 45}
        onChange={handleSheetChanges}
        backgroundColor={BASE_COLORS.secondary}
        handleStyle={{
          backgroundColor: BASE_COLORS.secondary,
        }}
        enableExpandToFullScreen={true}>
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <Box paddingBottom={'lg'} paddingX={'lg'}>
            {/* Header with close button and Google logo */}
            <Row
              justifyContent="space-between"
              alignItems="center"
              marginBottom="lg"
              paddingX="md">
              <TouchableOpacity onPress={handleClose}>
                <Icon name="close" size={28} color={BASE_COLORS.textPrimary} />
              </TouchableOpacity>
              <ThemedImage
                source={require('@/assets/png/google-logo.png')}
                alignSelf={'center'}
                height={30}
                width={95}
              />
              <Box width={28} />
            </Row>

            {/* Account Profile Section */}
            <Box
              paddingX="md"
              paddingY="lg"
              backgroundColor={BASE_COLORS.primary}
              borderTopLeftRadius={topSectionRadius}
              borderTopRightRadius={topSectionRadius}
              marginBottom="xxs">
              <Row alignItems="center" marginBottom="md">
                <Box
                  width={45}
                  height={45}
                  borderRadius="full"
                  backgroundColor="#D63285"
                  justifyContent="center"
                  alignItems="center"
                  marginRight="md">
                  <Text
                    color="textPrimary"
                    fontSize="large"
                    fontFamily={'regular'}>
                    F
                  </Text>
                </Box>
                <Box flex={1}>
                  <Row justifyContent="space-between" alignItems="center">
                    <Text
                      color="textPrimary"
                      fontSize={15}
                      fontFamily={'semiBold'}>
                      Dummy Name
                    </Text>
                    <Button borderRadius={'full'} onPress={toggleDropDown}>
                      <DropDownIcon
                        onPress={toggleDropDown}
                        width={30}
                        height={30}
                        color={BASE_COLORS.textPrimary}
                      />
                    </Button>
                  </Row>
                  <Text color="textSecondary" fontSize="small">
                    dummyname@gmail.com
                  </Text>
                </Box>
              </Row>

              {/* Google Account Button */}

              <Button
                marginLeft={'5xl'}
                marginTop={'xs'}
                borderWidth={1}
                borderColor="rgba(255,255,255,0.3)"
                borderRadius="lg"
                padding="sm"
                width={'43%'}
                alignItems="center">
                <Text color="textPrimary" fontSize={15}>
                  Google Account
                </Text>
              </Button>
            </Box>

            {/* Menu Options */}
            <Box
              backgroundColor={BASE_COLORS.primary}
              marginBottom="xxs"
              as={Animated.View}
              // @ts-check
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                maxHeight: dropdownHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
                opacity: dropdownOpacity,
                overflow: 'hidden',
              }}>
              <MenuOption icon="person-off" title="Use without an account" />
              <MenuOption
                icon="person-add"
                title="Add another account"
                subtitle="Sign in to another Google account"
              />
              <MenuOption
                icon="people"
                title="Manage accounts on this device"
              />
            </Box>

            {/* Additional Options */}
            <Box backgroundColor={BASE_COLORS.primary} marginBottom="xxs">
              <MenuOption
                icon="visibility-off"
                title="New Chrome incognito tab"
              />
            </Box>

            {/* Search History Section */}
            <Box backgroundColor={BASE_COLORS.primary} marginBottom="xxs">
              <MenuOption
                icon="history"
                title="Search history"
                trailingText="Saving"
              />
              <MenuOption title="Delete last 15 minutes" indented />
            </Box>

            {/* More Options */}
            <Box
              backgroundColor={BASE_COLORS.primary}
              borderBottomLeftRadius={bottomSectionRadius}
              borderBottomRightRadius={bottomSectionRadius}
              marginBottom="xxs">
              <MenuOption icon="tune" title="Search personalisation" />
              <MenuOption icon="security" title="SafeSearch" />
              <MenuOption icon="description" title="Results about you" />
              <MenuOption icon="check-circle" title="Tasks" />
              <MenuOption icon="check-circle" title="Saves and Collections" />
              <MenuOption icon="check-circle" title="Your Profile" />
            </Box>

            {/* Settings and Help Sections */}
            <Box marginTop="xs" marginBottom="lg">
              <MenuOption icon="settings" title="Settings" />
              <MenuOption icon="help" title="Help and feedback" />
            </Box>

            {/* Footer */}
            <Row justifyContent="center" marginBottom="xl">
              <Text color="textSecondary" fontSize="medium" marginRight="md">
                Privacy Policy
              </Text>
              <Text color="textSecondary" fontSize="medium">
                •
              </Text>
              <Text color="textSecondary" fontSize="medium" marginLeft="md">
                Terms of service
              </Text>
            </Row>
          </Box>
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);
