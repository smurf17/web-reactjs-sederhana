import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorSection, tutorList } from "../data/TutorSection";
import { partnerSection, partnerList } from "../data/PartnerSection";
import { contactSection } from "../data/ContactSection";
import parse from "html-react-parser";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wraper">
        <section id="home">
          <img src={homeSection.image} alt="" />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorSection.content)}</div>
            <Tutors tutorList={tutorList} />
          </div>
        </section>
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnerSection.content)}</div>
            <Partners partnerList={partnerList} />
          </div>
        </section>
        <Contact contactSection={contactSection} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
