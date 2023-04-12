import styled from "styled-components";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Container onChange={handleChange}>
            <h1>Login</h1>
            <FormStyled>
              <LabelStyled htmlFor="email">email</LabelStyled>
              <InputStyled
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
              />
              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>
              <LabelStyled htmlFor="password">password</LabelStyled>
              <InputStyled
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                className="form-control"
              />
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
              <Submit type="submit" onSubmit={handleSubmit}>
                Log in
              </Submit>
            </FormStyled>
            <Link to={ROUTES.REGISTER}>
              <ButtonStyled>
                No account yet? <br /> Register here
              </ButtonStyled>
            </Link>
          </Container>
        )}
      </Formik>
    </>
  );
};
export default Form;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;
const LabelStyled = styled.label`
  text-align: left;
  padding: 5px;
`;
const InputStyled = styled.input`
  margin: 0.5rem 0;
  margin-bottom: 30px;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
  ::placeholder {
    padding-inline-start: 20px;
  }
`;
const Submit = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  background-color: blue;
  font-size: 20px;
  color: white;
  :hover {
    opacity: 0.8;
  }
`;
const ButtonStyled = styled.button`
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  :hover {
    opacity: 0.8;
  }
`;
const Paragraph = styled.p`
  color: red;
`;
