
var city:string[] = [];
export const addWheels = (...wheelsArray:any[]) => {
    wheelsArray.forEach((item) => {
        city.push(item);
        displayWheels();
    })
    
}
export const addWheel = (wheel:any) => {
    city.push(wheel);
    displayWheels();
}
export const displayWheels = () => {
    let list = document.getElementById('wheelList');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    
    city.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}

// testFunction();
// ISBN – 10 Validation
export const isbnValidation =(num: string | any[])=>{
    var number = num.length 
    if(number !=10){
        return false;
    }
    let sum = 0
    for(let i=0;i<9;i++){
        let ind = num[i] - 0;
        if(0 > ind || 9 < ind){
            return false;
        }
        sum +=(ind * (number - i))
    }
    let lastInd = num[9];
    if(lastInd!='X' && (lastInd < 0 || lastInd > 9)){
        return false
    }
    sum += ((lastInd == 'X') ? 10 : (lastInd - 0))
    return (sum % 11 === 0)
}

//change it up
 export const changeItUp = (str: string) => {

    var array = str.split('');
    const length = array.length;
    var newArray = [];

    for (var i = 0; i < length; i++ ) {
      if( /^[a-yA-Y]+$/.test(array[i]) ) {

        var next_letter = String.fromCharCode( (array[i]).charCodeAt(0) + 1 );
        newArray.push( "eiou".includes(next_letter) ? next_letter.toUpperCase() : next_letter.toLowerCase() );
      } 
     else if ( /^[zZ]+$/.test(array[i]) ){
        newArray.push('A');

      } 
      else {
        newArray.push(array[i]);
      }
    }
    return newArray.join(''); 
  }

  //Move number 0 to end
export const moveZeroesToEnd = () => {
    var nums: any[] = [ 1, 2 , true ,0 ,"johnico" , 0 , 4 , 0 , 6 , 0 , 2];
    console.log('Original: '+ nums)
    for (var i = nums.length - 1; i >= 0; i--) {
        //splice and push - removing 0 and putting to last index of array
      nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
    }
    console.log('Changed : '+ nums)
 };
  console.log("I can do it")
  
  console.log("\n")
  console.log('2. ISBN 10 Validation')
  console.log("Numbers: 048665088X" + " \n ")
  console.log("Valid? :"+ isbnValidation('048665088X'))
  console.log("\n")
  console.log("3. Change it up!")
  console.log("Original: Cat30 \n") 
  console.log("Changed : " + changeItUp('Cat30'));
  console.log("\n")
  console.log("4. Moving zeroes to the end")
  moveZeroesToEnd();
