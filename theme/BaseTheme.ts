import {
  BASE_BORDER_RADII,
  BASE_COLORS,
  BASE_FONTS,
  BASE_FONT_SIZE,
  BASE_FONT_WEIGHTS,
  BASE_SPACING,
} from './elements';

export const BaseTheme = {
  space: BASE_SPACING,
  colors: BASE_COLORS,
  radii: BASE_BORDER_RADII,
  fonts: BASE_FONTS,
  fontWeights: BASE_FONT_WEIGHTS,
  fontSizes: BASE_FONT_SIZE,
};

export type Theme = typeof BaseTheme;
export default BaseTheme;
