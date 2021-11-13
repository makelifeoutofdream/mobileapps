import { Inventory } from "./inventory";

export class Supplier{
    id : number ;
    code : number;
    name : string ;
    nameInArabic : string;
    contactPersonName  : string ;
    contactPersonNameInArabic : string;
    buildingNumber : string;
    street : string;
    streetInArabic : string;
    city : string ;
    cityInArabic : string;
    district : string ;
    districtInArabic : string ;
    country : string ;
    countryInArabic : string ;
    pobox : string ;
    postalCode : string;
    vatNumber : string ;
    crNumber : string ;
    phoneNumber : string ;
    mobileNumber : string;
    email : string ;
    balanceAmount : number ;
    itemList : Inventory [];
}