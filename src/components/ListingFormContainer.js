import styles from "./People.module.css";

const ListingFormContainer = () => {
    return (
        <section className={styles.people}>
          <div className={styles.feature1}>
            <div className={styles.feature1Child} />
            <div className={styles.frameblackdpParent}>
              <div className={styles.frameblackdp}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.shoppingbasketblackdp}>
                    <div className={styles.groupsblackdp}>
                      <img
                        className={styles.groupsBlack24dp11}
                        loading="eager"
                        alt=""
                        src="/groups-black-24dp-1-1.svg"
                      />
                      <h2 className={styles.people1}>People</h2>
                    </div>
                    <div className={styles.findATeacher}>
                      Find a teacher, coach, or expert for your hobby interest in
                      your locality. Find a partner, teammate, accompanist or
                      collaborator.
                    </div>
                  </div>
                  
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.place}>
                    <div className={styles.framemeetup}>
                      <img
                        className={styles.locationOnBlack24dp1Icon}
                        loading="eager"
                        alt=""
                        src="/location-on-black-24dp-1.svg"
                      />
                      <h2 className={styles.place1}>Place</h2>
                    </div>
                    <div className={styles.findAClass}>
                      Find a class, school, playground, auditorium, studio, shop or
                      an event venue. Book a slot at venues that allow booking
                      through hobbycue.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameblackdp1}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameParent}>
                    <div className={styles.shoppingBasketBlack24dp2Parent}>
                      <img
                        className={styles.shoppingBasketBlack24dp2Icon}
                        loading="eager"
                        alt=""
                        src="/shopping-basket-black-24dp-2-1.svg"
                      />
                      <h2 className={styles.product}>Product</h2>
                    </div>
                    <div className={styles.findEquipmentOr}>
                      Find equipment or supplies required for your hobby. Buy, rent
                      or borrow from shops, online stores or from community members.
                    </div>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameGroup}>
                    <div className={styles.eventAvailableBlack24dp2Parent}>
                      <img
                        className={styles.eventAvailableBlack24dp2Icon}
                        loading="eager"
                        alt=""
                        src="/event-available-black-24dp-2.svg"
                      />
                      <h2 className={styles.program}>Program</h2>
                    </div>
                    <div className={styles.findEventsMeetups}>
                      Find events, meetups and workshops related to your hobby.
                      Register or buy tickets online.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
};

export default ListingFormContainer;
