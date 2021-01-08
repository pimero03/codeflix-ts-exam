const fs = require('fs');
const path = require('path');
import {readFileSync} from 'fs'



function mycat(){

    if(process.argv[3] === '-e'){
         let data = readFileSync(path.resolve(process.argv[2]),'utf8');
        console.log(data +'$');
    }
    else if (process.argv[2]){

      let  data = readFileSync(path.resolve(process.argv[2]),'utf8');
      console.log(data);


    }
    else {
        console.log('Hello word');
    }

}


mycat();