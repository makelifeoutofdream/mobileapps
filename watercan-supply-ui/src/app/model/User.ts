import { jsonIgnore } from "json-ignore";

export class User{

    name : string;
    mobileNumber : string ;
    password : string;
    @jsonIgnore() confirmPassword : string;
}