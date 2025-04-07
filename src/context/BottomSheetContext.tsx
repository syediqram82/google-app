import React, {createContext, useContext, useRef, ReactNode} from 'react';
import {
  UserBottomSheet,
  UserBottomSheetRef,
} from '@/components/UserBottomSheet';

// Define the context type
interface BottomSheetContextType {
  openUserBottomSheet: () => void;
  closeUserBottomSheet: () => void;
}

// Create the context with a default value
const BottomSheetContext = createContext<BottomSheetContextType>({
  openUserBottomSheet: () => {},
  closeUserBottomSheet: () => {},
});

// Hook to use the bottom sheet context
export const useBottomSheet = () => useContext(BottomSheetContext);

// Provider component
export const BottomSheetProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  // Refs for bottom sheets
  const userBottomSheetRef = useRef<UserBottomSheetRef>(null);

  // Function to open the user bottom sheet
  const openUserBottomSheet = () => {
    userBottomSheetRef.current?.open();
  };

  // Function to close the user bottom sheet
  const closeUserBottomSheet = () => {
    userBottomSheetRef.current?.close();
  };

  // Context value
  const value = {
    openUserBottomSheet,
    closeUserBottomSheet,
  };

  return (
    <BottomSheetContext.Provider value={value}>
      {children}

      {/* Bottom Sheets */}
      <UserBottomSheet ref={userBottomSheetRef} />
    </BottomSheetContext.Provider>
  );
};
