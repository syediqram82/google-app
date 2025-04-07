import hexToRgba from 'hex-to-rgba';

const pallete = {
  primary: '#1f2023',
  secondary: '#2C2C2E',
  accentBlue: '#8BB4F8',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  tabBarIconInactive: '#6E6E73',
  googleBlue: '#333c4c',
  googleGreen: '#313f38',
  googleYellow: '#4b4430',
  googleRed: '#472e31',
};
export const BASE_COLORS = {
  primary: pallete.primary,
  secondary: pallete.secondary,
  accentBlue: pallete.accentBlue,
  textPrimary: pallete.textPrimary,
  textSecondary: pallete.textSecondary,
  tabBarIconInactive: pallete.tabBarIconInactive,
  googleBlue: pallete.googleBlue,
  googleYellow: pallete.googleYellow,
  googleRed: pallete.googleRed,
  googleGreen: pallete.googleGreen,
  accentBlueLight: hexToRgba(pallete.accentBlue, 0.3),
  accentGoogleBlue: hexToRgba(pallete.googleBlue, 0.5),
  accentGoogleYellow: hexToRgba(pallete.googleYellow, 0.5),
  accentGoogleGreen: hexToRgba(pallete.googleGreen, 0.5),
  accentGoogleRed: hexToRgba(pallete.googleRed, 0.5),
};

export type AppThemeColors = keyof typeof BASE_COLORS;
