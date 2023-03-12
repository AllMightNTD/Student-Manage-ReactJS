function validation(values) {
    let errors = {};
    console.log(values);
    if (values.code === '') {
        errors.code = 'Code should not be empty';
    }
    if (values.name === '') {
        errors.name = 'Last name should not be empty';
    }
    if (values.nameDepartment === '') {
        errors.nameDepartment = 'Name Department should not be empty';
    }
    if (values.codeDepartment === '') {
        errors.codeDepartment = 'Code Department should not be empty';
    }
    return errors;
}

export default validation;
