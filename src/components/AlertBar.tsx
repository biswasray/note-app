import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { IAlert } from "../interfaces/alert";
import "./style.css";

const AlertBar: React.FC<{ data: IAlert }> = ({ data }) => {
  const [show, setShow] = useState(data.show ?? false);
  useEffect(() => {
    if (data.show) setShow(true);
    if (data.show && data.timeout) {
      setTimeout(() => setShow((p) => false), data.timeout);
    }
  }, [data]);
  return (
    <div
      style={{
        position: "absolute",
        width: "20.0em",
        right: "1.2em",
        bottom: "1.2em",
        zIndex: 999,
      }}
    >
      {show ? (
        <Alert
          variant={data.variant || "success"}
          onClose={() => setShow(false)}
          className={"border rounded-0"}
          dismissible
        >
          {data.head ? <Alert.Heading>{data.head}</Alert.Heading> : ""}
          <p>{data.body}</p>
          {data.extra ? (
            <>
              <hr />
              <p className="mb-0">{data.extra}</p>
            </>
          ) : (
            ""
          )}
        </Alert>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AlertBar;
