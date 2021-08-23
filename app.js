const getSleepHours = day =>{
  var day = day.toLowerCase();
  switch(day){
    case 'monday':
  return 8;
  break;
  case 'tuesday':
  return 9;
  break;
  case 'wednesday':
  return 7;
  break;
  case 'thursday':
  return 12;
  break;
  case 'friday':
  return 11;
  break;
  case 'saturday':
  return 6;
  break;
  case 'sunday':
  return 21;
  break;
  default:
  return 'out of range';

  }
  
}
//console.log(getSleepHours('Monday'));

const getActualSleepHours = ()=>{
 let totalHours = getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
 return totalHours;
}
const getIdealSleepHours  = ()=>{
  let idealHours=8;
  return idealHours*7;
}
//console.log(getIdealSleepHours());
const calculateSleepDebt = ()=>{
let actualSleepHours =  getActualSleepHours();
let idealSleepHours = getIdealSleepHours();
if(actualSleepHours===idealSleepHours){
  console.log(` user got the perfect amount of sleep ${actualSleepHours-idealSleepHours}`);
}else if (actualSleepHours>idealSleepHours){
  console.log(`user got ${actualSleepHours-idealSleepHours} hrs more sleep than needed `);
}else{
  console.log(`the user should get some rest${actualSleepHours-idealSleepHours}`);
}
}
calculateSleepDebt();