import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch , searchHandler}) {
  return (
    <div className={styles.search}>
        <input 
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim()) }
        />
        <button onClick={searchHandler}> <FaSearch /></button>
    </div>
  )
}

export default SearchBox