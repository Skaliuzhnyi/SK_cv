import Waypoint from 'waypoint';

if (document.querySelector('.skills-content')) {
  new Waypoint({
    element: skilsContent,
    offset: '80%',
    handler: function (direction) {
      let progress = select('.progress .progress-bar', true);
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%';
      });
    },
  });
}
