const icon = document.querySelector("#icon");

icon.addEventListener('click', scrollFunction);
function scrollFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

window.onload = function () {
    window.scrollTo(0,0);
};


// // window.onscroll = function() {
// //     onScrollDown();
// //     onScrollUp();

// // };

// // function onScrollDown() {
// //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
// //       document.querySelector("#icon").style.display = "block";
// //     } else {
// //       document.querySelector("#icon").style.color = "white";
// //     }
// //   };

// // function onScrollUp(){

// //     if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0 ) {
// //         document.querySelector("#icon").style.display = "block";
// //     }

// // };

// // window.addEventListener('scroll', checkPosition);

// // let scrollPos = 0;

// // function checkPosition(){

// //     let windowY = window.scrollY;

// //     if( windowY < scrollPos ){

// //         icon.style.display = "none";

// //     } else{

// //         icon.style.display = "block";

// //     }

// // };









































































