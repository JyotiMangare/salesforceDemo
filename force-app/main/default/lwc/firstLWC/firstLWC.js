import { LightningElement } from 'lwc';
import myResource from "@salesforce/resourceUrl/BMW";
export default class FirstLWC extends LightningElement {
watchImg=myResource;
abcd(){
    console.log('This is my first js');
}
constructor(){
    super();
    console.log('Inside the constructor');
}
connectedCallback(){
    console.log('Inside the connected call Back');
}
renderedCallback(){
    console.log('Inside the Rendered call Back');
}
} 


   