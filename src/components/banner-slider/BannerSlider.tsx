import { Carousel } from 'antd';

export default function BannerSlider({ banners }: { banners: string[] }) {
    return (
        <Carousel 
            arrows={true}
            infinite={true} 
            autoplay={true} 
            autoplaySpeed={5000} 
            speed={1000}>
        {
            banners.map((item, index) => {
                return (
                    <div key={index} >
                        <img
                            src={item}
                            alt="Banner picture"
                            loading="lazy"
                            className='object-cover'
                        />
                    </div>
                );
            })
        }
        </Carousel>
    );
}
