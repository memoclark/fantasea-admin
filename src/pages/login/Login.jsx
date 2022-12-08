import { useState } from "react"
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const {error, setError} = useState(false)

    const handleLogin = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">login</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login