import { LightningElement,wire } from 'lwc';
import accData from'@salesforce/apex/AccController.accList';
export default class WireDecExample extends LightningElement {
    
    @wire(accData) Accounts;

    connectedCallback(){
        console.log('Acc List '+JSON.stringify(accData));
    }
}