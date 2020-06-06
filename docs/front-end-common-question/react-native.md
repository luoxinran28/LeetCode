# React Native

基本模块，包含基本的flex样式：

```javascript
/* App.js */
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          flexDirection: "row", // horizontal
          justifyContent: "center", // main
          alignItems: "center", // secondary
          alignContent: "center", // entire content
          // flexWrap: "wrap",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            flexBasis: 100, // width or height
            flexGrow: 1,
            height: 100,
            // width: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "gold",
            height: 100,
            width: 400,
            flexShrink: 1,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            height: 100,
            width: 100,
          }}
        ></View>
        {/* <View
          style={{
            backgroundColor: "grey",
            height: 100,
            width: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "greenyellow",
            height: 100,
            width: 100,
          }}
        ></View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

```

