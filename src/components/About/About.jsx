import InfoHeader from "../../utils/InfoHeader";
import devImg from "../../assets/devImg-1.jpg";
import "./style/about.css";
import Button from "../../utils/Button";
const About = () => {
  return (
    <main className="about top">
      <InfoHeader
        image={devImg}
        title="Welcome to Prince Web Dev, Where Innovation Meets Excellence"
        description={
          "Established in 2019, Prince Web Dev has been at the forefront of delivering cutting-edge custom web development solutions. We pride ourselves on our commitment to excellence, crafting tailored digital experiences that resonate with our clients' unique visions and requirements. Over the years, we have built a reputation for being a trusted partner, delivering top-notch services that exceed expectations."
        }
      />
      <section className="aboutContent">
        <p>
          At <strong className="t-text">Prince Web Dev </strong>, we believe in
          the power of innovation and continuous improvement. Our team of
          skilled developers, designers, and digital strategists work tirelessly
          to stay ahead of the curve, leveraging the latest technologies and
          best practices to create dynamic and engaging web solutions.
        </p>
      </section>
      <article className="our-journey wrapper">
        <section className="textWrapper">
          <h2>Our Journey</h2>
          <p>
            Since our inception, we have collaborated with businesses of all
            sizes, from startups to enterprises, across diverse industries. Our
            portfolio showcases a diverse range of projects, each demonstrating
            our commitment to quality, creativity, and functionality. From
            responsive websites and e-commerce platforms to complex web
            applications and enterprise solutions, we have successfully brought
            our clients&apos; ideas to life.
          </p>
          <Button link="/contact?q=Want-to-know-more-our-journey" name="Know More" />
        </section>
        <section className="textWrapper">
          <h2>What Sets Us Apart</h2>
          <p>
            What sets us apart is our relentless pursuit of perfection. We
            don&apos;t just build websites; we create digital experiences that
            captivate audiences and drive results. Our process is collaborative,
            transparent, and client-centric, ensuring that every project is
            delivered on time and within budget.
          </p>
          <Button link="/contact?q=Want-to-Connect" name="Connect With Us" />
        </section>
        <section className="textWrapper">
          <h2>Introducing Our New Online Classes</h2>
          <p>
            Exciting news! As part of our ongoing commitment to empowering
            businesses and individuals with digital expertise, we are thrilled
            to announce the launch of our new online classes. Whether
            you&apos;re looking to enhance your web development skills, dive
            into digital marketing, or explore the world of UX/UI design, our
            courses are designed to equip you with the knowledge and tools
            needed to succeed in today&apos;s digital landscape.
          </p>
          <Button link="/contact?q=Want-to-Enroll-In-Our-Courses" name="Enroll Now" />
        </section>
      </article>
    </main>
  );
};

export default About;
