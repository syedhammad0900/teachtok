import { StyleSheet } from 'react-native';
import theme from '../../globalTheme/global';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 15,
        right: 0,
        left: 0,
        paddingVertical: 0,
        paddingHorizontal: 15,
        zIndex:1
    },
    timeC: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        color: theme.colors.gray
    },
    text: {
        color: theme.colors.white,
        opacity:0.8,
        fontSize:15
    },
    forC: {
        alignItems: "center",
        gap: 5
    },
    forYou: {
        color: theme.colors.white,
        fontWeight:"600",
        fontSize:18
    },
    line:{
        backgroundColor:theme.colors.white,
        width:40,
        height:3
    },
    searchC:{
        alignItems:"center",
        justifyContent:"center",
        width:30
    }
});
