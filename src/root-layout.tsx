import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
   return (
      <>
         <Navbar />
         <main className="py-6">
            <Outlet />
         </main>
      </>
   );
};

export default RootLayout;
