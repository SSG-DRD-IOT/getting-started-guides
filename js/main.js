var roadshow = {};
roadshow.gifs = [];

roadshow.init = function() {
  roadshow.gifs = $('img[data-animated]');
  roadshow.initGifStills();
  roadshow.checkWidth();
  $(window).on("resize", roadshow.checkWidth);
};

roadshow.checkWidth = function() {
  // if someone is not looking at "desktop" verison, don't show gifs
  // TODO: maybe instead measure the height of the image so .has-gif height can be responsive?
  //$(this).height() 
  if (window.matchMedia('(min-width: 650px)').matches) {
    roadshow.initSwapGifOnHover();
  } else {
    roadshow.removeSwapGifOnHover();
  }
}

roadshow.initGifStills = function() {
  roadshow.gifs.each(function() {
    if ( !$(this).attr('src') ) {
      // console.log( "init", $(this).data('still'));
      $(this).attr('src', $(this).data('still'));
    }
  });
};

roadshow.initSwapGifOnHover = function() {
  roadshow.gifs.parent().addClass('has-gif play-gif-button');
  roadshow.gifs.on('mouseenter', function(event){
    $(this).attr('src', $(this).data('animated'))
    $(this).parent().removeClass('play-gif-button');
  });
  roadshow.gifs.on('mouseleave', function(event){
    $(this).attr('src', $(this).data('still'))
    $(this).parent().addClass('play-gif-button');
  });
};

roadshow.removeSwapGifOnHover = function() {
  roadshow.gifs.off();
  roadshow.gifs.parent().removeClass('has-gif'); //.addClass('hidden');
};

(function(){
  roadshow.init();
}());