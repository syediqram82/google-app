import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@/components/styled/Text';
import {Row} from '@/components/styled/Row';
import {Box} from '@/components/styled/Box';
import {
  ListItemTouchable,
  StyledTouchableOpacityProps,
} from '@/components/styled/TouchableOpacity';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from 'theme/elements';

interface MenuOptionProps extends StyledTouchableOpacityProps {
  icon?: string;
  title: string;
  subtitle?: string;
  indented?: boolean;
  trailingText?: string;
}

export const MenuOption: React.FC<MenuOptionProps> = ({
  icon,
  title,
  subtitle,
  indented = false,
  trailingText,
  style,
  ...rest
}) => {
  return (
    <ListItemTouchable
      activeOpacity={0.7}
      style={[indented && styles.indentedMenuItem, style]}
      {...rest}>
      {icon && (
        <Icon
          name={icon}
          size={24}
          color={BASE_COLORS.textPrimary}
          style={styles.menuIcon}
        />
      )}
      <Box flex={1}>
        <Row justifyContent={trailingText ? 'space-between' : 'flex-start'}>
          <Text color="textPrimary" fontSize="medium">
            {title}
          </Text>
          {trailingText && (
            <Text color="textSecondary" fontSize="small">
              {trailingText}
            </Text>
          )}
        </Row>
        {subtitle && (
          <Text color="textSecondary" fontSize="small" marginTop="xxs">
            {subtitle}
          </Text>
        )}
      </Box>
    </ListItemTouchable>
  );
};

const styles = StyleSheet.create({
  indentedMenuItem: {
    paddingLeft: 56, // Same as icon width + padding
  },
  menuIcon: {
    marginRight: 16,
    width: 24,
  },
});
