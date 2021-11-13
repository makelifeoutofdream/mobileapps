import { Inventory } from "./inventory";

export class Purchase{
    id : number;
    poNumber : number;
    purchaseDate : Date;
    deliveryDate  :Date;
    purchaseItems : Inventory[];
}