import React from "react";
import { Formik, Form, Field } from "formik";
import { InputFieldContainer } from "../pages/SearchPage/styles";

const CardForm = ({ onSubmit, formFieldValues, onClear, children }) => {
  console.log(formFieldValues);
  return (
    <Formik
      initialValues={formFieldValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(isSubmitting) => {
        return (
          <Form>
            <InputFieldContainer width="100">
              <label htmlFor="cardName">Name</label>
              <Field type="text" name="cardName" />
            </InputFieldContainer>
            <InputFieldContainer width="48">
              <label htmlFor="cardName">Type</label>
              <Field as="select" name="cardType">
                <option value=""></option>
                <option value="creature">Creature</option>
                <option value="sei">Sorc, Inst, Ench</option>
                <option value="land">Land</option>
              </Field>
            </InputFieldContainer>

            <InputFieldContainer width="48">
              <label htmlFor="cmc">Cost</label>
              <Field type="text" name="cmc" />
            </InputFieldContainer>

            {children}

            <InputFieldContainer width="100">
              <label htmlFor="description">Description</label>
              <Field type="text" name="description" />
            </InputFieldContainer>

            <InputFieldContainer width="48">
              <label htmlFor="power">Power</label>
              <Field type="text" name="power" />
            </InputFieldContainer>

            <InputFieldContainer width="48">
              <label htmlFor="toughness">Toughness</label>
              <Field type="text" name="toughness" />
            </InputFieldContainer>
            <button onClick={onClear}>Clear</button>
            <button type="submit" disabled={false}>
              Search
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default CardForm;
