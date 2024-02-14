// BasketContainer.jsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Auth from "./Auth";
import styles from "./BasketContainer.module.css";

const BasketContainer = () => {
  

  return (
    <section className={styles.basketContainer}>
      <form className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <div className={styles.frameInfo}>
          <div className={styles.addField}>
            <h1 className={styles.exploreYourHobbyContainer}>
              <span className={styles.exploreYour}>Explore your</span>
              <span className={styles.hobby}> hobby</span>
              <span className={styles.or}>{` or `}</span>
              <span className={styles.passion}>passion</span>
            </h1>
            <div className={styles.labelText}>
              <div className={styles.signInToInteract}>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate, or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </div>
              <div className={styles.ifYouAre}>
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services, or events.
                Hop on your hobbyhorse and enjoy the ride.
              </div>
            </div>
          </div>
          <div className={styles.testimonialPanel}>
            <Auth styles={styles} />
          </div>
        </div>
        <div className={styles.addtestimonialquoteframe}>
          <div className={styles.frameaudiotrack}>
            <div className={styles.ellipseplayarrowblackdp}>
              <img className={styles.micblackdpframeIcon} loading="eager" alt="" src="/5793404-1.svg" />
              <img className={styles.micblackdpframeIcon1} loading="eager" alt="" src="/5793401-1.svg" />
            </div>
          </div>
         
        </div>
      </form>
    </section>
  );
};

export default BasketContainer;
