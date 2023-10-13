// let isStudent=true;
// let isEmployee=false;
// if(isStudent && !isEmployee){
//     console.log("Student");
// }
// else if(!isStudent && isEmployee){
//     console.log("Employee");
// }
// else if(isEmployee && isStudent){
//     console.log("Both of them")
//

//  let correctUsername="ilaha"
// let correctPassword="ilaha123"
// let userName=prompt("Enter username")
// let password=prompt("Enter password")
// if(correctUsername==userName && correctPassword!=password){
//     console.log("Invalid password")
// }
// else if(correctUsername!=userName && correctPassword==password){
//     console.log("Invalid username")
// }
// else{
//     console.log("Welcome ");
// }

// let saat = prompt("Zamani daxil edin")

// if (saat >= 17) {
//     console.log("Axsaminiz xeyir")
// } else if (saat >= 12 ){
//     connsole.log("Gunortaniz xeyir")
// } else {
//     console.log("Sabahiniz xeyir")
// }

// let num1=7;
// let num2=3;

// let operator=prompt("enter operator");
// switch(operator){

//     case`+`:
//     result=num1+num2;
//     console.log(`${num1} + ${num2} =${num1+num2}`);
//     break;

//     case`-`:
//     result=num1-num2;
//     console.log(`${num1} - ${num2} =${num1-num2}`);

//     case`*`:
//     result=num1*num2;
//     console.log(`${num1} * ${num2} = ${num1*num2}`);

//     case`/`:
//     result=num1/num2;
//     console.log(`${num1} / ${num2} = ${num1/num2}`);

// }

//------------TASK1---------//
//   let hasil=1;
//   for(let eded=1;eded<=20;eded++){
// hasil=hasil*eded;
//   }
//   console.log(hasil);

// //----------TASK2------------------//

// let sum=0;

// for(  let number=10; number <40; number++){
// sum=sum+number;
// }

// console.log(sum);

// //.........task3............//

// let hasil=1;

// for( let number=1; number <30; number++){
//     hasil=hasil*number;
// }
// console.log(hasil);

//-------------task4------------//

// let sum = 0;
// for(let number = 20; number <30; number++){
//     sum=sum+number;
// }
// console.log(sum);

// //------------task5-----------//

// let hasil = 1;

// for( let number =15; number<=40; number++){
//     hasil=hasil*number;
// }
// console.log(hasil);

// //----------task6---------//

// let sum =0;

// for(let number=20; number <60 ; number++){
//     sum=sum+number;
// }
// console.log(sum);

//------------task7----------//

// let number1=20;
// let number2=10;

// let numbers=prompt("enter numbers");
// switch (numbers) {
//     case `+`:
//         result=number1+number2;
//         console.log(`${number1} + ${number2}=${number1+number2}`);
//         break;

//      case`-`:
//      result=number1-number2;
//      console.log(`${number1} - ${number2}=${number1-number2}`);
//      break;
// }

//----------------task8----------//

// let num1 =10;
// let num2 =20;

// let numbers = prompt("enter numbers");

// switch (numbers) {
//     case `+`:
//         result=num1+num2;
//         console.log(`${num1} + ${num2} =${num1+num2}`);
//         break;

//     default:
//         break;
// }

// //-----------------task9-------//

// let saat= prompt("zamani saxil edin");

// if(saat <17){
//     console.log(`gunortaniz xeyir`)
// }

// if(saat <12) {
//     console.log(`sabahin xeyir`)
// }

// //---------------task10-----------//

// let sum=0;

// for(let num=40; num<60; num++){
//     sum=sum+num;
// }
// console.log(sum);

// //----------task11----------------//

// let sum = 0;

// for (let num = 10; num <= 40; num++) {
//   if (num % 5 == 0 && num % 3 == 0) {
//     sum = sum + num;
//     console.log(sum);
//   }
// }

//------------task12--------------//

// let min=num1[0];
// for(let i=0; i<num1.length; i++){
//     if(num1[i]<min){
//         min=num1[i];
//     }

// }

// let max=num2[0];
// for(let i=o; i<num2.length; i++){
//     if(num2[i]>max){
//         max=num2[i];
//     }
// }

// console.log(min);
// console.log(max);
// console.log(min+max);

// for (let i = 0; i < num1.length; i++) {
//     if (num1[i] > 50) {
//         console.log(`${num1[i]} elementi 50den boyukdur`)
//     } else {
//         console.log(`${num1[i]} elementi 50den kicikdir`)

