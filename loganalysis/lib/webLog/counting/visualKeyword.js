const fs = require('fs');
const { objectToJson } = require('../../objectToJson');
exports.visualKeyword = (inputFileName, outputFileName) =>{
    try{
        const visualData =  [];
        const readFile = fs.readFileSync(inputFileName,'utf-8');
        const parseFile = JSON.parse(readFile);
        for(let i  = 0 ; i< 20; i++){
            if(parseFile[i]) visualData.push(parseFile[i]);
         }
        objectToJson(outputFileName, visualData);   
    }catch(err){
        console.error(`Error: ${err.message}`);
        return false;
    } 
};