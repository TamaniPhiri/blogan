import axios from "axios";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,20}$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    if (!emailRegex.test(email)) {
      toast.error("Invalid email");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Invalid password");
      return;
    }

    mutate();
  };

  const { mutate } = useMutation(
    async () => {
      const res = await axios.post(
        "https://blog-server-swart.vercel.app/auth/signup",
        {
          email,
          password,
        }
      );
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
        navigate("/login");
        toast.dismiss("load");
      },
      onMutate() {
        toast.loading("Logging in...", { id: "load" });
      },
      onError() {
        toast.error("Something went wrong, please try again");
        toast.dismiss("load");
      },
    }
  );
  return (
    <section className="min-h-screen w-full items-center justify-center flex">
      <div className="flex flex-col border border-gray-700 p-4 rounded-md gap-4 w-full max-w-sm">
        <h1 className=" text-center font-bold">Enter credentials</h1>
        <input
          type="email"
          className={`p-2 rounded-md text-black focus:outline-none ${
            email.length > 0 &&
            !emailRegex.test(email) &&
            "border-2 border-red-400"
          }`}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          className={`p-2 rounded-md text-black focus:outline-none ${
            name.length < 0 && "border-2 border-red-400"
          }`}
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />

        <div className=" flex flex-col">
          <input
            type="password"
            className="p-2 rounded-md text-black focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!passwordRegex.test(email) && (
            <ul className=" text-red-300 list-disc text-sm ml-4 mt-2">
              <li>Must be 6-20 characters</li>{" "}
              <li>Must have a capital letter</li>
            </ul>
          )}
        </div>

        <button onClick={login} className={`bg-purple-700 p-2 rounded-md`}>
          Login
        </button>
        <Link to={"/register"} className=" text-center">
          Don't have an account?{" "}
          <span className=" text-purple-300">Sign up</span>
        </Link>
      </div>
    </section>
  );
};

export default Register;