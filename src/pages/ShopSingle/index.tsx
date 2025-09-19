import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import MainProduct from "./Components/MainProduct";
import RelatedProducts from "./Components/RelatedProducts";
import banner from "../../assets/images/Banner-shop-single.jpg";

export default function ShopSingle() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-white min-h-screen pb-16">
      <Banner title="Shop Single" image={banner} />
      <MainProduct productId={id} />
      <RelatedProducts />
    </div>
  );
}
