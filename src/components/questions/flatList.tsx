import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, Alert, View, Text} from 'react-native';

//Components
// import NavBar from '../../components/NavBar';
import Feed from '../../components/sidebarFeed/feed';

//Services
import {getCorrectAnswer, getQuestions} from '../../utils/requests';

//Styles
// import {Container} from './styles';
import { QuestionResponse } from '../../Types/questions.types';

//Types
// import {getQuestions} from '../../utils/requests';

export default function Questions() {
  const [forYouItems, setQuestions] = useState<QuestionResponse[] | []>([]);
  const [nextForYouItemsPage, setNextForYouItemsPage] = useState<
    QuestionResponse[] | []
  >([]);
  const getForYouItems = async () => {
    if (nextForYouItemsPage.length === 0) {
      var questionsList = [];
      try {
        for (var i = 0; i < 3; i++) {
          var data = await getQuestions();
          const correctAnswers = await getCorrectAnswer(data.id);
          data = {...data, correct_options: correctAnswers.correct_options};
          questionsList.push(data);
        }
      } catch (error) {
        Alert.alert(
          'Error',
          'An error ocurred while requesting questions data.',
        );
      }

      setQuestions(questionsList);
    }
    getNextPage();
  };

  const getNextPage = async () => {
    try {
      var nextForYouItemsList = [];
      for (var i = 0; i < 3; i++) {
        var data = await getQuestions();
        const correctAnswers = await getCorrectAnswer(data.id);
        data = {...data, correct_options: correctAnswers.correct_options};
        nextForYouItemsList.push(data);
      }
      setNextForYouItemsPage(nextForYouItemsList);
    } catch (error) {
      Alert.alert('Error', 'An error ocurred while requesting questions data');
    }
  };

  useEffect(() => {
    getForYouItems();
  }, []);
  return (
      <FlatList
        onEndReachedThreshold={0.1}
        snapToAlignment="center"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height - 103}
        data={forYouItems}
        renderItem={item => <Feed question={item.item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setQuestions([...forYouItems, ...nextForYouItemsPage]);
          getForYouItems();
        }}
      />
  );
}
