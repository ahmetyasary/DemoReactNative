import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function CurrenciesScreen({ navigation }) {

    const masterCurrencySymbol="₺";

    const list = [
        { id: 1, name: "$ USD", price: 32.25, currencySymbol: "$" },
        { id: 2, name: "€ EUR", price: 35.10, currencySymbol: "€" },
        { id: 3, name: "¥ JPY", price: 21.32, currencySymbol: "¥" },
        { id: 4, name: "£ GBP", price: 40.80, currencySymbol: "£" },
        { id: 5, name: "₽ RUB", price: 15.60, currencySymbol: "₽" },
        { id: 6, name: "₹ INR", price: 37.75, currencySymbol: "₹" },
        { id: 7, name: "₪ ILS", price: 25.80, currencySymbol: "₪" },
        { id: 8, name: "₩ KRW", price: 41.30, currencySymbol: "₩" },

    ]
    return (
        <View>
            <FlatList
                // horizontal={true}
                data={list}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text style={styles.list}>{item.name} : {item.price} {masterCurrencySymbol}</Text>} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingLeft: 15,
        marginTop: 20,
        marginBottom: 20,
        marginVertical: 3,
        fontSize: 25

    }
})