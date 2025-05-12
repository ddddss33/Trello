import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import Board from "./components/Board";
import store from "./store/store";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("user");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Provider store={store}>
      <Header />
      <Board />
    </Provider>
  );
}

export default App;
