/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
    // Home
    {
        path: '/',
        name: 'home.index',
        component: () =>
            import ('@/views/Home/Index.vue'),

        // If the user needs to be authenticated to view this page
        // meta: {
        //     auth: true,
        // },
    },
    // Detail
    {
        path: '/chi-tiet-su-kien/:id',
        name: 'detail.index',
        component: () =>
            import ('@/views/Detail/Index.vue'),
    },
    // Account
    {
        path: '/account',
        name: 'account.index',
        component: () =>
            import ('@/views/Account/Index.vue'),

        // If the user needs to be authenticated to view this page.
        // meta: {
        //     auth: true,
        // },
    },

    // Login
    {
        path: '/login',
        name: 'login.index',
        component: () =>
            import ('@/views/Login/Index.vue'),

        // If the user needs to be a guest to view this page.
        meta: {
            guest: true,
        },
    },

    // Register
    {
        path: '/register',
        name: 'register.index',
        component: () =>
            import ('@/views/Register/Index.vue'),

        // If the user needs to be a guest to view this page.
        meta: {
            guest: true,
        },
    },

    {
        path: '/',
        redirect: '/',
    },

    {
        path: '/*',
        redirect: '/',
    },
];