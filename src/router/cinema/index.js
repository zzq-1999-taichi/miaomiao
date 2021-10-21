export default {
    path: '/cinema',
    component: () => import('@/views/Cinema'),
    children: [
        {
            path: 'quancheng',
            component: () => import('@/components/Quancheng'),
        },
        {
            path: 'tese',
            component: () => import('@/components/Tese'),
        },
        {
            path: 'pinpai',
            component: () => import('@/components/Pinpai'),
        },
        {
            path: '/cinema',
            redirect: '/cinema/quancheng'
        },
    ]
}