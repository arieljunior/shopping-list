import { IProduct } from "../interfaces/IProduct.interface";

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
		const indexProduct = this.products.findIndex((p) => p.id === idProduct);
        
        if(indexProduct === -1) return;

        this.products[indexProduct] = {
            ...this.products[indexProduct],
            price,
            quantity
        }
	}
}
