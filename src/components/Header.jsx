import styles from './Header.module.css'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <h1>Recipe Application</h1>
            <div className={styles.searchBox}>
                <input type="text" placeholder='Search Recipes' />
            </div>
        </header>
    );
}
 
export default Header;