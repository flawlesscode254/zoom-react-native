import React from 'react'
import { View } from 'react-native'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Buttons from '../components/Buttons'
import ContactsBar from '../components/ContactsBar'

const Meet = () => {
    return (
        <View>
            <Header />
            <SearchBar />
            <Buttons />
            <ContactsBar />
        </View>
    )
}

export default Meet

