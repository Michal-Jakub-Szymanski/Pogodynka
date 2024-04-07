import { Link } from "react-router-dom";
import  "../Style/homepage.css";

const HomepageComponent = () => {
    return(
    <div>
        <div className="container">
            <h2>Witamy na stronie z quizami!</h2>
        </div>
        <div className="container">
            <h1>Wybierz kategorie aby zaczac quiz</h1>
            <ul className="category">
                <li>General Knowledge</li>
                <li>Books</li>
                <li>Music</li>
                <li>Film</li>
                <li>Musicals & Theatres</li>
                <li>Television</li>
            </ul>

            <br /><br /><br />
            TODO: To się wyświetla dopiero po wybraniu kategori
            <br /><br /><br />

            <div class="quiz">
                <div class="quiz-question">
                    <label for="question-total">Wybierz liczbe pytań:</label>
                    <select id="question-total">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    </select>
                </div>
                <div class="quiz-question">
                    <label for="question-difficulty">Wybierz poziom trudności:</label>
                    <select id="question-difficulty">
                    <option value="any">Losowy</option>
                    <option value="easy">Łatwy</option>
                    <option value="medium">Średni</option>
                    <option value="hard">Trudny</option>
                    </select>
                </div>
                <button class="quiz-start">Start Quiz</button>
            </div>
        </div>
    </div>)
}

export default HomepageComponent;