import { useState } from "react";
import styles from "./Header.module.css";
import { Form, FormControl, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Auth from "./Auth";
import authStyle from "./BasketContainer.module.css";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate=useNavigate()



  const handleClickOn = () => {
    setShowAuthModal(true);
  };
  const handleClickClose = () => {
    setShowAuthModal(false);
  };
  
  const handleSignInClick = () => {
    setIsSignedIn(true);
    handleClickClose();
    navigate('/signed')
  };
  
  const handleSignOut = () => {
    setIsSignedIn(false);
    handleClickClose();
    navigate('/')
  };
  return (
    <div className={styles.findTeacherCoach}>
      <Navbar expand="lg" className={styles.navbar}>
        <Navbar.Brand href="#">
          <img
            className={styles.hobbycueLogoIcon}
            loading="eager"
            alt=""
            src="/hobbycue-logo@2x.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className={`d-flex ${styles.searchForm}`}>
            <FormControl
              type="search"
              placeholder="Search here..."
              aria-label="Search"
              className={`rounded-start ${styles.searchInput}`}
            />
            <Button className={`${styles.rectangleFrameParent} ${styles.rectangleFrame}`}>
              <img
                className={styles.icons8Search1}
                alt=""
                src="/icons8-search-1.svg"
              />
            </Button>
          </Form>
          <Nav className="ml-auto">
            <NavDropdown title="Explore" id="explore-nav-dropdown">
              <NavDropdown.Item href="#">People - Community</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hobbies" id="hobbies-nav-dropdown">
              {/* Add your hobbies dropdown items here */}
            </NavDropdown>
            <nav className={styles.navIcon}>
            <Nav.Link href="#">
              <img
                className={styles.bookmarkBlack24dp1Icon}
                loading="eager"
                alt=""
                src="/bookmark-black-24dp-1.svg"
              />
            </Nav.Link>
            <Nav.Link href="#">
              <img
                className={styles.notificationsBlack24dp1Icon}
                loading="eager"
                alt=""
                src="/notifications-black-24dp-1.svg"
              />
            </Nav.Link>
            <Nav.Link href="#">
              <img className={styles.product3Icon} alt="" src="/product-3.svg" />
            </Nav.Link>
            </nav>
            {isSignedIn ? (
              <Button className={`${styles.signIn} btn btn-outline-info`} onClick={handleSignOut}>
                {/* <img src="/user-icon.svg" alt="User" /> */}
                Sign Out
              </Button>
            ) : (
              <Button className={`${styles.signIn} btn btn-outline-info`} onClick={handleClickOn}>
          Sign In
        </Button>
            )}
          </Nav>
        </Navbar.Collapse>
        {showAuthModal && (
        <div className={styles.popupContainer}>
          <span className={styles.closeIcon} onClick={handleClickClose}>
            <MdClose />
          </span>
          <Auth styles={authStyle} handleSignInClick={handleSignInClick}/>
        </div>
      )}
      </Navbar>
    </div>
  );
};

export default Header;
