import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import galleryData from "../Data/galleryData.json";
import "bootstrap/dist/css/bootstrap.min.css";

const GalleryRangePage = () => {
  const { range } = useParams();
  const [content, setContent] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Split the range string into start and end years
    const [start, end] = range.split("-").map(Number);
    const items = [];

    // Loop through the years in the range and collect all items
    for (let year = start; year <= end; year++) {
      if (galleryData[year]) {
        galleryData[year].forEach((entry) => {
          items.push({ ...entry, year: year }); // Add the year to each item
        });
      }
    }

    setContent(items); // Set all collected items to state
  }, [range]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="mb-4">Gallery: {range}</h2>

      {content.length === 0 ? (
        <p>No content available for this range.</p>
      ) : (
        <div className="row">
          {content.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div 
                className="card h-100 shadow-sm cursor-pointer"
                onClick={() => handleItemClick(item)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <small className="text-muted">Year: {item.year}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for showing larger image and details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedItem?.image}
            alt={selectedItem?.title}
            className="img-fluid mb-3"
            style={{ maxHeight: "70vh", objectFit: "contain" }}
          />
          <div className="text-start">
            <p><strong>Year:</strong> {selectedItem?.year}</p>
            <p><strong>Description:</strong></p>
            <p>{selectedItem?.text}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GalleryRangePage;