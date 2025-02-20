import React from "react";
import { useState, useEffect } from "react";

function Home() {
    const [message, setMessage] = useState('Analisando...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Pato detectado!!! 🦆');
    }, 5000);

    return () => clearTimeout(timer);
  }, [])

    return <h1>{message}</h1>
}

export default Home;
