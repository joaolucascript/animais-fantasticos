export default function scrollSuave() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Forma Alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // )};
  };

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
