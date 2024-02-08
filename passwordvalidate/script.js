// 1 ci task
// email
// const email={
//   validate:function(password){
//     if (!(password.match('[@]'))){
//       throw new Error("@gmail.com veya @mail.ru cixintisi olmalidir!");
//     }
//     return "success"
//   }
// }
// console.log(email.validate('togrul@gmail.com'))

// password
// const passwordvalidator = {
//   validate: function (password) {
//     if (password.length < 7) {
//       throw new Error("parol 7 reqemden kicik ola bilmez!");
//     }
//     if (!password.match("[A-Z]")) {
//       throw new Error("yanlisdir, en azi 1 eded boyuk herf                       olmalidir",);
//     }
//     if(!(password.match("[@?&%$!*]"))){
//       throw new Error("En azi bir xususi simvol olmalidir")
//     }
//     if(!(password.match('[a-z]'))){
//       throw new Error("en azi 1 kicik herf olamlidir")
//     }
//     if (!(password.match('[0-9]'))) {
//      throw new Error("yanlisdir, en azi 1 eded reqem olmalidir");
//     }
//     return "success";
//   },
// };
// console.log(passwordvalidator.validate("Togrul555@"));

// Fullname
// const name={
//   validate:function(fullname){
//     if(!(fullname.match("[a-z]"))){
//       throw new Error("adinizda en az 1 kicik herf olmalidir!")
//     }
//     if(!(fullname.match("[A-Z]"))){
//       throw new Error("adiniz boyuk herfle baslamalidir!")
//   }
//     if(fullname<2){
//       throw new Error("adiniz 2 herfden boyuk olmalidir")
//     }
//     return "Success"
//   }
// }
// console.log(name.validate("Togrulzeynalli"))

// 2 ci task
// const email={
//   validate:function(password){
//     if (!(password.match('[@]'))){
//       throw new Error("@gmail.com veya @mail.ru cixintisi olmalidir!");
//     }
//     return "success"
//   }
// }
// console.log(email.validate('togrul@gmail.com'))

// const passwordvalidator = {
//   validate: function (password) {
//     if (password.length < 7) {
//       throw new Error("parol 7 reqemden kicik ola bilmez!");
//     }
//     if (!password.match("[A-Z]")) {
//       throw new Error("yanlisdir, en azi 1 eded boyuk herf                       olmalidir",);
//     }
//     if(!(password.match("[@?&%$!*]"))){
//       throw new Error("En azi bir xususi simvol olmalidir")
//     }
//     if(!(password.match('[a-z]'))){
//       throw new Error("en azi 1 kicik herf olamlidir")
//     }
//     if (!(password.match('[0-9]'))) {
//      throw new Error("yanlisdir, en azi 1 eded reqem olmalidir");
//     }
//     return "success";
//   },
// };
// console.log(passwordvalidator.validate("Togrul555@"));

// 3 cu task

// Fullname
// const name={
//   validate:function(fullname){
//     if(!(fullname.match("[a-z]"))){
//       throw new Error("adinizda en az 1 kicik herf olmalidir!")
//     }
//     if(!(fullname.match("[A-Z]"))){
//       throw new Error("adiniz boyuk herfle baslamalidir!")
//   }
//     if(fullname<2){
//       throw new Error("adiniz 2 herfden boyuk olmalidir")
//     }
//     return "Success"
//   }
// }
// console.log(name.validate("Togrulzeynalli"))

// phonenumber
// const phonenumber={
//   validate:function(number){
//     if(number.length<9){
//       throw new Error("telefon nomreniz 9 dan boyuk olmalidir !")
//     }
//     if(!(number.match('[+]'))){
//       throw new Error("telefon nomreniz + ile olke daxil etmelisiniz")
//     }
//     return "Success"
//   }

// }

// console.log(phonenumber.validate("+994705768490"))

// birthday
// const birthday={
//   validate:function(number){
//     if(number.length<=8){
//       throw new Error("ad gunu 02.02.2020 seklinde 8 reqemden ibaret olmalidir")
//     }
//      return "Success"
//   }
// }
// birthday.validate(2020)

// task 4
// const searchforaddress={
//   validate:function(address){
//     if(address.length<5){
//       throw new Error("addresinizi daha etrafli sekilde yazin")
//     }
//      return "Success"
//   }
// }

// task 5
// ADDRESS
// const address={
//   validate:function(place){
//     if(!(place.match('[0-9]'))){
//       throw new Error("Addresinizde reqem olmalidir")
//     }
//     if(!(place.match('[A-Z]'))){
//       throw new Error("Addresinizin adi boyukle baslamalidir")
//     }
//     if(!(place.match('[a-z]'))){
//       throw new Error("Addresinizde kicik herfler olmalidir")
//     }
//      return "Success"
//   }
// }
// address.validate("")

// const Apartment={
//   validate:function(place){
//     if(!(place.match('[0-9]'))){
//       throw new Error("Addresinizde reqem olmalidir")
//     }
//     if(!(place.match('[A-Z]'))){
//       throw new Error("Addresinizin adi boyukle baslamalidir")
//     }
//     if(!(place.match('[a-z]'))){
//       throw new Error("Addresinizde kicik herfler olmalidir")
//     }
//      return "Success"
//   }
// }
// Apartment.validate("")

// city
// const City={
//   validate:function(place){
//     if(!(place.match('[A-Z]'))){
//       throw new Error("seher adiniz boyukle baslamalidir")
//     }
//     if(!(place.match('[a-z]'))){
//       throw new Error("seher adinizda kicik herfler olmalidir")
//     }
//      return "Success"
//   }
// }
// City.validate("")

// state
// const state={
//   validate:function(place){
//     if(!(place.match('[A-Z]'))){
//       throw new Error("seher adiniz boyukle baslamalidir")
//     }
//     if(!(place.match('[a-z]'))){
//       throw new Error("seher adinizda kicik herfler olmalidir")
//     }
//      return "Success"
//   }
// }
//   state.validate("")

// const zipcode={
//     validate:function(place){
//       if(!(place.match('[0-9]'))){
//         throw new Error("Zip kodunuz reqemle olamlidir")
//       }
//       if((place.match('[a-z]'))){
//         throw new Error("zip kodunuzda kicik herf ola bilmez")
//       }
//       if((place.match('[A-Z]'))){
//         throw new Error("zip kodunuzda boyuk herf ola bilmez")
//       }
//       if((place.match('[@?&%$!*]'))){
//         throw new Error("zip kodunuzda xususi herf ola bilmez")
//       }
//        return "Success"
//     }
//   }
// zipcode.validate("1234")
