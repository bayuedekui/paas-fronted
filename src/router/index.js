import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ServicesMarketing from '../pages/ServicesMarketing/ServicesMarketing'
import LoginOrRegister from "../pages/User/Login";
import Forget from '../pages/User/Forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/servicesmarketing"
    },
    {
      path: "/servicesmarketing",
      name: "ServicesMarketing",
      component: ServicesMarketing
    },
    {
      path: "/loginorregister",
      name: "LoginOrRegister",
      component: LoginOrRegister
    },
    {
      path:"/forget",
      name:"Forget",
      component:Forget
    }
  ]
});
