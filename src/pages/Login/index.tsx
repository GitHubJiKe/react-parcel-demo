import React, { useRef, useState } from "react";

const Login: React.FC = () => {
  const nameRef = useRef<any>();
  const pwdRef = useRef<any>();
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    const name = nameRef.current.value;
    const pwd = pwdRef.current.value;

    if (!name) {
      return alert("name cannot be empty");
    }

    if (!pwd) {
      return alert("password cannot be empty");
    }

    setLoading(true);

    try {
      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ name, pwd }),
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    setLoading(false);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <input ref={nameRef} placeholder="please enter your name" />
      <input
        ref={pwdRef}
        placeholder="please enter you password"
        type="password"
      />
      <button onClick={onLogin}>login</button>
    </div>
  );
};

export default Login;
