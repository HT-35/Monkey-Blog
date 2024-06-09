import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import SingUpPage from "./pages/SingUpPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/sign-up" Component={SingUpPage}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
