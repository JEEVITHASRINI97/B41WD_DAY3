//for the given json iterate with the for loop

/*let Fruits=["apple","grapes","banana"];
for(let data of Fruits)
{console.log(data)}
output:
apple
graphes
banana*/
/*--------------------------------------------*/
//decalare the let variable name as mobiledata
//parsing the JSON data
let mobiledata=[
    {
        brand:"apple",
     color:"silver", 
     price:85000,
    },
     {
        brand:"Samsung",
         color:"red", 
         price:25000, }, 
     { 
       brand:"Oneplus", 
     color:"green",
      price:50000, 
   } 
]
for( let data of mobiledata){ // print the direct data (es6)

   console.log(data);
   


}
/*output
{ brand: 'apple', color: 'silver', price: 85000 }
{ brand: 'Samsung', color: 'red', price: 25000 }
{ brand: 'Oneplus', color: 'green', price: 50000 }*/
