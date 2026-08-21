import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AddButton from '../Buttons/AddButton';

const TodoValidationSchema = Yup.object().shape({
  value: Yup.string()
    .trim()
    .required("Назва задачі обов'язкова")
    .min(5, 'Мінімальна довжина — 5 символів'),
});

function TodoForm({ onAddTask }) {
  return (
    <Formik
      initialValues={{ value: '' }}
      validationSchema={TodoValidationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddTask(values.value.trim());

        resetForm();
      }}
    >
      <Form className="form js--form">
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Field
            type="text"
            name="value"
            placeholder="Введіть нове завдання..."
            className="form__input js--form__input"
          />

          <ErrorMessage
            name="value"
            component="div"
            className="error-message"
            style={{ color: '#ff4d4d', fontSize: '14px', marginTop: '5px' }}
          />
        </div>

        <AddButton type="submit" />
      </Form>
    </Formik>
  );
}

export default TodoForm;
