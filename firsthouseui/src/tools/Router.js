import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
// import Order from '../components/order/Order.vue'
// import Goods from '../components/goods/Goods.vue'
// import AddGood from '../components/goods/AddGood.vue'
// import GoodCategory from '../components/goods/GoodCategory.vue'
// import ManagerList from '../components/manager/ManagerList.vue'
// import ManagerOrder from '../components/manager/ManagerOrder.vue'
// import ManagerReqList from '../components/manager/ManagerReqList.vue'
// import TradeInfo from '../components/financial/TradeInfo.vue'
// import TradeList from '../components/financial/TradeList.vue'
// import DataCom from '../components/financial/DataCom.vue'
import Store from '../tools/Storage'

const Router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/login',
            component:Login,
            name:"login"
        },
        {
            path:'/home',
            component:Home,
            name:"home"
        }
    ]
})

Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name == 'login') {
        return true;
    } else {
        return {name: 'login'}
    }
    
})

export default Router;