/* Get Active Day
  ========================================================*/

  let begin = new Date(2020, 10, 31);
  let end = new Date(2020, 11, 1);
  let today = new Date();
  let day;
  if(today <= begin) {
    day = "day1"
  } else if(today >= end) {
    day = "day2"
  } 
  document.getElementById("#schedule_"+day).classList.add("active");
  document.getElementById(day).classList.add("active");