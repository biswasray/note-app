import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import { useAppDispatch, useAppSelector } from "../hooks";
import AlertBar from "../components/AlertBar";
import { useEffect } from "react";
import { NoteAction } from "../actions/note";

function HomeScreen() {
  // const [alertData, setAlertData] = useState<IAlert>({
  //   body: "Nothing",
  //   variant: "success",
  //   timeout: 1000,
  // });
  const alertData = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  // const notes = useSelector(
  //   (state: ReturnType<typeof store.getState>) => state.noteReducer
  // );
  useEffect(() => {
    dispatch(NoteAction.fetchAsync());
  }, []);
  return (
    <>
      <div
        className="d-flex"
        style={{
          backgroundColor: "#f9f9f9",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div style={{ width: "30%", borderRight: "1px solid #aca9a7" }}>
          <SideNavbar />
        </div>
        <div style={{ width: "70%" }}>
          <Outlet />

          <AlertBar data={alertData} />
        </div>
      </div>
      {/* <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SideNavbar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <AddNote />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default HomeScreen;
