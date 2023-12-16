// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";

import { useAuth } from "./AuthProvider";

const BasicDetail = () => {
    //  const { username, email } = useContext(AuthContext);
     const { auth, setAuth } = useAuth();
     const handleLogout = () => {
        setAuth({});
     }
  return (
    <div>
        <h2>Username: {auth.username}</h2>
        <h2>Email: {auth.email}</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default BasicDetail;