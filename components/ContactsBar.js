import React from 'react'
import { View, Text } from 'react-native'

import Star from './Star'
import People from './People'

const ContactsBar = () => {
    return (
        <View>
            <Star />
            <People />
            <People />
            <People />
            <People />
        </View>
    )
}

export default ContactsBar
