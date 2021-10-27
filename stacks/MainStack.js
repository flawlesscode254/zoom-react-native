import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
// import { auth } from '../firebase'
// import { useNavigation } from '@react-navigation/core'

import Meet from '../screens/Meet'
import Meetings from '../screens/Meetings'
import Contacts from '../screens/Contacts'
import Settings from '../screens/Settings'

const MainStack = () => {

    const Stack = createBottomTabNavigator()
    // const navigation = useNavigation()

    // navigation.addListener("focus", () => {
    //     auth.onAuthStateChanged((authUser) => {
    //         if (!authUser) {
    //             navigation.navigate("Auth")
    //         }
    //     })
    // })

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "chatbubbles"
            switch (route.name) {
                case "Meet & Chat":
                    iconName = "chatbubbles";
                    break;

                case "Meetings":
                    iconName = "time";
                    break;

                case "Contacts":
                    iconName = "person";
                    break;

                case "Settings":
                    iconName = "settings";
                    break;

                default:
                    iconName = "chatbubbles"
            }

            return (
                <Ionicons
                    name={focused ? iconName : `${iconName}-outline`}
                    color={focused ? "#2D8CFF" : "gray"}
                    size={focused ? 30 : 25}
                />
            )
        },
    })

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="Meet & Chat"
                component={Meet}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Meetings"
                component={Meetings}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStack