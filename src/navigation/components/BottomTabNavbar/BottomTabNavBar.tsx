import {BottomNavigation} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@/screens/main/HomeScreen';
import {SavedItemScreen} from '@/screens/main/SavedItemsScreen';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Box} from '@/components/styled/Box';
import {Text} from '@/components/styled/Text';
import {BASE_COLORS} from 'theme/elements';
import {SearchStackNavigator} from '@/navigation/StackParamList/RootStackNavigator';

const Tab = createBottomTabNavigator();

interface TabScreenItem {
  name: string;
  component: React.ComponentType<any>;
  label: string;
  icon: string;
}

const tabScreens: TabScreenItem[] = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
    icon: 'home',
  },
  {
    name: 'Search',
    component: SearchStackNavigator,
    label: 'Search',
    icon: 'search',
  },
  {
    name: 'Saved',
    component: SavedItemScreen,
    label: 'Saved',
    icon: 'bookmark',
  },
];

const CustomTabBar = (props: BottomTabBarProps) => {
  const currentRoute = props.state.routes[props.state.index].name;

  if (currentRoute === 'Search') {
    return null;
  }

  return (
    <BottomNavigation.Bar
      theme={{colors: {secondaryContainer: BASE_COLORS.accentBlueLight}}}
      navigationState={props.state}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 90,
        backgroundColor: BASE_COLORS.secondary,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{
        height: '100%',
      }}
      safeAreaInsets={props.insets}
      onTabPress={({route, preventDefault}) => {
        const event = props.navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          props.navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: props.state.key,
          });
        }
      }}
      renderIcon={({route}) => {
        const screen = tabScreens.find(tab => tab.name === route.name);
        if (!screen) {
          return null;
        }
        const focused = props.state.routes[props.state.index].key === route.key;

        return (
          <Box>
            <Icon
              name={screen.icon}
              size={24}
              color={
                focused
                  ? BASE_COLORS.accentBlue
                  : BASE_COLORS.tabBarIconInactive
              }
            />
          </Box>
        );
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      getLabelText={({route}) => {
        const focused = props.state.routes[props.state.index].key === route.key;
        const screen = tabScreens.find(tab => tab.name === route.name);
        return (
          <Text
            fontFamily="bold"
            fontSize={15}
            fontWeight={'semiBold'}
            color={focused ? 'accentBlue' : 'tabBarIconInactive'}>
            {screen?.label ?? route.name}
          </Text>
        );
      }}
    />
  );
};

export const BottomTabNavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.label,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
