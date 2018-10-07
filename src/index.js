module.exports = function longestConsecutiveLength(array) {
   
  let  massive=[], counter = 0; 
  while (counter<array.length) {
    massive[array[counter]]=0;
    counter++
  }
    
    let number=0, max=0;
      for(counter=0;counter<massive.length;counter++){
       if (massive[counter]!=undefined){
         number+=1; 
        if(number>max) max=number; 
        }
        else{number=0;}
      }
  return max;
}

