import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';

import validationSchema from '../utils/formValidation';
import { AppContext } from '../context/GlobalStore';

const FormPanel = () => {
    const { addTask } = useContext(AppContext);

    const formik = useFormik({
        initialValues: {
            taskImportant: false,
            taskName: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const nowDate = new Date().toLocaleString();

            const task = {
                id: uuidv4(),
                name: values.taskName,
                isImportant: values.taskImportant,
                isFinished: false,
                dateAdd: nowDate,
            };

            formik.values.taskImportant = false;
            formik.values.taskName = '';
            addTask(task);
        },
    });

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <label className='form__label form__label--checkbox'>
                <input
                    type='checkbox'
                    name='taskImportant'
                    className='form__checkbox'
                    checked={formik.values.taskImportant}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </label>
            <label className='form__label form__label--input'>
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
