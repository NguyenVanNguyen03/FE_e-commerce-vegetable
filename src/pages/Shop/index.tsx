import Banner from "../../components/Banner";
import banner from "../../assets/images//shop/Banner-shop.png";
import ShopProductGrid from "./components/ShopProductGrid";
export default function Shop() {
  return (
    <div className="bg-white">
      <Banner title="Shop Single" image={banner} />
      <ShopProductGrid />
    </div>
  );
}
