import { Inventory } from "./inventory";
import { InvoiceItem } from "./invoiceitem";

export class Customer{

    name : string;
    location : string;
    contactPersonName : string;
    vat : number;
    itemList : Inventory [];
}