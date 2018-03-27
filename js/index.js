  {
    //banner部分
    $(".pgct li").each(function (index,ele) {
        $(this).click(function () {
            $(this).addClass("active").siblings(".active")
                .removeClass("active")
            $(".imgbox li").removeClass("active")
                .eq(index)
                .addClass("active")
        })
    })
}
 

 $("#totop").click(function () {

            $("html,body").animate({scrollTop:0},500)
        })



let leftBar=document.querySelector(".leftBar");
let topBar=document.querySelector(".topBar");
window.onscroll=function(){
        let st=document.documentElement.scrollTop;

        console.log(st);
        if(st>700){
            leftBar.style.display="block";
            topBar.style.display="block";
        }else{
            leftBar.style.display="none";
             topBar.style.display="none";
        }

}

console.log($(".content"));


$(".tips").click(function () {
    alert(789);
    let index=$(this).index(".tips");
    let ot=$(".tiaolou").eq(index).offset().top-665;
    $("html,body").animate({scrollTop:ot},200)
})

$(window).scroll(function () {
    let st= $(window).scrollTop();
    $(".tiaolou").each(function (index,ele) {
        if(st>$(this).offset().top-665){
            $(".tips").removeClass("active")
                .eq(index).addClass("active");
        }
    })
})







	





