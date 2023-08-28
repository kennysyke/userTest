import UserPage from "./components/userPage";
import "./App.css";
import { useGetUserQuery } from "./redux/userApi";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
  const { data: user, isLoading } = useGetUserQuery();

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (isLoading) {
    return <h1> loading</h1>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserPage user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
