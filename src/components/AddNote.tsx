import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

function AddNote() {
  return (
    <div style={{ float: "right" }}>
      <div>
        <Form.Control type="text" placeholder="Note Title" />
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Write your note here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </div>
    </div>
  );
}

export default AddNote;
