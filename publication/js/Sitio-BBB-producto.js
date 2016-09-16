var serpentin = new Vivus('serp', {type: 'delayed', duration: 30, start: "manual",dashGap: 20, forceRender: true },
      function () {
        if (window.console) {
          jQuery("#serp .parte-azul>path").attr('class','relleno-fondo');
        }
      });

jQuery(document).ready(function($) {
	serpentin.play()	
});