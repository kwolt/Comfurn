import { FacebookIcon } from "../../img/img-icon/facebook-icon";
import { InstagramIcon } from "../../img/img-icon/instagram-icon";
import { TelegramIcon } from "../../img/img-icon/telegram-icon";
import { TwitterIcon } from "../../img/img-icon/twitter-icon";
import LogoMain from "../logo-main";

export default function FooterSocial({onLogoClick}) {
	return (
		<div className='soc'>
			<LogoMain onLogoClick={onLogoClick} />

			<ul className='soc__list'>
				<li className='soc__list-item'>
					<button>
						<FacebookIcon />
					</button>
				</li>
				<li className='soc__list-item'>
					<button>
						<InstagramIcon />
					</button>
				</li>
				<li className='soc__list-item'>
					<button>
						<TelegramIcon />
					</button>
				</li>
				<li className='soc__list-item'>
					<button>
						<TwitterIcon />
					</button>
				</li>
			</ul>
		</div>
	)
}
