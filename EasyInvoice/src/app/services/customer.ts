import { Inventory } from "./inventory";
import { InvoiceItem } from "./invoiceitem";

export class Customer{

    id : number;
    code : string;
    name : string;
    nameInArabic : string;
    contactPersonName : string;
    contactPersonNameInArabic : string;
    buildingNumber : string;
    street : string;
    streetInArabic : string;
    city : string;
    cityInArabic : string;
    district  :string;
    districtInArabic : string;
    country : string;
    countryInArabic : string;
    pobox : string;
    postalCode : string;
    phoneNumber : string ;
    mobile  : string;
    email : string;
    vatNumber : string;
    crNumber : string;
    creditLimit : number;
    balance : number;
    itemList : Inventory [];
}