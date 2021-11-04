import { Inventory } from "./inventory";
import { InvoiceItem } from "./invoiceitem";

export class Customer{

    id : number;
    name : string;
    location : string;
    contactPersonName : string;
    vat : number;
    itemList : Inventory [];
}