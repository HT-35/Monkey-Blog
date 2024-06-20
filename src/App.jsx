import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import SingUpPage from "pages/SingUpPage";
import SignInPgae from "pages/SignInPgae";
import HomePage from "pages/HomePage";

function App() {
  return (
    // context firebase authen
    <AuthProvider>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/sign-up" Component={SingUpPage}></Route>
        <Route path="/sign-in" Component={SignInPgae}></Route>

        <Route
          path="/Blog"
          element={
            <>
              <h1>Blog</h1>
            </>
          }
        ></Route>

        <Route
          path="/Contact"
          element={
            <>
              <h1>Contact</h1>
            </>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
