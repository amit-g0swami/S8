import React from "react";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes";
import Navigation from "./components/header";
import Footer from "./components/footer";
import {useDispatch} from "react-redux";
import {setIsAuthenticated, setToken} from "./context/login";
import {SnackbarProvider} from "notistack";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setIsAuthenticated(true));
      dispatch(setToken(token));
    }
  }, []);
  return (
    <SnackbarProvider max={3} className="flex w-full h-full">
      <BrowserRouter>
        <Navigation />
        <Router />
        <Footer />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
