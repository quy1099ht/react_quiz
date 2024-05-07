import { ChangeEvent, FC, useEffect, useState } from "react";
import logo from '../logo.svg';
import { useDispatch } from "react-redux";
import { setCurrentQuestionIndex, updateScore } from "../reducer/quizReducer";
import { useSelector } from "react-redux";
import { useAppSelector } from "../shared/utils/reduxHooks";
import { useNavigate } from "react-router-dom";
import { QuizResult } from "../shared/utils/types";

const Quizzes: FC = () => {
    const dispatch = useDispatch();
    const { questions, score, currentQuestionIndex, category } = useAppSelector((state) => state);

    const checkAnswer = (answer: string) => {
        const chosenAnswer = answer + "_correct" as keyof QuizResult['correct_answers'];
        const isCorrectString = String(questions[currentQuestionIndex].correct_answers[chosenAnswer]);

        if (isCorrectString === 'true') {
            alert("Correct")
            dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
            dispatch(updateScore(1))
        }
        else {
            alert("Wrong")
            dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
            dispatch(updateScore(-1))
        }
    }

    return (
        <div className="px-64 py-20 h-screen">
            <div className="shadow-2xl h-full flex flex-col w-full items-center">
                <p className="antialiased font-mono text-4xl mb-8">Topic: {category} </p>
                <p className="antialiased font-mono text-2xl mb-8">Question: {questions[currentQuestionIndex]?.question} </p>
                <div className="w-full px-4 mt-8">
                    <button className="rounded-full border-2 w-full h-12 bg-blue-300" onClick={() => checkAnswer("answer_a")} >{questions[currentQuestionIndex]?.answers.answer_a}</button>
                </div>
                <div className="w-full px-4 mt-8">
                    <button className="rounded-full border-2 w-full h-12 bg-blue-300" onClick={() => checkAnswer("answer_b")}>{questions[currentQuestionIndex]?.answers.answer_b}</button>
                </div>
                <div className="w-full px-4 mt-8">
                    <button className="rounded-full border-2 w-full h-12 bg-blue-300" onClick={() => checkAnswer("answer_c")}>{questions[currentQuestionIndex]?.answers.answer_c}</button>
                </div>
                <div className="w-full px-4 mt-8">
                    <button className="rounded-full border-2 w-full h-12 bg-blue-300" onClick={() => checkAnswer("answer_d")}>{questions[currentQuestionIndex]?.answers.answer_d}</button>
                </div>
            </div>
            <div className="flex pt-4 justify-end">
                <p className="rounded-full border-2 font-mono text-lg px-4 font-semibold bg-orange-400">Score: {score}</p>
            </div>
        </div>
    );
};

export default Quizzes