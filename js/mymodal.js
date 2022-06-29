$(document).ready(function()
{
    $("#button-popup").click(function()
    {
        $(".window-popup").slideDown(900);
        $("body").css("overflow", "hidden");

    });

    $("#button-popup-close").click(function()
        {
            $(".window-popup").slideUp(500);
            $("body").css("overflow", "auto");    
        }); 
});