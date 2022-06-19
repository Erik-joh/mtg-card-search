import React from "react";
import { Formik, Form, Field } from "formik";
import {
  InputFieldContainer,
  Button,
  FormErrorMessage,
} from "../pages/SearchPage/styles";

const CardForm = ({
  onSubmit,
  formFieldValues,
  onClear,
  children,
  validateFields,
  isSubmittable,
}) => {
  return (
    <Formik
      initialValues={formFieldValues}
      onSubmit={onSubmit}
      enableReinitialize
      isSubmittableTest={isSubmittable}
      validate={validateFields}
    >
      {(props) => {
        return (
          <Form>
            <InputFieldContainer width="100">
              <label htmlFor="cardName">Name</label>
              <Field type="text" name="cardName" />
            </InputFieldContainer>
            <InputFieldContainer width="48">
              <label htmlFor="cardName">Type</label>
              <Field
                validate={props.validateField(props.values)}
                as="select"
                name="cardType"
              >
                <option value=""></option>
                <option value="creature">Creature</option>
                <option value="sorcery">Sorcery</option>
                <option value="instant">Instant</option>
                <option value="enchantment">Enchantment</option>
                <option value="land">Land</option>
              </Field>
            </InputFieldContainer>
            {props.values.cardType !== "land" && (
              <InputFieldContainer width="48">
                <label htmlFor="cmc">Cost</label>
                <Field
                  validate={props.validateField(props.values)}
                  type="number"
                  name="cmc"
                />
              </InputFieldContainer>
            )}

            {children}

            <InputFieldContainer width="100">
              <label htmlFor="description">Description</label>
              <Field
                validate={props.validateField(props.values)}
                type="text"
                name="description"
              />
            </InputFieldContainer>

            {(props.values.cardType === "creature" ||
              props.values.cardType === "") && (
              <>
                <InputFieldContainer width="48">
                  <label htmlFor="power">Power</label>
                  <Field
                    validate={props.validateField(props.values)}
                    type="number"
                    name="power"
                  />
                </InputFieldContainer>

                <InputFieldContainer width="48">
                  <label htmlFor="toughness">Toughness</label>
                  <Field
                    validate={props.validateField(props.values)}
                    type="number"
                    name="toughness"
                  />
                </InputFieldContainer>
              </>
            )}
            <FormErrorMessage>{props.errors.submit}</FormErrorMessage>
            <Button onClick={onClear}>Clear</Button>
            <Button type="submit">Search</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default CardForm;
