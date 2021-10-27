import React from 'react'
import { View, Text } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

const Star = () => {
    return (
        <View style={{
            marginTop: 20,
            marginLeft: 25,
            flexDirection: "row",
            alignItems: "center"
        }}> 
            <View style={{
                width: 55,
                height: 55,
                borderRadius: 20,
                backgroundColor: "#b7b9bd",
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Ionicons name="star" color="white" size={30} />
            </View>
            <Text style={{
                paddingLeft: 20,
                fontSize: 15,
                letterSpacing: 1
            }}>Starred</Text>
        </View>
    )
}

export default Star
