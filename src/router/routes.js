
export default [
  {
    path: '/',
    exact: true,
    name: '欢迎页',
    componentPath: 'pages/welcome',
    type: 'basic',
    // children: [
    //   {
    //     name: 'login',
    //     name: '登录',
    //     path: '/user/login',
    //     componentPath: './User/login',
    //   },
    // ],
  },
  {
    path: '/task',
    exact: true,
    name: '首页',
    componentPath: 'pages/home',
    type: 'basic',
    children: [
      {
        name: '登录1',
        path: '/day1',
        // type: 'basic',
        children: [
          {
            name: 'login',
            name: '登录2',
            path: '/day2',
            componentPath: 'pages/home',
          }, {
            name: 'login',
            name: '登录3',
            path: '/day3',
            componentPath: 'pages/notFound',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/notfound',
  //   name: '未找到',
  //   componentPath: 'pages/notFound',
  // }
]