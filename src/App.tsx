import { shoesApi } from "./data"
import ProductCard from "./components/ProductCard/ProductCard"


const App = () => {

  const productCardList = shoesApi.map(product => <ProductCard key={product.id} product={product}/>)

  return (<>
    <div className="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {productCardList}
    </div>
  </>)
}

export default App