import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { show } from "../features/alert/alertSlice";
import { update } from "../features/note/noteSlice";
import { INote } from "../interfaces/note";
import { useAppDispatch, useAppSelector } from "../store";

const NoteScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);
  const [note, setNote] = useState<INote>();
  const load = () => {
    if (id) {
      const temp = notes.find((i) => i.id === id);
      if (!temp) navigate("/");
      setNote(temp);
    }
  };
  useEffect(() => {
    load();
  }, [id, notes]);

  return (
    <div className="p-1">
      <div className="m-2">
        <Form.Control
          type="text"
          placeholder="Untitled Note"
          className="w-100 border rounded-0"
          value={note?.title ?? ""}
          style={{ fontWeight: 600, fontSize: "1.6em" }}
          onChange={(e) =>
            setNote((p) => {
              return { ...p, title: e.target.value } as INote;
            })
          }
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
            value={note?.body ?? ""}
            onChange={(e) =>
              setNote((p) => {
                return { ...p, body: e.target.value } as INote;
              })
            }
          />
        </FloatingLabel>
      </div>
      <div className="d-flex mybtn-container">
        <Button
          className="m-1"
          variant="outline-danger"
          onClick={(e) => {
            dispatch(
              show({
                body: "Discarding Changes...",
                show: true,
                variant: "warning",
              })
            );
            load();
          }}
        >
          Reset
        </Button>
        <Button
          className="m-1"
          onClick={(e) => {
            if (!id || !note) return;
            // dispatch(NoteAction.update(id, note));
            dispatch(update({ id, note }));
            dispatch(
              show({
                body: "Saved...",
                show: true,
                variant: "info",
              })
            );
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default NoteScreen;
