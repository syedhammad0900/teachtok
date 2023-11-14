import { Text, View } from "react-native";
import {styles} from './home.style'
import NavBar from "../../components/Nav/Nav";
import Questions from "../../components/questions/flatList";
function Home(){
    return (
        <View style={styles.container}>
            <NavBar/>
            <Questions/>
        </View>
    )
}
export default Home