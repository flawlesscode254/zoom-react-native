import React from 'react'
import { View, Text } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

import BottomButtons from '../components/BottomButtons'

const Meetings = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                borderBottomColor: "#cccdcf",
                borderBottomWidth: 0.5
            }}>
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
                    }}>Meetings</Text>
                </View>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 15
                }}>
                    <Text>Personal Meeting ID</Text>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 5
                    }}>674 268 0587</Text>
                </View>
                <BottomButtons />
            </View>

            <View style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1
            }}>
                <Ionicons 
                    name="calendar"
                    color="grey"
                    size={150}
                />
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "black"
                }}>No upcoming meetings</Text>
                <Text style={{
                    color: "grey",
                    marginTop: 5
                }}>The sheduled meetings will be shown here</Text>
            </View>
        </View>
    )
}

export default Meetings
