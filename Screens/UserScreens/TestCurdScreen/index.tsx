import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../store/Slices/TestApiCallSlice';

const TestCurdScreen = () => {
  const response = useSelector((state: any) => state.testApiCall);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  console.log('response', response)
  return (
    <View>
        <Text>index</Text>
    </View>
  )
}

export default TestCurdScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
    }
})
