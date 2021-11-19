import { Inventory } from "./inventory";
import { PurchaseItem } from "./PurchaseItem";

export class Purchase{
    id : number;
    poNumber : string;
    purchaseDate : Date;
    deliveryDate  :Date;
    purchaseItems : PurchaseItem[];
}