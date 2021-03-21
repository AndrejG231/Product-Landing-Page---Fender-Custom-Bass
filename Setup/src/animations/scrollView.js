let offset = 0;

const calculateOffset = (scrollPos, pageHeight) => {
  const coverOffset = scrollPos % pageHeight;

  const realOffset =
    coverOffset > pageHeight / 2 ? pageHeight - coverOffset : coverOffset;

  const viewPortOffset = (realOffset / (pageHeight / 2)) * 200;

  return viewPortOffset > 100 ? 100 : viewPortOffset;
};

const scrollView = () => {
  const pageHeight = window.innerHeight * 1.5;
  const scrollPos = document.documentElement.scrollTop;

  //   if (scrollPos < winHeight / 2) {
  //     document.documentElement.scrollTop = winHeight / 2;
  //   }

  const topCover = document.querySelector(".cover_top");
  const bottomCover = document.querySelector(".cover_bottom");

  const viewPortOffset = calculateOffset(scrollPos, pageHeight);

  topCover.style.transform = `translateY(${viewPortOffset}vh)`;
  bottomCover.style.transform = `translateY(-${viewPortOffset}vh)`;
};

document.addEventListener("scroll", () => scrollView());
