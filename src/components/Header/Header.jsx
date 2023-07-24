//import items here
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';


const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };
    
    return (
        <header>
            <div className="logo">
                <p>Reddit Minimal</p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input 
                    type="text"
                    placeholder="Search"
                    aria-label="Search posts"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                />
                <button type="submit" aria-label="Search" onClick={onSearchTermSubmit}>
                    Search
                </button>
            </form>
        </header>
    );
};

export default Header;