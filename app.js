// sticky navbar Start

window.onscroll = () => {
  let header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// sticky navbar End
