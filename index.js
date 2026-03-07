function happyPrint(string){
  console.log("😀: "+string);
}

function sadPrint(string){
  console.log("😢: "+string);
}


function add(a, b, callback){
  let ans = a + b; 
  callback(ans);
}

add(5,10,happyPrint); 
add(11,12,sadPrint); 