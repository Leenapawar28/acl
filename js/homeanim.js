console.clear()

gsap.registerPlugin(ScrollTrigger)



// if(jQuery(window).width() <= 767){
//   console.log("mobile");
//   tl.fromTo(".distribution ul li",0.7,{opacity:0},{opacity:0.8, stagger:0.4},"-=1")
// }

// if(jQuery(window).width() > 769 && jQuery(window).width() < 821){
//   console.log("ipad");
//   tl.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:50},{ x:0, opacity:1},"-=1")

//   tl.fromTo(".distribution ul li.Agility",0.7,{x:100},{ x:150, opacity:0.8},"-=1")
//   tl.fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
//   tl.to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
//   tl.fromTo(".distribution ul li.Flexibility",0.7,{x:250},{ x:300, opacity:0.8},"-=1.3")
//   tl.fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
//   tl.fromTo(".distribution ul li.Availability",0.7,{x:400},{ x:450, opacity:0.8},"-=1.7")
//   tl.fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
// }

// if(jQuery(window).width() > 822 && jQuery(window).width() < 1024){
//   console.log("1024");
//   tl.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:50},{ x:0, opacity:1},"-=1")

//   tl.fromTo(".distribution ul li.Agility",0.7,{x:150},{ x:170, opacity:0.8},"-=1")
//   tl.fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
//   tl.to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
//   tl.fromTo(".distribution ul li.Flexibility",0.7,{x:300},{ x:340, opacity:0.8},"-=1.3")
//   tl.fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
//   tl.fromTo(".distribution ul li.Availability",0.7,{x:460},{ x:510, opacity:0.8},"-=1.7")
//   tl.fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
// }

// if(jQuery(window).width() > 1025 && jQuery(window).width() < 1366){
//   console.log("1366");
//   tl.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:70},{ x:0, opacity:1},"-=1")

//   tl.fromTo(".distribution ul li.Agility",0.7,{x:180},{ x:210, opacity:0.8},"-=1")
//   tl.fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
//   tl.to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
//   tl.fromTo(".distribution ul li.Flexibility",0.7,{x:340},{ x:400, opacity:0.8},"-=1.3")
//   tl.fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
//   tl.fromTo(".distribution ul li.Availability",0.7,{x:550},{ x:600, opacity:0.8},"-=1.7")
//   tl.fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
// }

// if(jQuery(window).width() > 1365 && jQuery(window).width() < 1440){
//   console.log("1440");
//   tl.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:90},{ x:0, opacity:1},"-=1")

//   tl.fromTo(".distribution ul li.Agility",0.7,{x:80},{ x:230, opacity:0.8},"-=1")
//   tl.fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
//   tl.to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
//   tl.fromTo(".distribution ul li.Flexibility",0.7,{x:320},{ x:430, opacity:0.8},"-=1.3")
//   tl.fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
//   tl.to(".distribution ul li.Availability",0.7,{x:580},{ x:630, opacity:0.8},"-=1.7")
//   tl.fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
// }

// if(jQuery(window).width() > 1441 && jQuery(window).width() < 1680){
//   console.log("1680");
//   tl.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:90},{ x:0, opacity:1},"-=1")

//   tl.fromTo(".distribution ul li.Agility",0.7,{x:50},{ x:280, opacity:0.8},"-=1")
//   tl.fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
//   tl.to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
//   tl.fromTo(".distribution ul li.Flexibility",0.7,{x:350},{ x:500, opacity:0.8},"-=1.3")
//   tl.fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=1")
//   tl.to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
//   tl.fromTo(".distribution ul li.Availability",0.7,{x:600},{ x:725, opacity:0.8},"-=1.7")
//   tl.fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1},"-=1")
//   tl.to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
// }

// if(jQuery(window).width() > 1681 && jQuery(window).width() < 1921){
//   console.log("1920");
//   tl.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:90},{ x:0, opacity:1},"-=1")

//   tl.fromTo(".distribution ul li.Agility",0.7,{x:50},{ x:300, opacity:0.8},"-=1")
//   tl.fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
//   tl.to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
//   tl.fromTo(".distribution ul li.Flexibility",0.7,{x:350},{ x:530, opacity:0.8},"-=1.3")
//   tl.fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
//   tl.fromto(".distribution ul li.Availability",0.7,{x:600},{ x:775, opacity:0.8},"-=1.7")
//   tl.fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
//   tl.to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
// }

let mm = gsap.matchMedia()

// product sec stat
mm.add("(min-width: 768px)", () => {
  var product = gsap.timeline({scrollTrigger: {trigger: ".Products", start: "30% 80%", markers: false, ease: "power1.out", }});
  product.fromTo('.Products .content-wrap .left > ul > li',0.3,{opacity:0},{opacity:1},"+=0.2")
  product.fromTo('.Products .content-wrap .right > ul > li',0.3,{opacity:0},{opacity:1, stagger:0.3})
})

