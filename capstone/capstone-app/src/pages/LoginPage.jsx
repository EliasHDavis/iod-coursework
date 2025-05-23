import { useState } from "react"
import { useFetch } from "../useFetch"

export default function LoginPage() {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [url, setUrl] = useState('')
    
    const {loading, error, data} = useFetch(url)

    if (data) {
         const res = {data}
        if ( res.userID == userEmail && res.password == userPassword ){
            
            //send user to userPage with personal data
            console.log({data})
        } else {
            console.log("No user found")
        }
    }

    //valid email function
    //valid password function

    async function handleSubmit(e) {
        e.preventDefault();
        setUrl('someUrl')
      
    }

    // async function handleSignUp(e) {
    //     e.preventDefault();
    //     try {
    //         //If sign up is clicked post to database using email and password
    //         //if user exists reurn 'User exists, try signing in' 
    //     } catch (error) {
            
    //     }
    // }

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
                    <button >Sign Up</button>  
                </div>
            </form>
        </div>
    )
}