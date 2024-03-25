import { useState, useEffect } from "react";
import quizQuestions from "./QuestionFiles/Questions";
const questions = quizQuestions.results;

const QuizpageComponent = () => {
    const [CurrentElement, setCurrentElement] = useState(
        <button onClick={() => StartGame()}>Start!</button>
    );
    const [RandomNumber, setRandomNumber] = useState(0);
    const [Points, setPoints] = useState(0);

    const GenerateRandomQuestionNumber = (min, max) =>
    setRandomNumber(Math.floor(Math.random() * (Math.floor(questions.length - 1) - Math.ceil(0) + 1)) + questions.length - 1);

    const StartGame = () => { 
        GenerateRandomQuestionNumber();
        setCurrentElement(<QuestionElement question={questions[RandomNumber]} />);
    };

    const ShuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const CheckAnswer = (questionAnswer, randomNumber) => {
        const question = questions[randomNumber];
        console.log(questionAnswer, question.correct_answer, randomNumber);
        if (question.correct_answer === questionAnswer) {
            setPoints((prevPoints) => prevPoints + 1);
            GenerateRandomQuestionNumber();
            setCurrentElement(<QuestionElement question={questions[RandomNumber]}/>)
        } else {
            console.log("Incorrect!");
        }
    };    

    useEffect(() => {
        console.log(Points);
    }, [Points]);

    const QuestionElement = (props) => {
        const { correct_answer, incorrect_answers, question } = props.question;
        const randomNumber = RandomNumber;
        console.log(correct_answer);
        const allAnswers = ShuffleArray([correct_answer, ...incorrect_answers]);
        const buttons = allAnswers.map((answer, index) => (
            <button onClick={() => CheckAnswer(answer, randomNumber)} key={index}>
                {answer}
            </button>
        ));
        return (
            <div>
                <p>{question}</p>
                <div>{buttons}</div>
                {Points}
            </div>
        );
    };
    

    return <div>{CurrentElement}</div>;
};

export default QuizpageComponent;
