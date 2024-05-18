import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "./helper/Loader";
import { lazy, Suspense } from "react";
const RootLayout = lazy(() => import("./helper/RootLayout"));
const About = lazy(() => import("./components/About/About"));
const Service = lazy(() => import("./components/Service/Service"));
const Error = lazy(() => import("./helper/Error"));
const Home = lazy(() => import("./components/Home/Home"));
const Connect = lazy(() => import("./components/Connect/Connect"));
const CourseDetails = lazy(() => import("./components/OnlineClass/CourseDetails"));
const PageNotFound = lazy(() => import("./helper/PagenotFound"));
export const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Connect />} />
        <Route
          path="/online-web-development-course"
          element={<CourseDetails />}
        />
        <Route
          path="*"
          element={<PageNotFound pathData={window.location.href} />}
        />
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
