import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons"

const Header = () => {
    return (
        <View style={{
            backgroundColor: "black",
            paddingVertical: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center'
        }}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: "white",
                    letterSpacing: 2,
                    fontSize: 18
                }}>Meet & Chat</Text>
            </View>
            <View style={{
                width: 50,
                paddingRight: 20
            }}>
                <Ionicons name="create-outline" style={{
                    textAlign: "right"
                }} color="#FFFFFF" size={24} />
            </View>


        </View>
    )
}

export default Header
