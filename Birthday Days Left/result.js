window.addEventListener('load', () => {

  const got = (new URL(document.location)).searchParams;
  const naam = got.get('name');
  const birth = got.get('birth');

  var name = naam.toUpperCase();
  document.getElementById("result-birth").innerHTML = birth;
  console.log(name)
  console.log(birth)

  var dat = new Date(birth); // birth date
  var bath = dat.getFullYear();
  var month = dat.getMonth();
  var date = dat.getDate();
  var day = dat.getDay();
  var hours = dat.getHours();
  var minute = dat.getMinutes();
  var second = dat.getSeconds();
  console.log(dat)


  var today = new Date(); //current date
  console.log(today)
  var tyear = today.getFullYear();
  var tmonth = today.getMonth();
  var tdate = today.getDate();
  var tday = today.getDay();
  var hour = today.getHours();
  var tminute = today.getMinutes();
  var tsecond = today.getSeconds();

  var greet;

  if (hour < 12 && hour > 5)
    greet = 'Good Morning';
  else if (hour >= 12 && hour < 17)
    greet = 'Good Afternoon';
  else if (hour >= 17 && hour <= 20)
    greet = 'Good Evening';
  else
    greet = 'Good Night';

  var wish = " 🖐️ " + "Hello " + name + ", " + greet;
  document.getElementById("result-name").innerHTML = wish;

  var old = tyear - bath;
  console.log("You are " + old + " now years old");

  var peel = "Yor are now " + old + " years old";
  document.getElementById("remo").innerHTML = peel;

  if (month == tmonth && date == tdate) {
    var birthday = "It's your Birthday 🎈 😄"
    document.getElementById('kemo').innerHTML = birthday;
    var audio = new Audio('a.mp3')
    audio.play();
    console.log(birthday)
  }
  else if ((month == today.getMonth() && date > tdate) || month > today.getMonth()) {

    var d = new Date();
    d.setDate(date);
    d.setMonth(month);
    d.setHours(hour);
    d.setMinutes(tminute);
    d.setSeconds(tsecond);
    d.setFullYear(tyear);
    console.log(d)
    var oneday_ = 1000 * 60 * 60 * 24;
    var difference = Math.ceil(((d.getTime() - today.getTime()) / (oneday_)));
    console.log(difference)
    var left = "Days left for next birthday :" + difference
    document.getElementById('kemo').innerHTML = left;

  }

  else {

    nextBirthdayYear = tyear + 1
    var d = new Date();
    d.setDate(date);
    d.setMonth(month);
    d.setHours(hours);
    d.setMinutes(tminute);
    d.setSeconds(tsecond);
    d.setFullYear(nextBirthdayYear);
    console.log(d)
    var oneday_ = 1000 * 60 * 60 * 24;
    var difference = Math.ceil(((d.getTime() - today.getTime()) / (oneday_)));
    console.log(difference)
    var left = "Days left for next birthday :" + difference
    document.getElementById('kemo').innerHTML = left;
  }

}

)

