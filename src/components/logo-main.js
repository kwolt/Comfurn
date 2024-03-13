import { LogoIcon } from '../img/img-icon/logo-icon'

export default function LogoMain({ onLogoClick }) {
	return (
		<div onClick={onLogoClick} className='logo'>
			<LogoIcon className='logo__svg' />
			<p className='logo_name'>Comfurn</p>
		</div>
	)
}
