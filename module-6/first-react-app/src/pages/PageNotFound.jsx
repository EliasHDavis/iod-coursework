import { Link, useNavigate } from 'react-router-dom'

function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div className="PageNotFound">
            <h1>Page Not Found</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <p>What were you looking for?
                Maybe going back <Link to="/">home</Link>
                will help you find it.</p>
        </div>
    )
}

export default PageNotFound