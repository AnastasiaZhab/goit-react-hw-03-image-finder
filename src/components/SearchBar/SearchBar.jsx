import s from './SearchBar.module.css';

const SearchBar = (onSubmit) => {
    return (
        <header className={s.SearchBar}>
        <form class="form">
            <button type="submit" class="button">
            <span class="button-label">Search</span>
            </button>

            <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            />
        </form>
        </header>

    )
}

export default SearchBar;