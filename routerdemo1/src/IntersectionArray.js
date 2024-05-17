

function Intersection (){

   let arr1=[1,5,2,4, 2];
   let arr2=[3,2,1,7,8];

   let arr3=[];

   for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]=== arr2[j]){
            arr3[i]=arr2[j];
           
          
    }
    }
   }

   console.log(arr3)


}
Intersection();


export default Intersection


