import PruductCard from "./ProductCard.jsx";
import NikeAirMaxBild from "../assets/Nike_AirMax.png";
import AdidasUltraBoostBild from "../assets/Adidas_UltraBoost.png";
import PumaRSXBild from "../assets/Puma_RSX.png";
import NewBalance574Bild from "../assets/NewBalance_574.png";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      thumbnail: NikeAirMaxBild,
      price: 120,
      available: true,
    
    },
    {
      id: 2,
      name: "Adidas Ultra Boost",
      thumbnail: AdidasUltraBoostBild,
      price: 180,
      available: false,
    
    },
    {
      id: 3,
        name: "Puma RSX",
      thumbnail: PumaRSXBild,
      price: 110,
      available: true,

    },
    {
      id: 4,
        name: "New Balance 574",
      thumbnail: NewBalance574Bild,
      price: 100,
      available: true,
    
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <PruductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
