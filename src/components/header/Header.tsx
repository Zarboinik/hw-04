import React, {FC} from "react";
import './header.styles.scss'
import PageIcon from "../../static/PageIcon";

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='inner-header'>
                    <a href='/' className='logo'> <PageIcon/></a>
                    <div className='right-side-header'>
                        <ul className='mnu-top'>
                            <li><a href="/category">Категории</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;