mm.add("(max-width: 767px)", () => {
  var product = gsap.timeline({scrollTrigger: {trigger: ".Products", start: "30% 80%", markers: false, ease: "power1.out", }});
  product.fromTo('.Products .content-wrap .left > ul > li',0.3,{opacity:0},{opacity:1},"+=0.2")

  var product2 = gsap.timeline({scrollTrigger: {trigger: ".Products .content-wrap .left > ul > li", start: "80% 80%", markers: false, ease: "power1.out", }});
  product2.fromTo('.Products .content-wrap .left > ul > li:nth-child(1)',0.3,{opacity:0},{opacity:1})

  var product3 = gsap.timeline({scrollTrigger: {trigger: ".Products .content-wrap .right > ul > li:nth-child(1)", start: "80% 90%", markers: false, ease: "power1.out", }});
  product3.fromTo('.Products .content-wrap .right > ul > li:nth-child(2)',0.3,{opacity:0},{opacity:1, })
})
// product sec ends



// distribusion start

  mm.add("(min-width:1681px)",() => {
  console.log("1920");
  var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});
  distributionanim.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:90},{ x:0, opacity:1},"-=1")

  .fromTo(".distribution ul li.Agility",0.7,{x:50},{ x:325, opacity:0.8},"+=0.3")
  .fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
  .to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
  .fromTo(".distribution ul li.Flexibility",0.7,{x:350},{ x:600, opacity:0.8},"-=1.2")
  .fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
  .to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
  .fromTo(".distribution ul li.Availability",0.7,{x:600},{ x:875, opacity:0.8},"-=2")
  .fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
  .to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
  })

  mm.add("(min-width:1441px) and (max-width: 1680px)",() => {
    console.log("1680");
    var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});

    distributionanim.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:90},{ x:0, opacity:1},"-=1")
  
    .fromTo(".distribution ul li.Agility",0.7,{x:50},{ x:280, opacity:0.8},"+=0.3")
  .fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
  .to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
  .fromTo(".distribution ul li.Flexibility",0.7,{x:350},{ x:500, opacity:0.8},"-=1.2")
  .fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=1")
  .to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
  .fromTo(".distribution ul li.Availability",0.7,{x:600},{ x:725, opacity:0.8},"-=1.7")
  .fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1},"-=1")
  .to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
  })

  mm.add("(min-width:1367px) and (max-width: 1440px)",() => {
    console.log("1440");
    var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});
    distributionanim.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:90},{ x:0, opacity:1},"-=1")
  
    .fromTo(".distribution ul li.Agility",0.7,{x:80},{ x:250, opacity:0.8},"+=0.3")
    .fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
    .to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
    
    .fromTo(".distribution ul li.Flexibility",0.7,{x:320},{ x:445, opacity:0.8},"-=1.2")
    .fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
    .to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
    
    .fromTo(".distribution ul li.Availability",0.7,{x:580},{ x:640, opacity:0.8},"-=2")
    .fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
    .to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})

  })

  mm.add("(min-width:1025px) and (max-width: 1366px)",() => {
    console.log("1366");
    var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});
    distributionanim.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:70},{ x:0, opacity:1},"-=1")

      .fromTo(".distribution ul li.Agility",0.7,{x:180},{ x:235, opacity:0.8},"+=0.3")
      .fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
      .to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
      
      .fromTo(".distribution ul li.Flexibility",0.7,{x:340},{ x:420, opacity:0.8},"-=1.2")
      .fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
      .to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
      
      .fromTo(".distribution ul li.Availability",0.7,{x:550},{ x:610, opacity:0.8},"-=2")
      .fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
      .to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})

  })

  mm.add("(min-width:822px) and (max-width: 1024px)",() => {
    console.log("1024");
    var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});
    distributionanim.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:50},{ x:0, opacity:1},"-=1")

  .fromTo(".distribution ul li.Agility",0.7,{x:150},{ x:190, opacity:0.8},"+=0.3")
  .fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
  .to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
  
  .fromTo(".distribution ul li.Flexibility",0.7,{x:300},{ x:350, opacity:0.8},"-=1.2")
  .fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
  .to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
  
  .fromTo(".distribution ul li.Availability",0.7,{x:460},{ x:510, opacity:0.8},"-=2")
  .fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
  .to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
  })

  mm.add("(min-width:768px) and (max-width: 821px)",() => {
    var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});
      console.log("ipad");
      distributionanim.fromTo(".distribution ul li.Distribution-Driven",0.7,{x:50},{ x:0, opacity:1},"-=1")

    .fromTo(".distribution ul li.Agility",0.7,{x:100},{ x:170, opacity:0.8},"+=0.3")
    .fromTo(".distribution ul li.Agility .hover-text",0.7,{ opacity:0},{ opacity:1},"-=0.7")
    .to(".distribution ul li.Agility .hover-text",1,{ opacity:0})
    
    .fromTo(".distribution ul li.Flexibility",0.7,{x:250},{ x:320, opacity:0.8},"-=1.2")
    .fromTo(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},{ opacity:1})
    .to(".distribution ul li.Flexibility .hover-text",0.7,{ opacity:0},)
    
    .fromTo(".distribution ul li.Availability",0.7,{x:400},{ x:470, opacity:0.8},"-=2")
    .fromTo(".distribution ul li.Availability .hover-text",0.7,{ opacity:0},{ opacity:1})
    .to(".distribution ul li.Availability .hover-text",0.7,{ opacity:0})
  })

  mm.add("(max-width:767px)",() => {
    var distributionanim = gsap.timeline({scrollTrigger: {trigger: ".distribution", start: "top 80%", markers: false, ease:"Power4.inOut" }});
     console.log("mobile");
     distributionanim.fromTo(".distribution ul li",0.7,{opacity:0},{opacity:0.8, stagger:0.4})
  })


// distribusion start
