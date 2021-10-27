import React from 'react'
import { View, TouchableOpacity } from 'react-native'
// import { useNavigation } from '@react-navigation/core'

import MenuButtons from "./MenuButtons"

const Buttons = () => {

    // const navigation = useNavigation()

    // const goTo = () => {
    //     navigation.navigate("Meetings")
    // }

    return (
        <View style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-evenly"
        }}>
            <MenuButtons
                name="videocam"
                color="orange"
                title="New Meeting"
            />
            <MenuButtons
                name="add-circle"
                color="#2D8CFF"
                title="Join"
            />
            <MenuButtons
                name="calendar"
                color="#2D8CFF"
                title="Schedule"
            />
            <MenuButtons
                name="share"
                color="#2D8CFF"
                title="Share Screen"
            />
        </View>
    )
}

export default Buttons
