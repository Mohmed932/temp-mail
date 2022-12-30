import React, { lazy, Suspense, useRef, useState } from "react";
import "./App.css";

const Content = lazy(() => import("./components/Content/Content"));
const Mail = lazy(() => import("./components/Mail/Mail"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));

const App = () => {
  const [data, setdata] = useState([]);
  const [all, setall] = useState();
  const [email, setemail] = useState();
  const [show, setshow] = useState(false);
  const create = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c11d223f3amsh3b4b6ec91a12073p1b9c73jsn8c5a8d4b931e",
        "X-RapidAPI-Host": "temp-mail44.p.rapidapi.com",
      },
      body: '{"key1":"value","key2":"value"}',
    };
    try {
      const result = async () => {
        const request = await fetch(
          "https://temp-mail44.p.rapidapi.com/api/v3/email/new",
          options
        );
        const response = await request.json();
        return setemail(response.email);
      };
      result();
    } catch (error) {
      console.log(error);
    }
  };
  const read = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c11d223f3amsh3b4b6ec91a12073p1b9c73jsn8c5a8d4b931e",
        "X-RapidAPI-Host": "temp-mail44.p.rapidapi.com",
      },
    };
    try {
      const result = async () => {
        const request = await fetch(
          `https://temp-mail44.p.rapidapi.com/api/v3/email/${email}
/messages`,
          options
        );
        const response = await request.json();
        return setdata(response);
      };
      result();
    } catch (error) {
      console.log(error);
    }
  };
  window.onload = () => {
    create();
  };
  const detales = (i) => {
    setall(i);
    setshow(!show);
  };
  const handelRefresh = () => {
    read();
  };
  const handelCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => console.log("good"))
      .catch("bad");
  };
  return (
    <Suspense fallback={<h1 className="loading">loading...</h1>}>
      <div className="App">
        {show ? (
          <span className="back" onClick={() => setshow(!show)}>
            <i class="fa-solid fa-backward"></i>
          </span>
        ) : (
          ""
        )}
        <Navbar
          handelRefresh={handelRefresh}
          handelCopy={handelCopy}
          email={email}
        />
        {show ? <Mail all={all} /> : <Content detales={detales} data={data} />}
      </div>
    </Suspense>
  );
};

export default App;
