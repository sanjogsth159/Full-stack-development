import axios from "axios";
import { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  const finalData = {
    name,
    password,
    email,
  };

  axios.post("http://localhost:3000/users/create", finalData)
    .then((response) => {
      alert("User registered successfully");
    })
    .catch((error) => {
      alert("Error registering user: " + error.response?.data?.message || error.message);
    });
};


  return (
    <>
    <div className="flex items-center justify-center max-h-screen bg-[#6a7b9e]">
      <div className="flex flex-col w-[600px] items-center justify-center bg-zinc-300 p-10 mt-10 rounded-lg shadow-lg text-xl/10 gap-6">
        <h1 className="text-[30px]">Register Form</h1>
        <p>Register to Continue</p>
        <form onSubmit= {handleSubmit}>
          <div className="flex flex-row gap-14">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-row gap-14.5">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="search_email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-row gap-7">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="search_password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 mt-10 border-1 border-solid rounded-xl h-10 w-20 shadow-xl/30">Register</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default RegisterForm;