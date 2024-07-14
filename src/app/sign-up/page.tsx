"use client";
import { ChangeEvent, useState } from "react";
import * as request from "@/api/user";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [wx, setWx] = useState("");

  const handleSignUp = async () => {
    const params = { email, username, password, confirmPassword, phone, wx };
    const res = await request.signUp(params);
    console.log(res);
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
        用户名
        <input
          type="text"
          value={username}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
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
      <div>
        确认密码
        <input
          type="text"
          value={confirmPassword}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
      </div>
      <div>
        电话
        <input
          type="text"
          value={phone}
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />
      </div>
      <div>
        微信
        <input
          type="text"
          value={wx}
          onInput={(e: ChangeEvent<HTMLInputElement>) => setWx(e.target.value)}
        />
      </div>
      <button onClick={handleSignUp}>注册</button>
    </div>
  );
};

export default SignUp;
