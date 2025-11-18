"use client";
import { Formik, Form, Field } from "formik";
import { useAppContext } from "@/app/contexts/AppContext";

const FormConatiner = ({ pinId, onSubmitSuccess }) => {
  const { addCommentToPin } = useAppContext();

  return (
    <Formik
      initialValues={{ user: "", comment: "" }}
      onSubmit={async (values, { resetForm }) => {
        await addCommentToPin(pinId, values);
        resetForm();
        onSubmitSuccess && onSubmitSuccess();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-3 bg-neutral-100 p-4 rounded-2xl mt-4">
          <Field
            name="user"
            placeholder="User"
            className="p-2 border rounded-xl"
          />
          <Field
            name="comment"
            placeholder="Write a comment"
            as="textarea"
            className="p-2 border rounded-xl"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white hover:bg-pink-400 transition p-2 rounded-xl"
          >
            Add Comment
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormConatiner;