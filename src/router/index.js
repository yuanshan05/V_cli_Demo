import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsType from '@/components/GoodsType'
import Items from '@/components/Items'
import GoodsItem from '@/components/GoodsItem'
import Children from '@/components/Children'

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
      component: GoodsType,
      children: [
        {
          path: 'goodsitem',
          name: 'goodsitem',
          component: GoodsItem
        }
      ]
    },
    {
      path: '/items/:id',
      name: 'Items',
      component: Items
    },
    {
      path: '/child',
      name: 'Child',
      component: Children,
    },
  ]
})
