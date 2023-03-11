import React from 'react';

const InputData = () => {
    return (
        <div className="flex items-center justify-center py-5">
            <form className="w-3/5">
                <div className="flex gap-5 items-center">
                    <label htmlFor="" className="flex-1">
                        Mã Sinh Viên
                    </label>
                    <input type="text" placeholder="code" className="w-4/5 border-solid border-2 px-2 outline-none" />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </form>
        </div>
    );
};

export default InputData;
