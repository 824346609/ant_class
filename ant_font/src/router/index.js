const routers = [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['../components/Home.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/Login.vue'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: (resolve) => require(['../components/Register.vue'], resolve),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/home',
      name: 'user_home',
      component: (resolve) => require(['../components/Home_login.vue'], resolve),
      meta: {
        title: '用户主页'
      }
    },
    {
      path: '/testlist',
      name: 'test_list',
      component: (resolve) => require(['../components/TestList.vue'], resolve),
      meta: {
        title: '测试列表'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: (resolve) => require(['../components/Test.vue'], resolve),
      meta: {
        title: '查看测试'
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: (resolve) => require(['../components/Admin.vue'], resolve),
      meta: {
        title: '管理页面'
      }
    },
    {
      path: '/admin_test',
      name: 'admin_test',
      component: (resolve) => require(['../components/Admin_test.vue'], resolve),
      meta: {
        title: '试卷详情'
      }
    },
    {
      path: '/admin_testlist',
      name: 'testlist',
      component: (resolve) => require(['../components/Admin_testlist.vue'], resolve),
      meta: {
        title: '管理试卷'
      }
    },
    {
      path: '/show',
      name: 'show',
      component: (resolve) => require(['../components/show.vue'], resolve),
    }
  ];
  export default routers;

