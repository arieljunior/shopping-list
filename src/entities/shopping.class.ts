import { IFormProduct, IProduct } from "../interfaces/IProduct.interface";

export default class Shopping {
	id: string;
	products: IProduct[];

	constructor(id: string, products: IProduct[]) {
		this.id = id;
		this.products = products;
	}

	updatePriceAndQuantityById(
		idProduct: string,
		quantity: number,
		price: number
	) {
		const indexProduct = this.getIndexProduct(idProduct);
        
        if(indexProduct === -1) return;

        this.products[indexProduct] = {
            ...this.products[indexProduct],
            price,
            quantity
        }
	}

	private getIndexProduct (idProduct: string) {
		return this.products.findIndex((p) => p.id === idProduct)
	}

	addNewProduct(product: IFormProduct){
		const newProduct:IProduct = {
            id: (this.products.length + 1).toString(),
            category: product.category,
            name: product.name,
            price: product.price || 0,
            quantity: product.quantity || 0
        };

		this.products.push(newProduct);
	}

	removeProduct(idProduct: string): boolean{
		const index = this.getIndexProduct(idProduct);

        if(index === -1) return false;
		
		this.products.splice(index, 1);

		return true
	}
}
