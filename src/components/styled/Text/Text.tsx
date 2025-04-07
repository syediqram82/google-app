import styled from 'styled-components/native';
import {
  space,
  color,
  typography,
  layout,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
} from 'styled-system';
import {
  AppFontSize,
  AppThemeColors,
  AppThemeFonts,
  AppThemeWeights,
} from 'theme/elements';

export type TextProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps & {
    font?: AppThemeFonts;
    fontSize?: AppFontSize | number;
    color?: AppThemeColors;
    fontWeight?: AppThemeWeights;
  };

export const Text = styled.Text<TextProps>`
  ${space}
  ${color}
  ${typography}
  ${layout}
`;
