import useStorage from '../hooks/useStorage.js';
import Storage from '../components/Storage.jsx';

export default function StoragePage() {
	const { storage, removeFromStorage, clearStorage } = useStorage();

	return (
		<main className='storage-ctn'>
			<h2>Tu lista de pelis</h2>
			{storage.length > 0 ? (
				<button className='clearstorage-btn' onClick={() => clearStorage()}>
					Borrar todo
				</button>
			) : (
				''
			)}
			<Storage storage={storage} removeFromStorage={removeFromStorage} />
		</main>
	);
}
