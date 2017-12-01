import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsType from '@/components/GoodsType'
import Items from '@/components/Items'

Vue.use(Router)
//const goodsType=require.ensure([], () => r(require('../Components/GoodsType')), 'goodstype')
//const Bar = { template: '<div>bar</div>' }
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello',
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods',
      name: 'goodstype',
      component: GoodsType
    },
    {
      path: '/items/:id',
      name: 'Items',
      component: Items
    }
  ]
})
