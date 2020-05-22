import seller from "pages/seller";
import ratings from "pages/ratings";
import goods from "pages/goods";


export default [{
        path: '/ratings',
        component: ratings
    },
    {
        path: '/goods',
        component: goods
    },
    {
        path: '/seller',
        component: seller
    },
    {
        path: "/",
        redirect: "/goods"
    }
]