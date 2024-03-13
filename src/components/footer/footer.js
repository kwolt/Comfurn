
import FooterMenu from './footer-menu'
import FooterSocial from './footer-social'

export function Footer({ onLogoClick }) {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer_inner'>
					<FooterSocial onLogoClick={onLogoClick}/>
					<FooterMenu/>
				</div>
			</div>
		</footer>
	)
}
