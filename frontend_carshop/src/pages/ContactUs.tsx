import { Container, Grid, Paper } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import Navbar from "../organisms/Navbar/Navbar";

export default function ContactUs() {
  const validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      message: Yup.string().required("This field is required"),
    });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    message: "",
  };

  return (
    <div>
      <Navbar />
      <Container
        style={{ justifyContent: "center", display: "flex", paddingTop: "2%" }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          <Paper
            elevation={12}
            style={{
              backgroundColor: "#bfbfbf",
              paddingLeft: "calc(10% + 5px)",
              paddingRight: "10%",
              paddingTop: "5%",
              paddingBottom: "5%",
              borderRadius: "20px",
            }}
          >
            <Form>
              <div className="form-group">
                <Field
                  name="firstName"
                  type="text"
                  className="form-control"
                  style={{
                    width: "250px",
                    height: "50px",
                    margin: "20px",
                    borderRadius: "10px",
                    paddingLeft: "5px",
                    border: "0px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                  placeholder="First name: "
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <Field
                  name="lastName"
                  type="text"
                  className="form-control"
                  style={{
                    width: "250px",
                    height: "50px",
                    margin: "20px",
                    borderRadius: "10px",
                    paddingLeft: "5px",
                    border: "0px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                  placeholder="Last name: "
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <Field
                  name="textfield"
                  className="form-control"
                  as="textarea"
                  style={{
                    width: "250px",
                    height: "200px",
                    margin: "20px",
                    borderRadius: "10px",
                    paddingLeft: "5px",
                    border: "0px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                  placeholder="Message: "
                />
                <ErrorMessage
                  name="textfield"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div
                className="form-group"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{
                    width: "150px",
                    height: "40px",
                    marginBottom: "15px",
                    borderRadius: "10px",
                    background: "#1890ff",
                    border: "1px solid black",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                  }}
                >
                  <span className="spinner-border spinner-border-sm"></span>
                  <span>Submit</span>
                </button>
              </div>
              <div className="form-group">
                <div className="alert alert-danger" role="alert"></div>
              </div>
            </Form>
          </Paper>
        </Formik>
      </Container>
    </div>
  );
}
