import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    async function fetchPasswords() {
      const response = await fetch("https://google.com/passwords");
      const passwordsResp = await response.json();
      setPasswords(passwordsResp);
    }

    fetchPasswords();
  }, []);

  return (
    <>
      {passwords &&
        passwords.map((data) => (
          <div>
            {data.user} - {data.password}
          </div>
        ))}
    </>
  );
}

export default App;
