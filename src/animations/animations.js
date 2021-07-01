const sizeEnters = document.querySelectorAll(".size_enter");
const leftEnters = document.querySelectorAll(".left_enter");
const rightEnters = document.querySelectorAll(".right_enter");

const animationHandler = () => {
  const screenHeight = window.innerHeight;
  sizeEnters.forEach((element) => {
    const elementDisplayHeight = element.getBoundingClientRect().top;

    if (
      screenHeight / elementDisplayHeight > 1.1 &&
      elementDisplayHeight < screenHeight / 0.8
    ) {
      // Specific transition containing elements:

      if ([...element.classList].indexOf("vintage") > 0) {
        element.style.transform = "scale(1) rotate(-15deg)";
      } else {
        // Global transiton:
        element.style.transform = "scale(1)";
      }
    }
  });

  rightEnters.forEach((element) => {
    const elementDisplayHeight = element.getBoundingClientRect().top;

    if (
      screenHeight / elementDisplayHeight > 1.2 &&
      elementDisplayHeight < screenHeight / 0.8
    ) {
      // Specific transition containing elements:

      if ([...element.classList].indexOf("vintage") > 0) {
        element.style.transform = "rotate(-15deg) translateX(0)";
      } else {
        // Global transiton:
        element.style.transform = "translateX(0)";
      }
    }
  });

  leftEnters.forEach((element) => {
    const elementDisplayHeight = element.getBoundingClientRect().top;

    if (
      screenHeight / elementDisplayHeight > 1.2 &&
      elementDisplayHeight < screenHeight / 0.8
    ) {
      //Global transition
      element.style.transform = "translateX(0)";
    }
  });
};

setInterval(() => animationHandler(), 50);
