import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {

    const [form,setForm]=useState({"username":"","email":"","password":""});

    const handleSubmit=(e:React.FormEvent)=>{
   e.preventDefault();

   try {
    const res=fetch("https//localhost:3000/api/v1/signup");
    
   } catch (error) {
    
   }
   
    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

        setForm({...form,[e.target.name]:[e.target.value]});

    }

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg text-white">
      <div className="bg-[#1a1a35] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit}className="space-y-4">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required


            placeholder="User Name"
            className="w-full p-3 rounded-md bg-[#2a2a4d] text-white border border-transparent focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            name="email"
             value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#2a2a4d] text-white border border-transparent focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            name="password"
             value={form.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full p-3 rounded-md bg-[#2a2a4d] text-white border border-transparent focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
