// <script>
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
// </script> 


  const aboutSection = document.querySelector('#about');
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });


  new TypeIt("#about1", {
    strings: "About SufiMart!",
    speed: 75,
    loop: true,
  }).go();



