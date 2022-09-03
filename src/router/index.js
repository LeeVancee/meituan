import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/myHome/MyHome.vue')
    },
    {
      path: '/cart',
      component: () => import('../views/myCart/MyCart.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/mine',
      component: () => import('../views/mine/Mine.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/order',
      component: () => import('../views/myOrder/MyOrder.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/shop',
      component: () => import('../views/shop/MyShop.vue')
    },
    {
      path: '/createorder',
      component: () => import('../views/createOrder/CreateOrder.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/address',
      component: () => import('../views/address/Address.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/addressedit',
      component: () => import('../views/addressEdit/AddressEdit.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/register',
      component: () => import('../views/register/Register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.isLogin === '1') {
      next()
    } else {
      Toast('请先登录')
      router.push('./login')
    }
  } else {
    next()
  }
})

export default router
