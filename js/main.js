

$(document).ready(function(){

    let $next = $('#next');
    let $prev = $('#prev');
    let $counter = 1;


    // creat the <li> for the numbers
    for (let $i = 1 ; $i < 6 ; $i++) {
       
        $('#Indecators ul').append(`<li>${$i}</li>`);
    }



    // set the active class to the first element of <li>
    $('#Indecators ul li').eq(0).addClass('active');


    //handle the click of the li
    $('body').on('click' , '.Indecators li' , function(){

        let $ths = $(this);   // get the ('li') that we clicked 

        let $images = $('.slider-container img');  // get all images

       
        $images.each(function() {   // loop through the images
            
            if ($(this).attr('data-number') == $ths.text()) {

                $(this).addClass('active').siblings().removeClass('active');
                $ths.addClass('active').siblings().removeClass('active');
                $('#slider-number').text('slide #' + $ths.text() + ' of 5');
               
                $counter = parseInt($ths.text());

                // handle with prev and next button
                $next.removeClass('disabled');
                $prev.removeClass('disabled');

            }


        })

    })

        

    // the next button
    $next.on('click' , function() {
     
        $counter += 1;
        
           if ($counter > 5) {

               $(this).addClass('disabled');
               $counter = 5;
              

           }else {

            $($prev).removeClass('disabled');
            $('img.active').removeClass('active').next().addClass('active');
            $('#slider-number').text(`slide #${$counter} of 5`);
            $('.Indecators li.active').removeClass('active').next().addClass('active');

           }
    })



    // the prev button
    $prev.on('click' , function() {
      
        $counter -= 1;

        if ($counter  < 1) {

            $(this).addClass('disabled');
            $counter = 1;
            
        }else {

            $($next).removeClass('disabled');
            $('img.active').removeClass('active').prev().addClass('active');
            $('#slider-number').text(`slide #${$counter} of 5`);
            $('.Indecators li.active').removeClass('active').prev().addClass('active');

        }
                
    })

});
