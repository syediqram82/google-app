import React from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';
import styled from 'styled-components/native';
import {AppSpaceProps} from 'theme/elements/spacing';
import {AppThemeColors} from 'theme/elements/colors';

export interface CustomImageProps extends RNImageProps {
  source: ImageSourcePropType;
  backgroundColor?: AppThemeColors;
  padding?: AppSpaceProps;
  margin?: AppSpaceProps;
  horizontalPadding?: AppSpaceProps;
  verticalPadding?: AppSpaceProps;
  $width?: number | string;
  $height?: number | string;
  style?: StyleProp<ImageStyle>;
  alignSelf?: string;
}

const StyledImage = styled(RNImage)<CustomImageProps>`
  ${({$width}) =>
    $width && `width: ${typeof $width === 'number' ? `${$width}px` : $width};`}
  ${({$height}) =>
    $height &&
    `height: ${typeof $height === 'number' ? `${$height}px` : $height};`}
  ${({theme, backgroundColor}) =>
    backgroundColor && `background-color: ${theme.colors[backgroundColor]};`}
  ${({theme, padding}) => padding && `padding: ${theme.space[padding]}px;`}
  ${({theme, margin}) => margin && `margin: ${theme.space[margin]}px;`}
  ${({theme, horizontalPadding}) =>
    horizontalPadding &&
    `padding-horizontal: ${theme.space[horizontalPadding]}px;`}
  ${({theme, verticalPadding}) =>
    verticalPadding && `padding-vertical: ${theme.space[verticalPadding]}px;`}
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf};`}
`;

export const ThemedImage: React.FC<CustomImageProps> = ({style, ...props}) => {
  return <StyledImage style={style} {...props} />;
};
