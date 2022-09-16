import Login from './Components/Login';
import Register from './Components/Register';
import styles from './Header.module.css';


const Header = ({onClickModalRegister, onClickOpenLoginModal}) => {
    
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogo}>
                <div className={styles.logoImage}></div>
                <p className={styles.wikiuu}>Wikiuu</p>
            </div>
            <div className={styles.headerButtons}>
                <Login handleClickOpenLoginModal={onClickOpenLoginModal}></Login>
                <Register handleClickModal={onClickModalRegister}></Register>
            </div>
        </div>
    )
}

export default Header;