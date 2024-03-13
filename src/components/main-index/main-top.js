export function MainTop({onClick}) {
	return (
		<section className='top'>
			<div className='container'>
				<h1 className='top__title'>Furniture From Comfurn</h1>
				<button onClick={onClick} className='top__btn'>
					Find a furniture
				</button>
			</div>
		</section>
	)
}
