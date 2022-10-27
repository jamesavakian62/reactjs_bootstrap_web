import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="  text   text-center text-info">Contact Us</h1>
        <div>
          <img src="./write.png" alt="bar" className="bar" />
        </div>

        <h1 className="  text  text-center text-info ">Write Us</h1>
        <div className="container">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Enter your name"
            />
            <label class="form-label">Mobile Number</label>
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Enter Mobile Number"
            />
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control mb-3"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Textarea</label>
            <textarea class="form-control mb-3" rows="3"></textarea>
          </div>

          <button className="btn btn-primary mb-3">Submit Feedback</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
