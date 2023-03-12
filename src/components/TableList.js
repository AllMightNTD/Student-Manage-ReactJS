import { Space, Switch, Table, Button } from 'antd';
import { Checkbox } from 'antd';
import { useContext, useEffect, useState } from 'react';
import DataContext from './DataContext';
import Search from './Search';
import CircularJSON from 'circular-json';
const TableList = () => {
    const { datastudent } = useContext(DataContext);
    console.log(datastudent);
    const columns = [
        {
            title: 'Check',
            width: 50,
            dataIndex: 'check',
        },
        {
            title: 'Code',
            dataIndex: 'code',
            width: 100,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 120,
        },
        {
            title: 'Date',
            dataIndex: 'address',
            width: 150,
        },
        {
            title: 'Gender',
            width: 80,
            dataIndex: 'gender',
        },
        {
            title: 'Name Department',
            width: 130,
            dataIndex: 'nameDepartment',
        },
        {
            title: 'Code Department',
            width: 80,
            dataIndex: 'codeDepartment',
        },
        {
            title: 'Actions',
            width: 100,
            dataIndex: 'actions',
        },
    ];
    const handleFix = (code) => {
        console.log(`Button clicked for row with code ${code}`);
    };
    const handleDelete = (code) => {
        console.log(`Button clicked for row with code ${code}`);
    };
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('dataStudent'));
        return localData || [];
    });
    useEffect(() => {
        if (datastudent) {
            setData((prevData) => [
                ...prevData,
                {
                    key: prevData.length,
                    code: datastudent.code,
                    check: <Checkbox />,
                    name: datastudent.name,
                    gender: datastudent.Gender,
                    nameDepartment: datastudent.nameDepartment,
                    codeDepartment: datastudent.codeDepartment,
                    address: `London, Park Lane no.`,
                    actions: (
                        <div className="flex gap-5">
                            <button
                                onClick={() => handleFix(datastudent.code)}
                                className="bg-emerald-400 text-white px-2 rounded-md"
                            >
                                Sửa
                            </button>
                            <button
                                onClick={() => handleDelete(datastudent.code)}
                                className="bg-rose-600 text-white px-2 rounded-md"
                            >
                                Xóa
                            </button>
                        </div>
                    ),
                },
            ]);
            // for (let i = 0; i < 100; i++) {
        }
    }, [datastudent]);
    useEffect(() => {
        localStorage.setItem('dataStudent', CircularJSON.stringify(data));
    }, [data]);
    console.log(data);

    return (
        <div>
            <Search />
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 30,
                }}
                scroll={{
                    y: 540,
                }}
            />
        </div>
    );
};

export default TableList;
