import React, { useState, useEffect } from "react";
import './test.scss'

const test = ({ speed, msg }) => {

  const Typer = ({ speed = 200, children = " Hello World." }) => 
{
  const [idx, setidx] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setidx((v) => v + 1), speed);
    return () => window.clearInterval(timer);
  });
  return (<div className = "text">{children.substr(0, idx)}</div>);
};


return (

  <div className = "main">
    <Typer speed={speed} children={msg}></Typer>
  </div>
 );
};


export default test;