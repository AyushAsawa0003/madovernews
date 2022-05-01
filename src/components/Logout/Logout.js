import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "259335396790-440sdfknbef80luvuhknl40f4de0l1kk.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
    navigate("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
