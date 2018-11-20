import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
  Image
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Avatar } from "react-native-elements";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Screen Three",
    drawerIcon: () => (
      <Image
        source={{ url: "https://dummyimage.com/60x60/000/fff.jpg&text=3" }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            marginBottom: 20
          }}
        >
          <Avatar
            xlarge
            rounded
            source={{
              uri:
                "https://media.licdn.com/dms/image/C5603AQH_L0lzQmo0pQ/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=rYmtX7izVb_1AluJAkqqbHWqsnvIABfDBRmCYOIP1G0"
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            marginBottom: 20
          }}
        >
          <Text>Form Holder</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            marginBottom: 20
          }}
        >
          <Text>Form Holder</Text>
        </View>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
