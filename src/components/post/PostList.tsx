import { Post } from "@/models/post/post.model";
import PostCard from "./PostCard";
import { Row, Col } from "antd";
export default function PostList() {
  const posts: Post[] = [
    {
      id: 1,
      image: "/assets/images/poster_1.webp",
      title: "Cán Mốc 280 Cửa Hàng - FStore Chinh Phục Mọi Miền Đất Nước",
      description:
        "Thương hiệu thời trang Việt Nam YODY vừa ghi dấu ấn mới trong hành trình phát triển của mình khi chính thức cán mốc 280 cửa hàng trên toàn quốc",
    },
    {
      id: 2,
      image: "/assets/images/poster_2.webp",
      title: "Nhìn Lại Hành Trình Chung Tay Cùng Đồng Bào Vùng Bão Lũ",
      description:
        "YODY biết ơn khách hàng đã tin tưởng, đồng hành cùng YODY trong suốt thời gian qua. Sự ủng hộ và tình cảm của khách hàng khắp nơi gửi về chính là nguồn động lực to lớn để YODY tiếp tục lan tỏa những giá trị tốt đẹp đến cộng đồng. ",
    },
  ];
  return (
    <Row gutter={16}>
      {posts.map((item) => {
        return (
          <Col span={12} key={item.id}>
            <PostCard post={item} />
          </Col>
        );
      })}
    </Row>
  );
}
