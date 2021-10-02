import { InvoiceItem } from "./invoiceitem";
import {Customer} from './customer';
export class Invoice{
    invoiceNumber : string;
    invoiceItems : InvoiceItem [];
    invoiceDate : Date ;
    customer : Customer;
    total : number;
    tax : number;
}