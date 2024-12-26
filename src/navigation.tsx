import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./root-layout";
import DashboardLayout from "./pages/dashboard/layout";
import { lazy, Suspense } from "react";
import { Spinner } from "@nextui-org/react";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Analytics = lazy(() => import("./pages/dashboard/Analytics"));

const Navigation = () => {
   return (
      <BrowserRouter>
         <Suspense fallback={<Spinner />}>
            <Routes>
               <Route element={<RootLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="forms" element={<FormPage />} />
                  <Route path="about" element={<AboutPage />} />

                  <Route path="/dashboard" element={<DashboardLayout />}>
                     <Route index element={<Dashboard />} />
                     <Route path="analytics" element={<Analytics />} />
                  </Route>
               </Route>

               {/* <Route element={<AuthRootLayout />}>
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts">
               <Route index element={<ConcertsHome />} />
               <Route path=":city" element={<City />} />
               <Route path="trending" element={<Trending />} />
            </Route> */}
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
};

export default Navigation;
