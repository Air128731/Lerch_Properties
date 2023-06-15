import { useState, useEffect } from "react";
import '../css/slide-show.css'
import { transform } from "typescript";

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    }    
    if (slideIndex < 1) {
      setSlideIndex(slides.length);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }, [slideIndex]);

  return (
    <>
        <div className="slideshow-container">
            <div className="mySlides fade">
                <img src="https://www.lpc.com/wp-content/uploads/2018/04/Exterior2.jpeg" style={{ width: "100%", height: "auto"}} />
            </div>

            <div className="mySlides fade">
                <img src="https://www.lpc.com/wp-content/uploads/2018/03/IMG_4567-EDIT_small.jpg" style={{ width: "100%", height: "auto"}} />
            </div>

            <div className="mySlides fade">
                <img src="https://www.lpc.com/wp-content/uploads/2018/03/HIPLA_io_PlayaVista_09_160427.jpg" style={{ width: "100%", height: "auto"}} />
            </div>

            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
        </div>
        <div className='absolute bottom-3' style={{ textAlign: "center", left: "48%" }}>
            <span className="dot" onClick={() => currentSlide(1)}></span> 
            <span className="dot" onClick={() => currentSlide(2)}></span> 
            <span className="dot" onClick={() => currentSlide(3)}></span> 
        </div>
    </>
  );
}

export default ImageSlider;
