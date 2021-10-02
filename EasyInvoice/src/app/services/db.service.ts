
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { User } from './user';
import {Customer} from './customer';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ToastserviceService } from './toastservice.service';
import { Storage } from '@ionic/storage-angular';
import { Inventory } from './inventory';
import { Invoice } from './invoice';
@Injectable({
  providedIn: 'root'
})

export class DbService {
  private usersKey="users";
  private customersKey="customers";
  private inventoryKey="inventories";
  private invoiceKey="invoices";
  private invoiceNumberKey="invoiceNumber";
  private invoices : Invoice[] ;
  private inventory : Inventory;
  private inventories : Inventory[];
  private customer : Customer;
  private customers : Customer[];
  private user : User;
  private  users:User[]
  constructor(
    private httpClient: HttpClient,
    private toastService : ToastserviceService,
    private storage : Storage
  ) {
   this.init();
  }

  async init(){
    const storageVar=await this.storage.create();
    this.storage=storageVar;
  }
  
  async signup(user : User) : Promise<any> {
    try{
      
      let value=await this.storage.get(this.usersKey)
      this.users=JSON.parse(value);
      if(this.users==undefined || this.users==null){
        this.users=[];
      }
      this.users.push(user);
      const result =await this.storage.set(this.usersKey,JSON.stringify(this.users));
      console.log('user signed up successfully'+user);
      return true;
    }catch(reason){
      console.log(reason);
      this.toastService.presentToast("User Registration Failed");      
      return false; 
    }
    
  }
  async fetchUserByUserNameAndPassword(username : string,password : string) :Promise<any>{
    try{
      
      const result =await this.storage.get(this.usersKey);
      this.users=JSON.parse(result);
      let fetchedUser= this.users.find(u=>u.email==username && u.user_password==password);
      console.log('retrieved user'+fetchedUser);
      return fetchedUser;
    }catch(reason){
      console.log(reason);
      return null;
    }
  }

  async createCustomer(customer :Customer) : Promise<any>{
    try{
      const value=await this.storage.get(this.customersKey);
      this.customers=JSON.parse(value);
      if(this.customers==null || this.customers==undefined){
        this.customers=[];
      }
      this.customers.push(customer);
      this.storage.set(this.customersKey,JSON.stringify(this.customers) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }
  findIndexToUpdate(newCustomer){
    return newCustomer.name==this;
  }
  async UpdateCustomer(customer :Customer) : Promise<any>{
    try{
      const value=await this.storage.get(this.customersKey);
      this.customers=JSON.parse(value);
      let cust=this.customers.find(this.findIndexToUpdate,customer.name);
      let index=this.customers.indexOf(cust);
      this.customers[index]=customer;
      this.storage.set(this.customersKey,JSON.stringify(this.customers) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }
  async getAllCustomers():Promise<any>{
    try{
      const result =await this.storage.get(this.customersKey);
      this.customers= JSON.parse(result)
      return this.customers;
    }catch(reason){
      console.log(reason);
      this.toastService.presentToast("Failed to load the customers");
    }
  }

  async createOrUpdateInventory(inventory :Inventory) : Promise<any>{
    try{
      const value=await this.storage.get(this.inventoryKey);
      this.inventories=JSON.parse(value);
      if(this.inventories==null || this.inventories==undefined){
        this.inventories=[];
      }
      this.inventories.push(inventory);
      this.storage.set(this.inventoryKey,JSON.stringify(this.inventories) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }


  async getAllInventories():Promise<Inventory[]>{
    try{
      const result =await this.storage.get(this.inventoryKey);
        this.inventories= JSON.parse(result)
        return this.inventories;
    }catch(reason){
      console.log(reason);
      this.toastService.presentToast("Failed to load the inventories");   
    }
  }

  async getAllInvoices():Promise<any>{
    try{
      const result =await this.storage.get(this.invoiceKey);
        this.invoices= JSON.parse(result)
        return this.invoices;
    }catch(reason){
      console.log(reason);
      this.toastService.presentToast("Failed to load the invoices");   
    }
  }

  async createOrUpdateInvoice(invoice :Invoice) : Promise<any>{
    try{
      const value=await this.storage.get(this.invoiceKey);
      this.invoices=JSON.parse(value);
      if(this.invoices==null || this.invoices==undefined){
        this.invoices=[];
      }
      this.invoices.push(invoice);
      this.storage.set(this.invoiceKey,JSON.stringify(this.invoices) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }

  async incrementInvoiceNumber():Promise<any>{
    let invoiceNumber; 
    invoiceNumber =await this.storage.get(this.invoiceNumberKey);
    if(invoiceNumber ==null || invoiceNumber==undefined){
      invoiceNumber=0;
    }
    invoiceNumber=invoiceNumber+1;
    await this.storage.set(this.invoiceNumberKey,invoiceNumber);
    return invoiceNumber;
    
  }

  async getInvoiceNumber():Promise<any>{
    let invoiceNumber; 
    invoiceNumber =await this.storage.get(this.invoiceNumberKey);
    return invoiceNumber;
    
  }
}

