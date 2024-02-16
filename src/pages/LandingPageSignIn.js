import Header from "../components/Header";
import BasketContainer from "../components/BasketContainer";
import People from "../components/People";
import AddYourOwn from "../components/AddYourOwn";
import Testimonials from "../components/Testimonials";
import End from "../components/End";
import Footer from "../components/Footer";
import styles from "./LandingPageSignIn.module.css";

const LandingPageSignIn = () => {
  return (
    <div className="container-fluid">
      <main className={styles.connectButton}>
        <BasketContainer />
        <People />
        <AddYourOwn />
        <Testimonials />
      </main>
      <End />
      <Footer />
    </div>
  );
};

export default LandingPageSignIn;