$(document).ready(function() {

    $(".type1").click(function() {
        
        $("#type1").val($(this).attr("id"));
        $("#button1").html($(this).html());

    });
    $(".type2").click(function() {
        
        $("#type2").val($(this).attr("id"));
        $("#button2").html($(this).html());

    });

});