//     }

// }
// let num1 = [1, 250, -500, 10, -123, -437];
// let num2 = [1, 13, 0, -100, 44, -50];

// let enKicik = num1[0];
// let enBoyuk = num1[0];
// for (let i = 0; i < num1.length; i++) {
//   if (num1[i] < enKicik) {
//     enKicik = num1[i];
//   } else if (num1[i] > enBoyuk) {
//     enBoyuk = num1[i];
//   }
// }

// console.log(enKicik);
// console.log(enBoyuk);

// let min = num2[0];
// let max = num2[0];
// for (let i = 0; i < num2.length; i++) {
//   if (num2[i] < min) {
//     min = num2[i];
//   } else if (num2[i] > max) {
//     max = num2[i];
//   }
// }
// console.log(min);
// console.log(max);

//---------exam----------//

// function weightSection(weight) {
//   if(weight<50){
//     return "yungul cekili"
//   }
//   else if(weight>50 && weight<90){
//     return "orta cekili"
//   }
//   else{
//     return "agir cekili"
//   }
// }
//  console.log(weightSection(60))

//  function circle(radius) {
//   return 3*Math.pow(radius,2)
//  }
//   console.log(circle(2));

//--------------------//

//  let hasil=1;

// for( let num=1; num<20; num++){
//   hasil=hasil*num;
// }
// console.log(hasil);

// let sum=0;

// for( let num=20; num<=60; num++){
//   sum=sum+num;
// }
// console.log(sum);

// let sum= 0;

// for( let num=20; num=60; num++){
//   if( num % 2==0 && num % 4==0){
//    sum=sum+num;
//   console.log(sum);    }

// }

//  let sum=0;

//  for( let num=10; num=80; num++){
//   if( num % 5==0 && num % 6==0){
//  sum=sum+num;
//     console.log(sum);
//   }
//  }

// function kvadrat(teref) {
//   return Math.pow(teref,2)
// }
// console.log(kvadrat(2));

// let sum = 0;

// for (let num = 10; num < 500; num++) {
//   if (num % 5 == 0 && num % 10 == 0) {
//     sum = sum + num;
//     console.log(sum);
//   }
// }

// let numberOne = [1, 5, 7, 9];
// let numberTwo = [2, 4, 6 ,8];

// let max = numberOne[0];

// for()

// function oclock(deq) {
//   return 60 * deq;
// }
// console.log(oclock(5));

// const simpleArray = [10, 20, 30]

// function sumOfArrayNumber(simpleArray) {
//     let sum=0
//     for(let i=0; i<simpleArray.length; i++){
//         sum+=simpleArray[i];
//     }
//     return sum;
// }
//  console.log(sumOfArrayNumber(simpleArray))

// let num = +prompt("enter");

// function number(num) {
//   if (num > 0) {
//     console.log("Musbet");
//   }

//   return number;
// }

// number(num);

// let num = prompt('enter number')

// function TrueNumber(num) {
//     if(num >0){
//         console.log('musbet')
//     }
//     return TrueNumber;
// }

// TrueNumber(num);

// function oclock(deq) {
//     return 60*deq

// }
// console.log(oclock(5));

// const simpleArray = [10, 20, 30]

// function sumOfArrayNumber(simpleArray) {
//     let sum=0;

//     for( let i=0; i<simpleArray. length i++){
//         sum+=simpleArray[i];
//       }

//       return sum;
// }

// console.log(sumOfArrayNumber(simpleArray));

// function oclock(deq) {
//   return 60*deq

// }
// console.log(oclock(5));

// function weightStatus(weight) {
//   if(weight<50){
//     return "yungul cekili"
//   }
//   else if(weight>50 &&weight<90 ){
//     return "orta cekili"
//   }
//   else{
//     return "agir cekili"
//   }
// }

// //------tasklar---------//

// function circleSahe(radius) {
//   return 3*Math.pow(radius,2)
// }

// console.log(circleSahe(4));  ///---moterizedeki return qiymetidir?

// function circleUzunlug(radius) {
//   return 2*3*(radius)
// }
// console.log(circleUzunlug(5));

// const numbers =[10, 20, 30]

// function ededler(numbers) {
//   let sum=0;
//   for(let i=0; i<numbers.length; i++){
//     sum= sum+numbers[i];
//   }
//   return sum;
// }
// console.log(ededler(numbers));

// number= +prompt("ededi daxil edin")

