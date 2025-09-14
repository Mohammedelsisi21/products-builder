import { categories, colors, formList, shoesApi } from "./data"
import ProductCard from "./components/ProductCard/ProductCard"
import Model from "./components/UiComponent/Modal"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "./components/UiComponent/Button"
import { Input } from "./components/UiComponent/Input"
import type { IProduct } from "./interfaces"
import { ProductValidation } from "./Validation"
import { MsgError } from "./components/UiComponent/MsgError"
import { DarkMod } from "./components/UiComponent/DarkMod"
import { SpanColor } from "./components/UiComponent/SpanColor"
// import { BtnUp } from "./components/UiComponent/BtnUp"
import { v4 as uuid } from "uuid"
import Select from "./components/UiComponent/Select"
import type { TProducatNames } from "./types"
import toast, { Toaster } from "react-hot-toast"


const App = () => {
     // * handel btnup */


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
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
    const [isOpenConfirmModal, setISOpenConfirmModal] = useState<boolean>(false)

    const [Productindex, setProductindex] = useState<number>(0)
      const isDark = document.documentElement.classList.contains("dark")


    const [products, setProducts] = useState<IProduct[]>(shoesApi)
    const [product, setproduct] = useState<IProduct>(defaultOjb)
    const [productToEdit, setProductToEdit] = useState<IProduct>(defaultOjb)
    const [errorMsg, setErrorMsg] = useState({title: "", description: "", image: "", price: ""})
    const [tempColor, setTempColor] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    console.log(productToEdit)
    // ** Handler */
    const closeModal = ()=> setIsOpen(false)
    const openModal = ()=> setIsOpen(true)
    const closeEditModal = ()=> setIsOpenEditModal(false)
    const openEditModal = ()=> setIsOpenEditModal(true)
    const closeConfirmModal = ()=> setISOpenConfirmModal(false)
    const openConfirmModal = ()=> setISOpenConfirmModal(true)


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
    const onChangeEditHandler = (event : ChangeEvent<HTMLInputElement>) =>{
      const { value ,name } = event.target
      setProductToEdit({
        ...productToEdit,
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

      setProducts(prev => [ {...product, id: uuid(), colors: tempColor, category: selectedCategory} ,...prev])
      setproduct(defaultOjb)
      setTempColor([])
      closeModal()
      toast.success("Product Added successfully!",{
      icon: '👏',
      style: {
        background: isDark ? 'white' : 'black',
        color: isDark ? 'black' : 'white'
      }
    })
    }


  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement> ): void => {
      event.preventDefault()
      const errors = ProductValidation({
        title: productToEdit.title,
        description: productToEdit.description,
        image: productToEdit.image,
        price: productToEdit.price,
      })
      const hasError = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "")
      if (!hasError) {
        setErrorMsg(errors)
        return
      }

    const updataEdit = [...products]
    updataEdit[Productindex] = {...productToEdit, colors: tempColor.concat(productToEdit.colors)}
    setProducts(updataEdit)
    setProductToEdit(defaultOjb)
    setTempColor([])
    closeEditModal()
    toast.success("Product Edit successfully!",{
      icon: '👏',
      style: {
        background: isDark ? 'white' : 'black',
        color: isDark ? 'black' : 'white'
      }
    })
    }


    const onCanselHandler = () => {
      setProductToEdit(defaultOjb)
      
      closeModal()
    }

    const removepProduct = () => {
      const fillterDeleted = products.filter(product => product.id != productToEdit.id)
      setProducts(fillterDeleted)
      closeConfirmModal()
      toast.success("Product deleted successfully!",{
        icon: '👏',
        style: {
          background: isDark ? 'white' : 'black',
          color: isDark ? 'black' : 'white'
      }
      })
    }

    //**  Render */
  const productCardList = products.map((product, idx) =>
    <ProductCard
      idex={idx}
      setProductindex={setProductindex}
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      openConfirmModal={openConfirmModal}
    />)

  const renderFormList = formList.map((form) => <div className="flex flex-col" key={form.id}>
    <label htmlFor={form.id} className="text-lg text-gray-600 mb-0.5 dark:text-white">{form.label}</label>
    <Input type={form.type} id={form.id} errorMsg={errorMsg[form.name]} name={form.name} value={product[form.name]} onChange={onChangeHandler}/>
    <MsgError msg={errorMsg[form.name]} />
  </div>)

  const renderCircleColor = colors.map(
    (color) =>(
        <SpanColor key={color} color={color} onClick={() => {
          if(tempColor.includes(color)) {
            setTempColor(prev => prev.filter(item => item != color))
            return;
          }

          if(productToEdit.colors.includes(color)) {
            setTempColor(prev => prev.filter(item => item != color))
            return;
          }
          setTempColor((prev) => [...prev, color])
        }}/>
      )
  )


  const rerenderProductEdit = (id: string, label: string, name: TProducatNames)=>{
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-lg text-gray-600 mb-0.5 dark:text-white">{label}</label>
        <Input type={"text"} id={id} errorMsg={errorMsg[name]} name={name} value={productToEdit[name]} onChange={onChangeEditHandler}/>
        <MsgError msg={errorMsg[name]} />
      </div>
    )
  }

  return (<>
  <div className="dark:bg-black dark:text-white bg-white text-black">
    <div className="container max-w-6xl mx-auto px-5 relative">
      <nav className="flex items-center justify-between px-5">
        <h1 className="text-3xl font-extrabold font-[cursive]">My <span className="text-cyan-700">Products</span></h1>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700" width="w-fit" onClick={() => openModal()}>build now</Button>
        <DarkMod />
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {productCardList}
                {/* Add Modal  */}
        <Model isOpen={isOpen} closeModal={closeModal} title="Add a new product">
          <form className="flex flex-col space-y-3" onSubmit={onSubmitHandler}>
            {renderFormList}
            <Select selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <div className="flex items-center space-x-1 flex-wrap space-y-1">
              {tempColor.map(color => <span key={color} className="text-gray-700 p-1 rounded mb-1 cursor-pointer" style={{background: color}}
              onClick={() => setTempColor(tempColor.filter(item => item != color))}
              >{color}</span>)}
            </div>
            <div className="flex items-center space-x-1 flex-wrap space-y-1">
              {renderCircleColor}
            </div>
            <div className="flex items-center space-x-3">
              <Button className='bg-indigo-600 text-white hover:bg-indigo-700' width='w-full'>submit</Button>
              <Button className='bg-gray-200 dark:bg-white hover:bg-gray-300' width='w-full' onClick={onCanselHandler}>cansel</Button>
            </div>
          </form>
        </Model>

                  {/* Edit Modal */}
        <Model isOpen={isOpenEditModal} closeModal={closeEditModal} title="Edit a product">
          <form className="flex flex-col space-y-3" onSubmit={onSubmitEditHandler}>
            {rerenderProductEdit("title", "Product Title", "title")}
            {rerenderProductEdit("description", "Product Description", "description")}
            {rerenderProductEdit("image", "Product image URL", "image")}
            {rerenderProductEdit("price", "Product price", "price")}

            <Select selectedCategory={productToEdit.category} setSelectedCategory={(value) => setProductToEdit({...productToEdit, category: value})}/>

            <div className="flex items-center space-x-1 flex-wrap space-y-1">
              {tempColor.concat(productToEdit.colors).map(color => <span key={color} className="text-gray-700 p-1 rounded mb-1 cursor-pointer" style={{background: color}}
              onClick={() => setTempColor(tempColor.filter(item => item != color))}
              >{color}</span>)
              }
            </div>
            <div className="flex items-center space-x-1 flex-wrap space-y-1">
              {renderCircleColor}
            </div> 

            <div className="flex items-center space-x-3">
              <Button className='bg-indigo-600 text-white hover:bg-indigo-700' width='w-full'>Edit</Button>
            </div>
          </form>
        </Model>


        <Model isOpen={isOpenConfirmModal} closeModal={closeConfirmModal}
        title="Are you sure you want to remove this Product From Your Store">
            <p className="text-gray-400 font-medium text-sm mb-4"> Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and othrt related information will also be deleted. please make sure this is the intended action.</p>
            <div className="flex items-center space-x-3">
              <Button className='bg-rose-600 text-white hover:bg-rose-700' width='w-full' onClick={removepProduct}>Yes, remove</Button>
              <Button className='bg-gray-200 dark:bg-white hover:bg-gray-300' width='w-full' onClick={closeConfirmModal}>cansel</Button>
            </div>
        </Model>
      </div>
    </div>
    <Toaster />
  </div>
  </>)
}

export default App