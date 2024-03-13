import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { MainFurniture } from './components/main-furniture/main-furniture'
import { Main } from './components/main-index/main'
import './style/App.css'

function App() {
	const [cartButtonClass, setCartButtonClass] = useState('cart__btn')
	const [shopIn, setShopIn] = useState(false)

	const updateCartButtonClass = liked => {
		if (liked) {
			setCartButtonClass('cart__btn-before')
		} else {
			setCartButtonClass('cart__btn')
		}
	}

	const handelClickShop = () => {
		setShopIn(!shopIn)
	}
	const handleLogoClick = () => {
		setShopIn(false)
	}

	return (
		<Router>
			<div className='wrapper'>
				<Header
					shop={shopIn}
					onClick={handelClickShop}
					onLogoClick={handleLogoClick}
					cartButtonClass={cartButtonClass}
				/>
				{shopIn ? (
					<MainFurniture updateCartButton={updateCartButtonClass} />
				) : (
					<Main onClick={handelClickShop} />
				)}
				<Footer onLogoClick={handleLogoClick} />
			</div>
		</Router>
	)
}

export default App
