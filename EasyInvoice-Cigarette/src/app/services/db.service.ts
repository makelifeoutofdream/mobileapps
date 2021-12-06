
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
import { v4 as uuidv4 } from 'uuid';
import { Profile } from './profile';
import { Supplier } from './supplier';
import { Purchase } from './purchase';
import { PurchaseItem } from './PurchaseItem';
import { Expense } from './expense';
@Injectable({
  providedIn: 'root'
})

export class DbService {
  private usersKey="users";
  private customersKey="customers";
  private inventoryKey="inventories";
  private invoiceKey="invoices";
  private invoiceNumberKey="invoiceNumber";
  private profileKey="profile";
  private customerCodeKey="customerCode";
  private supplierCodeKey="supplierCode";
  private supplierKey ="supplier";
  private purchaseKey="purchase";
  private purchaseCodeKey="purchaseCode";
  private inventoryCodeKey="inventoryCode";
  private invoices : Invoice[] ;
  private inventory : Inventory;
  private inventories : Inventory[];
  private customer : Customer;
  private customers : Customer[];
  private suppliers : Supplier [];
  private user : User;
  private  users:User[]
  public codeConstant="SA-RY-";
  public inventoyCodeConstant="STO";
  public purchaseCodeConstant="PUR";
  public customerCodeConstant="CUS";
  public supplierCodeConstant="SUP";
  public invoiceCodeConstant="INV";
  private printerKey="printer";
  private expenseKey="printer";
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
      user.id=uuidv4();
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
      customer.id=uuidv4();
      this.customers.push(customer);
      this.storage.set(this.customersKey,JSON.stringify(this.customers) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }

