import { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./component/NavBar";
import HomePage from "./pages/homepage/HomePage";
import Company from "./pages/companyPage/Company";
import Contact from "./pages/contact/Contact";
import Career from "./pages/Career/Career";
import UserDetailContext from "./context/UserDetailContext";

import Layout from "./component/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Residencies from "./component/Residencies/Residencies";
import Properties from "./pages/Store/Properties";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Store/Property";
import ConfiguratorPage from "./pages/ConfiguratorPage/ConfiguratorPage";

function App() {
  const [userDetails, setUserDetails] = useState({
    bookings: [],
    token: null,
  });

  // Step 1: Create a QueryClient instance
  const queryClient = new QueryClient();

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/model" element={<ConfiguratorPage />} />

              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":propertyId" element={<Property />} />{" "}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
