import { Space, Switch, Table, Button } from 'antd';
import { Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import DataContext from './DataContext';
import Search from './Search';
import { AiOutlineSearch } from 'react-icons/ai';
import $ from 'jquery';
const TableList = () => {
    const { datastudent } = useContext(DataContext);
    const [searchValue, setSearchValue] = useState('');
    // State giả để lưu kết quả tìm kiếm
    const [searchResult, setSearchResult] = useState([]);
    const handleDelete = (code) => {
        console.log(`Button clicked for row with code ${code}`);
        console.log(code);
        console.log(`Button clicked for row with code ${code}`);
        const indexDelete = data.findIndex((item) => item.code === code);
        console.log(indexDelete);
        data.splice(indexDelete, 1);
        localStorage.setItem('dataStudent', JSON.stringify(data));
        setData([...data]);
    };
    const localDatas = JSON.parse(localStorage.getItem('dataStudent'));
    console.log(localDatas);
    const [data, setData] = useState(localDatas ? localDatas : []);

    // Add new student
    useEffect(() => {
        if (datastudent) {
            setData((prevData) => [
                ...prevData,
                {
                    key: prevData.length,
                    code: datastudent.code,
                    check: <Checkbox />,
                    name: datastudent.name,
                    gender: datastudent.gender,
                    nameDepartment: datastudent.nameDepartment,
                    codeDepartment: datastudent.codeDepartment,
                    date: datastudent.date,
                    actions: (
                        <div className="flex gap-5">
                            <Link
                                to={`/fix-student/${datastudent.code}`}
                                className="bg-emerald-400 text-white px-2 rounded-md"
                            >
                                Sửa
                            </Link>
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
        }
    }, [datastudent]);

    // Add student to LocalStorage
    useEffect(() => {
        localStorage.setItem('dataStudent', JSON.stringify(data));
    }, [data]);

    // Xử lý tìm kiếm dữ liệu
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };
    const handleSearchData = () => {
        const dataSearch = data.filter(
            (item) =>
                item.code.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
                item.name.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
                item.date.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
                item.gender.toLowerCase().includes(searchValue.trim().toLowerCase()),
        );
        setSearchResult(dataSearch);
    };

    // Lớp giả hiển thị kết quả tìm kiếm
    const renderData = searchResult.length > 0 ? searchResult : data;

    var usersItemcheckbox = $('input[name="usersID[]"');
    console.log(usersItemcheckbox);

    // Lấy ra số lượng đang check
    usersItemcheckbox.change(function () {
        console.log(123);
        const checkedCount = $('input[name="usersID[]"]:checked').length;
        console.log(checkedCount);
    });
    const handleDeleteAll = () => {
        
    };
    return (
        <div>
            <div className="w-full flex items-center py-5 px-5">
                <button onClick={handleDeleteAll} className="bg-rose-600 text-white px-2 rounded-md">
                    Xóa Tất Cả
                </button>
                <div className="block border w-full  flex shadow-sm border-slate-300 overflow-hidden rounded-xl">
                    <input
                        type="text"
                        name="search"
                        value={searchValue}
                        onChange={handleSearch}
                        className="px-3 outline-none bg-white lock w-full rounded-md sm:text-sm"
                        placeholder="Input your text search"
                    />
                    <button
                        onClick={handleSearchData}
                        className="px-2 py-2 w-[70px] flex items-center justify-center bg-cyan-400 font-bold rounded-xl"
                    >
                        <AiOutlineSearch className="text-2xl text-white " />
                    </button>
                </div>
            </div>
            <table className="px-5">
                <tr className="w-full">
                    <th>Check</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Gender</th>
                    <th>Name DePartment</th>
                    <th>CodeDP</th>
                    <th>Actions</th>
                </tr>

                {renderData.map((item) => (
                    <tr className="w-full">
                        <td key={item.key} className="">
                            <input type="checkbox" name="usersID[]" />
                        </td>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.gender}</td>
                        <td>{item.nameDepartment}</td>
                        <td>{item.codeDepartment}</td>
                        <td>
                            <div className="flex gap-5">
                                <Link
                                    to={`/fix-student/${item.code}`}
                                    className="bg-emerald-400 text-white px-2 rounded-md"
                                >
                                    Sửa
                                </Link>
                                <button
                                    onClick={() => handleDelete(item.code)}
                                    className="bg-rose-600 text-white px-2 rounded-md"
                                >
                                    Xóa
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TableList;
