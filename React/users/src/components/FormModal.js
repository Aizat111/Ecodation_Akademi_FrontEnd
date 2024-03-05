import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export const FormModal = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="firstname">Firstname</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
          />
        </FormGroup>
      </Form>
    </div>
  );
};
