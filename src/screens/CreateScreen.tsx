import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../components/style.css";
import { show } from "../features/alert/alertSlice";
import { createNote } from "../features/note/noteSlice";
import { useAppDispatch } from "../store";

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
              show({
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
              // dispatch(
              //   create({
              //     note: {
              //       title: title.current.value,
              //       body: body.current.value,
              //     },
              //   })
              // );
              dispatch(
                createNote({
                  title: title.current.value,
                  body: body.current.value,
                })
              );
              title.current.value = "";
              body.current.value = "";
              dispatch(
                show({
                  body: "Created...",
                  show: true,
                  variant: "success",
                })
              );
            } else {
              dispatch(
                show({
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
