import styles from "./People.module.css";
import ListingFormContainer from "./ListingFormContainer";


const People = () => {
  return (
    <section className={styles.people}>
      <ListingFormContainer
        iconSrc="/groups-black-24dp-1-1.svg"
        title="People"
        description=" Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator."
        buttonText="connect"
      />
      <ListingFormContainer
        iconSrc="/location-on-black-24dp-1.svg"
        title="Place"
        description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
        buttonText="Meet up"
      />
      <ListingFormContainer
        iconSrc="/shopping-basket-black-24dp-2-1.svg"
        title="Product"
        description="Find equipment or supplies required for your hobby. Buy, rent
                  or borrow from shops, online stores or from community members."
        buttonText="Get it"
      />
      <ListingFormContainer
        iconSrc="/event-available-black-24dp-2.svg"
        title="Program"
        description="Find events, meetups and workshops related to your hobby.
                  Register or buy tickets online."
        buttonText="Attend"
      />
    </section>
  );
};

export default People;
