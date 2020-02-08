import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./main";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="To do RN"
          options={{
            title: "To do RN",
            alignSelf: "center",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#33C7FF"
            },
            headerTitleStyle: {
              color: "#f5f5f5",
              fontWeight: "bold",
              letterSpacing: 1.5
            }
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
