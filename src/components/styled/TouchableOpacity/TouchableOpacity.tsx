import styled from 'styled-components/native';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
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
import {AppThemeColors, AppBorderRadii} from 'theme/elements';

export interface StyledTouchableOpacityProps
  extends TouchableOpacityProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    BorderProps,
    FlexboxProps,
    PositionProps {
  children?: React.ReactNode;
  backgroundColor?: AppThemeColors;
  activeOpacity?: number;
  borderRadius?: AppBorderRadii;
}

export const TouchableOpacity = styled(
  RNTouchableOpacity,
)<StyledTouchableOpacityProps>`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
`;

export const ListItemTouchable = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding-vertical: ${({theme}) => theme.space.md}px;
  padding-horizontal: ${({theme}) => theme.space.md}px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
`;
