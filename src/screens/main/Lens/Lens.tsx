import {useState, useEffect, useCallback, useRef} from 'react';
import {
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Alert,
  StatusBar,
} from 'react-native';
import {
  launchImageLibrary,
  CameraOptions,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Box} from '@/components/styled/Box';
import {Row} from '@/components/styled/Row';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackIcon from '@/assets/svg/arrow-back-new.svg';
import {BASE_COLORS} from 'theme/elements';
import {Camera, CameraType} from 'react-native-camera-kit';
import {Button} from '@/components/styled/Button/Button';
import {Text} from '@/components/styled/Text';
import {ThemedImage} from '@/components/styled/ThemedImage';
import {
  LensSearchBottomSheet,
  LensSearchBottomSheetRef,
} from './components/LensSearchBottomSheet';

export const Lens = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraMode, setCameraMode] = useState<boolean>(true);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const cameraRef = useRef<any>(null);
  const bottomSheetRef = useRef<LensSearchBottomSheetRef>(null);
  const navigation = useNavigation();
  const {top, bottom} = useSafeAreaInsets();

  const requestCameraPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera to take photos',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.error(err);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const checkPermission = async () => {
      const permission = await requestCameraPermission();
      setHasPermission(permission);
      if (!permission) {
        Alert.alert(
          'Permission Required',
          'Camera permission is needed to take photos',
          [{text: 'OK'}],
        );
      }
    };

    checkPermission();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const checkPermission = async () => {
        const permission = await requestCameraPermission();
        setHasPermission(permission);
      };

      checkPermission();
    }, []),
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
    bottomSheetRef.current?.open();
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  };

  const takePicture = async () => {
    if (cameraRef.current && hasPermission) {
      try {
        const image = await cameraRef.current.capture();
        if (image && image.uri) {
          setImageUri(image.uri);
          setCameraMode(false);

          // Open the bottom sheet after a short delay to allow the image to render
          setTimeout(() => {
            openBottomSheet();
          }, 500);
        }
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const openGallery = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        const asset: Asset | undefined = response.assets?.[0];
        if (asset?.uri) {
          setImageUri(asset.uri);
          setCameraMode(false);

          // Open the bottom sheet after a short delay to allow the image to render
          setTimeout(() => {
            openBottomSheet();
          }, 500);
        }
      }
    });
  };

  const switchToCamera = () => {
    setCameraMode(true);
    closeBottomSheet();
  };

  return (
    <>
      <Box flex={1} backgroundColor={BASE_COLORS.primary}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <Row
          paddingTop={top || 10}
          position={'absolute'}
          px={10}
          top={10}
          zIndex={1}
          width={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Button borderRadius="full" onPress={handleBack}>
            <BackIcon
              width={24}
              height={24}
              color={BASE_COLORS.textSecondary}
            />
          </Button>

          <Text fontSize={'large'} fontWeight="semiBold" color={'textPrimary'}>
            Google Lens
          </Text>

          <Button borderRadius="full">
            <Icon name="more-vert" size={24} color={BASE_COLORS.textPrimary} />
          </Button>
        </Row>

        {cameraMode ? (
          <Box
            flex={1}
            width="100%"
            borderBottomLeftRadius={'3xl'}
            borderBottomRightRadius={'3xl'}
            overflow={'hidden'}
            zIndex={5}>
            {hasPermission ? (
              <Camera
                ref={cameraRef}
                style={styles.cameraView}
                cameraType={CameraType.Back}
                flashMode="auto"
              />
            ) : (
              <Box
                flex={1}
                justifyContent="center"
                alignItems="center"
                borderBottomLeftRadius={'3xl'}
                borderBottomRightRadius={'3xl'}
                overflow={'hidden'}>
                <Text fontSize={16} color={'textSecondary'}>
                  Camera permission required
                </Text>
              </Box>
            )}
          </Box>
        ) : (
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            borderBottomLeftRadius={'3xl'}
            borderBottomRightRadius={'3xl'}
            overflow={'hidden'}>
            {imageUri && (
              <ThemedImage
                source={{uri: imageUri}}
                $width={'100%'}
                $height={'100%'}
                resizeMode={'cover'}
              />
            )}
          </Box>
        )}

        {/* Bottom controls - only show when bottom sheet is not open */}
        {!isBottomSheetOpen && (
          <Box
            width={'100%'}
            paddingBottom={bottom || 20}
            borderTopLeftRadius={'lg'}
            borderTopRightRadius={'lg'}
            paddingTop={10}
            alignItems="center">
            <Row
              width={'100%'}
              justifyContent={'center'}
              position={'relative'}
              alignItems={'center'}>
              <Button
                position={'absolute'}
                left={30}
                bottom={10}
                zIndex={5}
                onPress={openGallery}>
                <Box
                  width={40}
                  height={40}
                  borderRadius={8}
                  backgroundColor={'primary'}
                  justifyContent="center"
                  alignItems="center"
                  borderWidth={1}
                  borderColor={'textPrimary'}
                  position="absolute"
                  bottom={20}>
                  <Icon name="photo-library" size={24} color="#fff" />
                </Box>
              </Button>

              <Button
                borderRadius="full"
                position={'absolute'}
                bottom={20}
                zIndex={5}
                backgroundColor={'white'}
                justifyContent={'center'}
                alignItems={'center'}
                borderWidth={2}
                borderColor={'textSecondary'}
                onPress={cameraMode ? takePicture : switchToCamera}
                disabled={hasPermission === false}>
                <Box
                  width={65}
                  height={65}
                  borderRadius={35}
                  borderWidth={2}
                  borderColor={'primary'}
                  backgroundColor="white"
                  justifyContent="center"
                  alignItems="center">
                  <Icon
                    name={cameraMode ? 'search' : 'refresh'}
                    size={30}
                    color={BASE_COLORS.secondary}
                  />
                </Box>
              </Button>
            </Row>

            {/* Bottom actions */}
            <Row justifyContent="space-around" width="100%">
              <Button alignItems="center" px={12}>
                <Icon
                  name="translate"
                  size={20}
                  color={BASE_COLORS.textPrimary}
                />
                <Text marginTop={4} fontSize={14} color={'textPrimary'}>
                  Translate
                </Text>
              </Button>

              <Button alignItems="center" px={12}>
                <Icon name="search" size={20} color={BASE_COLORS.textPrimary} />
                <Text marginTop={4} fontSize={14} color={'textPrimary'}>
                  Search
                </Text>
              </Button>

              <Button alignItems="center" px={12}>
                <Icon name="school" size={20} color={BASE_COLORS.textPrimary} />
                <Text marginTop={4} fontSize={14} color={'textPrimary'}>
                  Homework
                </Text>
              </Button>
            </Row>
          </Box>
        )}
      </Box>

      {/* Bottom sheet for search results - Positioned outside the main Box for proper stacking */}
      <LensSearchBottomSheet
        ref={bottomSheetRef}
        imageUri={imageUri}
        onClose={closeBottomSheet}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cameraView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
