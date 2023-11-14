
import axiosInstance from './axiosInstance';

import { CorrectAnswerResponse, QuestionResponse } from '../Types/questions.types'


export const getQuestions = async (): Promise<QuestionResponse> => {
    try {
        const response = await axiosInstance.get(`/for_you`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const getCorrectAnswer = async (id: number): Promise<{ correct_options: CorrectAnswerResponse }> => {
    try {
        const response = await axiosInstance.get(`/reveal?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error posting user comment:', error);
        throw error;
    }
};
