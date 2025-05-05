import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import CustomNavbar from "../components/CustomNavbar";

function Contact() {
  const initialValues = {
    Name: "",
    Email: "",
    Experience: [],
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().required("Email Address is required"),
    Experience: Yup.array().min(1, "Select Your Experience"),
  });

  const handleCreating = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <>
      <CustomNavbar />
      <div style={{ paddingTop: "70px" }}>
        <h1>Contact Page</h1>
      </div>

      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreating}
        >
          {({
            errors,
            touched,
            values,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            setFieldValue
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
                <Container maxWidth="xl" sx={{ padding: 4 }}>
                  <Stack spacing={2}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12} md={10}>
                        {" "}
                        {/* Increased from md={8} to md={10} */}
                        <Card
                          sx={{ borderRadius: 6, padding: 6 }}
                          elevation={10}
                        >
                          <CardHeader title="Contact Form" />
                          <Divider sx={{ mx: 2 }} />
                          <CardContent>
                            <Grid container direction="column" spacing={2}>
                              <Grid item xs={12} sm={6} md={6} padding={1}>
                                <TextField
                                  fullWidth
                                  label="Name"
                                  name="Name"
                                  value={values.Name}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  error={touched.Name && Boolean(errors.Name)}
                                  helperText={touched.Name && errors.Name}
                                />
                              </Grid>

                              <Grid item xs={12} sm={6} md={6} padding={1}>
                                <TextField
                                  fullWidth
                                  label="Email Address"
                                  name="Email"
                                  value={values.Email}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  error={touched.Email && Boolean(errors.Email)}
                                  helperText={touched.Email && errors.Email}
                                />
                              </Grid>




                              
                              <Grid
                                item
                                xs={12}
                                padding={1}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <FormControl component="fieldset">
                                  <FormLabel component="legend">
                                    Do You Have Any Experience
                                  </FormLabel>
                                  <FormGroup row>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          size="small"
                                          name="Experience"
                                          value="Snorkeling Experience"
                                          checked={values.Experience.includes(
                                            "Snorkeling Experience"
                                          )}
                                          onChange={(e) => {
                                            const { checked, value } = e.target;
                                            let newValues = [
                                              ...values.Experience,
                                            ];

                                            // If 'No Any Experience' is selected, uncheck it
                                            if (
                                              values.Experience.includes(
                                                "No Any Experience"
                                              )
                                            ) {
                                              newValues = newValues.filter(
                                                (v) => v !== "No Any Experience"
                                              );
                                            }

                                            if (checked) {
                                              newValues.push(value);
                                            } else {
                                              newValues = newValues.filter(
                                                (v) => v !== value
                                              );
                                            }

                                            setFieldValue(
                                              "Experience",
                                              newValues
                                            );
                                          }}
                                          disabled={values.Experience.includes(
                                            "No Any Experience"
                                          )}
                                        />
                                      }
                                      label="Snorkeling Experience"
                                    />
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          size="small"
                                          name="Experience"
                                          value="Diving Experience"
                                          checked={values.Experience.includes(
                                            "Diving Experience"
                                          )}
                                          onChange={(e) => {
                                            const { checked, value } = e.target;
                                            let newValues = [
                                              ...values.Experience,
                                            ];

                                            // If 'No Any Experience' is selected, uncheck it
                                            if (
                                              values.Experience.includes(
                                                "No Any Experience"
                                              )
                                            ) {
                                              newValues = newValues.filter(
                                                (v) => v !== "No Any Experience"
                                              );
                                            }

                                            if (checked) {
                                              newValues.push(value);
                                            } else {
                                              newValues = newValues.filter(
                                                (v) => v !== value
                                              );
                                            }

                                            setFieldValue(
                                              "Experience",
                                              newValues
                                            );
                                          }}
                                          disabled={values.Experience.includes(
                                            "No Any Experience"
                                          )}
                                        />
                                      }
                                      label="Diving Experience"
                                    />
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          size="small"
                                          name="Experience"
                                          value="No Any Experience"
                                          checked={values.Experience.includes(
                                            "No Any Experience"
                                          )}
                                          onChange={(e) => {
                                            const { checked, value } = e.target;
                                            let newValues = [];

                                            if (checked) {
                                              newValues = [value]; // Only allow this one
                                            }

                                            setFieldValue(
                                              "Experience",
                                              newValues
                                            );
                                          }}
                                        />
                                      }
                                      label="No Any Experience"
                                    />
                                  </FormGroup>
                                  {touched.Experience && errors.Experience && (
                                    <p style={{ color: "red", marginTop: 8 }}>
                                      {errors.Experience}
                                    </p>
                                  )}
                                </FormControl>
                              </Grid>







                              <Grid item>
                                <Button
                                  type="submit"
                                  variant="contained"
                                  disabled={!isValid || isSubmitting}
                                  sx={{
                                    borderRadius: 3,
                                    backgroundColor: "rgb(18, 104, 18)",
                                    display: "block",
                                    margin: "0 auto",
                                    paddingX: 4,
                                    paddingY: 1.5,
                                    fontSize: "1rem",
                                  }}
                                >
                                  Create Profile
                                </Button>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Stack>
                </Container>
              </Box>
            </Form>
          )}
        </Formik>
      </>
    </>
  );
}

export default Contact;
