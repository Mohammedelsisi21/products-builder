import { formList, shoesApi } from "./data"
import ProductCard from "./components/ProductCard/ProductCard"
import Model from "./components/UiComponent/Model"
import { useState } from "react"
import { Button } from "./components/UiComponent/Button"
import { Input } from "./components/UiComponent/Input"


const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

  const productCardList = shoesApi.map(product => <ProductCard key={product.id} product={product}/>)
  const renderFormList = formList.map(form => <div className="flex flex-col">
    <label htmlFor={form.id} className="text-lg text-gray-600 mb-0.5">{form.label}</label>
    <Input type={form.type} name={form.name} />
  </div>)
  return (<>

    <div className="container max-w-[1200px] mx-auto px-5">
      <div className="my-10 flex items-center justify-end px-5">
        <Button className="bg-indigo-600 hover:bg-indigo-700" width="w-fit" onClick={() => openModal()}>build now</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {productCardList}
        <Model isOpen={isOpen} closeModal={closeModal} title="Add a new product">
          <div className="flex flex-col space-y-3">
            {renderFormList}
            <div className="flex items-center space-x-3">
              <Button className='bg-indigo-600 hover:bg-indigo-700' width='w-full'>Add</Button>
              <Button className='bg-gray-400 hover:bg-gray-500' width='w-full' onClick={() => closeModal()}>cansel</Button>
            </div>
          </div>
        </Model>
      </div>
    </div>
  </>)
}

export default App