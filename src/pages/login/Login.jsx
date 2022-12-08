import { useState } from "react"
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import App from "../../App";

const Login = () => {
    const {error, setError} = useState(false);
    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");

    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate(App);
  })
  .catch((error) => {
    setError(true);
  });
    }
    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <button type="submit">login</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login