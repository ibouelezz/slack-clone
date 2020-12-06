import "./App.css";
import React from "react";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* Header */}
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>

              {/* React-Router -> Chat screen */}
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
