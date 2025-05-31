import { useState, useContext, useEffect } from "react"
import { useQuery } from "../useQuery"
import "../Styles/login.css"
import { UserContext } from "../UserContext"

export default function LoginPage() {

    const {user, login} = useContext(UserContext)

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [requestConfig, setRequestConfig] = useState({
        url: '',
        options: {}
    });
    
    const {loading, error, data} = useQuery(requestConfig)



    //valid email function
    //valid password function

    async function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            email: userEmail,
            password: userPassword
        }

        setRequestConfig({ 
            url:'http://localhost:8080/api/users/login',
            options: {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            }
        })

        setUserEmail("")
        setUserPassword("")
    }

    async function handleSignUp(e) {
        e.preventDefault();
        
        const payload = {
            emailId: userEmail,
            password: userPassword
        }

        setRequestConfig({ 
            url:'http://localhost:8080/api/users/create',
            options: {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            }
        })

        setUserEmail("")
        setUserPassword("")
    }

    useEffect(() => {
        if (data?.data) {
        login(data.data._id); 
            console.log("Login successful:", data.data);
        } else if (error) {
            console.error("Login failed:", error);
        }
        }, [data, error]);
       



    return (
        <div id="loginContainer">
            <form name='userlogin' className="loginForm" onSubmit={handleSubmit}>
                <h2>User Login</h2>
                <div className="loginInputs">
                    <label name='userlogin'>email <br/>
                        <input type="text" placeholder="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                    </label>
                    

                    <label name='userlogin'>password <br/>
                        <input type="text" placeholder="********" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                    </label>
                    
                </div> 

                <div className="loginButtons">
                    <button type="submit">Sign In</button>  
                    <button onClick={handleSignUp}>Sign Up</button>  
                </div>
            </form>
        </div>
    )
}