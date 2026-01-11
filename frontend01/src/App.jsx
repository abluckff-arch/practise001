import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "../srcadmin/PagesAdmin/Login";
import Register from "../srcadmin/PagesAdmin/Register";
import YearlyPackages from "./pages/OurPackages";
import Details from "./pages/Details";
import AdminDashboard from "../srcadmin/PagesAdmin/DashBoard";
import ThankYou from "./pages/ThankYou";
import Products from "../srcadmin/PagesAdmin/AdminProducts";
import Customers from "../srcadmin/PagesAdmin/AdminCustomers";
import Orders from "../srcadmin/PagesAdmin/AdminOrders";
import Settings from "../srcadmin/PagesAdmin/AdminSetting";
import Profile from "../srcadmin/PagesAdmin/Profile";
import AddPackages from "../srcadmin/PagesAdmin/AddPackages";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "../srcadmin/routes/ProtectedRoute";
import PublicRoute from "../srcadmin/routes/PublicRoute";
import TvPackages from "./pages/TvPackages";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourpackages" element={<YearlyPackages />} />
        <Route path="/tvpackages" element={<TvPackages/>}/>
        <Route path="/thankyou" element={<ThankYou />} /> 
        <Route path="/order" element={<Details />} />
        
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/addpackages" element={<AddPackages />}/>
        <Route path="/editpackage/:id" element={<AddPackages />}/>
        <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
