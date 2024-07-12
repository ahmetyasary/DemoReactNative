import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'


const reducer= (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload }
        case 'DECREMENT':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

export default function CounterScreen() {
    // const [degisken, setDegisken] = useState(0)

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            {/* <Button onPress={() => alert('Hello')} title="Azalt" /> */}

            <Button onPress={() => {
                // setDegisken(degisken - 1)
                dispatch({ type: 'DECREMENT',payload: 1 })
            }} title="Azalt" />
            <Button onPress={() => {
                // setDegisken(degisken + 1)
                dispatch({ type: 'INCREMENT',payload: 1 })
            }} title="Arttır" />
            <Text >Sayı: {degisken}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})