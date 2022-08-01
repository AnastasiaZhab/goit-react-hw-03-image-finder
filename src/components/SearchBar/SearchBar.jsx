import s from './SearchBar.module.css';

const SearchBar = (onSubmit) => {
    return (
        <header className={s.SearchBar}>
        <form className={s.SearchForm}>
            <button type="submit" className={s.Button}>
            <span className={s.Label}>Search</span>
            </button>

            <input
            className={s.Input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            />
        </form>
        </header>

    )
}

export default SearchBar;