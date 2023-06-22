import React, {useState} from 'react';
import './SearchField.scss'
const SearchField = ({onSubmit}) => {
    const [keyword, setKeyword] = useState();

    return (
        <form onSubmit={(e) => onSubmit(e, keyword)}>
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button>Search</button>
        </form>
    )
} 

export default SearchField