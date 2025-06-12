let mydate=new Date()
// console.log(typeof mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());

let createdate=new Date(2004,5,17) // year-month-date (month start with index 0)
//console.log(createdate.toLocaleString()); //mm-dd-yyyy 

let newdate=new Date('09-08-2006') // while declaring our own date month index start with 1 and here format is mm-dd-yyyy
//console.log(newdate.toLocaleString()); //mm--dd-yyyy

let myTimestamp=Date.now()
// console.log(myTimestamp); //millisec value from Jan o1,1970
// console.log(newdate.getTime()); //millisec value from declared date
//console.log(Math.floor(Date.now()/1000)); //sec returned

let date=new Date()
// console.log(date.getDate()); //returns date
// console.log(date.getMonth()+1); //returns month (+1 so user won't get confused)
// console.log(date.getDay()); //returns day of week starts from monday(1)
// console.log(date.getFullYear()); //retuns year
// console.log(date.getHours()); //retun hour

console.log(date.toLocaleString('default',{ 
    weekday :"long",
    month:"long",
})) //it is used to give rights to users to custmize the date info according to him






 

