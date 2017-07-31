var a = document.querySelector('.a-class');  
var b = document.querySelector('.b-class');

//capture phase, bubble phase, target phase
// case #1
// listen in bubble phase and with b's stopPropagation, then print "b-class"
a.addEventListener('click', function (e) {  
   console.log(this.className);
}, false);
b.addEventListener('click', function (e) {  
   e.stopPropagation();
   e.preventDefault();
   console.log(this.className);
}, false);

// case #2
// listen in bubble phase and w/o b's stopPropagation, then print "b-class" followed by "a-class"
// a.addEventListener('click', function (e) {  
//    console.log(this.className);
// }, false);
// b.addEventListener('click', function (e) {  
//    e.preventDefault();
//    console.log(this.className);
// }, false);

// case #3
// listen in capture phase and with b's stopPropagation, then print "a-class" followed by "b-class"
// a.addEventListener('click', function (e) {  
//     console.log(this.className);
// }, true);
// b.addEventListener('click', function (e) {  
//   e.stopPropagation();
//   e.preventDefault();
//     console.log(this.className);
// }, true);


// case #4
// listen in capture phase and w/o b's stopPropagation, then print "a-class" followed by "b-class"
// a.addEventListener('click', function (e) {  
//     console.log(this.className);
// }, true);
// b.addEventListener('click', function (e) {  
//   e.preventDefault();
//     console.log(this.className);
// }, true);