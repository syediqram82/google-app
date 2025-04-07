import styled from 'styled-components/native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system';
import {AppBorderRadii} from 'theme/elements';

export interface ButtonProps
  extends TouchableOpacityProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    BorderProps,
    FlexboxProps,
    PositionProps {
  children?: React.ReactNode;
  borderRadius?: AppBorderRadii;
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
`;
