$(document).ready(function () {
  console.log("ready");

    $('#section1').hover(function(){
        
          $('#section1 h3').css('color', 'black');
           $('#section1 p').css('color', 'black');
        console.log('hover over 1');
     $('#image1').attr('src', 'images/black-images-02.svg');
    
         $('#section1box').animate({
                width: 300,
                left: 0,
         }   
             );
    
     }, function(){
        
    $('#section1 h3').css('color', 'white');
    $('#section1 p').css('color', 'white');
         $('#image1').attr('src', 'images/items-02.svg');
          
        
        $('#section1box').animate({
            width:0,   
           left: 150,
            });
                
        });
    

	 $('#section1 h3').click(function(){
		 console.log("slide toggle");
        $('#toggleparagraph1').slideToggle();
 	 });
  
    
    
    
    
    
    $('#section2').hover(function(){
        
          $('#section2 h3').css('color', 'black');
           $('#section2 p').css('color', 'black');
        console.log('hover over 2');
     $('#image2').attr('src', 'images/black-images-03.svg');
    
         $('#section2box').animate({
                width: 300,
                left: 0,
         }   
             );
    
     }, function(){
        
    $('#section2 h3').css('color', 'white');
    $('#section2 p').css('color', 'white');
         $('#image2').attr('src', 'images/items-03.svg');
          
        
        $('#section2box').animate({
            width:0,   
           left: 150,
            });
                
        });
    
    
    
    
     $('#section2 h3').click(function(){
		 console.log("slide toggle");
        $('#toggleparagraph2').slideToggle();
 	 });
    
    
    
    
    
    
    
    
    
    
      
    $('#section3').hover(function(){
        
          $('#section3 h3').css('color', 'black');
           $('#section3 p').css('color', 'black');
        console.log('hover over 3');
     $('#image3').attr('src', 'images/black-images-04.svg');
    
         $('#section3box').animate({
                width: 300,
                left: 0,
         }   
             );
    
     }, function(){
        
    $('#section3 h3').css('color', 'white');
    $('#section3 p').css('color', 'white');
         $('#image3').attr('src', 'images/items-04.svg');
          
        
        $('#section3box').animate({
            width:0,   
           left: 150,
            });
                
        });
    
    
     $('#section3 h3').click(function(){
		 console.log("slide toggle");
        $('#toggleparagraph3').slideToggle();
 	 });
    
    
    
    
    
    
    
    
    
    
     
      
    $('#section4').hover(function(){
        
          $('#section4 h3').css('color', 'black');
           $('#section4 p').css('color', 'black');
        console.log('hover over 3');
     $('#image4').attr('src', 'images/black-images-05.svg');
    
         $('#section4box').animate({
                width: 300,
                left: 0,
         }   
             );
    
     }, function(){
        
    $('#section4 h3').css('color', 'white');
    $('#section4 p').css('color', 'white');
         $('#image4').attr('src', 'images/items-05.svg');
          
        
        $('#section4box').animate({
            width:0,   
           left: 150,
            });
                
        });
    
    
    
     $('#section4 h3').click(function(){
		 console.log("slide toggle");
        $('#toggleparagraph4').slideToggle();
 	 });
    
    
    
    
    
    
    
    
    
         
    $('#section5').hover(function(){
        
          $('#section5 h3').css('color', 'black');
           $('#section5 p').css('color', 'black');
        console.log('hover over 3');
     $('#image5').attr('src', 'images/black-images-06.svg');
    
         $('#section5box').animate({
                width: 300,
                left: 0,
         }   
             );
    
     }, function(){
        
    $('#section5 h3').css('color', 'white');
    $('#section5 p').css('color', 'white');
         $('#image5').attr('src', 'images/items-06.svg');
          
        
        $('#section5box').animate({
            width:0,   
           left: 150,
            });
                
        });
    
    
     $('#section5 h3').click(function(){
		 console.log("slide toggle");
        $('#toggleparagraph5').slideToggle();
 	 });
    
    
    
    
    
    
    $('#stoptalking p').click(function(){
        $('#toggleparagraph1').slideUp();
         $('#toggleparagraph2').slideUp();
         $('#toggleparagraph3').slideUp();
         $('#toggleparagraph4').slideUp();
         $('#toggleparagraph5').slideUp();
        
    });

  	
});