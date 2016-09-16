(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-83174607-1', 'auto');
    ga('send', 'pageview');

function seguimientoEventos (categoria , accion , label){
  ga('send', 'event', categoria , accion, label );
}
/*Slider*/

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


/*MAPA*/
 var hi = new Vivus('mapa', {type: 'delayed', duration: 30, start: "manual",dashGap: 20, forceRender: true },
        function () {
          if (window.console) {
            jQuery("#mapa .parte-azul>path").attr('class','relleno-fondo');
          }
        });
 

 
jQuery(document).ready(function($) {
  hi.play();
  jQuery(".regiones-BBB").hover(function() {
    /* Stuff to do when the mouse enters the element */
    var Region=jQuery(this).attr('data-region');
    jQuery("#mapa").find("g path").attr('fill','#00cfff');

    jQuery("#mapa").find("#" + Region + " path").attr('fill','#652d90');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    jQuery("#mapa").find("g path").attr('fill','#00cfff');
    
  });
});


