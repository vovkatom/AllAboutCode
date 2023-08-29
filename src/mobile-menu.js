(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains("is-open");
    
    if (isMenuOpen) {
      mobileMenu.classList.remove("is-open");
      mobileMenu.classList.add("is-closed");
    } else {
      mobileMenu.classList.remove("is-closed");
      mobileMenu.classList.add("is-open");
    }

    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);

    const scrollLockMethod = !isMenuOpen
      ? bodyScrollLock.disableBodyScroll
      : bodyScrollLock.enableBodyScroll;
    scrollLockMethod(document.body);
  };

  const scrollToAnchor = () => {
    toggleMenu();
    // anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  const scrollToAnchorLinks = document.querySelectorAll(".js-scroll-to-anchor");
  scrollToAnchorLinks.forEach(link => {
    link.addEventListener("click", scrollToAnchor);
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open", "is-closed");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
