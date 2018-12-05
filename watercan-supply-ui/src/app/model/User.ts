import { jsonIgnore } from "json-ignore";

export class User{

    id : any;
    name : string;
    mobileNumber : string ;
    password : string;
    @jsonIgnore() confirmPassword : string;

    address : any [];
}