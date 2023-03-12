import Search from './components/Search';
import TableList from './components/TableList';
import InputData from './components/InputData';
import ButtonSet from './components/ButtonSet';
import Navbar from './components/DefaultLayout/Navbar';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './router/routes';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import { ToastContainer } from 'react-toastify';
import React, { Fragment, useContext, useState } from 'react';
// import { Routers } from 'react-router-dom';
import DataContext from './components/DataContext';
function App() {
    const [datastudent, setData] = useState(null);
    const setDataFromChild = (childData) => {
        setData(childData);
    };
    const contextValue = { datastudent, setDataFromChild };
    console.log(contextValue);
    return (
        <>
            <ToastContainer />
            <Routes>
                {publicRoutes.map((route, index) => {
                    // Khong co layout => default layout
                    const Page = route.component;

                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DataContext.Provider value={contextValue}>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </DataContext.Provider>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
