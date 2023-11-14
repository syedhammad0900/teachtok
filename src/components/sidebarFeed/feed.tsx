import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, ImageBackground, View } from 'react-native';
import { styles } from './feed.style';
import { QuestionResponse } from '../../Types/questions.types';
import { Text } from 'react-native';
import theme from '../../globalTheme/global';
import Answers from '../answers/answers';

export default function FeedItem({ question }: { question: QuestionResponse }) {
    const rightButtons: rightButtonsType = [
        {
            name: 'cards-heart',
            text: '87',
        },
        {
            name: 'comment-processing',
            text: '2',
        },
        {
            name: 'bookmark',
            text: '203',
        },
        {
            name: 'share',
            text: '17',
        },
    ];
    return (
        <ImageBackground
            style={styles.container}
            source={{
                uri: question.image,
            }}>
            <Text style={styles.question}>{question.question}</Text>
            <View style={styles.sideBarIconsContainer}>
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.img} source={{
                        uri: question.user.avatar,
                    }} />
                    <Icon style={styles.plusIcon} name="plus-circle" size={18} color={theme.colors.green} />
                </View>
                {rightButtons.map(item => (
                    <View key={item.name} style={{ gap: 2, alignItems: "center" }}>
                        <Icon name={item.name} color={theme.colors.white} size={35} />
                        <Text style={{ color: "white" }}>{item.text}</Text>
                    </View>
                ))}
            </View>
            <Answers options={question.options} />
            <View style={styles.userName}>
                <Text style={styles.userNameText}>{question.user.name}</Text>
                <Text style={{ color: "white" }}>{question.description}</Text>
            </View>
            <View style={styles.playlistC}>
                <View style={styles.playInfoC}>
                    <Icon name="animation-play" color={theme.colors.white} size={15} />
                    <Text style={{ color: "white" }}>Playlist • Unit 5: {question.playlist}</Text>
                </View>
                <Icon name="chevron-right" color={theme.colors.white} size={19} style={{marginRight:13}}/>
            </View>
        </ImageBackground>
    );
}
