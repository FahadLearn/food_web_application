import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home-page";
import About from "./assets/pages/about page";
import Contact from "./assets/pages/contact us page";
import Subscription from "./assets/pages/Subscription-page";
import Sign from "./assets/pages/sign-page";
import SignIn from "./assets/pages/signInpage";
import RiderSignup from "./assets/pages/rider-signuppage";
import SignUp from "./assets/pages/signup-page";
// import { Admin_Dashoard } from "./assets/pages/adminDahboad";
// import UploadImage from "./assets/pages/image_upload";
import FoodDeliveryDashboard from "./assets/pages/Restaurant Dashboard";
import MenuManagement from "./assets/pages/menu managment";
import AddItem from "./assets/pages/add item";
import Subscription_Signup from "./assets/pages/subscription signup";
import Cart from "./assets/pages/cart";
import Checkout from "./assets/pages/checkout page";
// import Menu from "./assets/components/menu";
import UserProfile from "./assets/pages/userProfile";

import MenuPage from "./assets/pages/menupage";
import OrdersManagement from "./assets/pages/orders managament";
import RiderDashboard from "./assets/pages/riderDashbaord";
import RiderProfile from "./assets/pages/riderprofile";
import CustomersManagement from "./assets/pages/customermanagement";
import SubscriptionManagement from "./assets/pages/subscription managment";
import BrandPage from "./assets/pages/brandpage";
import Cuisine from "./assets/pages/cuisine page";
import ItemDescription from "./assets/pages/item description";
import RestaurantSignup from "./assets/pages/ResturantSignup page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Sign_IN" element={<SignIn />} />
          <Route path="/Sign_UP" element={<SignUp />} />
          <Route path="/Rider_Sign_up" element={<RiderSignup />} />
          <Route
            path="/restaurantDashboard"
            element={<FoodDeliveryDashboard />}
          />
          <Route path="/menu_management" element={<MenuManagement />} />
          <Route path="/add_item" element={<AddItem />} />
          <Route
            path="/subscription_signup"
            element={<Subscription_Signup />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkoutpage" element={<Checkout />} />
          <Route path="/menu_page" element={<MenuPage />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/ordersManagement" element={<OrdersManagement />} />
          <Route path="/riderdashbaord" element={<RiderDashboard />} />
          <Route path="/riderprofile" element={<RiderProfile />} />
          <Route path="/customer_managment" element={<CustomersManagement />} />

          <Route
            path="/subscription_managment"
            element={<SubscriptionManagement />}
          />
          <Route path="/brandpage" element={<BrandPage />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/itemdesc" element={<ItemDescription />} />
          <Route path="/restaurantsignup" element={<RestaurantSignup />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
