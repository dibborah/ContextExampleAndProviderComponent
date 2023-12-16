import Dummy from "./Dummy";
import UserProfile from "./UserProfile";

const App = () => {
  // children 
  // context

  // user ne login kiya to user Authenticate ho gaya
  // User Security checking gate se pass ho gaya

  // Auth infomation Authentication information wo pure Application ko milni chahiye
  // Taki aap decide kar pao :
  // ki user agar login hain to kiya karna chahiye aur user agar logout hain(login nehi hain) to kya karna chahiye

  return (
    <div>
      <h1>App</h1>
      {/* <Dummy>Hi I am Dummy code</Dummy> */}
      <UserProfile/>
    </div>
  )
}

export default App
