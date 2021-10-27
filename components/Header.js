import React from 'react'
import { View, Text } from 'react-native'

const Header = () => {
    return (
        <View style={{
            backgroundColor: "black",
            paddingVertical: 8,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center'
        }}>
                <Text style={{
                    color: "white",
                    letterSpacing: 2,
                    fontSize: 18
                }}>Meet & Chat</Text>
        </View>
    )
}

export default Header
