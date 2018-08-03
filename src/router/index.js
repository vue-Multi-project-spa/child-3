import HelloWorld from '@/components/HelloWorld'
import id from '@/components/id'

const routers = [
    {
		path: '/child3',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
    	path: '/child3/:id',
    	component:id
    }
]

export default routers