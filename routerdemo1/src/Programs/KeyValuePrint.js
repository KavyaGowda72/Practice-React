

const products={
    id:1,
    name:"laptop",
    price:50000
};



function KeyValuePrint(){

    
for(let key in products){
    console.log( "Key : ",key)
    console.log( " value :  " , products[key])
}




// console.log(Object.keys(products))
// console.log(Object.values(products))



}


export default KeyValuePrint