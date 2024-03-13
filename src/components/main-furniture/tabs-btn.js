export function TabsBtn({ onClick, currentCategory }) {
	const handleClick = category => {
		onClick(category)
	}

	return (
		<div className='tabs__btn'>
			<button
				onClick={() => handleClick('')}
				className={
					currentCategory === '' ? 'tabs__btn-item active' : 'tabs__btn-item'
				}
			>
				Watch all
			</button>
			<button
				onClick={() => handleClick('Chairs and tables')}
				className={
					currentCategory === 'Chairs and tables'
						? 'tabs__btn-item active'
						: 'tabs__btn-item'
				}
			>
				Chairs and tables
			</button>
			<button
				onClick={() => handleClick('Wardrobes')}
				className={
					currentCategory === 'Wardrobes'
						? 'tabs__btn-item active'
						: 'tabs__btn-item'
				}
			>
				Wardrobes
			</button>
			<button
				onClick={() => handleClick('Beds')}
				className={
					currentCategory === 'Beds'
						? 'tabs__btn-item active'
						: 'tabs__btn-item'
				}
			>
				Beds
			</button>
		</div>
	)
}
