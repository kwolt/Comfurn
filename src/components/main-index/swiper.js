/* eslint-disable jsx-a11y/alt-text */

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination,} from 'swiper/modules'

import wallpaper1 from '../../img/img__wallpaper/wallpaper1.jpg'
import wallpaper2 from '../../img/img__wallpaper/wallpaper2.jpg'
import wallpaper3 from '../../img/img__wallpaper/wallpaper3.jpg'
import wallpaper4 from '../../img/img__wallpaper/wallpaper4.jpg'

export function SwiperComponent() {
	return (
		<>
			<Swiper
				effect={'flip'}
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src={wallpaper1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={wallpaper2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={wallpaper3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={wallpaper4} />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
