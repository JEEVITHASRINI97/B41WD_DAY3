//for the given json iterate with the for-in loop
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
for(let key in mobiledata){ //for in loop iterate over index

   console.log(key);



}
/*output:
0
1
2
*/



