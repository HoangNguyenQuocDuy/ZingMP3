import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './menu.module.scss';
import '~/asset/fonts/vuesax-icon-main/style.css'

const cx = classNames.bind(styles);

function MenuItem({ title, mainIcon, subIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('main-icon')}>{mainIcon}</span>
            <span className={'title'}>{title}</span>
            {subIcon && <span className={cx('sub-icon')}>{subIcon}</span>}
        </NavLink>
    );
}

export default MenuItem;
