//import items here


const Header = () => {
    return (
        <header>
            <div className="logo">
                <p>Reddit Minimal</p>
            </div>
            <form className="search">
                <input 
                    type="text"
                    placeholder="Search"
                    aria-label="Search posts"
                />
                <button type="submit" aria-label="Search">
                    Search 2
                </button>
            </form>
        </header>
    );
};

export default Header;