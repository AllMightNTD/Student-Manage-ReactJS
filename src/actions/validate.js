function validation(values) {
    const data = JSON.parse(localStorage.getItem('dataStudent'));
    console.log(data);
    const checkcode = data.some(data => {
        return data.code === values.code;
    })
    let errors = {};
    console.log(values);
    if(checkcode === true){
        errors.code = 'Code already exist';
    }
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
