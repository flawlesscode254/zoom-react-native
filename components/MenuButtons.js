import React from 'react'
import { View, Text } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

const Buttons = ({
    name,
    color,
    title
}) => {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            width: 80
        }}>
            <View style={{
                width: 55,
                height: 55,
                borderRadius: 20,
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Ionicons name={name} color="white" size={30} />
            </View>
            <Text style={{
                marginTop: 7,
                letterSpacing: 1,
                fontSize: 11
            }}>{title}</Text>
        </View>
    )
}

export default Buttons
