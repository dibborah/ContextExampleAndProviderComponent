import { useAuth } from "./AuthProvider";
import BasicDetail from "./BasicDetail";

const UserProfile = () => {
    const { auth, setAuth } = useAuth();
    const handleLogin = () => {
        setAuth({username:"dib", email:"dib@123.com"})
    }
  return (
    <div>
        <h1>User Profile</h1>
        {auth.username ? <BasicDetail/> : <button onClick={handleLogin}>login</button>}
        {/* <BasicDetail/> */}
    </div>
  )
}

export default UserProfile;