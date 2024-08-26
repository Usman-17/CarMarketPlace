import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AddListingPage from "./pages/AddListing/AddListingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-listing" element={<AddListingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
