import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GKeasyQuestions from "./QuestionFiles/GeneralKnowledge/easy";
import GKmediumQuestions from "./QuestionFiles/GeneralKnowledge/medium";
import GKhardQuestions from "./QuestionFiles/GeneralKnowledge/hard";
import GEOeasyQuestions from "./QuestionFiles/Geography/easy";
import GEOmediumQuestions from "./QuestionFiles/Geography/medium";
import GEOhardQuestions from "./QuestionFiles/Geography/hard";
import MeasyQuestions from "./QuestionFiles/Music/easy";
import MmediumQuestions from "./QuestionFiles/Music/medium";
import MhardQuestions from "./QuestionFiles/Music/hard";

const QuizpageComponent = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category") || "9";
    const difficulty = urlParams.get("difficulty") || "easy";
    const amount = parseInt(urlParams.get("amount")) || 10;
    let questions = GKeasyQuestions.results;

    switch (category) {
        case "9":
            switch (difficulty) {
                case "easy":
                    questions = GKeasyQuestions.results;
                    break;
                case "medium":
                    questions = GKmediumQuestions.results;
                    break;
                case "hard":
                    questions = GKhardQuestions.results;
                    break;
                default:
                    questions = GKeasyQuestions.results;
                    break;
            }
            break;
        case "22":
            switch (difficulty) {
                case "easy":
                    questions = GEOeasyQuestions.results;
                    break;
                case "medium":
                    questions = GEOmediumQuestions.results;
                    break;
                case "hard":
                    questions = GEOhardQuestions.results;
                    break;
                default:
                    questions = GEOeasyQuestions.results;
                    break;
            }
            break;
        case "12":
            switch (difficulty) {
                case "easy":
                    questions = MeasyQuestions.results;
                    break;
                case "medium":
                    questions = MmediumQuestions.results;
                    break;
                case "hard":
                    questions = MhardQuestions.results;
                    break;
                default:
                    questions = MeasyQuestions.results;
                    break;
            }
            break;
        default:
            questions = GKeasyQuestions.results;
    }

    const [currentElement, setCurrentElement] = useState(
        <button onClick={() => startGame()}>Start!</button>
    );
    const [randomNumber, setRandomNumber] = useState(0);
    const [points, setPoints] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(1)

    const generateRandomQuestionNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const startGame = () => {
        const randomNum = generateRandomQuestionNumber(0, questions.length - 1);
        setRandomNumber(randomNum);
    };

    useEffect(() => {
        if (randomNumber >= 0) {
            setCurrentElement(
                <QuestionElement question={questions[randomNumber]} />
            );
        }
    }, [randomNumber]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const checkAnswer = (questionAnswer) => {
        const question = questions[randomNumber];
        if(questionNumber >= amount){
            endGame();
        }else{
        if (question.correct_answer === questionAnswer) {
            setPoints((prevPoints) => prevPoints + 1);
            setQuestionNumber((questionNumber) => questionNumber + 1);
            startGame();
        } else {
            if(points > 0){
            setPoints((prevPoints) => prevPoints - 1);
            }
            setQuestionNumber((questionNumber) => questionNumber + 1);
            startGame();
            console.log("Incorrect!");
        }
    }
    };

    const endGame = () =>{
        setCurrentElement(
            <div className="container">
                <h3>Thanks for playing your score is: {points}</h3>
                <br /><br />
                <Link to="/">Return</Link>
            </div>
        )
    }

    const QuestionElement = (props) => {
        const { correct_answer, incorrect_answers, question } = props.question;
        const allAnswers = shuffleArray([correct_answer, ...incorrect_answers]);
        const buttons = allAnswers.map((answer, index) => (
            <button key={index} onClick={() => checkAnswer(answer)}>
                {answer}
            </button>
        ));
        return (
            <div className="container">
                <h3>{questionNumber}. - {question}</h3>
                <div>{buttons}</div>
                <h5>Current points: {points}</h5>
            </div>
        );
    };

    return <div>{currentElement}</div>;
};

export default QuizpageComponent;
