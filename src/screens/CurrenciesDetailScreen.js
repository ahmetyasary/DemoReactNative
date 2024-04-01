import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrencyInformation from '../../components/CurrencyInformation'

export default function CurrenciesDetailScreen() {
  return (
    <ScrollView>
      <CurrencyInformation
        title="Dollar"
        imageSource={require('../../assets/dollar.png')}
        desc="American Dollars" />

      <CurrencyInformation
        title="Euro"
        imageSource={require('../../assets/euros.png')}
        desc="European Euro" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})