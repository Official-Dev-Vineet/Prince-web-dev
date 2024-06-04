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
const CourseDetails = lazy(() =>
  import("./components/OnlineClass/CourseDetails")
);
const ImageResizer = lazy(() =>
  import("./components/ImageServices/ImageResizer")
);
const Navigator = lazy(() => import("./helper/Navigator"));
const User = lazy(() => import("./User/User"));
const Login = lazy(() => import("./User/Login"));
const Dashboard = lazy(() => import("./User/Dashboard"));
const Resizer = lazy(() => import("./components/ImageServices/Resizer"));
const PageNotFound = lazy(() => import("./helper/PagenotFound"));
const SiteMap = lazy(() => import("./helper/SiteMap"));
export const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Connect />} />
        <Route
          path="/online-course"
          element={<CourseDetails />}
        />
        <Route
          path="/portfolio"
          element={
            <Navigator link="https://official-dev-vineet.github.io/portfolio-new/" />
          }
        />
        <Route
          path="/project"
          element={<Navigator link="https://github.com/official-dev-vineet" />}
        />
        <Route
          path="/telegram"
          element={<Navigator link="https://t.me/prince_web" />}
        />
        <Route path="/account" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/image-resizer" element={<ImageResizer />} />
        <Route path="/image-resizer-free" element={<Resizer />} />
        <Route path="/image-convertor" element={<Resizer />} />
        <Route path="/image-compression" element={<Resizer />} />
        <Route
          path="/sitemap"
          element={
            <SiteMap
              routes={[
                "about",
                "services",
                "contact",
                "online-course",
                "portfolio",
                "project",
                "telegram",
                "account",
                "login",
                "dashboard",
                "image-resizer",
                "image-resizer-free",
                "image-convertor",
                "image-compression",
              ]}
            />
          }
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
