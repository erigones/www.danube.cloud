var CURRENT_SECTION = 0;
var SECTIONS = null;

function scroll_to_next_section() {
  if (!SECTIONS || CURRENT_SECTION >= SECTIONS.length - 1) {
    return;
  }

  CURRENT_SECTION++;
  SECTIONS[CURRENT_SECTION].scrollIntoView();
}

function scroll_to_previous_section() {
  if (!SECTIONS || CURRENT_SECTION <= 0) {
    return;
  }

  CURRENT_SECTION--;
  SECTIONS[CURRENT_SECTION].scrollIntoView();
}

window.onload = function() {
  SECTIONS = document.getElementsByClassName('section');
};

window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case 'ArrowRight':
    case 'Spacebar':
    case ' ':
      scroll_to_next_section();
      break;
    case 'ArrowLeft':
      scroll_to_previous_section();
      break;
    case 'f':
			if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
			(!document.mozFullScreen && !document.webkitIsFullScreen)) {
				if (document.documentElement.requestFullScreen) {  
					document.documentElement.requestFullScreen();  
				} else if (document.documentElement.mozRequestFullScreen) {  
					document.documentElement.mozRequestFullScreen();  
				} else if (document.documentElement.webkitRequestFullScreen) {  
					document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
				}  
			} else {  
				if (document.cancelFullScreen) {  
					document.cancelFullScreen();  
				} else if (document.mozCancelFullScreen) {  
					document.mozCancelFullScreen();  
				} else if (document.webkitCancelFullScreen) {  
					document.webkitCancelFullScreen();  
				}  
			} 
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
});
