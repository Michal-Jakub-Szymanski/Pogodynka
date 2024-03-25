import { Link } from "react-router-dom";

const HomepageComponent = () => {
    return(
    <div>
        <p>Witamy na stronie z quizami! Kliknij w ten przycisk by zagrac <Link to={"/quiz"}>Zagraj teraz</Link></p>
    </div>)
}

export default HomepageComponent;