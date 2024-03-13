import { useState } from 'react'
import { HeartIcon } from '../../img/img-icon/HeartIcon'

export function Card({ name, img, category, price, updateCartButton }) {
	const [liked, setLiked] = useState(false)

	const handleClickLike = () => {
		setLiked(!liked)
		updateCartButton(!liked)
	}
	return (
		<div className='card'>
			<div className='card__img-container'>
				<img src={img} alt='...' className='card-img' />
			</div>
			<p className='category'>{category}</p>
			<div className='card__content'>
				<h4 className='card__title'>{name}</h4>
				<p className='card__price'>{price}</p>
			</div>
			<div className='btn__card-container'>
				<button className='card__btn-buy'>Buy</button>
				<button className='card__btn-like' onClick={handleClickLike}>
					<HeartIcon className={liked ? 'heart_svg liked' : 'heart_svg'} />
				</button>
			</div>
		</div>
	)
}
