import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../src/Pages/Login";
import SignUp from "./Pages/SignUp";
import VerifyEmail from "./Pages/VerifyEmail";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import Dashboard from "./Components/Dashboard/main/Dashboard";
import Index from "./Components/Dashboard/main";
import Transactions from "./Components/Dashboard/main/Transactions";
import Users from "./Components/Dashboard/main/Users/Users";
import Products from "./Components/Dashboard/main/Products/Products";
import Settings from "./Components/Dashboard/Settings/Settings";
import AddProducts from "./Components/Dashboard/main/Products/AddProducts";
import UserDashboard from "./Components/UserDashboard/main/UserDashboard";
import OrderHistory from "./Components/UserDashboard/main/OrderHistory";
import UserSettings from "./Components/UserDashboard/Settings/UserSettings"
import UserCart from "./Components/UserDashboard/main/UserCart";
import UserProfile from "./Components/UserDashboard/main/UserProfile";

function App() {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const UserRole = user?.role;
  console.log("auht wala user ",UserRole);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>
        <Route path="/productpage" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>

        <Route path="/dashboard" element={ UserRole === 'Admin' ? <Dashboard /> : <Homepage/> }>
          <Route index element={<Index />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/addproducts" element={<AddProducts />} />
          <Route path="/dashboard/products" element={<Products />} />
        </Route>

        <Route path = "/userdashboard" element={UserRole==="User"? <UserDashboard/> :<Homepage/>}>
         <Route index element={<UserProfile/>}></Route>
         <Route path="/userdashboard/orderhistory" element={<OrderHistory/>}></Route>
         <Route path="/userdashboard/usersettings" element={<UserSettings/>}></Route>
         <Route path="/userdashboard/usercart" element={<UserCart/>}></Route>
         <Route path="/userdashboard/userprofile" element={<UserProfile/>}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
