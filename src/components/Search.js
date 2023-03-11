import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Search = () => {
    const [search, setvalueSearch] = useState();
    return (
        <div className="w-full flex items-center py-5 px-5">
            <div className="block border w-full  flex shadow-sm border-slate-300 overflow-hidden rounded-xl">
                <input
                    type="text"
                    name="search"
                    className="px-3 outline-none bg-white lock w-full rounded-md sm:text-sm"
                    placeholder="Input your text search"
                />
                <button className="px-2 py-2 w-[70px] flex items-center justify-center bg-cyan-400 font-bold rounded-xl">
                    <AiOutlineSearch className="text-2xl text-white " />
                </button>
            </div>
        </div>
    );
};

export default Search;
