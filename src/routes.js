import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';
import HelpOrder from '~/pages/Help/HelpOrder';
import DetailHelpOrder from '~/pages/Help/DetailHelpOrder';
import NewHelpOrder from '~/pages/Help/NewHelpOrder';

import Header from '~/components/Header';

export default (isSined = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({SignIn}),
        App: createBottomTabNavigator(
          {
            Checkin: {
              screen: createStackNavigator(
                {
                  Checkins,
                },
                {
                  defaultNavigationOptions: {
                    headerTitle: () => <Header />,
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="person-pin-circle" size={20} color={tintColor} />
                ),
              },
            },
            Help: {
              screen: createStackNavigator(
                {
                  HelpOrder,
                  NewHelpOrder,
                  DetailHelpOrder,
                },
                {
                  defaultNavigationOptions: {
                    headerTitle: () => <Header />,
                  },
                },
              ),

              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
            },
          },
        ),
      },
      {
        initialRouteName: isSined ? 'App' : 'Sign',
      },
    ),
  );
