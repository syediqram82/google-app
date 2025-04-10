import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import BottomSheetLib, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Box} from '@/components/styled/Box';
import {BASE_COLORS} from 'theme/elements';

export interface BottomSheetProps {
  children: React.ReactNode;
  backdrop?: boolean;
  snapPoints?: (string | number)[];
  backgroundColor?: string;
  onChange?: (index: number) => void;
  disablePanToClose?: boolean;
  enableExpandToFullScreen?: boolean;
  handleStyle?: object;
  borderRadius?: number;
  sheetWidth?: string;
}

export interface BottomSheetRef {
  open: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  expand: () => void;
}

export const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      children,
      backdrop = true,
      snapPoints = ['25%', '50%', '80%'],
      backgroundColor = BASE_COLORS.secondary,
      onChange,
      disablePanToClose = false,
      enableExpandToFullScreen = false,
      handleStyle,
      sheetWidth = '95%',
      borderRadius = 10,
    },
    ref,
  ) => {
    const bottomSheetRef = useRef<BottomSheetLib>(null);
    const sheetWidthValue = useMemo(() => sheetWidth, [sheetWidth]);

    // Add full screen as an option if enableExpandToFullScreen is true
    const fullSnapPoints = useMemo(() => {
      if (enableExpandToFullScreen) {
        // Make sure the last snap point is full screen
        if (
          typeof snapPoints[snapPoints.length - 1] === 'string' &&
          snapPoints[snapPoints.length - 1] !== '100%'
        ) {
          return [...snapPoints, '100%'];
        }
      }
      return snapPoints;
    }, [snapPoints, enableExpandToFullScreen]);

    // Memoize snap points to prevent unnecessary re-renders
    const memoizedSnapPoints = useMemo(() => fullSnapPoints, [fullSnapPoints]);

    const screenWidth = Dimensions.get('window').width;
    const marginHorizontal = useMemo(() => {
      // Parse the percentage value from sheetWidthValue
      const widthPercentage = parseFloat(sheetWidthValue) / 100;
      return (screenWidth * (1 - widthPercentage)) / 2;
    }, [screenWidth, sheetWidthValue]);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      open: () => {
        bottomSheetRef.current?.snapToIndex(0);
      },
      close: () => {
        bottomSheetRef.current?.close();
      },
      snapToIndex: (index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
      },
      expand: () => {
        bottomSheetRef.current?.snapToIndex(memoizedSnapPoints.length - 1);
      },
    }));

    // Render backdrop component
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
        />
      ),
      [],
    );

    const sheetStyle = useMemo(() => {
      return {
        width: sheetWidthValue,
        marginHorizontal: marginHorizontal,
        zIndex: 9999,
      };
    }, [sheetWidthValue, marginHorizontal]);

    const backgroundStyle = useMemo(() => {
      return {
        backgroundColor,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      };
    }, [backgroundColor, borderRadius]);

    // Handle onChange and pass to parent
    const handleSheetChange = useCallback(
      (index: number) => {
        if (onChange) {
          onChange(index);
        }
      },
      [onChange],
    );

    return (
      <BottomSheetLib
        ref={bottomSheetRef}
        //@ts-ignore
        style={sheetStyle}
        index={-1}
        snapPoints={memoizedSnapPoints}
        enablePanDownToClose={!disablePanToClose}
        backdropComponent={backdrop ? renderBackdrop : undefined}
        handleIndicatorStyle={[styles.indicator, handleStyle]}
        backgroundStyle={backgroundStyle}
        onChange={handleSheetChange}
        enableContentPanningGesture={true}
        enableHandlePanningGesture={true}>
        <BottomSheetView style={styles.contentContainer}>
          <Box>{children}</Box>
        </BottomSheetView>
      </BottomSheetLib>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  indicator: {
    backgroundColor: BASE_COLORS.textSecondary,
    width: 40,
    height: 5,
    borderRadius: 5,
  },
});
