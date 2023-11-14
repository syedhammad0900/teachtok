import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home/home'
import globalTheme from '../globalTheme/global'

const BottomTab = createBottomTabNavigator();

const BarIcon = (
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
) => {
  let backgroundColor = focused ? globalTheme.colors.white : globalTheme.colors.gray

  const iconName = {
    Home: 'home',
    Discover: 'apple-safari',
    Activity: 'clock',
    Bookmarks: 'bookmark',
    Profile: 'account-circle',
  }[route.name];

  return (
    <Icon
      size={25}
      name={iconName || 'map-marker-question'}
      color={backgroundColor}
    />
  );
};

const BarLabel = (
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
) => {
  let color = focused ? globalTheme.colors.white : globalTheme.colors.gray
  return (
    <Text
      style={{
        color: color,
      }}>
      {route.name}
    </Text>
  );
};

const EmptyScreen = () => null;

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => BarIcon(route, focused),
          tabBarLabel: ({ focused }) => BarLabel(route, focused),
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            paddingTop: 12,
            paddingBottom: 4,
            height: 60,
            backgroundColor: globalTheme.colors.black
          },
        })}>
        <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <BottomTab.Screen name="Discover" component={EmptyScreen} options={{ headerShown: false }} />
        <BottomTab.Screen name="Activity" component={EmptyScreen} options={{ headerShown: false }} />
        <BottomTab.Screen name="Bookmarks" component={EmptyScreen} options={{ headerShown: false }} />
        <BottomTab.Screen name="Profile" component={EmptyScreen} options={{ headerShown: false }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
