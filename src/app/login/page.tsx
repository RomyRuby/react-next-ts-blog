"use client";
import { ChangeEvent, useState } from "react";
import * as request from "@/api/user";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const params = { email, password };
    const res = await request.login(params);
    Cookies.set("token", res.data.token);
  };

  return (
    <div style={{ marginTop: "300px" }}>
      <div>
        邮箱
        <input
          type="text"
          value={email}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <div>
        密码
        <input
          type="text"
          value={password}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <button onClick={handleLogin}>登陆</button>
    </div>
  );
};

export default Login;
