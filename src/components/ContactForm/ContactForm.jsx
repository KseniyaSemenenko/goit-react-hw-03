
import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

export default function ContactForm({onChange}) {
    const handleSubmit = (values, actions) => {
        onChange(values);
        actions.resetForm();
       
    }
    

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required("Required!"),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required("Required!")
    });
    

    return (
        <Formik initialValues={{name: '', number: ''}} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.formBlock}>
                <label className={css.formLabel}>Name</label>
                <Field className={css.formInput} type='text' name='name'></Field>
                <ErrorMessage className={css.errorMessage} name="name" component="span" />
                <label className={css.formLabel} >Number</label>
                <Field className={css.formInput} type='text' name='number' ></Field>
                <ErrorMessage className={css.errorMessage} name="number" component="span" />
            <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
    </Formik>
)
}