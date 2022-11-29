let page1_image1=document.querySelector("#page1_image1");
let page1_image2=document.querySelector("#page1_image2");
let page1_image3=document.querySelector("#page1_image3");

//----------image1---------
page1_image1.addEventListener("mouseenter",function(){
    page1_image1.style.transform="translateY(-2%)"
    page1_image1.style.transition="0.5s"
})
page1_image1.addEventListener("mouseleave",function(){
    page1_image1.style.transform="translateY(0%)"
    page1_image1.style.transition="0.5s"
})
//----------image2---------
page1_image2.addEventListener("mouseenter",function(){
    page1_image2.style.transform="translateY(-3%)"
    page1_image2.style.transition="0.5s"
})
page1_image2.addEventListener("mouseleave",function(){
    page1_image2.style.transform="translateY(0%)"
    page1_image2.style.transition="0.5s"
})
//----------image3---------
page1_image3.addEventListener("mouseenter",function(){
    page1_image3.style.transform="translateY(-3%)"
    page1_image3.style.transition="0.5s"
})
page1_image3.addEventListener("mouseleave",function(){
    page1_image3.style.transform="translateY(0%)"
    page1_image3.style.transition="0.5s"
})


// ---------------image-slider----------------------------------------

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay:4000,
    }
  });


//------------------------gsap--------------------------------//

gsap.from("#page1_image1",{
    y:100,
    opacity:0,
    duration:1,
})
gsap.from("#page1_image2",{
    x:100,
    opacity:0,
    duration:1,
})
gsap.from("#page1_image3",{
    y:-100,
    opacity:0,
    duration:1,
})

// -------------page2-----------

gsap.from("#page2_text2",{
    scrollTrigger:{
        trigger:"#page2_text2",
        scrolloler:"#main",
        // markers:true,
        start:"top 70%",
        // toggleActions:"restart"
    },
    y:50,
    opacity:0,
    duration:1,
})

gsap.from("#page2_text3",{
    scrollTrigger:{
        trigger:"#page2_text3",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:1,
})

gsap.from("#page_text4",{
    scrollTrigger:{
        trigger:"#page_text4",
        scrolloler:"#main",
        // markers:true,
        start:"top 70%",
        // toggleActions:"restart"
    },
    y:50,
    opacity:0,
    duration:1,
})

gsap.from("#page3_image1",{
    scrollTrigger:{
        trigger:"#page3_image1",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})

gsap.from("#page3_image3",{
    scrollTrigger:{
        trigger:"#page3_image3",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})

gsap.from("#page3_image4",{
    scrollTrigger:{
        trigger:"#page3_image4",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 77%",
    },
   y:50,
   opacity:0,
   duration:0.5,
})


gsap.from("#page3_image2",{
    scrollTrigger:{
        trigger:"#page3_image2",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 77%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})

gsap.from("#page3_right_text1",{
    scrollTrigger:{
        trigger:"#page3_right_text1",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})

gsap.from("#page3_right_text2",{
    scrollTrigger:{
        trigger:"#page3_right_text2",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%"
        
    },
    y:50,
    opacity:0,
    duration:0.5,
})

// ---------page4-------
gsap.from("#page4_text1",{
    scrollTrigger:{
        trigger:"#page4_text1",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%"
    },
    y:50,
    opacity:0,
    duration:1,
})

gsap.from("#page4_text2",{
    scrollTrigger:{
        trigger:"#page4_text2",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%"
    },
    y:50,
    opacity:0,
    duration:1,
})

// -------------page5-------------
gsap.from("#page5_left",{
    scrollTrigger:{
        trigger:"#page5_left",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})
gsap.from("#page5_right",{
    scrollTrigger:{
        trigger:"#page5_right",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})
gsap.from("#page5_bottom_box1",{
    scrollTrigger:{
        trigger:"#page5_bottom_box1",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:1,
})

// ----------------page6---------------

gsap.from("#swiper mySwiper",{
    scrollTrigger:{
        trigger:"#swiper mySwiper",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%"
    },
    opacity:0,
    duration:0.5,
})



// ---------------image7------------
gsap.from("#page7_image1",{
    scrollTrigger:{
        trigger:"#page7_image1",
        srolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 75%"
    },
    y:50,
    opaacity:0,
    duration:0.5,
})




// ----------------page7------------
gsap.from("#list_11",{
    scrollTrigger:{
        trigger:"#list_11",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
})
gsap.from("#list_22",{
    scrollTrigger:{
        trigger:"#list_22",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.5,
})
gsap.from("#list_33",{
    scrollTrigger:{
        trigger:"#list_33",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
    delay:1,
})
gsap.from("#list_44",{
    scrollTrigger:{
        trigger:"#list_44",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
    delay:1.5,
})
gsap.from("#list_55",{
    scrollTrigger:{
        trigger:"#list_55",
        scrolloler:"#main",
        // toggleActions:"restart",
        // markers:true,
        start:"top 70%",
    },
    y:50,
    opacity:0,
    duration:0.5,
    delay:2,
})