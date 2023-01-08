import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { show } from "../features/alert/alertSlice";
import { remove } from "../features/note/noteSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { formatDate } from "../utils";
import "./style.css";

const SideNavbar = () => {
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  return (
    <div>
      <Nav
        // className="col-md-12 d-none d-md-block bg-light sidebar"
        className="col-md-12"
        activeKey="/home"
        style={{ display: "block", height: "100vh" }}
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div
          className="navbar navbar-expand-lg p-2"
          style={{
            justifyContent: "space-between",
            borderBottom: "1px solid #aca9a7",
          }}
        >
          <h2 className="m-2">Notes</h2>
          <Button
            className="m-2 mybtn"
            variant="outline-primary"
            style={{ right: 10 }}
            onClick={() => navigate("/create")}
          >
            Add
          </Button>
        </div>
        <div style={{ overflowY: "auto", height: "100%" }}>
          {notes.map((note) => {
            return (
              <Nav.Item className="note-item" key={note.id}>
                <Nav.Link
                  className="p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`note/${note.id}`);
                  }}
                >
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h5>{note.title}</h5>
                      <p>{`Last modified ${formatDate(note.updatedAt)}`}</p>
                    </div>
                    <Button
                      className="remove-mybtn"
                      variant="outline-danger"
                      onClick={() => {
                        // dispatch(NoteAction.remove(note.id));
                        dispatch(remove({ id: note.id }));
                        dispatch(
                          show({
                            body: "Deleting...",
                            show: true,
                            variant: "danger",
                          })
                        );
                        navigate(-1);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </div>
      </Nav>
    </div>
  );
};
export default SideNavbar;
