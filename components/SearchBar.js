import React from 'react'
import { View, Text } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

const SearchBar = () => {
    return (
        <View style={{
            paddingHorizontal: 15,
            marginTop: 15
        }}>
            <View style={{
                backgroundColor: "#e3e5e8",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 7,
                flexDirection: "row"
            }}>
                <Ionicons name="search" color="#48494a" size={24} />
                <Text style={{
                    fontSize: 16,
                    color: "#777778",
                    letterSpacing: 1.5,
                    paddingLeft: 10
                }}>Search</Text>
            </View>
        </View>
    )
}

export default SearchBar
