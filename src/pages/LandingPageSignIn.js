import FindTeacherCoach from "../components/FindTeacherCoach";
import BasketContainer from "../components/BasketContainer";
import People from "../components/People";
import Testimonials1 from "../components/Testimonials1";
import Testimonials from "../components/Testimonials";
import End from "../components/End";
import Footer from "../components/Footer";
import styles from "./LandingPageSignIn.module.css";

const LandingPageSignIn = () => {
  return (
    <div className="container-fluid">
      <FindTeacherCoach />
      <main className={styles.connectButton}>
        <BasketContainer />
        <People />
        <Testimonials1 />
        <Testimonials />
      </main>
      <End />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn;