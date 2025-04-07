import React from 'react';
import {StyleSheet} from 'react-native';
import {LiveWeatherCard} from '@/components/atoms/LiveWeatherCard';
import {AirQualityCard} from '@/components/atoms/AirQualityCard';
import {SettingsCard} from '@/components/atoms/SettingsCard';
import {Box} from '@/components/styled/Box';
import {ThemedScrollView} from '@/components/styled/ScrollView';

export const InfoCardList = () => {
  return (
    <Box marginTop="md">
      <ThemedScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <Box marginRight="md">
          <LiveWeatherCard />
        </Box>
        <Box marginRight="md">
          <AirQualityCard />
        </Box>
        <Box marginRight="md">
          <SettingsCard />
        </Box>
      </ThemedScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 16,
  },
});
