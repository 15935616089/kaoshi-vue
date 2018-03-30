import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Welcome from '@/components/Welcome'
import addStu from '@/components/addStu'
import addFangxiang from '@/components/addFangxiang'
import selectFangxiang from '@/components/selectFangxiang'
import editFangxiang from '@/components/editFangxiang'
import Login from '@/components/Login'
import addClasses from '@/components/addClasses'


Vue.use(Router)

var router=new Router({
  routes: [
    {
      path: '/',
      component:Main,
      children:[

          {
            path:"",
            component:Welcome
          },
          {
            path:"/addStu",
            component:addStu
          },
          {
            path:"/addFangxiang",
            component:addFangxiang
          },
          {
              path:"/selectFangxiang",
              component:selectFangxiang
          },
          {
              path:"/editFangxiang/:fid",
              component:editFangxiang
          },
          {
            path:"/addClasses",
            component:addClasses

          }

      ]
    },
      {
          path:"/login",
          component:Login
      }
  ]
})

router.beforeEach(function (to,from,next) {
    if(to.path=="/login"){
        next();
    }else{
        if(sessionStorage.login=="yes"){
            next();
        }else{
            next("/login");
        }
    }
})

export default router
