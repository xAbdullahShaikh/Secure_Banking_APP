
import { useState } from "react";
import hooImage from "../assets/hoo.png"; // Correct path to hoo.png
import bkImage from "../assets/bk.png"; // Correct path to bk.png
import Signup from "./Signup"; // Import the Signup component
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase authentication imports
import { auth } from "../firebase"; // Import Firebase auth
import novaImage from "../assets/Nova.png";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    // Firebase authentication logic
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // If login is successful
      alert("Sign-in successful!");
      onLoginSuccess(); // Notify the parent component
    } catch (err) {
      // Handle errors (e.g., wrong email or password)
      setError("Invalid email or password. Please try again.");
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup); // Toggle between login and signup
  };

  if (isSignup) {
    return <Signup onSignupSuccess={toggleForm} />; // Show Signup component if isSignup is true
  }

  return (
    <div
      className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8"
      style={{
        backgroundImage: `url(${bkImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} // Set bk.png as the background
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src={novaImage} // Use the imported hoo.png image
          alt="Your Company"
          className="mx-auto h-10 w-auto"
          style={{ height: "64px", width: "auto" }}
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white bg-opacity-80 p-6 rounded-md shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="  Email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-white hover:text-white"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="  Password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-white hover:text-white"
            onClick={toggleForm} // When clicked, show the signup form
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;


