<script type="text/javascript">
	
$(function(){
   $('.reg_a').click(function(){
        var id = $(this).attr('e_id'); var dat = '&eve='+id; $('#bt').removeClass('reg_a'); $('#bt').html("<center><img src='#' height='15px'></center>");
        $.ajax({ type:"POST",xhr:(window.ActiveXObject)?function(){ try{ return new window.ActiveXObject("Microsoft.XMLHTTP"); } catch(e){} }:
          function(){ return new window.XMLHttpRequest(); },url:"reg_eve.php",cache:false,data:dat,success:function(){  
          $('#bt').html("<center>Registered</center>");
           } });
   });


  
});


</script>

<style type="text/css">
	
	span#bt{
   font-size:23px;
  text-decoration:none;
   padding:10px 20px;
   background-color:#22a0ce;
   color:#fff;
   border-radius:5px;
   font-family:calibri;
   
}
	span#bt:hover{
		 background-color:#4a4a4a;
 color:#fff;
	}

</style>



<span id="bt" class="reg_a" e_id="codetrix">
	Register
</span>
<?php 
if($_SESSION['sid']=='1'){
$k_a = mysqli_query($link,"SELECT * FROM register_mem WHERE codetrix=1 and tag='$tag'");
      if(mysqli_num_rows($k_a)>0){ ?>
<a id="bt" e_id="codetrix">
	Already Registered
</a>
     <?php } else { ?>
<a id="bt" class="reg_a" e_id="codetrix">
	Register
</a>
   <?php  }
}else{  ?>
<span id="bt" class="reg_b" e_id="codetrix">
	Register
</span>
<?php } ?>


<p align="justify" class="e_A">
	You need to Login / Register first &nbsp; &nbsp; <a href="http://aspireaitam.com/2/2k14/Login/" id="bt">Login</a>
</p>


<div class="tag_c" align="right">
<span style="color:#4a4a4a;font-size:15px;"><b>Tag : <?php echo $tag; ?></b></span>
</div>