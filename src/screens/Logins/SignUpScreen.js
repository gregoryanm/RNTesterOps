import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  CheckBox
} from "react-native";
import { Font } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button, SocialIcon, Input } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const BG_IMAGE = require(",,/../../../assets/images/bg_screen1.jpg");

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      first_name: "",
      last_name: "",
      login_failed: false,
      showLoading: false,
      checker: true
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      georgia: require(",,/../../../assets/fonts/Georgia.ttf"),
      regular: require(",,/../../../assets/fonts/Montserrat-Regular.ttf"),
      light: require(",,/../../../assets/fonts/Montserrat-Light.ttf"),
      bold: require(",,/../../../assets/fonts/Montserrat-Bold.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const { first_name, last_name, checker, showLoading } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          {this.state.fontLoaded ? (
            <View style={styles.loginView}>
              <View style={styles.loginTitle}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.travelText}>Couples UP</Text>
                  <Text style={styles.plusText}>+</Text>
                </View>
                <View style={{ marginTop: -10 }}>
                  <Text style={styles.travelText} />
                </View>
              </View>
              <View style={styles.loginInput}>
                <Input
                  leftIcon={
                    <Icon
                      name="user-o"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={first_name => this.setState({ first_name })}
                  value={first_name}
                  inputStyle={{ marginLeft: 10, color: "white" }}
                  keyboardAppearance="light"
                  placeholder="Email"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  ref={input => (this.first_name = input)}
                  blurOnSubmit={false}
                  placeholderTextColor="white"
                  errorStyle={{ textAlign: "center", fontSize: 12 }}
                />
                <Input
                  leftIcon={
                    <Icon
                      name="lock"
                      color="rgba(171, 189, 219, 1)"
                      size={25}
                    />
                  }
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={last_name => this.setState({ last_name })}
                  value={last_name}
                  inputStyle={{ marginLeft: 10, color: "white" }}
                  secureTextEntry={true}
                  keyboardAppearance="light"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType="done"
                  blurOnSubmit={true}
                  placeholderTextColor="white"
                />
              </View>
              <Button
                title="LOG IN"
                activeOpacity={1}
                underlayColor="transparent"
                loading={showLoading}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  height: 50,
                  width: 250,
                  backgroundColor: "rgba(81,43,141,1)",
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 30
                }}
                containerStyle={{ marginVertical: 10 }}
                titleStyle={{ fontWeight: "bold", color: "white" }}
              />

              <View style={styles.footerView}>
                <Text style={{ color: "white" }}>New here?</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                />
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#ecf0f1"
                    }}
                  >
                    <CheckBox
                      center
                      containerStyle={{ backgroundColor: "pink" }}
                      title="Click Here"
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checked={this.state.checked}
                    />
                  </View>
                </View>
                <Button
                  title="Privacy Statement"
                  clear
                  activeOpacity={0.5}
                  titleStyle={{ color: "white", fontSize: 15 }}
                  containerStyle={{ marginTop: -10 }}
                  onPress={() => console.log("Privacy Statement")}
                />
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  },
  loginView: {
    marginTop: 150,
    backgroundColor: "transparent",
    width: 250,
    height: 400
  },
  loginTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  travelText: {
    color: "white",
    fontSize: 35,
    fontFamily: "bold"
  },
  plusText: {
    color: "white",
    fontSize: 30,
    fontFamily: "regular"
  },
  loginInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
