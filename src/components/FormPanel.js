import React, { useContext } from 'react';
import { useFormik } from 'formik';

import validationSchema from '../utils/formValidation';
import { AppContext } from '../context/GlobalStore';

const FormPanel = () => {
    const { addTask } = useContext(AppContext);

    const formik = useFormik({
        initialValues: {
            taskName: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const generateID = new Date().getTime();
            const nowDate = new Date().toLocaleString();

            const task = {
                id: generateID,
                name: values.taskName,
                isFinished: false,
                dateAdd: nowDate,
            };

            formik.values.taskName = '';
            addTask(task);
        },
    });

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <label className='form__label'>
                <input
                    type='text'
                    name='taskName'
                    className='form__input'
                    placeholder='Create a new todo...'
                    value={formik.values.taskName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </label>
        </form>
    );
};

export default FormPanel;
