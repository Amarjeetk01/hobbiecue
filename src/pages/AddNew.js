import FindTeacherCoach from "../components/FindTeacherCoach";
import ListingFormContainer from "../components/ListingFormContainer";
import styles from "./AddNew.module.css";

const AddNew = () => {
  return (
    <div className={`container-fluid`}>
      <FindTeacherCoach className={`${styles.landingPageSignIn} position-fixed w-100`} />
      <main className={`${styles.rectangleParent} ${styles.mainContainer}`}>
      <ListingFormContainer/>
      </main>
    </div>
  );
};

export default AddNew;
