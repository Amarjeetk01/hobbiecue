import { Button } from "react-bootstrap";
import styles from "./ListingFormContainer.module.css";

const ListingFormContainer = ({ iconSrc, title, description, buttonText="",customeCss }) => {
  return (
      <div className={`${styles.frame} ${customeCss}`}>
      
        <div className={styles.heading}>
          <img
            className={styles.featureIcon}
            loading="eager"
            alt=""
            src={iconSrc}
          />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.description}>{description}</div>
        {buttonText!="" && (
        <Button className={styles.button} variant="outline-info">
          {buttonText}
        </Button>
        )}
      </div>
  );
};

export default ListingFormContainer;
