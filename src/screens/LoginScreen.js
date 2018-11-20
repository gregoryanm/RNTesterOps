import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          large
          icon={{ name: "sign-in-alt", type: "font-awesome" }}
          title="Log In"
        />

        <Button
          onPress={() => this.props.navigation.navigate("signupScreen")}
          large
          icon={{ name: "envira", type: "font-awesome" }}
          title="Sign Up"
        />


        <Button
          onPress={() => this.props.navigation.navigate("forgottenPasswordScreen")}
          large
          icon={{ name: "envira", type: "font-awesome" }}
          title="Forgot Password"
        />
        <Button
          onPress={() => this.props.navigation.navigate("drawerStack")}
          large
          icon={{ name: "envira", type: "font-awesome" }}
          title="Log In"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  linky: {
    color: "blue",
    paddingTop: 10
  }
});
