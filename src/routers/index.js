import { Discovery, Follow, KindOfMusic, MV, NewSongs, Personal, Radio, Top100, ZingChart } from '~/pages';
import routers from '~/config/routers';

export const publicRoutes = [
    { path: routers.discovery, component: Discovery },
    { path: routers.follow, component: Follow },
    { path: routers.mv, component: MV },
    { path: routers.top100, component: Top100 },
    { path: routers.zingChart, component: ZingChart },
    { path: routers.radio, component: Radio },
    { path: routers.newSongs, component: NewSongs },
    { path: routers.kindOfMusic, component: KindOfMusic, layout: null },
];

export const privateRoutes = [{ path: routers.personal, component: Personal }];
