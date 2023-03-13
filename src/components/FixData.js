import React, { useContext, useState } from 'react';
import { Button, Input } from 'antd';
import { Radio } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import validation from '../actions/validate';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataContext from './DataContext';
const FixData = () => {
    const params = useParams();
    const { code } = params;
    const dataLocal = JSON.parse(localStorage.getItem('dataStudent'));
    const dataFix = dataLocal.find((item) => item.code === code);
    console.log(dataFix);
    const [value, setValue] = useState({
        code: dataFix.code,
        name: dataFix.name,
        date: dataFix.date,
        nameDepartment: dataFix.nameDepartment,
        codeDepartment: dataFix.codeDepartment,
    });
    console.log(value);
    const navigate = useNavigate();
    const handleSubmitData = (e) => {
        e.preventDefault();
        const validationErrors = validation(value);
        if (Object.keys(validationErrors).length === 0) {
            const indexFix = dataLocal.findIndex((item) => item.code === code);
            if (indexFix !== -1) {
                const updatedData = [...dataLocal];
                updatedData[indexFix] = value;
                localStorage.setItem('dataStudent', JSON.stringify(updatedData));
                // ...
            }
            toast.success('Fix Student Success !', {
                autoClose: 1000,
                onClose: () => {
                    navigate('/');
                },
            });
        } else {
            Object.values(validationErrors).forEach((error) => {
                toast.error(error, { autoClose: 1000 });
            });
        }
    };
    const AddData = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <form onSubmit={handleSubmitData} className="w-3/5 border px-6 py-5 rounded-md shadow-sm shadow-gray-300">
                <div className="flex items-center w-full">
                    <label htmlFor="" className="flex-1 mt-2">
                        Code
                    </label>
                    <input
                        onChange={AddData}
                        defaultValue={dataFix.code}
                        placeholder="Code..."
                        className="px-2 py-2 rounded-lg  outline-blue-500/50 w-10/12 border"
                        name="code"
                        type="text"
                    />
                </div>
                <div className="flex items-center w-full my-7">
                    <label htmlFor="" className="flex-1">
                        Name
                    </label>
                    <input
                        onChange={AddData}
                        defaultValue={dataFix.name}
                        placeholder="Name"
                        name="name"
                        className="px-2 py-2 rounded-lg  outline-blue-500/50 w-10/12 border"
                        type="text"
                    />
                </div>
                <div className="flex items-center w-full my-7">
                    <label htmlFor="" className="w-2/12">
                        Date
                    </label>
                    <input
                        onChange={AddData}
                        placeholder="Date..."
                        defaultValue={dataFix.date}
                        name="date"
                        className="px-2 py-2 rounded-lg  outline-blue-500/50 w-4/12 border"
                        type="date"
                    />
                </div>
                <div className="flex items-center w-full my-7">
                    <label htmlFor="" className="w-2/12">
                        Gender
                    </label>
                    <div className="flex gap-2 w-4/12">
                        <input
                            onChange={AddData}
                            type="radio"
                            name="gender"
                            value="Nam"
                            defaultChecked={dataFix.gender === 'Nam'}
                        />{' '}
                        Nam
                        <input
                            onChange={AddData}
                            type="radio"
                            name="gender"
                            value="Nữ"
                            defaultChecked={dataFix.gender === 'Nữ'}
                        />{' '}
                        Nữ
                    </div>
                </div>
                <div className="flex items-center w-full my-7">
                    <label htmlFor="" className="flex-1">
                        Name Department
                    </label>
                    <input
                        onChange={AddData}
                        defaultValue={dataFix.nameDepartment}
                        placeholder="Name Department..."
                        name="nameDepartment"
                        className="px-2 py-2 rounded-lg  outline-blue-500/50 w-10/12 border"
                        type="text"
                    />
                </div>
                <div className="flex items-center w-full my-7">
                    <label htmlFor="" className="flex-1">
                        Code Department
                    </label>
                    <input
                        onChange={AddData}
                        name="codeDepartment"
                        defaultValue={dataFix.codeDepartment}
                        placeholder="Code Department..."
                        className="px-2 py-2 rounded-lg  outline-blue-500/50 w-10/12 border"
                        type="text"
                    />
                </div>
                <div className="">
                    <Link to="/" className="float-left underline text-gray-500 decoration-solid">
                        Return to Home
                    </Link>
                    <button
                        className="float-right px-2 py-2 border-none outline-none rounded-xl  bg-orange-500 text-white border-cyan-300"
                        type="submit"
                    >
                        Update Student
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FixData;
