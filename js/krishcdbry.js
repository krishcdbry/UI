$('document').ready(function(){
 $(window).load(function(){
   $('#overlay').fadeOut(); 
   $('#overlay').removeClass('in');
   $('#overlay').addClass('ok').fadeIn(); $('.aa_load').hide();
   $('#all_in').fadeIn();
   $('#krish-cdbry').addClass('krish_cdbry');
   $('#web-developer').addClass('web_developer');
   $('#one_krish').addClass('data_side');

 });
function scroll_krishcdbry(val){
var aTag = $("a[name='"+ val +"']");
$('html,body').animate({scrollTop: aTag.offset().top-100},1000);}
$("a").click(function() {var href = $(this).attr('href').replace('#', ''); scroll_krishcdbry(href);
});
});

$(window).scroll(function(){
  var t = $(this).scrollTop();
  if(t>500){
  $('.head_der').animate({"height":"show"},"show");
  }
   if(t<500){
  $('.head_der').animate({"height":"hide"},"show");
  }
  if(t>694){
   $('#pic').fadeIn("slow");
  $('#pic').addClass('krish_pic');
  $('#name').fadeIn("slow");
  $('#name').addClass('name_side');
  $('#data').fadeIn("slow");
  $('#data').addClass('data_side');
  }
  if(t>1004){
   $('#chart').fadeIn("slow");
  $('#chart').addClass('chart_bot');
}
 if(t>1304){
   $('#stuff_all').fadeIn("slow");
  $('#stuff_all').addClass('name_side');
}
if(t>2300){
$('#resmes').fadeIn("slow");
  $('#resmes').addClass('krish_pic');
}

});


