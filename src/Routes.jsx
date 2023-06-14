import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProductDetailspage = React.lazy(() => import("pages/ProductDetailspage"));
const Error = React.lazy(() => import("pages/Error"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const Account = React.lazy(() => import("pages/Account"));
const CheckOut = React.lazy(() => import("pages/CheckOut"));
const Cart = React.lazy(() => import("pages/Cart"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const AccountDropdownWithaccount = React.lazy(() =>
  import("pages/AccountDropdownWithaccount")
);
const LogIn = React.lazy(() => import("pages/LogIn"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ECommerceHomePage = React.lazy(() => import("pages/ECommerceHomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ECommerceHomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/accountdropdownwithaccount"
            element={<AccountDropdownWithaccount />}
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="/productdetailspage" element={<ProductDetailspage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
