import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Admin.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { AuthContext } from "./AuthContext";
import { Form } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navitage("/add-recipe");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <main className="login">
      <h2>Login admin panel</h2> <br />
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>User id: </Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter user password"
          />
        </Form.Group>
        <hr />
        <div>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br /> {error && <span>Wrong email or password!</span>}
        <Link to="/signup">Sign Up</Link>
        </div>
        <br />
      </Form>
    </main>
  );
};

export default Login;
