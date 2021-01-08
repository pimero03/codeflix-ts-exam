const fs = require('fs-extra');
import path from 'path'
 function mycp(){
   if(path.extname(process.argv[2])==='.txt' && path.extname(process.argv[3])==='.txt'){
   console.log(fs.copySync(process.argv[2], process.argv[3]));
 
   }     else { 
     console.log(fs.copySync(process.argv[2], process.argv[3]));
     
   }   
 }  
 mycp();