import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const FormModal = ({ users, setUsers, setIsVisible }) => {
  const [form, setForm] = useState();
  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (form.firstname === "" || form.lastname === "") {
      return false;
    }
    setUsers([...users, { ...form, id: users.length + 1 }]);
    setIsVisible(false);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <div>
      <div className="d-flex justify-content-end  ">
        <Button
          onClick={closeModal}
          color="link"
          className="text-decoration-none"
        >
          X
        </Button>
      </div>
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <Label for="firstname">Firstname</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
            onChange={onChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Lastname</Label>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Lastname"
            onChange={onChangeInput}
          />
        </FormGroup>
        <div className="d-flex justify-content-center">
          <Button
            type="reset"
            color="danger"
            className="me-2"
            onClick={closeModal}
          >
            {" "}
            Cancel
          </Button>
          <Button type="submit" color="info">
            {" "}
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
