import classNames from 'classnames/bind';
import Menu, { MenuItem } from '~/components/Menu';

import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'Cá nhân'} mainIcon={<i class="isax-music-playlist1"></i>} subIcon={<i class="isax-play-cricle"></i>}/>
                <MenuItem title={'Cá nhân'} mainIcon={<i class="isax-music-playlist1"></i>} subIcon={<i class="isax-play-cricle"></i>}/>
                <MenuItem title={'Cá nhân'} mainIcon={<i class="isax-music-playlist1"></i>} subIcon={<i class="isax-play-cricle"></i>}/>
            </Menu>
        </div>
    );
}

export default Sidebar;
