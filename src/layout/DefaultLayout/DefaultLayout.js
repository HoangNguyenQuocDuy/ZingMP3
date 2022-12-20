import classNames from "classnames/bind";

import styles from  './defaultLayout.module.scss';
import { Header, Sidebar } from "~/layout/components";

const cx = classNames.bind(styles)

function DefaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <Sidebar />
            <Header />
        </div>
    );
}

export default DefaultLayout;