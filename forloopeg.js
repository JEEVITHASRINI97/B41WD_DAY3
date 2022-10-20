//for the given json iterate with the for loop
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
for(let i=0;i<mobiledata.length;i++){ // iterate 

   console.log(mobiledata[i].brand); //print the data
   console.log(mobiledata[i].color);
   console.log(mobiledata[i].price);


}

/*output:
apple
silver
85000
Samsung
red
25000
Oneplus
green
50000 */