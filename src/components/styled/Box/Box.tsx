import {ViewProps} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  position,
  border,
  flexbox,
  ColorProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  BorderProps,
  FlexboxProps,
} from 'styled-system';

export interface BoxProps
  extends ViewProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    PositionProps,
    BorderProps,
    FlexboxProps {
  children?: React.ReactNode;
}

export const Box = styled.View<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${flexbox}
`;

export const CenterBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${flexbox}
`;
