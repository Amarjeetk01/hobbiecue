import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "./AddNew.module.css";

const FeatureContainer = ({ iconSrc, title, description, buttonText="" }) => {
  return (

    
      <div className={`${styles.frame}`}>
      
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

const AddNew = () => {
  return (
    <div className={`container-fluid`}>
      <main className={`${styles.mainContainer} `}>
      <div className={` ${styles.frameContainer}  `}>
        <FeatureContainer
          iconSrc="/groups-black-24dp-1-1.svg"
          title="People"
          description=" Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator."
        />
        <FeatureContainer
          iconSrc="/location-on-black-24dp-1.svg"
          title="Place"
          description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
        />
        <FeatureContainer
          iconSrc="/shopping-basket-black-24dp-2-1.svg"
          title="Product"
          description="Find equipment or supplies required for your hobby. Buy, rent
                  or borrow from shops, online stores or from community members."
        
        />
        <FeatureContainer
          iconSrc="/event-available-black-24dp-2.svg"
          title="Program"
          description="Find events, meetups and workshops related to your hobby.
                  Register or buy tickets online."
        
        />
      </div>
      </main>
    </div>
  );
};

export default AddNew;
