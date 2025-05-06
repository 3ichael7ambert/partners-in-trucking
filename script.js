window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.scroll-truck.left').style.transform = `translateX(${scrollY * 0.3}px)`;
    document.querySelector('.scroll-truck.right').style.transform = `translateX(-${scrollY * 0.3}px)`;
  });
  