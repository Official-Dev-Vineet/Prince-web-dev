import { useEffect } from "react";
import Banner from "../../utils/Banner";
import Marquee from "../../utils/Marquee";
import HomeProject from "./HomeProject";
import { getCookie, setCookie } from "../../helper/helper";
const Home = () => {
  useEffect(() => {
    if (!getCookie("randomUser")) {
      fetch("https://dev-vineet.online/api/newUser.php", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          randomUser: getCookie("randomUser"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          data.code === 200 ? setCookie("randomUser", data.randomUser,7) : null;
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <main className="top">
      <Banner />
      <Marquee />
      <HomeProject />
    </main>
  );
};

export default Home;
