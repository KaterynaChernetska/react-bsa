import { FC, lazy, Suspense } from "react";
import { PageRoutes } from "./enums/routes.enum";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Spinner } from "./components/Spinner";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const BookingsPage = lazy(() => import("./pages/BookingsPage/BookingsPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const TripPage = lazy(() => import("./pages/TripPage/TripPage"));

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={PageRoutes.Index} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={PageRoutes.Bookings} element={<BookingsPage />} />
            <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
            <Route path={PageRoutes.SignIn} element={<SignInPage />} />
            <Route path={PageRoutes.TripId} element={<TripPage />} />
            <Route path="*" element={<Navigate to={PageRoutes.Index} />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
