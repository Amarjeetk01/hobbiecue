import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./End.module.css";
import { useEffect } from "react";

const End = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const goToTopIcon = document.getElementById("goToTopIcon");
      if (goToTopIcon) {
        goToTopIcon.style.display =
          window.scrollY > 200 ? "block" : "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.end}>
      <div className={styles.endChild} />
      <div className={styles.footerInfo}>
        <h1 className={styles.yourHobbyYourContainer}>
          <span>{`Your `}</span>
          <span className={styles.hobby}>Hobby</span>
          <span>{`, Your `}</span>
          <span className={styles.community}>Community...</span>
        </h1>
        <div className={styles.headerFrame}>
          <div className={styles.rectangle}>
            <div className={styles.group}>
              <div className={styles.add}>
                <Button className={styles.locationonblackdp} variant="outine-info">
                  Get started
                </Button>
              </div>
              {/* Go to top icon */}
              <div className={styles.wrapperGroup77} onClick={scrollToTop}>
                <img
                  className={styles.wrapperGroup77Child}
                  loading="eager"
                  alt=""
                  src="/group-77.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.group1}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameIcon}
            loading="eager"
            alt=""
            src="/5820098-1.svg"
          />
          <img
            className={styles.icon}
            loading="eager"
            alt=""
            src="/5820000-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default End;
