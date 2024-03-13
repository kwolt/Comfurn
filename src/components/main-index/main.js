import {MainInfo} from './main-info'
import { MainTop } from './main-top'
import { SwiperComponent } from './swiper'

export function Main({ onClick }) {
	return (
		<main className='main'>
			<MainTop onClick={onClick} />
			<SwiperComponent />
			<MainInfo />
		</main>
	)
}
