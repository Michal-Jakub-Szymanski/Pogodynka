import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/homepage.css";

const HomepageComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [questionAmount, setQuestionAmount] = useState("22");
    const [difficultyLevel, setDifficultyLevel] = useState("easy");
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleStartQuiz = () => {
        if (selectedCategory) {
            const queryString = `?category=${selectedCategory}&amount=${questionAmount}&difficulty=${difficultyLevel}`;
            navigate(`/quiz${queryString}`)
            console.log("Quiz query string:", queryString);
        } else {
            console.log("Please select a category before starting the quiz.");
        }
    };
    const renderQuiz = () => {
        if (selectedCategory) {
            return (
                <div className="quiz">
                    <div className="quiz-question">
                        <label htmlFor="question-total">Wybierz liczbe pytań:</label>
                        <select id="question-total" onChange={(e) => setQuestionAmount(e.target.value)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="quiz-question">
                        <label htmlFor="question-difficulty">Wybierz poziom trudności:</label>
                        <select id="question-difficulty" onChange={(e) => setDifficultyLevel(e.target.value)}>
                            <option value="easy">Łatwy</option>
                            <option value="medium">Średni</option>
                            <option value="hard">Trudny</option>
                        </select>
                    </div>
                    <button className="quiz-start" onClick={handleStartQuiz}>Start Quiz</button>
                </div>
            );
        } else {
            return null;
        }
    };

    return (
        <div>
            <div className="container">
                <h2>Witamy na stronie z quizami!</h2>
            </div>
            <div className="container">
                <h1>Wybierz kategorie aby zaczac quiz</h1>
                <ul className="category">
                    <li onClick={() => handleCategorySelect("9")}>General Knowledge</li>
                    <li onClick={() => handleCategorySelect("22")}>Geography</li>
                    <li onClick={() => handleCategorySelect("12")}>Music</li>
                </ul>

                <br /><br /><br />
                {renderQuiz()}
                <br /><br /><br />
            </div>
        </div>
    );
};

export default HomepageComponent;
