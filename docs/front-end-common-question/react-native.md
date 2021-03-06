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

这里的view就像html里面的&lt;div&gt;一样，style就像class，包装了styles里面的样式，styles对象里面的key就是className。一个简单的主页就是：

```javascript
import React from 'react'
import { StyleSheet,  ImageBackground, View, Image, Text } from 'react-native'

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,

  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  }
})

```

这里alignItems一旦被一个block封装起来，就会被reset，所以定义两次。

touchable的区别：

* TouchableWithoutFeedback：一般不用，按下没任何反应。
* TouchableOpacity：按下之后变半透明
* TouchableHighlight：只能有一个子comp，按下整体变色

What's Modal?

用来显示一个封装好的弹出视图。例子：

```javascript
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};
```

