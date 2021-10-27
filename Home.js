import React from 'react'
import { View } from 'react-native'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Buttons from './components/Buttons'

const Home = () => {
    return (
        <View>
            <Header />
            <SearchBar />
            <Buttons />
        </View>
    )
}

export default Home
