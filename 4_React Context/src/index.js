import React from "react"
import ReactDOM from 'react-dom/client';
import App1 from "./Practice1/App1";
import { ThemeContextProvider } from "./Practice1/ThemeContext"
// import App2 from "./Practice2/App2"
// import UserContext from "./Practice2/UserContext"
// import App3 from "./Practice3/App3";
// import {ChallengeContextProvider} from "./Practice3/UserContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App1 />
    </ThemeContextProvider>

    {/* <UserContext.Provider value="EndLess">
      <App2 />
    </UserContext.Provider> */}

    {/* <ChallengeContextProvider>
      <App3 />
    </ChallengeContextProvider> */}

  </React.StrictMode>
);
