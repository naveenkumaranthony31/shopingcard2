import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Section({ item }) {
  return (
    <div class="col mb-5">
      <div class="card h-100">
        <div
          class="badge bg-dark text-white position-absolute"
          style={{mt:2, top: 0.5, right: 0.5 }}
        >
         {
            item.sale?"Sale":""
         }
        </div>
        <img
          class="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />

        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder">{item.name}</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              {item.ratingStar ? (
                <>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </>
              ) : (
                ""
              )}
            </div>
<span class="text-muted text-decoration-line-through">{item.price}</span> <span>{item.price1}</span>
          </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" href="#">
              {item.isEnable ? "View options" : "Add to cart"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
