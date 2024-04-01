import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
    const [degisken, setDegisken] = useState(0)

    return (
        <View>
            {/* <Button onPress={() => alert('Hello')} title="Azalt" /> */}

            <Button onPress={() => { setDegisken(degisken - 1) }} title="Azalt" />
            <Button onPress={() => { setDegisken(degisken + 1) }} title="Arttır" />

            <Text >Sayı: {degisken}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})