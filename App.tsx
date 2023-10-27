import React from 'react'
import { 
  StyleSheet, 
  SafeAreaView, 
  useColorScheme, 
  ScrollView } from 'react-native'
  import Header from './components/header'
import PasswordGenerator from './components/passuser'

export default function App():JSX.Element {
  const useDark  = useColorScheme() === 'dark'
  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <PasswordGenerator/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})