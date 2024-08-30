"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        const totalSlides = slides.length;

        const showSlide = (index) => {
            let newIndex = index;

            if (index < 0) {
                newIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                newIndex = 0;
            }

            setCurrentIndex(newIndex);

            slides.forEach((slide, i) => {
                const isCurrent = i === newIndex;
                const transformValue = isCurrent ? "scale(1)" : "scale(0.8)";
                const widthValue = isCurrent ? "100%" : "80%";

                slide.style.transform = transformValue;
                slide.style.width = widthValue;

                dots[i].classList.toggle("active-dot", isCurrent);
            });

            const translateValue = -newIndex * 100 + "%";
            document.querySelector(".slider").style.transform =
                "translateX(" + translateValue + ")";
        };

        showSlide(currentIndex);

        const nextSlide = () => {
            showSlide(currentIndex + 1);
        };

        const interval = setInterval(nextSlide, 3600);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="grid wide m-0">
                <div className="slider-container">
                    <div className="col-12">
                        <div className="slider">
                            <div className="slide">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slide1.jpg`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slide2.jpg`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slide3.jpg`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>

                        <div className="dot-container">
                            <span
                                className="dot"
                                onClick={() => handleDotClick(0)}
                            ></span>
                            <span
                                className="dot"
                                onClick={() => handleDotClick(1)}
                            ></span>
                            <span
                                className="dot"
                                onClick={() => handleDotClick(2)}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide;
