import React from 'react'
import { View, Text, Image } from 'react-native'

const People = () => {
    return (
        <View style={{
            marginTop: 20,
            marginLeft: 25,
            flexDirection: "row",
            alignItems: "center"
        }}> 
            <Image 
            source={{
                uri: "https://cdn2.hubspot.net/hub/2008411/hubfs/Images/AIMM_Vocalist_Studio.jpg?width=719&name=AIMM_Vocalist_Studio.jpg"
            }}
            style={{
                width: 55,
                height: 55,
                borderRadius: 20,
            }} 
            />
            <Text style={{
                paddingLeft: 20,
                fontSize: 15,
                letterSpacing: 1
            }}>Walter Gillies</Text>
        </View>
    )
}

export default People
