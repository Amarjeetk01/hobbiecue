import { Button } from "react-bootstrap";
import styles from "./AddYourOwn.module.css";

const AddYourOwn = () => {
  return (
    <section className={styles.addYourOwn}>
      <div className={styles.heading}>
        <img className={styles.addIcon} alt="" src="/add-1.svg" />
        <h2 className={styles.title}>Add your own</h2>
      </div>
      <div className={styles.description}>
        Are you a teacher or expert? Do you sell or rent out equipment, venue or
        event tickets? Or, you know someone who should be on hobbycue? Go ahead
        and Add your Own page
      </div>
      <div>
        <Button className={styles.postaQuery} variant="outline-primary">
          Add new
        </Button>
      </div>
    </section>
  );
};

export default AddYourOwn;
