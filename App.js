import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screen/Splash"; // Import màn hình Splash.js
import Login from "./screen/Login"; // Import màn hình Login.js
import Signup from "./screen/Sigup";
import fPassWord from "./screen/fPassword";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} // Ẩn tiêu đề màn hình Splash
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="fPassword" component={fPassWord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
