import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from './root-layout';
import DashboardLayout from './pages/private/system/dashboard/layout';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const HomePage = lazy(() => import('./pages/public/others/HomePage'));
const AboutPage = lazy(() => import('./pages/public/others/AboutPage'));
const FormPage = lazy(() => import('./pages/public/others/FormPage'));
const Dashboard = lazy(
  () => import('./pages/private/system/dashboard/Dashboard')
);
const Analytics = lazy(
  () => import('./pages/private/system/dashboard/Analytics')
);

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
