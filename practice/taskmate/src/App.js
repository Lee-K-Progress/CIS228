// import React from 'react';
import './App.css';

export default function App() {
    //return React.createElement("h1", {className: "active"}, "Welcome!")
    const greeting = "Bienvenidos!"

    return (
      <>
        <h1 className='active'>{greeting}</h1>
        <p>texto pequeno</p>
      </>
    )
  }
