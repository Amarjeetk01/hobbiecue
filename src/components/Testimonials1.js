import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Testimonials1.module.css";

const Testimonials1 = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.areYouA}>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className={styles.addYourOwn}>Add your own</div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.addNewWrapper}>
          <div className={styles.addNew}>Add new</div>
        </div>
      </div>
      <div className={styles.testimonials1}>
        <div className={styles.groupParent}>
          <div className={styles.group} />
          <div className={styles.ourServices}>
            <div className={styles.addParent}>
              <img className={styles.addIcon1} alt="" src="/add-1.svg" />
              <h2 className={styles.addYourOwn1}>Add your own</h2>
            </div>
            <div className={styles.areYouA1}>
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <Button className={styles.postaQuery} variant="outline-primary">
              Add new
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
