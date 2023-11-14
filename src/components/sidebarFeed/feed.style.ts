import { StyleSheet } from 'react-native';
import theme from '../../globalTheme/global';
import { Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        width: screenHeight,
        height: screenHeight - 103,
        opacity:0.9
    },
    question: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // equivalent to transparent_black
        borderRadius: 5,
        color: '#ffffff', // equivalent to white
        marginTop: '20%',
        marginLeft: "1%",
        width: '35%',
        fontSize: 20,
        padding: 3,
    },
    sideBarIconsContainer: {
        position: 'absolute',
        top: "51%",
        left: "39%",
        gap: 10,
    },
    img: {
        borderWidth: 1,
        borderColor: theme.colors.white,
        borderRadius: 50,
        width: 46,
        height: 46,
    },
    plusIcon: {
        position: 'relative',
        bottom: 12,
        backgroundColor: theme.colors.white,
        borderRadius: 50,

    },
    userName: {
        position: "absolute",
        bottom: 60,
        paddingLeft: 16
    },
    userNameText: {
        color: "white",
        fontSize: 19,
        fontWeight: "600"
    },
    playlistC: {
        backgroundColor: "#161616",
        position: "absolute",
        height: 40,
        flexDirection: "row",
        bottom: 10,
        width: "45%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
    },
    playInfoC: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        marginLeft:7
    }
});
