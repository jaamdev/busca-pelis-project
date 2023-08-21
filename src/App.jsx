import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import HomePage from './pages/Home.jsx';
import StoragePage from './pages/Storage.jsx';
import Footer from './components/Footer.jsx';
import { MoviesProvider } from './context/movies.jsx';
import { StorageProvider } from './context/storage';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
	return (
		<MoviesProvider>
			<StorageProvider>
				<Header />
				<Nav />
				<Routes>
					<Route path='/' Component={HomePage} />
					<Route path='/storage' Component={StoragePage} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
				<Footer />
			</StorageProvider>
		</MoviesProvider>
	);
}
