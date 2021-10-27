import React from 'react'
import { View, Text } from 'react-native'

const BottomButtons = () => {
    return (
        <View style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 30,
            marginTop: 20,
            marginBottom: 40
        }}>
            <View style={{
                backgroundColor: "#e3e5e8",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 10
            }}>
                <Text>Start</Text>
            </View>
            <View style={{
                backgroundColor: "#e3e5e8",
                paddingHorizontal: 20,
                paddingVertical: 7,
                paddingVertical: 5,
                borderRadius: 10
            }}>
                <Text>Send Invitation</Text>
            </View>
            <View style={{
                backgroundColor: "#e3e5e8",
                paddingHorizontal: 20,
                paddingVertical: 7,
                paddingVertical: 5,
                borderRadius: 10
            }}>
                <Text>Edit</Text>
            </View>
        </View>
    )
}

export default BottomButtons
