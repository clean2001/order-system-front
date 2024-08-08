// import ProductListComponent from '@/components/ProductListComponent.vue';
import ProductListManage from '@/views/ProductListManage.vue';
import ProductList from '@/views/ProductList.vue';


export const productRouter = [
    {
        path: '/',
        name: 'Home', // ⭐️ 라우터에서 name은 중복되면 안된다!
        component: ProductList
    },
    {
        path: '/product/list',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/product/manage',
        name: 'ProductListManage',
        component: ProductListManage
    },

]