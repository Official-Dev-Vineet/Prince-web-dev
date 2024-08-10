import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "./helper/Loader";
import { lazy, Suspense } from "react";
export const App = () => {
  const About = lazy(() => import("./components/About/About"));
  const Service = lazy(() => import("./components/Service/Service"));
  const Home = lazy(() => import("./components/Home/Home"));
  const Connect = lazy(() => import("./components/Connect/Connect"));
  const ErrorPage = lazy(() => import("./helper/Error"));
  const CourseDetails = lazy(() =>
    import("./components/OnlineClass/CourseDetails")
  );
  const ImageResizer = lazy(() =>
    import("./components/ImageServices/ImageResizer")
  );
  const RootLayOut= lazy(() => import("./helper/RootLayout"))
  const Navigator = lazy(() => import("./helper/Navigator"));
  const User = lazy(() => import("./User/User"));
  const Login = lazy(() => import("./User/Login"));
  const Dashboard = lazy(() => import("./User/Dashboard"));
  const Resizer = lazy(() => import("./components/ImageServices/Resizer"));
  const PageNotFound = lazy(() => import("./helper/PagenotFound"));
  const SiteMap = lazy(() => import("./helper/SiteMap"));
  const ImageCrop = lazy(() => import("./components/ImageServices/ImageCrop"));
  const ImageEditor = lazy(() =>
    import("./components/ImageServices/ImageEditor")
  );
  const CreateBlogs = lazy(() => import("./Blogs/CreateBlogs"));
  const Blogs = lazy(() => import("./Blogs/Blogs"));
  const BlogReader = lazy(() => import("./Blogs/BlogReader"));
  const Tools = lazy(() => import("./Tools/Tools"));
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Connect />} />
        <Route path="/online-course" element={<CourseDetails />} />
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
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:title" element={<BlogReader />} />
        <Route path="/createBlogs" element={<CreateBlogs />} />
        <Route path="/image-resizer" element={<ImageResizer />} />
        <Route path="/image-resizer-free" element={<Resizer />} />
        <Route path="/image-convertor" element={<Resizer />} />
        <Route path="/image-compression" element={<Resizer />} />
        <Route path="/image-crop" element={<ImageCrop />} />
        <Route path="/image-editor" element={<ImageEditor />} />
        <Route path="/tools" element={<Tools />} />
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
                "image-crop",
                "image-editor",
                "blog",
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
