import * as Yup from 'yup';

const validationSchema = () =>
    Yup.object().shape({
        taskName: Yup.string()
            .required('task name is required')
            .min(3, 'task must have min 3 chars'),
    });

export default validationSchema;
