import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NoteAction } from "../actions/note";
import { useAppDispatch } from "../hooks";
import "../components/style.css";
import { AlertAction } from "../actions/alert";

const CreateScreen = () => {
  const dispatch = useAppDispatch();
  const title = useRef<HTMLInputElement>() as React.RefObject<HTMLInputElement>;
  const body =
    useRef<HTMLTextAreaElement>() as React.RefObject<HTMLTextAreaElement>;
  const navigate = useNavigate();
  return (
    <div className="p-1">
      <div className="m-2">
        <Form.Control
          type="text"
          placeholder="Untitled Note"
          className="w-100 border rounded-0"
          ref={title}
          style={{ fontWeight: 600, fontSize: "1.6em" }}
        />
      </div>
      <div className="m-2">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Write your note here..."
          style={{ color: "#aca9a7" }}
        >
          <Form.Control
            className="w-100 border rounded-0"
            as="textarea"
            placeholder="Write your note here..."
            style={{ height: "300px" }}
            ref={body}
          />
        </FloatingLabel>
      </div>
      <div className="d-flex mybtn-container">
        <Button
          className="m-1"
          variant="outline-danger"
          onClick={() => {
            dispatch(
              AlertAction.show({
                body: "Cancelled...",
                show: true,
                variant: "warning",
              })
            );
            navigate("/");
          }}
        >
          Cancel
        </Button>
        <Button
          className="m-1"
          onClick={(e) => {
            if (title.current?.value && body.current?.value) {
              dispatch(
                NoteAction.create({
                  title: title.current.value,
                  body: body.current.value,
                })
              );
              title.current.value = "";
              body.current.value = "";
              dispatch(
                AlertAction.show({
                  body: "Created...",
                  show: true,
                  variant: "success",
                })
              );
            } else {
              dispatch(
                AlertAction.show({
                  body: "Fields required!",
                  show: true,
                  variant: "danger",
                })
              );
            }
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateScreen;
