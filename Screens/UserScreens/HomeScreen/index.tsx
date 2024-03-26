import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Test Application</Text>
      <Button title="Counter" onPress={() => navigation.navigate("CounterScreen")}/>
      <Button title="Api Call" onPress={() => navigation.navigate("TestCurdScreen")}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
