{
    //banner部分
    $(".pgct li").each(function (index,ele) {
        $(this).mouseover(function () {
            $(this).addClass("active").siblings(".active")
                .removeClass("active")
            $(".imgbox li").removeClass("active")
                .eq(index)
                .addClass("active")
        })
    })
}
  let imgs=document.querySelectorAll(".imgbox li");
  let pagers=document.querySelectorAll(".pgct li");
  let banner=document.querySelector(".picture");
  
let n=0; 
  let t=setInterval(move,3000);
  function move(){
    n++;
    if(n===imgs.length){
      n=0;
    }
    if(n<0){
      n=imgs.length-1;
    }
    for(let i=0;i<imgs.length;i++){
      imgs[i].classList.remove("active");
      pagers[i].classList.remove("active");
    }
    imgs[n].classList.add("active");
    pagers[n].classList.add("active");
  }


$("#totop").click(function () {

    $("html,body").animate({scrollTop:0},500)
})
$("#db").click(function () {

    $("html,body").animate({scrollTop:0},500)
})




 window.onscroll=function(){
    let ot=$("html,body").scrollTop();
    if(ot>700){
       $(".leftBar").css("display","block"); 
       $(".topBar").css("display","block"); 
    }
    else{
       $(".leftBar").css("display","none"); 
       $(".topBar").css("display","none"); 
    }
 }

// let leftBar=document.querySelector(".leftBar");
// let topBar=document.querySelector(".topBar");
// window.onscroll=function(){
//         let st=document.documentElement.scrollTop;

//         console.log(st);
//         if(st>700){
//             leftBar.style.display="block";
//             topBar.style.display="block";
//         }else{
//             leftBar.style.display="none";
//              topBar.style.display="none";
//         }

// }




$(".tips").click(function () {

    let index=$(this).index(".tips");
    console.log(index);
    let ot=$(".tiaolou").eq(index).offset().top-50;
    console.log(ot);
    $("html,body").animate({scrollTop:ot},200)
})

$(window).scroll(function () {
    let st= $(window).scrollTop();
    $(".tiaolou").each(function (index,ele) {
        if(st>$(this).offset().top-150){
            $(".tips").removeClass("active")
                .eq(index).addClass("active");
        }
    })
})


 //右侧导航栏部分
{
    $(".biaoqian li").each(function (index,ele) {


        $(ele).mouseover(function () {


            $(this).addClass("righthide").siblings(".righthide")
                .removeClass("righthide");
            $(".righthide div")
                .addClass("hide1").siblings(".hide1")
                .removeClass("hide1")
        })
    })
}

{
      $(".biaoqian2 li").each(function (index,ele) {


          $(ele).mouseover(function () {


              $(this).addClass("righthide").siblings(".righthide")
                  .removeClass("righthide");
              $(".righthide div")
                  .addClass("hide3").siblings(".hide3")
                  .removeClass("hide3")
          })
      })
  }





	





