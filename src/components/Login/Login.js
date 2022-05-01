import React from "react";

import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
// refresh token
import { refreshTokenSetup } from "../Login/Utils/RefreshToken";

const clientId =
  "259335396790-440sdfknbef80luvuhknl40f4de0l1kk.apps.googleusercontent.com";

function Login({ setUser }) {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    alert(`Logged in successfully welcome ${res.profileObj.name}.😍`);
    refreshTokenSetup(res);
    setUser(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.😢`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
