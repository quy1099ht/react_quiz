import { ChangeEvent, FC, useState } from "react";
import logo from '../logo.svg';
import { useDispatch } from "react-redux";
import { setCategory, setQuestions } from "../reducer/quizReducer";
import { useSelector } from "react-redux";
import { useAppSelector } from "../shared/utils/reduxHooks";
import { useNavigate } from "react-router-dom";
import quizServices from "../shared/services/QuizServices";

const Home: FC = () => {
    const [listOfTopics, setListOfTopic] = useState<string[]>(['', 'Linux', 'DevOps', 'Docker'])

    const dispatch = useDispatch();
    const category = useAppSelector((state) => state.category);
    const navigate = useNavigate();
    const startGame = () => {
        quizServices.getQuizesByCategory(category).then(val => {
            dispatch(setQuestions(val.data))
        })
        navigate('/quizzes')
    }
    const onSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        dispatch(setCategory(event.target.value))
    };


    return (
        <div className="px-64 py-20 h-screen">
            <div className="shadow-2xl h-full flex flex-col w-full items-center">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="font-sans font-medium text-lg">Good day for {category} quizzes, init?</p>
                <div>
                    <select defaultValue="" onChange={onSelectHandler} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {listOfTopics.map((value, key) => {
                            return (<option key={key} value={value}>
                                {value || 'Pick a topic'}</option>)
                        })}
                    </select>
                </div>
                <div className="w-full px-4 mt-8">
                    <button className="rounded-full border-2 w-full h-12 bg-lime-300" onClick={startGame}>Start</button>
                </div>
            </div>
        </div>
    );
};

export default Home