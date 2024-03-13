import { useState } from 'react'
import { cards_info } from '../constants'
import { Card } from './card'
import { TabsBtn } from './tabs-btn'

export function MainFurniture({ updateCartButton }) {
	const [currentCategory, setCurrentCategory] = useState('')

	const handleTabClick = category => {
		setCurrentCategory(category)
	}
	return (
		<main className='main'>
			<div className='container'>
				<h2 className='furniture-title'>Choose your furniture</h2>
				<div className='tabs'>
					<TabsBtn onClick={handleTabClick} currentCategory={currentCategory} />
					<div className='tabs__content'>
						<div className='tabs__content-item'>
							{cards_info
								.filter(
									card =>
										currentCategory === '' || card.category === currentCategory
								)
								.map(card => (
									<Card
										key={card.id}
										name={card.name}
										img={card.img}
										category={card.category}
										price={card.price}
										updateCartButton={updateCartButton}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}