// function divide(number) {
//   if(number % 5==0){
//    return "eded 5-e bolunur"
//   }
// }

// let number1 = 10;

// let number2 = 20;

// function eded(number1, number2) {
//   // let sum = number1 + number2;
//   return number1 + number2;
// }

// console.log(eded(number1, number2));

//------*------//

// let num= +prompt("eded daxil edin")

// function numeral(num) {
//   if(num % 5===0 ){
//   return "eded 5-e bolunur"
//   }
//   else{
//     return "eded 5e bolunmur"
//   }

// }
// console.log(numeral(num));

// let number= +prompt("eded daxil edin")

// function numeral(number) {
//   if( number % 2==0){
//    return "eded cutdur"
//   }
//   else if(number% 2!=0){
//   return "eded tekdir"
//   }
// }
//  console.log(numeral(number));

// let start=1;
// let end =100;
// let sum=0;

// function numeral( start,end) {
//   while (start) {

//   }
// }

// let start = 1;
// let end = 100;
// let sum = 0;

// function other(num) {
//   for (let i = start; i < end; i++) {
//     if (start % 2 == 0) {
//       sum = sum + start;
//     }
//     start++;
//   }
//   return sum;
// }

// console.log(other(start, end));

// //------------word1-----------//

// let number = prompt("eded daxil edin")

// function natural(number) {
//     if( number % 5 ==0){
//      return "eded 5-e bolunur"
//     }
//     else{
//         return "eded 5-e bounmur"
//     }
// }
// console.log(natural(number));

// //--------------word2------------//

// let number = prompt("eded daxil edin")

//  function natural(number) {
//     if( number % 2==0){
//         return "eded cutdur"
//       }
//        else{
//           return "eded tekdir"
//        }
//  }

// console.log(natural(number));

// //--------------word3-----------//

// let start = 1;
// let end = 100;
// let sum = 0;

// function natural(start,end) {
//     while (start<end) {
//         if( start % 2==0){
//        sum=sum+start;
//         }
//         start++
//     }
//     return sum;
// }
// console.log(natural(start,end));

// //-------------word4------------//

// function weightStatus(weight) {

//     if (weight<50) {
//         return "yungul cekili"
//     }
//     else if( weight>50 && weight<90){
//         return "orta cekili"
//     }
//     else{
//         return "agir cekili"
//     }
// }
// console.log(weightStatus(49));

// //----------------word5-------------//

// function circleSahe(radius) {
//     return 3*Math.pow(radius,2)
// }
// console.log(circleSahe(5));

// //------------------word6---------------//

// function oclock(deq) {
//     return 60*deq
// }

// console.log(oclock(5));

// //------------------word7----------------//

// const numbers = [10, 20, 30]

// function numerals(numbers) {
//     let sum= 0;
//   for( let i=0; i<numbers.length; i++ ){
//      sum=sum+numbers[i];
//   }
//   return sum;
// }
// console.log(numerals(numbers));

// //-----------------word8-------------//

// const numbers=[20,40,60]

// function numerals(numbers) {
//     let sum= 0;
//     for( i=0; i<numbers. length; i++) {
//    sum=sum+numbers[i];
//     }
//     return sum;
// }
// console.log(numerals(numbers));

// //------------------word9----------------//

// let start = 1;
// let end = 100;
// let sum = 0;

// function numerals(start,end) {
//     while (start<end) {
//         if( start % 2 ==0){
//           sum=sum+start;
//         }
//         start++
//     }
//     return sum;
// }
// console.log(numerals(start, end));

// //------------------word10-----------------//

// const number = [10, 20, 30]
// let sum=0;

// function numerals(number) {
//     for( i=0; i<number. length; i++){
//    sum= sum+number[i]
//     }
//     return sum;
// }
// console.log(numerals(number));

// let numbers = +prompt("ededleri daxil edin")
// let sum = 0;
// function numerals(numbers) {
//     for(i=0;  i< numbers. length; i++){
//     if( numbers<0){
//      sum=sum+numbers;
//     }

//     }
//     return sum;
// }
// console.log(numerals(numbers));

//-----------prakita------------//

// function numerals(number) {
//     for( let i=0; i<5; i++){
//       let number=+prompt("eded daxil edin")

//       if( number==7){
//       console.log("daxil etdiyiniz eded 7dir");
//       }
//     }
// }
//  console.log(numerals())

// let number=123
// function naturals(number) {
//     console.log(``)
// }

