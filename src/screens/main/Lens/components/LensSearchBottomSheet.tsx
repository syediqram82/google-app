import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {
  BottomSheet,
  BottomSheetRef,
} from '@/components/styled/BottomSheet/BottomSheet';
import {SearchResultScreen} from '@/screens/main/SearchResultScreen/SearchResultScreen';
import {Box} from '@/components/styled/Box';
import {BASE_COLORS} from 'theme/elements';
import {QueryType} from '@/navigation/StackParamList/RootStackNavigator';
import {ThemedScrollView} from '@/components/styled/ScrollView';

export interface LensSearchBottomSheetProps {
  imageUri: string | null;
  onClose?: () => void;
}

export interface LensSearchBottomSheetRef {
  open: () => void;
  close: () => void;
}

export const LensSearchBottomSheet = forwardRef<
  LensSearchBottomSheetRef,
  LensSearchBottomSheetProps
>(({imageUri, onClose}, ref) => {
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.open();
    },
    close: () => {
      bottomSheetRef.current?.close();
    },
  }));

  const handleSheetChange = useCallback(
    (index: number) => {
      if (index === -1 && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  if (!imageUri) {
    return null;
  }

  return (
    <Box style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['40%', '70%', '90%']}
        sheetWidth="100%"
        backgroundColor={BASE_COLORS.primary}
        enableExpandToFullScreen
        handleStyle={styles.handleStyle}
        disablePanToClose={true}
        borderRadius={16}
        onChange={handleSheetChange}>
        <Box justifyContent="center" alignItems="center">
          <SearchResultScreen
            customParams={{
              query: imageUri,
              queryType: QueryType.IMAGE,
            }}
          />
        </Box>
      </BottomSheet>
    </Box>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    elevation: 9999,
    pointerEvents: 'box-none',
  },
  handleStyle: {
    width: 50,
    height: 5,
    backgroundColor: BASE_COLORS.textSecondary,
    borderRadius: 5,
    marginTop: Platform.OS === 'ios' ? 10 : 5,
  },
});
