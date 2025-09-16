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

    if(!product.title.trim()){
        errors.title = "valid title required!"
    }else if (product.title.length< 10 ) {
        errors.title = "Product title must be gater than 10 characters!"
    } else if(product.title.length > 50) {
        errors.title = "Product title must be less than 50 characters!"
    }

     if(!product.description.trim()){
        errors.description = "valid description required!"
    }else if (product.description.length< 10 ) {
        errors.description = "Product description must be gater than 10 characters!"
    } else if(product.description.length > 80) {
        errors.description = "Product description must be less than 80 characters!"
    }

     if(!product.image.trim()){
        errors.image = "valid image required!"
    }else if (!validUrl ) {
        errors.image = "Product image URL must be ftb | https | http"
    }

    if(!product.price.trim()) {
        errors.price = "valid price is required!"
    }else if(isNaN(Number(product.price))) {
        errors.price = "Enter Price is number"
    }

    return errors
}