// let number = +prompt("Ededi daxil edin:");

// const divide = function () {
//   for (i = 0; i <= number; i++) {
//     if (number % i == 0) {
//       console.log(`${i} bu ededin bolenidir.`);
//     }
//   }
// };
// console.log(divide());

















//----------------(1.1)------------//

// let name = prompt("adinizi nedir?")

// console.log(name);

// let lastname = prompt("soyadiniz nedir?")

// console.log(lastname);

// let yas = prompt("yasiniz necedir?")

// console.log(yas);



// //-------------------(1.2)-----------------//  ??? 10+9 ???


// let number1 = +prompt("ededi daxil ediniz")
// let number2 = +prompt("ededi daxil ediniz")

// let toplam = number1+number2;

// console.log(toplam);

// let num1 = +prompt("ededi daxil ediniz")
// let num2 = +prompt("ededi daxil ediniz")

// let hasil = num1 * num2;

// console.log(hasil);

// let sayi1 = +prompt("ededi daxil ediniz")
// let sayi2 = +prompt("ededi daxil ediniz")

// let ferq = sayi1 - sayi2;

// console.log(ferq);


// //---------------------(1.3)--------------------//   //---++---//


// let olke = prompt("olkeni daxil edin")
// let seher = prompt("seheri daxil edin")
// let kuce = prompt("kuceni daxil edin")

// console.log(`${olke}, ${seher}, ${kuce}`);






















// //---------------(2.1)--------------------//

// let teref1 = +prompt("terefleri yazin")
// let teref2 = +prompt("terefleri yazin")
// let teref3 = +prompt("terefleri yazin")

// if( teref1+teref2>teref3){

//     console.log("movcuddur");
// }
// else{
//     console.log("movcud deyil")
// }


// //-------------(2.2)------------------------//

// let side1 = +prompt("terefleri yazin")
// let side2 = +prompt("terefleri yazin")
// let side3 = +prompt("terefleri yazin")

// if( side1=side2=side3){
//   console.log("ucbucaq berabertereflidir");
// }

// else{
//     console.log("muxtelif tereflidir")
// }


// //----------------(2.3)-----------------//


// let weather = prompt("deyeri daxil edin")

// switch (weather) {
//     case `yagmurlu`:
//         console.log("yagmurluk geyin!");
//         break;
//     case `qarli`:
//         console.log("elceyler yaddan cixmasin!");
//         break;
//     case `gunesli`:
//         console.log("hani menim marojnam?");
    
// }


// //----------------------(2.4)----------------//  ??eded dogru deyil?

// let numbers = +prompt("ededleri daxil edin")

   
// switch (true) {
//     case numbers>0 && numbers<12:
//         console.log("eded dogrudur");
//         break;

//     default:
//         console.log("eded dogru deyil")
//         break;
// }













// //----------------------(2.5)----------------//

// let numeral = +prompt("eded daxil edin")

// if( numeral<0){
//    console.log("eded menfidir");

// }
// else{
//     console.log("eded musbetdir");
// }







// //---------------------(3.1)-----------------------//


// let Frontend = [`html`, `css`,`js`,`react`];
// let Backend = [`node`, `express`,`mongodb`];


// let Fullstack = [];

// Fullstack.push(Frontend);
// console.log(Fullstack);

// Fullstack.push(Backend);
// console.log(Fullstack);




// //--------------------(3.2)----------------------//

// const age = [19, 21, 23, 25, 27, 29]

// minAge=age[0];
// for( i=0; i<age. length; i++){
//     if( age[i]<minAge){
//      minAge=age[i]
//     }
// }
// console.log(minAge);

// const age = [19, 21, 23, 25, 27, 29]

// maxAge = age[0];

// for( i=0; i<age.length; i++){
//   if( age[i]>maxAge){
//    maxAge=age[i]
//   }
// }
// console.log(maxAge);


// //-----------------------(3.3)------------------------//

//  let evenAge=[];

//  let age=[25, 26, 27, 28, 30]

// for( i=0; i<age.length; i++){
//    if( age[i] %2==0){
//      evenAge.push(age[i]);
//    }
// }
// console.log(evenAge);







// //----------------------(3.5)-------------------------//


// let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// let sum= 0;

// for( let i=0; i<ages. length; i++){
//     sum=sum+ages[i];
// }

// const ortalama = sum/ages. length

// console.log(ortalama);





// //------------------------(4.1)--------------------------//

