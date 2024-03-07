import React, { useState, useEffect } from "react";
import { List } from "./List";
import { Button, Col, Row, Modal, ModalBody } from "reactstrap";
import { FormModal } from "./FormModal";
import axios from "axios";

export const Users = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //çalıştırmak istediğimiz kod
    axios("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
      setUsers(data)
    );
  }, []);
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
      <Modal isOpen={isVisible}>
        <ModalBody>
          {" "}
          <FormModal
            users={users}
            setUsers={setUsers}
            setIsVisible={setIsVisible}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};
