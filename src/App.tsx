import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Loader from "./components/Loader";
import { Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

// Admin Routes Importing
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const Discount = lazy(() => import("./pages/admin/Discount"));
const BarCharts = lazy(() => import("./pages/admin/charts/barchart"));
const LineCharts = lazy(() => import("./pages/admin/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));
// management
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/TransactionManagement")
);
// apps
const Coupon = lazy(() => import("./pages/admin/apps/Coupon"));
const StopWatch = lazy(() => import("./pages/admin/apps/StopWatch"));
const Toss = lazy(() => import("./pages/admin/apps/Toss"));
const App = () => {
  return (
    <Router>
      {/* Headers */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit Dashboard</button>
              </Link>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* admins */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/discount" element={<Discount />} />
          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          {/* Apps */}
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