// let Frontend = [`html`, `css`, `js`, `react`];

//  console.log( Frontend);



//  //--------------------(4.2)-------------------------//


//  let Backend = [`node`, `express`,`mongodb`];

//  for( let deger of Backend){
//     console.log(deger);
//  }



// //------------------------(4,3)--------------------//

// let sum=0;

// function naturals() {
//     for( let i=1; i<100; i++){
//       if( i % 3==0 && i % 6==0 ){
//       sum+=i;
//       }
//     }
//     return sum
// }
// console.log(naturals());



// //----------------------(4,4)------------------//

// let hasil=1;

// function naturals() {
//     for(i=1; i<70; i++){
//       if( i%3==0 ){
//        hasil=hasil*i;
//       }
//     }
//     return hasil

// }
//  console.log(naturals());




// //-----------------------(4,5)----------------------//


// function naturals() {
    
// let sayi =0;
//     for( i= -10; i<=30; i++){
//         if( i %2==0){
//           sayi++;
//         }
//     }
//     return sayi
  
// }

// console.log(naturals());







//--------------mentor---------------//
//------------------------2-------------------------//


// let num1 = +prompt("birinci ededi daxil edin") 
// let num2 = +prompt("ikinci ededi daxil edin")

// let sum = num1+num2;

// let deger = sum/2

// console.log(deger);


//-------------------------4---------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let min =arr[0];

// for( i=0; i<arr.length; i++){
//    if( arr[i]<min){
//      min=arr[i]
//    }
// }
// console.log(min);


//-------------------------5-------------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let baslangic=0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     baslangic++;
//   }
// }

// console.log( baslangic);


//----------------------6----------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let baslangic = 0;

// for( i=0; i<arr.length; i++){
//   if( arr[i] % 2 !==0){
//       baslangic ++;
//   }

// }
// console.log(baslangic);



//--------------------7-----------------------------//

//  let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

//  let say =0;

//  for( i=0; i<arr.length; i++){
//     say++
//  }

// console.log(say);

//--------------------------8-----------------------------//


// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let sum = 0;

// for( i=0; i<arr.length; i++){
//     sum=sum+arr[i]
// }
// let ededOrta=sum/arr.length

// console.log(ededOrta);



//------------------------9----------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let sum=0;



// for(i=0; i<arr.length; i++){
//   if( arr[i] % 2 !==0){
//    sum=sum+arr[i]
//   }
// }

// console.log(sum);


//-----------------------10---------------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let hasil=1;

// for(i=0;i<arr.length; i++ ){
//   if(arr[i] % 2==0 ){
//    hasil=hasil*arr[i];
//   }
// }
// console.log(hasil);




//-----------------------4------------------------//


// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let min=arr[0];


// for( i=0; i<arr.length; i++){
//    if( arr[i]<min ){
//       min=arr[i]
//    }
// }
// console.log(min);


//----------------------------5----------------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let say =0;

// for( i=0; i<arr.length; i++){
//    if(arr[i] %2==0 ){
//     say++
//    }
// }
// console.log(say);



//--------------------------6-------------------------//


// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let say = 0;

// for(i=0; i<arr.length; i++){
//   if(i%2 !==0){
//     say++
//   }
// }
// console.log(say);



//----------------------------7--------------------------//


// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]


// let say=0;

// for( i=0; i<arr.length; i++){
//    say++
// }
// console.log(say);


//--------------------------8---------------------------//


// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let sum=0;

// for(i=0; i<arr.length; i++){
//   sum=sum+arr[i]
// }

// edediOrta=sum/arr.length

// console.log(edediOrta);


//---------------------------9---------------------------//


// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let sum=0;

// for(i=0; i<arr.length; i++){
//   if(arr[i] %2 !==0 ){
//    sum=sum+arr[i]
//   }
// }
// console.log(sum);

//--------------------------10--------------------------//

// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13]

// let hasil=1;

// for(i=0; i<arr.length; i++){
//   if(arr[i] %2==0){
//     hasil=hasil*arr[i]
//   }
// }

// console.log(hasil);




//----------------------------mentorTapsirig1----------------------//


// let number = +prompt("ededi daxil edin")

// let kvadratcem = 0;

// for(i=0; i<number.length; i++){
//    let reqem = parseInt (number[i]);
//    kvadratcem=reqem*reqem;
// }
// console.log(kvadratcem);

// let numbers = +prompt("ededleri daxil edin")





























