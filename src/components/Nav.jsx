import { NavLink } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className='nav'>
			<NavLink to='/'>Inicio</NavLink>
			<NavLink to='/storage'>Mi lista</NavLink>
		</nav>
	);
}
