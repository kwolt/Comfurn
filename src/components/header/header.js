import LogoMain from '../logo-main'

import {NavbarHeader} from './navbar-header'

export function Header({ shop, onClick, onLogoClick, cartButtonClass, scrollToInfo }) {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<LogoMain onLogoClick={onLogoClick} />
					<NavbarHeader
						shop={shop}
						onClick={onClick}
						scrollToInfo={scrollToInfo}
						cartButtonClass={cartButtonClass}
					/>
				</div>
			</div>
		</header>
	)
}

// cart__btn-before
