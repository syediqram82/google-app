import React from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';
import {AppThemeColors} from 'theme/elements/colors';
import {AppSpaceProps} from 'theme/elements/spacing';
import {BoxProps} from '../Box';

interface ThemedScrollViewProps extends ScrollViewProps, BoxProps {
  backgroundColor?: AppThemeColors;
  padding?: AppSpaceProps;
  margin?: AppSpaceProps;
  horizontalPadding?: AppSpaceProps;
  verticalPadding?: AppSpaceProps;
}

const StyledScrollView = styled(ScrollView)<ThemedScrollViewProps>`
  ${({theme, backgroundColor}) =>
    backgroundColor && `background-color: ${theme.colors[backgroundColor]};`}
  ${({theme, padding}) => padding && `padding: ${theme.space[padding]}px;`}
  ${({theme, margin}) => margin && `margin: ${theme.space[margin]}px;`}
  ${({theme, horizontalPadding}) =>
    horizontalPadding &&
    `padding-horizontal: ${theme.space[horizontalPadding]}px;`}
  ${({theme, verticalPadding}) =>
    verticalPadding && `padding-vertical: ${theme.space[verticalPadding]}px;`}
`;

export const ThemedScrollView: React.FC<ThemedScrollViewProps> = ({
  children,
  ...rest
}) => {
  return <StyledScrollView {...rest}>{children}</StyledScrollView>;
};
