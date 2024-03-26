import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAction } from '../../../store/Slices/CounterSlice';

const CounterScreen = () => {
  const count = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
        <Button title="Increment" onPress={() => dispatch(incrementAction(10))}/>
        <Text style={styles.textStyle}>{count}</Text>
        <Button title="Decrement" onPress={() => dispatch(decrement())}/>
    </View>
  )
}

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    textStyle: {fontSize: 25, color: "green"}
})