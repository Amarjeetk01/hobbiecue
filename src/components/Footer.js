import { Form, FormControl, Button } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.groupWrapper}>
        <div className={styles.group}>
          <div className={styles.groupParent}>
            <div className={styles.group1}>
              <b className={styles.hobbycue}>Hobbycue</b>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.ourServices}>Our Services</div>
              <div className={styles.workWithUs}>Work with Us</div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.group2}>
              <b className={styles.howDoI}>How Do I</b>
              <div className={styles.signUp}>Sign Up</div>
              <div className={styles.addAListing}>Add a Listing</div>
              <div className={styles.claimListing}>Claim Listing</div>
              <div className={styles.postAQuery}>Post a Query</div>
              <div className={styles.addABlog}>Add a Blog Post</div>
              <div className={styles.otherQueries1}>Other Queries</div>
            </div>
            <div className={styles.group3}>
              <b className={styles.quickLinks}>Quick Links</b>
              <div className={styles.listings}>Listings</div>
              <div className={styles.blogPosts}>Blog Posts</div>
              <div className={styles.shopStore}>Shop / Store</div>
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.postaQuery}>
              <div className={styles.meSection}>
                <div className={styles.inviteFriendsFrame}>
                  <b className={styles.socialMedia}>Social Media</b>
                </div>
                <div className={styles.otherQueries}>
                  <img
                    className={styles.otherQueriesChild}
                    loading="eager"
                    alt=""
                    src="/group-60.svg"
                  />
                  <img
                    className={styles.otherQueriesChild}
                    loading="eager"
                    alt=""
                    src="/group-61.svg"
                  />
                  <img
                    className={styles.otherQueriesInner}
                    loading="eager"
                    alt=""
                    src="/group-62.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    loading="eager"
                    alt=""
                    src="/group-63.svg"
                  />
                  <img
                    className={styles.otherQueriesChild}
                    loading="eager"
                    alt=""
                    src="/group-59.svg"
                  />
                  <img
                    className={styles.otherQueriesChild}
                    loading="eager"
                    alt=""
                    src="/group-58.svg"
                  />
                  <img
                    className={styles.otherQueriesChild}
                    loading="eager"
                    alt=""
                    src="/group-57.svg"
                  />
                  <img
                    className={styles.otherQueriesChild}
                    alt=""
                    src="/group-56.svg"
                  />
                </div>
              </div>
              <div className={styles.meSection}>
                <div className={styles.inviteFriendsFrame}>
                  <b className={styles.inviteFriends}>Invite Friends</b>
                </div>
                <Form className={`d-flex ${styles.frameChild}`}>
                  <FormControl
                    type="email"
                    placeholder="Email ID"
                    aria-label="email"
                    className={styles.email}
                  />
                  <Button
                    className={`${styles.rectangleFrameParent} ${styles.rectangleFrame}`}
                  >
                    <img
                      className={styles.icons8Search1}
                      alt=""
                      src="/icons8-search-1.svg"
                    />
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.purpleCuesPrivate}>
          © Purple Cues Private Limited
        </div>
      </footer>
    </div>
  );
};

export default Footer;
