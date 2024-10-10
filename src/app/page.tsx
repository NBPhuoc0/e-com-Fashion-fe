import BannerSlider from "@/components/banner-slider/banner-silder";
import PostList from "@/components/post/post-list";
import { Col, Grid, Row } from "antd";

export default function Home() {
  const banners: string[] = [
    '/assets/images/banner_1.webp',
    '/assets/images/banner_2.png',
    '/assets/images/banner_3.png',
    '/assets/images/banner_4.webp',
  ]
  return (
    <main>
      <div className='sectionContainer'>
        <BannerSlider banners={banners}/>

        <div className="w-full my-5">
          <img loading="lazy" src="/assets/images/banner_ads.webp" alt="banner" className="w-full h-full object-cover"/>
        </div>

        <Row gutter={16}>
            <Col span={12}>
              <div className="w-full mb-4">
                <img loading="lazy" src="/assets/images/banner_collection_1.webp" alt="collection banner" className="w-full h-full"/>
              </div>
            </Col>
            <Col span={12}>
              <div className="w-full mb-4">
                <img loading="lazy" src="/assets/images/banner_collection_2.webp" alt="collection banner" className="w-full h-full"/>
              </div>
            </Col>
            <Col span={12}>
              <div className="w-full mb-4">
                <img loading="lazy" src="/assets/images/banner_collection_3.webp" alt="collection banner" className="w-full h-full"/>
              </div>
            </Col>
            <Col span={12}>
              <div className="w-full mb-4">
                <img loading="lazy" src="/assets/images/banner_collection_4.webp" alt="collection banner" className="w-full h-full"/>
              </div>
            </Col>
        </Row>
      </div>

      <div className="w-full bg-black text-white font-bold text-4xl text-center p-5">
          <span>#FStore tự hào thương hiệu Việt</span>
      </div>

      <div className="my-5 sectionContainer">
        <PostList/>
      </div>
    </main>
  );
}
