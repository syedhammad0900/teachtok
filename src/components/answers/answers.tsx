import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TouchableOpacity, Text } from 'react-native'
//Styles
import { styles } from './answers.style';
import theme from '../../globalTheme/global';

export default function Answers({ options, backgroundColorC }: any,) {
    const [answerSelected, setAnswerSelected] = useState('');

    const setBackgroundColor = (id: string) => {
        if (answerSelected.length === 0) {
            return null;
        }
        if (id === options[0].id) {
            return theme.colors.green;
        }
        if (answerSelected === id) {
            return theme.colors.red;
        }
    };

    return (
        <View style={styles.ansC}>
            {options.map((item: any) => (
                <View key={item.id} style={styles.ansCardC}>
                    <TouchableOpacity
                        style={{ ...styles.ansCard, backgroundColor: setBackgroundColor(item.id) || backgroundColorC }}
                        disabled={answerSelected.length > 0}
                        onPress={() => {
                            setAnswerSelected(item.id);
                        }}
                        key={item.id}
                    >
                        <Text style={styles.answerText}>{item.answer}</Text>
                        {answerSelected === item.id && (
                            <Icon
                                name={item.id === options[0].id ? 'thumb-up' : 'thumb-down'}
                                color={theme.colors.white}
                                size={22}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}
