$(document).ready(function() {

    $(".intro").addClass("animated bounceInUp");
    


    $(".works").waypoint(function(){
     
        $(".works").addClass("animated fadeInUp");
    },
    {
     offset: '60%'
    });
    

});

<script type="text/javascript">
	VanillaTilt.init(document.querySelector(".projects"), {
		max: 25,
		speed: 400
	});
</script>