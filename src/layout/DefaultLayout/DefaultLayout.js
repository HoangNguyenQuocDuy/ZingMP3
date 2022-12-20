import classNames from 'classnames/bind';

import styles from './defaultLayout.module.scss';
import { Header, Sidebar } from '~/layout/components';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div>
                <Header />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
