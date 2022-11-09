import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import Login from "./src/Login";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
// import { Stack } from "@react-navigation/stack"

const stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTittle: () => <Header name="Testing Login" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomLeftRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />

        <stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTittle: () => <Header name="Testing Registration" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomLeftRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
      </stack.Navigator>
    );
  }

  return (
    <stack.Navigator>
      <stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTittle: () => <Header name="Testing Dashboard" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomLeftRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
    </stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
