import { formList, shoesApi } from "./data"
import ProductCard from "./components/ProductCard/ProductCard"
import Model from "./components/UiComponent/Model"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "./components/UiComponent/Button"
import { Input } from "./components/UiComponent/Input"
import type { IProduct } from "./interfaces"
import { ProductValidation } from "./Validation"
import { MsgError } from "./components/UiComponent/MsgError"


const App = () => {

    const defaultOjb = {
      title: "",
      description: "",
      image: "",
      price: "",
      colors: [],
      category: {
        name: "",
        image: ""
      }
    }

    // **  State */
    const [isOpen, setIsOpen] = useState(false)
    const [product, setproduct] = useState<IProduct>(defaultOjb)
    const [errorMsg, setErrorMsg] = useState({title: "", description: "", image: "", price: ""})

    // ** Handler */
    const closeModal = ()=> setIsOpen(false)
    const openModal = ()=> setIsOpen(true)

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) =>{
      const { value ,name } = event.target
      setproduct({
        ...product,
        [name]: value
      })
      setErrorMsg({
        ...errorMsg,
        [name]: ""
      })
    }

    const onSubmitHandler = (event: FormEvent<HTMLFormElement> ): void => {
      event.preventDefault()
      const errors = ProductValidation({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
      })
      const hasError = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "")
      if (!hasError) {
        setErrorMsg(errors)
        return
      }
    }

    const onCanselHandler = () => {
      setproduct(defaultOjb)
      closeModal()
    }

    //**  Render */
  const productCardList = shoesApi.map(product => <ProductCard key={product.id} product={product}/>)
  const renderFormList = formList.map((form) => <div className="flex flex-col" key={form.id}>
    <label htmlFor={form.id} className="text-lg text-gray-600 mb-0.5">{form.label}</label>
    <Input type={form.type} id={form.id} errorMsg={errorMsg[form.name]} name={form.name} value={product[form.name]} onChange={onChangeHandler}/>
    <MsgError msg={errorMsg[form.name]} />
  </div>)


  return (<>

    <div className="container max-w-[1200px] mx-auto px-5">
      <div className="my-10 flex items-center justify-end px-5">
        <Button className="bg-indigo-600 hover:bg-indigo-700" width="w-fit" onClick={() => openModal()}>build now</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {productCardList}
        <Model isOpen={isOpen} closeModal={closeModal} title="Add a new product">
          <form className="flex flex-col space-y-3" onSubmit={onSubmitHandler}>
            {renderFormList}
            <div className="flex items-center space-x-3">
              <Button className='bg-indigo-600 hover:bg-indigo-700' width='w-full'>submit</Button>
              <Button className='bg-gray-400 hover:bg-gray-500' width='w-full' onClick={onCanselHandler}>cansel</Button>
            </div>
          </form>
        </Model>
      </div>
    </div>
  </>)
}

export default App