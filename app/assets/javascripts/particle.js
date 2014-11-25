$(document).ready(function(){
  particlesJS('hero-unit', {
  particles: {
    color: '#fff',
    shape: 'circle',
    opacity: 1,
    size: 2,
    size_random: true,
    nb: 75,
    line_linked: {
      enable_auto: true,
      distance: 250,
      color: '#fff',
      opacity: 0.3,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 2.4
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas',
    mode: 'grab',
    line_linked: {
      opacity: 0.2
    },
    events: {
      onclick: {
        push_particles: {
          enable: true,
          nb: 4
        }
      }
    }
  },
  retina_detect: true
});

})

