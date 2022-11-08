const sliders = document.querySelectorAll(".slider");
// console.log(slides);
var counter = 0;

sliders.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
//   slide.style.bottom = `${index * 100}%`;
});

const nextSlide = () => {
  if (sliders.length == counter + 1) {
    counter = 0;
  } else {
    counter++;
  }
  transformSlide();
};

const previousSlide = () => {
  if (counter == 0) {
    counter = sliders.length - 1;
  } else {
    counter--;
  }
  transformSlide();
};

const transformSlide = () => {
  sliders.forEach((slide, index) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    // slide.style.transform = `translateY(${counter * 100}%)`;
  });
};
