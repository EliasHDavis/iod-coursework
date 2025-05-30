let desk = "./././desk.jpg"
import "../Styles/Home.css"

export default function HomePage() {
    return (
        <div id="homeBackground">
            <div className="homeContainer">
                <div className='chartBar'>

                </div>

                <div className='heroInfo'>

                    <h1>Get More, Chart Less</h1>
                    <img src="./././student.jpg" alt="student writing" />

                    <h2>Nashville Charting Made Easier</h2>
                    <div className="heroSubinfo">
                        <div>
                            <img src={desk} alt="desk" />
                            <h3>Easy to use interface</h3>
                            <p>A user interface designed to be quick, efficeient and easy to navigate. Whether you are a professional musician or just starting out, UnCharted aims to help you grow and achieve more by charting less.</p>
                        </div>
                        <div>
                            <img src={desk} alt="desk" />
                            <h3>Quick access and saving</h3>
                            <p>Create, edit and save all in seconds. Charts are saved to each user and can be opened and edited at any time.</p>
                        </div>
                        <div>
                            <img src={desk} alt="desk" />
                            <h3>Multiple layouts</h3>
                            <p>The page layout is designed to be as flexible as the user, leaving the structure up to you. *Need multi column layouts, dividers or notes? We have you covered. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}