  var nums = [1,2,3,4,5,6,7,8,9,10];



  var prompt = require('./node_modules/prompt/lib/prompt.js');
  
  prompt.start();
 

  prompt.get(['guess 1-10'], function (err, result) {
   
    if(err) {
      throw err;
    }

  // function zombieNums(){
  //   nums = parseInt(Math.random() * 10) + 1;
  // }
  //   result = nums 
    console.log(result['guess 1-10']);
  });


// parseInt(Math.random() * 10) + 1;

