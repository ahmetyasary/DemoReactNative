import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function CurrencyInformation({ title, imageSource, desc }) {
    return (
        <View>
            <Image style={styles.img} source={imageSource} />
            <View style={styles.descTitle} >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        resizeMode: 'contain'
    },
    descTitle: {
        alignItems: 'center',
        paddingVertical: 20
    },
    title: {
        fontSize: 25
    },
    subTitle: {
        fontSize: 15
    }   
})