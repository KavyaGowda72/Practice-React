
 let myJSON={

 "events":[ 
        {
            "title":"Google cloud summit 2024",
            "description":"showcasing power of google cloud infrastrucutre","startDate":"07-03-2024",
            "location":
            {
            "address":"bengaluru innovation center, 2nd main", 
            "city":"Bengaluru",
            "country":"India",
             }
        },

        {
        
        "title":"Intel AI chip",
        "description":"showcasing power nextgen intel processors",
        "startDate":"07-05-2024",

        "location":
        {
            "address":"Mumba innovation center, 2nd main",
            "city":"Mumbai",
            "country":"India",
        }

        }
    
    ]
 }

 console.log(myJSON.events[0].location.city)
 console.log(myJSON.events[1].location.city)
 console.log(myJSON.events[1].location.country)
 

    


   
   
// const updatedJson=JSON.parse(myJSON);



function PrintKeyValueInArray (){

 for(let i=0;i<myJSON.events.length;i++){
    console.log(myJSON.events[i])

 }

    // let values=Object.values(events);
    // console.log(values)

// // for(let i=0;i<events.length;i++){
//     for(let key in events){
//         console.log(events[key])
//     }


}

export default PrintKeyValueInArray


























// {"events":[{"title":"Google cloud summit 2024","description":"showcasing power of google cloud infrastrucutre","startDate":"07-03-2024","location":{"address":"bengaluru innovation center, 2nd main","city":"Bengaluru","country":"India",}},{"title":"Intel AI chip","description":"showcasing power nextgen intel processors","startDate":"07-05-2024","location":{"address":"Mumba innovation center, 2nd main","city":"Mumbai","country":"India",}}]}