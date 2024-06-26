export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    inventoryStatus: string;
    quantity: number;
    totalPrice?: number;  
}