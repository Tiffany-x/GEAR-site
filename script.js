document.getElementById("read-more").addEventListener("click", function() {
    var targetElement = document.getElementById("articles");


    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
    });
})
var there = false;

document.getElementsByClassName("story-block").addEventListener("hover", function() {

})
document.getElementsByClassName("story-block").addEventListener("click", function() {
    
})


var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
/*
let observer = new IntersectionObserver(entries => {
    console.log(entries);
    if (entries[0].boundingClientRect.y < 0) {
        if (there) {
            console.log("before");
            document.getElementById("navigation").style.backgroundColor = "#123679";        
            document.getElementById("Home").style.color = "#fff";        
            document.getElementsByClassName("nav-butt").backgroundColor = "#fff";            

            there = false;
        } else {
            console.log("after");
            document.getElementById("navigation").style.backgroundColor = "#fff";        
            document.getElementById("Home").style.color = "#123679";        
            document.getElementsByClassName("nav-butt").style.color = "#123679";        

            there = true;
        }
    }
    });
    observer.observe(document.querySelector("#read-more"));
    */

