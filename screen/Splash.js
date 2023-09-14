import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default class Splash extends Component {
  handleLoginPress = () => {
    this.props.navigation.navigate("Login"); 
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require('./../assets/Vector.png')}
        />
        <Text style={styles.title}>FOODU</Text>
        <Text style={styles.tt}>Đặt đồ theo sở thích của bạn</Text>
        
        <TouchableOpacity onPress={this.handleLoginPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: "90%",
    bottom: 0,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  tt: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 1,
    color: "#CC3366",
    marginBottom: 10,
  },
});
