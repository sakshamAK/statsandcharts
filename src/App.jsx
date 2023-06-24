import { Route, Routes } from "react-router-dom";
import { Dashboard, Landing } from "./pages";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Landing setProfile={setProfile} />} />
      <Route path="/dashboard" element={<Dashboard profile={profile} setProfile = {setProfile} />} />
    </Routes>
  )
}
export default App;