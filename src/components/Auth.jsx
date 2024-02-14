import React, { useState } from "react";
import styles from "./BasketContainer.module.css";
import { Form, Button } from "react-bootstrap";

const Auth = ({ styles }) => {
  const [activeTab, setActiveTab] = useState("SignIn");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderSignInContent = () => (
    <div className={styles.shubhaNagarajanframe}>
      <div className={styles.grouphobbycuefooter}>
        <div className={styles.ourservicesworkwithusfaqcontac}>
          <Form.Check className={styles.checkzboxFormcheck} />
          <div className={styles.rememberMe}>Remember me</div>
        </div>
        <div className={styles.hobbySearch}>
          <img
            className={styles.lockBlack24dp1Icon}
            alt=""
            src="/lock-black-24dp-1.svg"
          />
          <div
            className={styles.forgotPassword}
            onClick={() => console.log("Forgot password clicked")}
          >
            Forgot password?
          </div>
        </div>
      </div>
      <Button
        className={`${styles.buttons} ${styles.btnSign} ${styles.continueButton}`}
        variant="outline-info"
        href="#"
      >
        Continue
      </Button>
    </div>
  );

  const renderJoinInContent = () => (
    <div className={styles.shubhaNagarajanframe}>
      <div className={styles.agreeTerm}>
        <span>By continuing, you agree to our</span>
        <span className={styles.terms}>Terms of Service</span> and{" "}
        <span className={styles.privacy}>Privacy Policy</span>
      </div>
      <Button
        className={`${styles.buttons} ${styles.btnJoin} ${styles.continueButton}`}
        variant="outline-info"
        href="#"
      >
        Agree and Continue
      </Button>
    </div>
  );

  return (
    <div className={styles.audioFrame}>
      <div className={styles.signinjoinin}>
        <div
          className={`${styles.group195} ${
            activeTab === "SignIn" ? `${styles.activeTab} ` : ""
          }`}
          onClick={() => handleTabChange("SignIn")}
        >
          <span className={styles.signIn}>SignIn</span>
          <div
            className={` ${
              activeTab === "SignIn"
                ? `${styles.activeTab} ${styles.rectangle6}`
                : ""
            }`}
          />
        </div>
        <div
          className={`${styles.group196} ${
            activeTab === "JoinIn" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange("JoinIn")}
        >
          <span className={styles.joinIn}>Join In</span>
          <div
            className={` ${
              activeTab === "JoinIn"
                ? `${styles.activeTab} ${styles.rectangle6}`
                : ""
            }`}
          />
        </div>
      </div>

      <div className={styles.framegrouphobbycue}>
        <div className={styles.testimonialsframe}>
          <Button
            className={`${styles.loginWithOtherAccounts} ${styles.btnSign}`}
            name="Continue with Google"
            variant="outline-primary"
          >
            Sign with Google
          </Button>
          <Button
            className={`${styles.loginWithOtherAccounts1} ${styles.btnSign}`}
            variant="outline-primary"
          >
            Sign with Facebook
          </Button>
        </div>
        <div className={styles.connectWithSeparator}>
          <div className={styles.findaclassschoolplaygroundaudi} />
          <div className={styles.orConnectWith}>Or connect with</div>
          <div className={styles.findaclassschoolplaygroundaudi1} />
        </div>
        <div className={styles.testimonialsframe1}>
          <Form className={styles.inputFields}>
            <Form.Control type="text" placeholder="Email" />
          </Form>
          <Form className={styles.component7}>
            <Form.Control type="text" placeholder="Password" />
          </Form>
        </div>
      </div>
      {activeTab === "SignIn" && renderSignInContent()}
      {activeTab === "JoinIn" && renderJoinInContent()}
    </div>
  );
};

export default Auth;
