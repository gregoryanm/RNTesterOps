import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
// import { Header } from "react-native-elements";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";

// const DrawerButton = props => {
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//           props.navigation.navigate("DrawerOpen");
//         }}
//       >
//         <Text>Hello</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isSidebarOpen: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        /* eslint-disable global-require */
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
