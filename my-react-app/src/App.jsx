import React from 'react';
import { ToastContainer } from 'react-toastify';
import NavBarLogin from './Components/Uitily/NavBarLogin';
import Footer from './Components/Uitily/Footer';
import HomePage from './Page/Home/HomePage';
import LoginPage from './Page/Auth/LoginPage';
import RegisterPage from './Page/Auth/RegisterPage';
import AllCategoryPage from './Page/Category/AllCategoryPage';
import AllBrandPage from './Page/Brand/AllBrandPage';
import ShopProductsPage from './Page/Products/ShopProductsPage';
import ProductDetalisPage from './Page/Products/ProductDetalisPage';
import CartPage from './Page/Cart/CartPage';
import ChoosePayMethodPage from './Page/Checkout/ChoosePayMethodPage';
import AdminAllProductsPage from './Page/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './Page/Admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './Page/Admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './Page/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Page/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './Page/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './Page/Admin/AdminAddProductsPage';
import UserAllOrdersPage from './Page/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './Page/User/UserFavoriteProductsPage';
import UserAllAddresPage from './Page/User/UserAllAddresPage';
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserProfilePage from './Page/User/UserProfilePage';
import AdminEditProductsPage from './Page/Admin/AdminEditProductsPage';
import ForgetPasswordPage from './Page/Auth/ForgetPasswordPage';
import VerifyPasswordPage from './Page/Auth/VerifyPasswordPage';
import ResetPasswordPage from './Page/Auth/ResetPasswordPage';
import AdminAddCouponPage from './Page/Admin/AdminAddCouponPage';
import AdminEditCouponPage from './Page/Admin/AdminEditCouponPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font">
      <ToastContainer />
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/all-brand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/pay-method" element={<ChoosePayMethodPage />} />
          <Route path="/admin/all-products" element={<AdminAllProductsPage />} />
          <Route path="/admin/all-orders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/add-brand" element={<AdminAddBrandPage />} />
          <Route path="/admin/add-category" element={<AdminAddCategoryPage />} />
          <Route path="/admin/add-subcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/add-product" element={<AdminAddProductsPage />} />
          <Route path="/admin/add-coupon" element={<AdminAddCouponPage />} />
          <Route path="/admin/edit-coupon/:id" element={<AdminEditCouponPage />} />
          <Route path="/user/all-orders" element={<User AllOrdersPage />} />
          <Route path="/user/favorite-products" element={<User FavoriteProductsPage />} />
          <Route path="/user/addresses" element={<User AllAddressPage />} />
          <Route path="/user/add-address" element={<User AddAddressPage />} />
          <Route path="/user/edit-address/:id" element={<User EditAddressPage />} />
          <Route path="/user/profile" element={<User ProfilePage />} />
          <Route path="/admin/edit-product/:id" element={<AdminEditProductsPage />} />
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;