$(document).ready(function() {

    $(".intro").addClass("animated bounceInUp");
    $(".fresh").waypoint(function(){
     
        $(".fresh").addClass("animated swing");
    },
    {
     offset: '40%'
    });
    $(".works").waypoint(function(){
     
        $(".works").addClass("animated fadeInUp");
    },
    {
     offset: '60%'
    });
    

});