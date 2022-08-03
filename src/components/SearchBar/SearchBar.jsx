import s from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';

const SearchBar = (onSubmit) => {
    return (
        <header className={s.SearchBar}>
        <form className={s.SearchForm}>
            <button type="submit" className={s.Button}>
                    {/* <span className={s.Label}> */}
                    <BiSearch size='2em'/>
                        {/* </span> */}
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