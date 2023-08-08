// let jQuery;
// let particlesJS;
// (function($) {
  
// 	$(function() {
// 		// Loading JS
// 		$(window).on("load", function() {
// 			var preLoder = $(".loader-wrapper");
// 			preLoder.delay(700).fadeOut(500);
// 			$("body").addClass("loaded");
// 		});

// 		// Menu JS
// 		$(".navbar-toggler").on("click", function() {
// 			$("header").toggleClass("active");
// 		});

// 		$(document).ready(function() {
// 			if (window.innerWidth > 991) {
// 				$("header").removeClass("active");
// 			}
// 			$(window).on("resize", function() {
// 				if (window.innerWidth > 991) {
// 					$("header").removeClass("active");
// 				}
// 			});
// 		});

// 		// Background Animation JS
// 		var particles_js = document.getElementById("banner-bg-effect");
// 		if (particles_js !== null) {
// 			particlesJS("banner-bg-effect", 
//                 {
//                     particles: {
//                       number: {
//                         value: 80,
//                         density: {
//                           enable: true,
//                           value_area: 800
//                         }
//                       },
//                       color: {
//                         value: "#ffffff"
//                       },
//                       shape: {
//                         type: "circle",
//                         stroke: {
//                           width: 0,
//                           color: "#ffffff"
//                         },
//                         polygon: {
//                           nb_sides: 5
//                         },
//                         image: {
//                           src: "img/github.svg",
//                           width: 100,
//                           height: 100
//                         }
//                       },
//                       opacity: {
//                         value: 0.4,
//                         random: false,
//                         anim: {
//                           enable: false,
//                           speed: 1,
//                           opacity_min: 0.5,
//                           sync: false
//                         }
//                       },
//                       size: {
//                         value: 3,
//                         random: true,
//                         anim: {
//                           enable: false,
//                           speed: 20,
//                           size_min: 0.2,
//                           sync: false
//                         }
//                       },
//                       line_linked: {
//                         enable: true,
//                         distance: 150,
//                         color: "#ffffff",
//                         opacity: 0.2,
//                         width: 1
//                       },
//                       move: {
//                         enable: true,
//                         speed: 6,
//                         direction: "none",
//                         random: false,
//                         straight: false,
//                         out_mode: "out",
//                         bounce: false,
//                         attract: {
//                           enable: false,
//                           rotateX: 600,
//                           rotateY: 1200
//                         }
//                       }
//                     },
//                     interactivity: {
//                       detect_on: "canvas",
//                       events: {
//                         onhover: {
//                           enable: false,
//                           mode: "repulse"
//                         },
//                         onclick: {
//                           enable: false,
//                           mode: "push"
//                         },
//                         resize: true
//                       },
//                       modes: {
//                         grab: {
//                           distance: 400,
//                           line_linked: {
//                             opacity: 1
//                           }
//                         },
//                         bubble: {
//                           distance: 400,
//                           size: 20,
//                           duration: 2,
//                           opacity: 1,
//                           speed: 3
//                         },
//                         repulse: {
//                           distance: 200,
//                           duration: 0.4
//                         },
//                         push: {
//                           particles_nb: 4
//                         },
//                         remove: {
//                           particles_nb: 2
//                         }
//                       }
//                     },
//                     retina_detect: true
                  
//             });
// 		}
// 	});
// })(jQuery);