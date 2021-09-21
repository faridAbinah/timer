let args = process.argv.slice(2).filter(element => element >= 0 ).filter(element => !isNaN(element));

const  timer = function (arrayArguments) {
  
  let array = [];
  
  

  for(let j = 0; j < arrayArguments.length;j++) {

    array[j]= parseInt(arrayArguments[j]) * 1000;
    
  }

  for(let i = 0; i < arrayArguments.length; i++) {
    

    setTimeout(() => {
      console.log(arrayArguments[i]);
      process.stdout.write('\x07');
    },array[i]);
  }
  
}

timer(args);