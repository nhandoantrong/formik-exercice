import React from 'react';
import { withFormik, Form, Field } from "formik"
import InputGroup from '../components/InputGroup';
const FormContainer = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
}) => {
    return (
        <Form>
            <table>
                <tbody>
                    <Field name="fName" render={({ field }) => (
                        <InputGroup field={field}
                            labelContent="First Name"
                            error={errors.fName}
                            touched={touched.fName} />
                    )} />

                    <Field name="lName" render={({ field }) => (
                        <InputGroup field={field}
                            labelContent="Last Name"
                            error={errors.lName}
                            touched={touched.lName} />
                    )} />

                    <Field name="email" render={({ field }) => (
                        <InputGroup field={field}
                            labelContent="Email"
                            error={errors.email}
                            touched={touched.email} />
                    )} />

                    <tr>
                        <td style={{ verticalAlign: "top" }}>Sex</td>
                        <td>
                            <input type="radio" name="sex" id="male" value="male" onChange={handleChange} /> <label htmlFor="male">Male</label> <br />
                            <input type="radio" name="sex" id="female" value="female" onChange={handleChange} /> <label htmlFor="female">Female</label> <br />
                            {errors.sex && touched.sex ? <div className="error">{errors.sex}</div> : null}

                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="color">Favorite Color</label></td>
                        <td>
                            <select name="color" id="color" value={values.color} onChange={handleChange}>
                                <option value=""></option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>

                            </select>
                            {errors.color && touched.color && <div className="error">{errors.color}</div>}

                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="employed">Employed</label></td>
                        <td><input type="checkbox" name="employed" id="employed" value="employed" onChange={handleChange} /> <br/>
                            {errors.employed && touched.employed && <div className="error">{errors.employed}</div>}


                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="note">Note</label></td>
                        <td>
                            <textarea name="note" id="note" cols="30" rows="10" value={values.note} onChange={handleChange}>    </textarea> <br />
                            {errors.note && touched.note && <div className="error">{errors.note}</div>}

                        </td>
                    </tr>

                </tbody>

            </table>
            <div className="submit-line">
                <button type="submit" className="submit"><i className="fas fa-paper-plane"></i> Submit</button>
                <button type="reset" className="reset">Clear Values</button>
            </div>
        </Form>
    );
};


export default withFormik({
    mapPropsToValues: () => ({
        fName: '',
        lName: "",
        email: "",
        sex: "",
        color: "",
        employed: false,
        note: "",
    }),

    // Custom sync validation
    validate: values => {
        const emailRegex =/^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
        const errors = {};

        if (!values.fName) {
            errors.fName = 'First name is required';
        }
        if (!values.lName) {
            errors.lName = 'Last name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        else if (!emailRegex.test(values.email)){
            errors.email = "Email must be valid"
        }
        if (!values.sex) {
            errors.sex = "Choose your gender please"
        }
        if (!values.color) {
            errors.color = "Choose your favorite color please"
        }
        if (!values.employed){
            errors.employed = "Must be employed"
        }
        if (!values.note){
            errors.note = "Note is required"
        }

        return errors;
    },

    handleSubmit: (values) => {
        alert(JSON.stringify(values));
    },

    displayName: 'InfoForm',
})(FormContainer);