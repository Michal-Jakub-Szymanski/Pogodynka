import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/homepage.css";

const HomepageComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [questionAmount, setQuestionAmount] = useState("10");
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
                        <label htmlFor="question-total">Select the number of questions:</label>
                        <select id="question-total" onChange={(e) => setQuestionAmount(e.target.value)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="quiz-question">
                        <label htmlFor="question-difficulty">Select difficulty level:</label>
                        <select id="question-difficulty" onChange={(e) => setDifficultyLevel(e.target.value)}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
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
                <h2>Welcome to the quiz site!</h2>
            </div>
            <div className="container">
                <h1>Select a category to start the quiz</h1>
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
