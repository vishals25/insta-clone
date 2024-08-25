import PageLayout from "./Layout/PageLayout/PageLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </PageLayout>
  );
}

export default App;
