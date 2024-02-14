import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild}></div>
        <div className={styles.emailID}>
          <div className={styles.invite}>
            <img
              className={styles.quoteIcon}
              loading="eager"
              alt=""
              src="/quote@2x.png"
            />
            <h2 className={styles.testimonials1}>Testimonials</h2>
          </div>
        </div>
        <div className={styles.inAFastGrowingAndEverChaParent}>
          <div className={styles.inAFast}>
            In a fast growing and ever-changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like-minded
            people. Websites like hobbycue.com are a great service that helps me
            connect with other dancers, exchange ideas, and find quality
            products and services recommended by the hobbycue community. It
            provides a platform to discuss, gain visibility, and explore various
            hobbies and activities in my city, all under one roof. Highly
            recommended!
          </div>
          {/* <div className={styles.audioTrackParent}>
            <div className={styles.audioTrack}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameItem}></div>
                <img
                  className={styles.playArrowBlack24dp1Icon}
                  loading="eager"
                  alt=""
                  src="/play-arrow-black-24dp-1.svg"
                />
              </div>
              <div className={styles.rectangleGroup}>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className={styles.frameInner}
                  />
                  0:00
                </div>
              </div>
              <div>
                <div className={styles.audioTrackItem}></div>
                <img
                  className={styles.audioTrackInner}
                  loading="eager"
                  alt=""
                  src="/ellipse-26@2x.png"
                />
                <img
                  className={styles.micBlack24dp1Icon}
                  alt=""
                  src="/mic-black-24dp-1.svg"
                />
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.ellipseIcon}
                loading="eager"
                alt=""
                src="/ellipse-12@2x.png"
              />
              <div className={styles.shubhaNagarajanParent}>
                <div className={styles.shubhaNagarajan}>Shubha Nagarajan</div>
                <div className={styles.classicalDancer}>Classical Dancer</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
