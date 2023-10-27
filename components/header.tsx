import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
const image = { uri: 'https://images.unsplash.com/photo-1586661615438-349a276d098b?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
export default function Header() {

        return (
               
                        <ImageBackground source={image} style={[styles.headBar]}>
                                <Text style={styles.headText}>Password Generator</Text>
                        </ImageBackground>
               
        )
}

const styles = StyleSheet.create({
        headBar: {

                justifyContent:"center",
                flex: 1,
        },
        headText: {
                fontSize: 30,
                fontWeight: "bold",
                justifyContent: "center",
                color: "#FFFFFF",

                marginHorizontal: 8,
        }
})