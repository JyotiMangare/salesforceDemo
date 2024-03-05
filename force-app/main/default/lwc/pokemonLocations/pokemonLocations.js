import { LightningElement ,api,wire} from 'lwc';
import { getRecord , getFieldValue } from 'lightning/uiRecordApi';


export default class PokemonLocations extends LightningElement {
const Name ='Pokemon__c.Name';
const LATTITUDE = 'Pokemon__c.Location__Latitude__s';
const LONGITUDE = 'Pokemon__c.Location__Longitude__s';  
const pokemonFields = [Name,LATTITUDE,LONGITUDE];


@api recordId;
MapMarkers=[];
name;
cardTitle;

@wire(getRecord,{recordId:'$recordId',fields:pokemonFields})
getpokemons({error,data}){
    if(error){
        console.error('error:'+JSON.stringify(error))
    }
    else if(data){
        this.name = getFieldValue(data,Name);
        this.cardTitle=this.name;
        const Latitude = getFieldValue(data ,LATTITUDE );
        const Longitude = getFieldValue(data,LONGITUDE);
        this.MapMarkers = [{
            location:{Latitude,Longitude},
            Title:this.name,
            description :`coords:${Latitude}, ${Longitude}`
        }]
        console.log("this.MapMarkers:"+JSON.stringify(this.MapMarkers));
    }
    
}

}