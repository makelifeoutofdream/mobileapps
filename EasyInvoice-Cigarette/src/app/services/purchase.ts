import { Inventory } from "./inventory";
import { PurchaseItem } from "./PurchaseItem";
import { Supplier } from "./supplier";

export class Purchase{
    id : number;
    poNumber : string;
    purchaseDate : Date;
    deliveryDate  :Date;
    purchaseItems : PurchaseItem[];
    supplier : Supplier;
}