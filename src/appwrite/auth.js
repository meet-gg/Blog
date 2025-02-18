import conf from "../conf/conf";  
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }

    async createAccount({email,password}){
        try {
            // console.log("auth")
            const userAccount=await this.account.create(ID.unique(),email,password)
            // console.log(userAccount)
            // console.log("account created")
            if(userAccount){
                // console.log("call login so direct login")
                // console.log(this.login({email,password}))
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            console.log(email)
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
         throw error;
        }
    }
    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
 }


const authServices = new AuthService();

export default authServices;