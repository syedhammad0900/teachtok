//Types
export type QuestionResponse = {
    type: string;
    id: number;
    playlist: string;
    description: string;
    image: string;
    question: string;
    options: {
      id: string;
      answer: string;
    }[];
    user: {
      name: string;
      avatar: string;
    };
    correct_options?: CorrectAnswerResponse;
  };
  
  export type CorrectAnswerResponse = {
    id: string;
    answer: string;
  }[];