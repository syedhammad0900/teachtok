// import styled from 'styled-components/native';
// import theme from '../../theme';

// //Types
// type CardProps = {
//   backgroundColor?: string | null;
// };

// export const AnswersContainer = styled.View`
//   position: absolute;
//   bottom: 130px;
//   padding-left: 12px;
//   gap: 8px;
// `;

// export const AnswerCard = styled.TouchableOpacity<CardProps>`
//   opacity: 0.9;
//   border-radius: 6px;
//   padding: 10px;
//   background-color: ${props => props.backgroundColor || theme.colors.gray};
//   width: 280px;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const AnswerText = styled.Text`
//   text-shadow: 1px 1px 2px black;
//   font-size: 17px;
//   color: ${theme.colors.white};
//   width: 80%;
// `;




import { StyleSheet } from 'react-native';
import theme from '../../globalTheme/global';
import { Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    ansC: {
        position: "absolute",
        bottom: 200,
        paddingLeft: 12,
        gap: 8,
    },
    ansCardC:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius:10,
        marginTop:5

    },
    ansCard: {
        borderRadius: 6,
        padding: 10,
        width: 280,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    answerText: {
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontSize: 17,
        color: theme.colors.white,
        width: '80%',  // You can use a percentage value in React Native styles
    },
});
