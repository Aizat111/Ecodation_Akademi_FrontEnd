import React, { useState } from "react";
import { List } from "./List";
import { Button, Col, Row } from "reactstrap";
import { FormModal } from "./FormModal";

export const Users = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, firstname: "Emma", lastname: "Smith" },
  ]);
  return (
    <div>
      <Row className="mt-2">
        <Col xs="10">
          {" "}
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            Users
          </span>
        </Col>
        <Col xs="2">
          <Button color="info" onClick={() => setIsVisible(true)}>
            {" "}
            New User
          </Button>
        </Col>
      </Row>

      <List users={users} />
      {isVisible && (
        <FormModal
          users={users}
          setUsers={setUsers}
          setIsVisible={setIsVisible}
        />
      )}
    </div>
  );
};
