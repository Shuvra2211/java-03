
document.getElementById('toggleBtn').addEventListener('click',function(){
         document.getElementById('sidebar').classList.toggle('active');
 })


$(document).ready(function() {

    // sidebar js start

    // $('#toggleBtn').on('click', function() {
    //     $('#sidebar').addclass('active')
    // })

    // search js start 

    $('#input').hide();

$('#glass').click( function() {  
    $('#input').fadeToggle(1000);
})

    //  sarch js end

    // Show/Hide js start

$('#show_hide').click(function() {
    $('#div').toggle(1000);
})

     //  Show/Hide js end
     
     // fade/alart js start

$('#fade').click(function() {
    $('#div1').fadeToggle(2000,function() {
        alert()
    })
})
      
 // fade/alart js end

 
// slide start and stop js start

$('#start').click(function() {
    $('#div2').slideUp(2000);
})

$('#stop').click(function() {
    $('#div2').stop()
})

// slide start and stop js end

// chaing js start

$('#started').click(function() {
    $('#div3').slideUp(4000).slideDown(4000).slideUp(3000).slideDown(3000).slideUp(2000).slideDown(2000).slideUp(1000).slideDown(1000).slideUp(500).slideDown(500).slideUp(200).slideDown(200);
})

// chaing js end

// window preloader js start
$(window).on('load', function() {
    $('#placeholder').fadeOut(3000)
})

// window preloader js end
})









