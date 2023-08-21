export default function Storage({ storage, removeFromStorage }) {
	if (storage.length === 0) {
		return (
			<section className='storage-ctn'>
				<h3>La lista está vacía 😕 </h3>
			</section>
		);
	} else {
		return (
			<ul>
				{storage.map(item => (
					<li key={item.id}>
						<img src={item.img} alt={`Póster de la película ${item.title}`} />
						<h2>{item.title}</h2>
						<h3>Año: {item.year}</h3>
						<button
							className='removefromstorage-btn'
							title='Borrar peli de la lista.'
							onClick={() => removeFromStorage(item)}
						>
							x
						</button>
					</li>
				))}
			</ul>
		);
	}
}
