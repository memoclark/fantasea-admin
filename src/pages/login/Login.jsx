import { useState } from "react"
import "./login.scss"

const Login = () => {
    const {error, setError} = useState(false)
    return (
        <div className="login">
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">login</button>
                <span>Wrong email or password!</span>
            </form>
        </div>
    )
}

export default Login