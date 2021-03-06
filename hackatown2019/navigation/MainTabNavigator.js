import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name=
      {
        Platform.OS === 'ios' ? 'ios-map' : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LeaderboardScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'LeaderboardScreen',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name=
      {
        Platform.OS === 'ios' ? 'ios-list' : 'md-link'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
