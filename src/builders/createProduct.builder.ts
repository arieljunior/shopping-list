import { IFormProduct, IProduct } from "../interfaces/IProduct.interface";

export class createProductBuilder {
	static buildDataToCreate(data: IFormProduct, totalProducts: number): IProduct {
        const newProduct:IProduct = {
            id: (totalProducts + 1).toString(),
            category: data.category,
            name: data.name,
            price: data.price || 0,
            quantity: data.quantity || 0
        };
		return newProduct;
	}
}
