import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import globalTheme from '../../globalTheme/global';
import { Text, View } from 'react-native';
import { styles } from './Nav.styles';
export default function NavBar() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (timeInSeconds:number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
    return (
        <View style={styles.container}>
            {/* Time Container */}
            <View style={styles.timeC}>
                <Icon name="clock" color={globalTheme.colors.white} size={20} style={{opacity:0.8}}/>
                <Text style={styles.text}>{formatTime(seconds)}</Text>
            </View>
            {/* For You Container */}
            <View style={styles.forC}>
                <Text style={styles.forYou}>For you</Text>
                <View style={styles.line} />
            </View>
            {/* Search Container */}
            <View style={styles.searchC}>
                <IonIcon name="search" color={globalTheme.colors.white} size={25} />
            </View>
        </View>

    );
}
