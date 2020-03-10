import React from 'react';
import { createAppContainer,  createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';

import Main from './Pages/Main';
import Rewards from './Pages/Rewards';
import IndexQuiz from './Pages/Quiz';
import QuizRules from './Pages/Quiz/QuizRules';
import QuizTheme from './Pages/Quiz/QuizTheme';
import Sustainability from './Pages/Quiz/Sustainability';
import Quiz from './Pages/Quiz/SustainabilityQuiz';
import Quiz1 from './Pages/Quiz/SustainabilityQuiz1';
import Quiz2 from './Pages/Quiz/SustainabilityQuiz2';


import Donation from './Pages/Donation';
import RegisteredDonation from './Pages/Donation/RegisteredDonation';
import Discounts from './Pages/Discounts'
import useDiscounts from './Pages/Discounts/useDiscounts'
import DiscountsValidation from './Pages/Discounts/DiscountsValidation'

import Collection from './Pages/Collection'

import Profile from './Pages/Profile'
import UpdateProfile from './Pages/Profile/UpdateProfile'
import UpdateConfirmed from './Pages/Profile/UpdateConfirmed'
import ChangePassword from './Pages/Profile/ChangePassword'
import PasswordChenged from './Pages/Profile/PasswordChanged'
import RecoverPassword from './Pages/Profile/RecoverPassword'

const Routes = createAppContainer (
  createSwitchNavigator (
    {
      Sign: createSwitchNavigator (
      {
        SignIn,
        SignUp,
        ForgotPassword,
      }),
      App: createMaterialBottomTabNavigator (
        {
        Início: createStackNavigator (
          {
             Main,
             Rewards,
             Donation,
             RegisteredDonation,
             IndexQuiz,
             QuizRules,
             QuizTheme,
             Sustainability,
             Quiz,
             Quiz1,
             Quiz2,
             
           },
           {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="home" size={25} color={tintColor} />
              ),
            },
          }),
          Coletas: createStackNavigator (
            {
              Collection,
            },
            {
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                  <FontAwesome name="map-marker" size={25} color={tintColor} />
                ),
              },
            }
        ),
        Perfil: createStackNavigator (
          {
            Profile,
            UpdateProfile,
            UpdateConfirmed,
            ChangePassword,
            PasswordChenged,
            RecoverPassword,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={25} color={tintColor} />
              ),
            },
          }
      ),
      Desconto: createStackNavigator (
        {
          Discounts,
          useDiscounts,
          DiscountsValidation,
        },
        {
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome name="tag" size={25} color={tintColor} />
            ),
          },
        }
    ),
        },
        {
          initialRouteName: 'Início',
          activeColor: '#FFFFFF',
          inactiveColor: 'rgba(255, 255, 255, 0.6)',
          barStyle: { backgroundColor: '#009688' },
        }
      ),
      
    },
  ), 
  );


export default Routes;




