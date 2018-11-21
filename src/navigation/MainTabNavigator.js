import React from "react";
import { Animated, Easing } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

import { Button } from "react-native-elements";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgottenPasswordScreen from "../screens/ForgottenPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfilesScreen from "../screens/ProfileScreen";
import DrawerContainer from "../screens/DrawerContainer";

// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    profilesScreen: { screen: ProfilesScreen },
    linksScreen: { screen: LinksScreen },
    settingsScreen: { screen: SettingsScreen },
    homeScreen: { screen: HomeScreen }
  },
  {
    gesturesEnabled: false,
    contentComponent: props => <DrawerContainer {...props} />
  }
);

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "green" },
      title: "Logged In to your app!",
      gesturesEnabled: false,
      headerLeft: <Button onPress={() => navigation.openDrawer()}>Menu</Button>
    })
  }
);

// login stack
const LoginStack = createStackNavigator(
  {
    loginScreen: { screen: LoginScreen },
    signupScreen: { screen: SignUpScreen },
    forgottenPasswordScreen: {
      screen: ForgottenPasswordScreen,
      navigationOptions: { title: "Forgot Password" }
    }
  },
  {
    headerMode: "float",
    navigationOptions: {
      headerStyle: { backgroundColor: "rgb(112,128,144)", color: "white", textAlign: "center" },
      title: "Welcome, please sign in."
    }
  }
);

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "Main",
    initialRouteName: "loginStack",
    transitionConfig: noTransitionConfig
  }
);

export default PrimaryNav;
