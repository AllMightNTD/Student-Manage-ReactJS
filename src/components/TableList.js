import { Space, Switch, Table, Button } from 'antd';
import { Checkbox } from 'antd';
import Search from './Search';
const TableList = () => {
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
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            code: '1512665',
            check: <Checkbox />,
            name: `Edward King ${i}`,
            name: 'Nguyễn Tiến Dũng',
            gender: 'Nam',
            nameDepartment: 'Công nghệ thông tin',
            codeDepartment: 'CNTT',
            address: `London, Park Lane no. ${i}`,
            actions: (
                <div className="flex gap-5">
                    <button
                        onClick={() => handleFix(data[i].code)}
                        className="bg-emerald-400 text-white px-2 rounded-md"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={() => handleDelete(data[i].code)}
                        className="bg-rose-600 text-white px-2 rounded-md"
                    >
                        Xóa
                    </button>
                </div>
            ),
        });
    }

    console.log(data);
    return (
        <div>
            <Search/>
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
