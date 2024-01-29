"use client";

import { useState } from "react";
import { Signup } from "./clientforms";

export default function SignupForm() {
  const [error, setError] = useState<string>();
  const [viewPass, setViewPass] = useState<boolean>(false);
  const [password, setPassword] = useState<string>();

  return (
    <div className="flex items-center text-center justify-center">
      <div className="w-[452px] h-[639px] rounded-[15px] bg-[#F5F5F5]">
        <form
          onSubmit={(e) => {
            const err = Signup(e as any);
            setError(err);
          }}
        >
          <div className="flex">
            <div>
              <label htmlFor="fname" className="block text-black">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="w-[160px] h-[40px] rounded-[10px] border-[#ADADAD] text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="lname" className="block text-black">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="w-[160px] h-[40px] rounded-[10px] border-[#ADADAD] block text-black"
                required
              />
            </div>
            <br />
          </div>
          <div>
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Your Username Here"
              className="w-[393px] h-[40px] rounded-[10px] border-[#ADADAD] block text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <div className="flex">
              {viewPass ? (
                <input
                  type="text"
                  name="password"
                  placeholder="Your Password Here"
                  className="w-[393px] h-[40px] rounded-[10px] border-[#ADADAD] block text-black"
                  onChange={(e) => {
                    if (!e) return;
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password Here"
                  className="w-[393px] h-[40px] rounded-[10px] border-[#ADADAD] block text-black"
                  onChange={(e) => {
                    if (!e) return;
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
              )}
              <button
                className="text-black"
                type="button"
                onClick={() => {
                  setViewPass(!viewPass);
                }}
              >
                VIEW
              </button>
            </div>
            <div>
              <label htmlFor="email" className="block text-black">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your Email Here"
                className="w-[393px] h-[40px] rounded-[10px] border-[#ADADAD] block text-black"
                required
              />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="w-[393px] h-[40px] rounded-[10px] bg-[#32CD32] hover:cursor-pointer block text-white"
              required
            />
          </div>
          {error ? <h1>{error}</h1> : null}
        </form>
      </div>
    </div>
  );
}
