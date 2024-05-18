import InfoHeader from "../../utils/InfoHeader";
import devImg3 from "../../assets/devImg-3.avif";
import devImg4 from "../../assets/devImg-4.webp";
import devImg5 from "../../assets/devImg-5.avif";
import "./style/service.css";
import Button from "../../utils/Button";

const Service = () => {
  const images = [
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=react&animation=spin&svgfill=15d8fe",
      name: "React js Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=babel&svgfill=8ed5fa",
      name: "babel js Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=tailwindcss&svgfill=b8c2cc",
      name: "Tailwind Css website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=node.js&svgfill=659b60",
      name: "Node js website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=html5&svgfill=f06629",
      name: "HTML5 Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=css3&svgfill=028dd1",
      name: "CSS3 Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=javascript&svgfill=f6df1c",
      name: "Javascript Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=php&svgfill=AEB2D5",
      name: "PHP Web Development",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=mysql&svgfill=306998",
      name: "Mysql Database Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=bootstrap&svgfill=cd6799",
      name: "Bootstrap Website",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=github",
      name: "Github Version Control System",
    },
    {
      img: "https://readme-components.vercel.app/api?component=logo&fill=black&logo=python&svgfill=306998",
      name: "Python Web Development",
    },
  ];
  const ourApro = [
    {
      name: "Scalable Solutions",
      des: "Our custom web solutions are designed to grow with your business, ensuring scalability and flexibility.",
    },
    {
      name: "Responsive Design",
      des: "We prioritize responsive design principles, ensuring optimal user experience across devices and screen sizes.",
    },
    {
      name: "Performance Optimization",
      des: "Our development process includes performance optimization techniques to enhance speed and efficiency.",
    },
    {
      name: "Security Measures",
      des: "We implement robust security measures to protect your data and user information from potential threats.",
    },
    {
      name: "Post-launch Support",
      des: "Our commitment doesn't end at project delivery. We provide ongoing support and maintenance to keep your website running smoothly.",
    },
  ];
  return (
    <main className="service top">
      <InfoHeader
        title={"Our Services : MERN Development & Core PHP and MySQL"}
        image={devImg3}
        description={
          "At Prince Web Dev, we offer comprehensive custom web development services tailored to meet your unique business needs. With expertise in MERN (MongoDB, Express.js, React.js, Node.js) development, as well as Core PHP and MySQL, we have the skills and experience to bring your digital vision to life."
        }
      />
      <section className="our-service">
        <h2>Our Criterion Services </h2>
        <p>
          At <strong>Prince Web Dev</strong>, we are committed to delivering
          exceptional web development solutions that exceed expectations. Our
          team of experienced developers, designers, and digital strategists
          work together to create custom web solutions that are tailored to your
          unique needs. Whether you need a simple landing page or a complex
          e-commerce platform, we have the expertise and experience to bring
          your vision to life.
        </p>
      </section>
      <section className="technoLogy">
        <div className="imageContainer">
          {images.map((image) => {
            return (
              <div key={image.img} className="img">
                <img src={image.img} alt={image.name} key={image.img} />
              </div>
            );
          })}
        </div>
      </section>
      <section className="service-area">
        <div className="serviceData">
          <InfoHeader
            image={devImg4}
            title={"MERN Development"}
            description={
              "Our team of seasoned developers specializes in MERN stack development, leveraging the power of MongoDB for flexible data storage, Express.js for robust server-side development, React.js for dynamic user interfaces, and Node.js for scalable backend solutions. Whether you need a single-page application, a complex web portal, or a scalable e-commerce platform, we have the expertise to deliver exceptional results using the MERN stack."
            }
          />
          <Button name={"start your project "} link={"/contact"} />
        </div>
        <div className="serviceData">
          <InfoHeader
            image={devImg5}
            title={"Core PHP and MySQL"}
            description={
              "For projects requiring traditional web development solutions, we excel in Core PHP and MySQL development. PHP remains a versatile and powerful server-side scripting language, while MySQL provides a reliable and efficient database management system. From dynamic websites to custom web applications, our Core PHP and MySQL development services ensure seamless functionality, performance, and security for your online presence."
            }
          />
          <Button name={"start your project"} link={"/contact"} />
        </div>
        <article className="ourApproach wrapper">
          <h2>Our Approach</h2>
          <p>
            When you choose Prince Web Dev for your custom web development
            needs, you can expect a collaborative and transparent approach. Our
            process begins with a thorough understanding of your requirements,
            goals, and target audience. We then create a tailored development
            plan, keeping you involved at every stage of the project.
          </p>
          <ul>
            {ourApro.map((apro) => {
              return (
                <li key={apro.name}>
                  <h3>{apro.name}</h3>
                  <p>{apro.des}</p>
                  <Button name={"Start now"} link={"/contact?q=" + apro.name} />
                </li>
              );
            })}
          </ul>
        </article>
         
      </section>
    </main>
  );
};

export default Service;
