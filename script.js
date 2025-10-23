//function toggleMode() {
 //   const html = document.documentElement;
  //  html.classList.toggle('Light')
//
 //   const img = document.querySelector("#profile img")
   // if (html.classList.contains("Light")) {
     //   img.setAttribute("src", "profile.jpg")
    //} else{
   //     img.setAttribute("src","profilepic.png")

//}
//}


function toggleMode() {
    const html = document.documentElement;
    const isLight = html.classList.toggle('Light');

    const img = document.querySelector("#profile img");
    if (isLight) {
        img.setAttribute("src", "profile.jpg");
    } else {
        img.setAttribute("src", "profilepic.png");
    }
}






    //if(html.classlist.contains('ligth')) {
    //html.classlist.remove('light')
    //} else {
    //    html.classList.add('light')
    //}
