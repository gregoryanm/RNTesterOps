import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class DrawerContainer extends React.Component {
  logout() {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const logoutAction = StackActions.reset({
      index: 0,
      key: null, // black magic
      actions: [NavigationActions.navigate({ routeName: "login" })]
    });
    this.props.navigation.dispatch(logoutAction);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require("../images/logo.png")}
          style={{ width: SCREEN_WIDTH * 0.57 }}
          resizeMode="contain"
        />

        <Text
          onPress={() => navigation.navigate("profilesScreen")}
          style={styles.uglyDrawerItem}
        >
          Screen 1
        </Text>
        <Text
          onPress={() => navigation.navigate("linksScreen")}
          style={styles.uglyDrawerItem}
        >
          Screen 2
        </Text>
        <Text
          onPress={() => navigation.navigate("settingsScreen")}
          style={styles.uglyDrawerItem}
        >
          Screen 3
        </Text>
        <Text
          onPress={() => navigation.navigate("homeScreen")}
          style={styles.uglyDrawerItem}
        >
          Screen 3
        </Text>
        <Text onPress={this.logout} style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43484d",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 20,
    color: "blue",
    padding: 15,
    margin: 5,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
    overflow: "hidden"
  }
});
