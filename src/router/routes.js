import FixData from '../components/FixData';
import InputData from '../components/InputData';
import TableList from '../components/TableList';

export const publicRoutes = [
    {
        path: '/',
        component: TableList,
    },
    {
        path: '/add',
        component: InputData,
    },
    {
        path: '/fix-student/:code',
        component: FixData,
    },
];
