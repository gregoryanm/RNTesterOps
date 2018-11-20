import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Screen Two",
    drawerIcon: () => (
      <Image
        source={{ url: "https://dummyimage.com/60x60/000/fff.jpg&text=2" }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
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
