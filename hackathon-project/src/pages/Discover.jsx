import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Discovery() {
  const location = useLocation();

  const id = location.state && location.state.id;

  return (
    <div className="ml-64">
      <h1> Hey {id} </h1>
      <div>Homepage</div>
      <div>Description of application</div>
    </div>
  );
}

export default Discovery;
