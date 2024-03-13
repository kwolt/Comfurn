import { Link } from 'react-router-dom'
import { CartIcon } from '../../img/img-icon/cart-icon'
import { EnterIcon } from '../../img/img-icon/enter-icon'

export function NavbarHeader({ shop, onClick, cartButtonClass }) {
	const scrollToInfo = () => {
		const infoElement = document.getElementById('info')
		if (infoElement) {
			infoElement.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<nav className='header__menu'>
			<ul className='menu__list'>
				<li className='menu__list-item'>
					<button onClick={onClick} className='menu__list-btn'>
						{shop ? (
							<Link to='/main'>Home</Link>
						) : (
							<Link to='/main-furniture'>new furniture</Link>
						)}
					</button>
				</li>
				{shop ? null : (
					<li className='menu__list-item'>
						<button onClick={scrollToInfo} className='menu__list-btn'>
							info
						</button>
					</li>
				)}
				<li className='menu__list-item'>
					<button className='enter__btn'>
						<EnterIcon />
					</button>
				</li>

				{shop ? (
					<li className='menu__list-item'>
						<button className={cartButtonClass}>
							<CartIcon />
						</button>
					</li>
				) : null}
			</ul>
		</nav>
	)
}
