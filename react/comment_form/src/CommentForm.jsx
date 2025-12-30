import { useState } from "react";
import { useFormik } from "formik";
import ShowComment from "./ShowComment";

export default function CommentForm() {
  const [arr, setArr] = useState([]);

  const validate = values => {
    const errors = {};
    if (!values.userName) errors.userName = "Username cannot be empty";
    if (!values.remark) errors.remark = "Remark cannot be empty";
    if (!values.rating) errors.rating = "Rating cannot be empty";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      remark: "",
      rating: ""
    },
    validate,
    onSubmit: values => {
      setArr(prev => [...prev, values]);
      formik.resetForm();
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>Username:</label>
        <input
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.userName && formik.errors.userName && (
          <div>{formik.errors.userName}</div>
        )}

        <br /><br />

        <label>Remark:</label>
        <textarea
          name="remark"
          value={formik.values.remark}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.remark && formik.errors.remark && (
          <div>{formik.errors.remark}</div>
        )}

        <br /><br />

        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating && (
          <div>{formik.errors.rating}</div>
        )}

        <br />

        <button type="submit">Submit</button>
      </form>

      <ShowComment arr={arr} />
    </>
  );
}
