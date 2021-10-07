import { Countries} from "./country";
export class User{
    id ?:number;
    name ?: string;
    phone ?: number;
    email ?: string;
    address?: string;
    countryId ?:number;
    statesId ?:number;
    citesId ?:number;
    country ?: Countries;
    
    constructor(){}
}