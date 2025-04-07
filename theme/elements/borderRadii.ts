export const BASE_BORDER_RADII = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 56,
  '6xl': 60,
  full: 9999,
};

export type AppBorderRadii = keyof typeof BASE_BORDER_RADII;
