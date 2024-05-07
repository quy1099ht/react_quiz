import { QuizResult } from "../utils/types";
import httpService from "./HttpService";

const quizServices = {
  getRandomQuizes: () => {
    return httpService.get<QuizResult[]>('/v1/questions');
  },
  getQuizesByCategory: (category: string) => {
    return httpService.get<QuizResult[]>('/v1/questions', {
        params: {
            category,
        }
    });
  },
};

export default quizServices;