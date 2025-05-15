import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  // const [showMore, setShowMore] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const toggleTimeline = () => setShowTimeline(!showTimeline);
  // const toggleMore = () => setShowMore(!showMore);

  return (
    <>
      <Navbar
        // bg="light"
        expand="lg"
        fixed="top"
        className="custom-navbar shadow-sm"
      >
        <Container>
          <div as={Link} to="/" className="fw-bold text-primary">
            <img src="/images/msp-logo.png" className="headlogo" alt="" />
          </div>
          <Button
            variant="light"
            className="d-lg-none"
            onClick={handleShow}
            aria-label="Toggle navigation"
          >
            ☰
          </Button>
          <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
            <Nav className="align-items-center ms-auto">
              <Nav.Link as={Link} to="/" className="custom-nav-link text-light">
                முகப்பு
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="custom-nav-link text-light"
              >
                எங்களை பற்றி
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/creation"
                className="custom-nav-link text-light"
              >
                Creation
              </Nav.Link> */}
              {/* <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="custom-nav-link"
              >
                <NavDropdown.Item as={Link} to="/articles">
                  Articles
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/interviews">
                  Interviews
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/news">
                  News
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/all">
                  All Content
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link as={Link} to="/meetings" className="custom-nav-link">
                Meetings
              </Nav.Link> */}
              <NavDropdown
                title="கால வரலாறு"
                id="timeline-nav-dropdown"
                className="custom-nav-link"
              >
                <NavDropdown.Header>கால வரலாறு: 1995 - 2024</NavDropdown.Header>
                {[
                  { label: "1995 - 2005", path: "1995-2005" },
                  { label: "2006 - 2015", path: "2006-2015" },
                  { label: "2016 - 2025", path: "2016-2025" }
                ].map((range, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    to={`/gallery-range/${range.path}`}
                  >
                    {range.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link contactsection">
                தொடர்பு
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>
              முகப்பு
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>
              எங்களை பற்றி
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/creation" onClick={handleClose}>
              Creation
            </Nav.Link> */}

            {/* Custom collapsible for "More" */}
            {/* <div className="offcanvas-dropdown">
              <button className="dropdown-toggle-btn" onClick={toggleMore}>
                More ▾
              </button>
              {showMore && (
                <div className="dropdown-content">
                  <Nav.Link as={Link} to="/articles" onClick={handleClose}>
                    Articles
                  </Nav.Link>
                  <Nav.Link as={Link} to="/interviews" onClick={handleClose}>
                    Interviews
                  </Nav.Link>
                  <Nav.Link as={Link} to="/news" onClick={handleClose}>
                    News
                  </Nav.Link>
                  <hr />
                  <Nav.Link as={Link} to="/all" onClick={handleClose}>
                    All Content
                  </Nav.Link>
                </div>
              )}
            </div> */}

            {/* <Nav.Link as={Link} to="/meetings" onClick={handleClose}>
              Meetings
            </Nav.Link> */}

            {/* Custom collapsible for Timeline */}
            <div className="offcanvas-dropdown">
              <button className="dropdown-toggle-btn" onClick={toggleTimeline}>
                கால வரலாறு ▾
              </button>
              {showTimeline && (
                <ul className="timeline-list">
                  <li>
                    <Link
                      to="/gallery-range/1995-2005"
                      className="timeline-link"
                      onClick={handleClose}
                    >
                      1995 - 2005
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery-range/2006-2015"
                      className="timeline-link"
                      onClick={handleClose}
                    >
                      2006 - 2015
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery-range/2016-2025"
                      className="timeline-link"
                      onClick={handleClose}
                    >
                      2016 - 2025
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Nav.Link as={Link} to="/contact" onClick={handleClose}>
              தொடர்பு
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <Offcanvas
        show={showGallerySidebar}
        onHide={handleGalleryClose}
        placement="start"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Timeline: 1995 - 2024</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="timeline-list">
            {[
              { label: "1995 - 2005", path: "1995-2005" },
              { label: "2006 - 2015", path: "2006-2015" },
              { label: "2016 - 2025", path: "2016-2025" }
            ].map((range, index) => (
              <li key={index}>
                <Link
                  to={`/gallery-range/${range.path}`}
                  onClick={handleGalleryClose}
                  className="timeline-link"
                >
                  {range.label}
                </Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
};

export default CustomNavbar;

// import React, { useState } from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Offcanvas,
//   Button
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";

// const CustomNavbar = () => {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [showGallerySidebar, setShowGallerySidebar] = useState(false);
//   const handleGalleryOpen = () => setShowGallerySidebar(true);
//   const handleGalleryClose = () => setShowGallerySidebar(false);

//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

//   return (
//     <>
//       <Navbar
//         bg="light"
//         expand="lg"
//         fixed="top"
//         className="custom-navbar shadow-sm"
//       >
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
//             My Website
//           </Navbar.Brand>
//           <Button
//             variant="light"
//             className="d-lg-none"
//             onClick={handleShow}
//             aria-label="Toggle navigation"
//           >
//             ☰
//           </Button>
//           <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
//             <Nav className="align-items-center ms-auto">
//               <Nav.Link as={Link} to="/" className="custom-nav-link">
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" className="custom-nav-link">
//                 About
//               </Nav.Link>
//               <Nav.Link as={Link} to="/creation" className="custom-nav-link">
//                 Creation
//               </Nav.Link>
//               <NavDropdown
//                 title="More"
//                 id="basic-nav-dropdown"
//                 className="custom-nav-link"
//               >
//                 <NavDropdown.Item as={Link} to="/articles">
//                   Articles
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/interviews">
//                   Interviews
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/news">
//                   News
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/all">
//                   All Content
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link as={Link} to="/meetings" className="custom-nav-link">
//                 Meetings
//               </Nav.Link>
//               <Nav.Link onClick={handleGalleryOpen} className="custom-nav-link">
//                 TimeLine
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact" className="custom-nav-link">
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas
//         show={showOffcanvas}
//         onHide={handleClose}
//         placement="start"
//         className="custom-offcanvas"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/" onClick={handleClose}>
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/about" onClick={handleClose}>
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/creation" onClick={handleClose}>
//               Creation
//             </Nav.Link>
//             <NavDropdown title="More" id="offcanvas-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/articles" onClick={handleClose}>
//                 Articles
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={Link}
//                 to="/interviews"
//                 onClick={handleClose}
//               >
//                 Interviews
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/news" onClick={handleClose}>
//                 News
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={Link} to="/all" onClick={handleClose}>
//                 All Content
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/meetings" onClick={handleClose}>
//               Meetings
//             </Nav.Link>
//             <Nav.Link onClick={handleGalleryOpen} className="custom-nav-link">
//               TimeLine
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" onClick={handleClose}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>

//       <Offcanvas
//         show={showGallerySidebar}
//         onHide={handleGalleryClose}
//         placement="start"
//         className="custom-offcanvas"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Timeline: 1995 - 2024</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <ul className="timeline-list">
//             {[
//               { label: "1995 - 2005", path: "1995-2005" },
//               { label: "2006 - 2015", path: "2006-2015" },
//               { label: "2016 - 2025", path: "2016-2025" }
//             ].map((range, index) => (
//               <li key={index}>
//                 <Link
//                   to={`/gallery-range/${range.path}`}
//                   onClick={handleGalleryClose}
//                   className="timeline-link"
//                 >
//                   {range.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default CustomNavbar;
