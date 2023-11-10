import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-23 min-h-[200px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-15 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am 2.9 years experienced JavaScript Full Stack Developer with
        expertise in both front-end and back-end development. Proficient in a
        variety of JavaScript frameworks and libraries, I design responsive web
        applications and robust APIs. With strong problem-solving skills, I
        collaborate effectively in cross-functional teams, ensuring high code
        quality. My passion for staying updated with the latest technologies
        drives my commitment to delivering high-quality software solutions for
        exceptional user experiences
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