  async deleteCustomer(customer :Customer) : Promise<any>{
    try{
      const value=await this.storage.get(this.customersKey);
      this.customers=JSON.parse(value);
      if(this.customers==null || this.customers==undefined){
        this.customers=[];
      }
      
      var index = this.customers.findIndex(i => i.id == customer.id);
      this.customers.splice(index,1);
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
      var index = this.customers.findIndex(i => i.id == customer.id);
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

  async getAllSuppliers():Promise<any>{
    try{
      const result =await this.storage.get(this.supplierKey);
      let suppliers= JSON.parse(result)
      return suppliers;
    }catch(reason){
      console.log(reason);
      this.toastService.presentToast("Failed to load the suppliers");
    }
  }

  async saveAllInventories(list : Inventory[]) : Promise<any>{
    try{
      const value=await this.storage.get(this.inventoryKey);
      this.storage.set(this.inventoryKey,JSON.stringify(list) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }
  async createOrUpdateInventory(inventory :Inventory) : Promise<any>{
    try{
      const value=await this.storage.get(this.inventoryKey);
      this.inventories=JSON.parse(value);
      if(this.inventories==null || this.inventories==undefined){
        this.inventories=[];
      }
      
      if(inventory.id==null  || inventory.id==undefined){
        inventory.id=uuidv4();
        this.inventories.push(inventory);
      }else{
        var index = this.inventories.findIndex(i => i.id == inventory.id);
        this.inventories[index]=inventory;
      }
      this.storage.set(this.inventoryKey,JSON.stringify(this.inventories) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }


  async deleteInventory(inventory :Inventory) : Promise<any>{
    try{
      const value=await this.storage.get(this.inventoryKey);
      this.inventories=JSON.parse(value);
      if(this.inventories==null || this.inventories==undefined){
        this.inventories=[];
      }
      
      var index = this.inventories.findIndex(i => i.id == inventory.id);
      this.inventories.splice(index,1);
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
      if(invoice.id==null || invoice.id==undefined){
        invoice.id=uuidv4();
        this.invoices.push(invoice);
      }else{
        var index = this.invoices.findIndex(i => i.id == invoice.id);
        this.invoices[index]=invoice;
      }
      
      
      this.storage.set(this.invoiceKey,JSON.stringify(this.invoices) );
      return true;
    }catch(reason){
      console.log(reason);
      return false;
    }
  }

  async incrementInvoiceNumber():Promise<any>{
    let invoiceNumber : number; 
    invoiceNumber =await this.storage.get(this.invoiceNumberKey);
    if(invoiceNumber ==null || invoiceNumber==undefined){
      invoiceNumber=0;
    }
    invoiceNumber=invoiceNumber+1;
    await this.storage.set(this.invoiceNumberKey,invoiceNumber);
    return invoiceNumber;
    
  }

  async getCustomerCode():Promise<any>{
    let customerCode : number; 
    customerCode =await this.storage.get(this.customerCodeKey);
    return customerCode;
  }

  async incrementCustomerCode():Promise<any>{
    let customerCode : number; 
    customerCode =await this.storage.get(this.customerCodeKey);
    if(customerCode ==null || customerCode==undefined){
      customerCode=0;
    }
    customerCode=customerCode+1;
    await this.storage.set(this.customerCodeKey,customerCode);
    return customerCode;
    
  }


  async getSupplierCode():Promise<any>{
    let supplierCode : number; 
    supplierCode =await this.storage.get(this.supplierCodeKey);
    
     
    
    return supplierCode;
  }
  async incrementSupplierCode():Promise<any>{
    let supplierCode : number; 
    supplierCode =await this.storage.get(this.supplierCodeKey);
    if(supplierCode ==null || supplierCode==undefined){
      supplierCode=0;
    }
    supplierCode=supplierCode+1;
    await this.storage.set(this.supplierCodeKey,supplierCode);
    return supplierCode;
    
  }

  async getInvoiceNumber():Promise<any>{
    let invoiceNumber; 
    invoiceNumber =await this.storage.get(this.invoiceNumberKey);
    return invoiceNumber;
    
  }


async createOrUpdateProfile(userProfile : Profile) : Promise<Profile>{
  try{
   
    if(userProfile.id==null || userProfile.id==undefined){
      userProfile.id=uuidv4();
    }
    this.storage.set(this.profileKey,JSON.stringify(userProfile) );
    return userProfile;
  }catch(reason){
    console.log(reason);
    return null;
  }
}

async getProfile() : Promise<Profile>{
  try{
    let value=await this.storage.get(this.profileKey );
    let profile=JSON.parse(value);
    return profile;
  }catch(reason){
    console.log(reason);
    new Object();
  }
}


async createSupplier(supplier :Supplier) : Promise<any>{
  try{
    const value=await this.storage.get(this.supplierKey);
    this.suppliers=JSON.parse(value);
    if(this.suppliers==null || this.suppliers==undefined){
      this.suppliers=[];
    }
    supplier.id=uuidv4();
    this.suppliers.push(supplier);
    this.storage.set(this.supplierKey,JSON.stringify(this.suppliers) );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}

async UpdateSupplier(supplier :Supplier) : Promise<any>{
  try{
    const value=await this.storage.get(this.supplierKey);
    this.suppliers=JSON.parse(value);
    var index = this.suppliers.findIndex(i => i.id == supplier.id);
    this.suppliers[index]=supplier;
    this.storage.set(this.supplierKey,JSON.stringify(this.suppliers) );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}

async getAllPurchases():Promise<any>{
  try{
    const result =await this.storage.get(this.purchaseKey);
      let purchaseList= JSON.parse(result)
      return purchaseList;
  }catch(reason){
    console.log(reason);
    this.toastService.presentToast("Failed to load the purchases");   
  }
}
async createPurchase(purchase :Purchase) : Promise<any>{
  try{
    const value=await this.storage.get(this.purchaseKey);
    let purchaseList=JSON.parse(value);
    if(purchaseList==null || purchaseList==undefined){
      purchaseList=[];
    }
    purchase.id=uuidv4();
    purchaseList.push(purchase);
    this.storage.set(this.purchaseKey,JSON.stringify(purchaseList) );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}

async updatePurchase(purchase :Purchase) : Promise<any>{
  try{
    const value=await this.storage.get(this.purchaseKey);
    let purchaseList=JSON.parse(value);
    var index = purchaseList.findIndex(i => i.id == purchase.id);
    purchaseList[index]=purchase;
    this.storage.set(this.purchaseKey,JSON.stringify(purchaseList) );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}


async getPurchaseCode():Promise<any>{
  let purchaseCode : number; 
  purchaseCode =await this.storage.get(this.purchaseCodeKey);
  return purchaseCode;
}
async incrementPurchaseCode():Promise<any>{
  let purchaseCode : number; 
  purchaseCode =await this.storage.get(this.purchaseCodeKey);
  if(purchaseCode ==null || purchaseCode==undefined){
    purchaseCode=0;
  }
  purchaseCode=purchaseCode+1;
  await this.storage.set(this.purchaseCodeKey,purchaseCode);
  return purchaseCode;
  
}

async updateStock(purchaseItemList :PurchaseItem[]) : Promise<any>{
  try{
    const value=await this.storage.get(this.inventoryKey);
    let inventories=JSON.parse(value);
    for(let pItem of purchaseItemList){
      var index = inventories.findIndex(i => i.id == pItem.item.id);
      let inventory : Inventory=this.inventories[index];
      inventory.quantity=inventory.quantity+pItem.deliverQuantity;
      this.storage.set(this.inventoryKey,JSON.stringify(this.inventories) );
    }
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}


async getInventoryCode():Promise<any>{
  let inventoryCode : number; 
  inventoryCode =await this.storage.get(this.inventoryCodeKey);
  return inventoryCode;
}
async incrementInventoryCode():Promise<any>{
  let inventoryCode : number; 
  inventoryCode =await this.storage.get(this.inventoryCodeKey);
  if(inventoryCode ==null || inventoryCode==undefined){
    inventoryCode=0;
  }
  inventoryCode=inventoryCode+1;
  await this.storage.set(this.inventoryCodeKey,inventoryCode);
  return inventoryCode;
  
}


async savePrinter(macAddress :any) : Promise<any>{
  try{
    this.storage.set(this.printerKey,macAddress );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}

async getPrinter():Promise<any>{
  return  this.storage.get(this.printerKey );
}


async getAllExpenses():Promise<any>{
  try{
    const result =await this.storage.get(this.expenseKey);
    let expenseList : Expense[]= JSON.parse(result)
    return expenseList;
  }catch(reason){
    console.log(reason);
    this.toastService.presentToast("Failed to load the expenses");
  }
}

async createExpense(expense :Expense) : Promise<any>{
  try{
    const value=await this.storage.get(this.expenseKey);
    let expenses=JSON.parse(value);
    if(expenses==null || expenses==undefined){
      expenses=[];
    }
    expense.id=uuidv4();
    expenses.push(expense);
    this.storage.set(this.expenseKey,JSON.stringify(expenses) );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}

async UpdateExpense(expense :Expense) : Promise<any>{
  try{
    const value=await this.storage.get(this.expenseKey);
    let expenses=JSON.parse(value);
    var index = expenses.findIndex(i => i.id == expense.id);
    expenses[index]=expense;
    this.storage.set(this.expenseKey,JSON.stringify(expenses) );
    return true;
  }catch(reason){
    console.log(reason);
    return false;
  }
}

}

