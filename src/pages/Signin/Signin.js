import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      userError
      token
    }
  }
`;

const Signin = () => {
  const [signin, { data, loading, error }] = useMutation(LOGIN);
  const [userError, setUserError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    signin({
      variables: data,
    });
    console.log("data: ", data);
  };

  useEffect(() => {
    if (data && data?.signin?.token) {
      localStorage.setItem("signInToken", data?.signin?.token);
    }

    if (data && data?.signin?.userError) {
      setUserError(data?.signup?.token);
    }
  }, [data]);
  console.log("tokennnn", data);
  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <label htmlFor="">Your Email</label>
        <input name="email" type="email" />
        <label htmlFor="">Your Password</label>
        <input name="password" type="password" />

        <button className="rounded-full p-2 bg-white text-black">Login</button>
      </form>
    </div>
  );
};

export default Signin;
