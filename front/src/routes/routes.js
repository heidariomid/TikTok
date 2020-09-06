import NotFound from '../Components/NotFound';
import Users from '../Components/User/Users';
const routes = [
	{
		path: '/user',
		exact: true,
		component: Users,
	},
	{
		component: NotFound,
	},
];

export default routes;
