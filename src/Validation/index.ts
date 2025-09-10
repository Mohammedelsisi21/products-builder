


interface IProduct {
    title: string,
    description: string,
    image: string,
    price: string,
}


export const ProductValidation = (product : IProduct ) => {

    const errors: IProduct  = {
        title: "",
        description: "",
        image: "",
        price: ""
    }

    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.image)

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Product title must be between 10 and 80 characters!"
    }

    if(!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
        errors.description = "Product description must be between 10 and 900 characters!"
    }

    if(!product.image.trim() || !validUrl) {
        errors.image = "valid image URL is required!"
    }

    if(!product.price.trim()) {
        errors.price = "valid price is required!"
    }else if(isNaN(Number(product.price))) {
        errors.price = "Enter Price is number"
    }

    return errors
}