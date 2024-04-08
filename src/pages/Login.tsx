import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,20}$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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

    console.log("Valid email and password. Logging in...");
  };
  return (
    <section className="min-h-screen w-full items-center justify-center flex">
      <div className="flex flex-col border border-gray-700 p-4 rounded-md gap-4 w-full max-w-sm">
        <h1>Enter credentials</h1>
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
      </div>
    </section>
  );
};

export default Login;
