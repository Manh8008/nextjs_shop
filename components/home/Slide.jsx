'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import gridStyles from '@/assets/styles/grid.module.scss'
import styles from './HomeChild.module.scss'

const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const slides = document.querySelectorAll(`.${cx('slide')}`)
        const dots = document.querySelectorAll(`.${cx('dot')}`)
        const totalSlides = slides.length

        const showSlide = (index) => {
            let newIndex = index

            if (index < 0) {
                newIndex = totalSlides - 1
            } else if (index >= totalSlides) {
                newIndex = 0
            }

            setCurrentIndex(newIndex)

            slides.forEach((slide, i) => {
                const isCurrent = i === newIndex
                const transformValue = isCurrent ? 'scale(1)' : 'scale(0.8)'
                const widthValue = isCurrent ? '100%' : '80%'

                slide.style.transform = transformValue
                slide.style.width = widthValue

                dots[i].classList.toggle(cx('active-dot'), isCurrent)
            })

            const translateValue = -newIndex * 100 + '%'
            document.querySelector(`.${cx('slider')}`).style.transform = 'translateX(' + translateValue + ')'
        }

        showSlide(currentIndex)

        const nextSlide = () => {
            showSlide(currentIndex + 1)
        }

        const interval = setInterval(nextSlide, 3600)

        return () => {
            clearInterval(interval)
        }
    }, [currentIndex])

    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className={gx('grid', 'wide', 'm-0')}>
            <div className={cx('slider-container')}>
                <div className={gx('c-12')}>
                    <div className={cx('slider')}>
                        <div className={cx('slide')}>
                            <Image
                                width={1770}
                                height={500}
                                quality={100}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slide1.jpg`}
                                alt="Slide 1"
                            />
                        </div>
                        <div className={cx('slide')}>
                            <Image
                                width={1770}
                                height={500}
                                quality={100}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slide2.jpg`}
                                alt="Slide 2"
                            />
                        </div>
                        <div className={cx('slide')}>
                            <Image
                                width={1770}
                                height={500}
                                quality={100}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slide3.jpg`}
                                alt="Slide 3"
                            />
                        </div>
                    </div>

                    <div className={cx('dot-container')}>
                        <span className={cx('dot')} onClick={() => handleDotClick(0)}></span>
                        <span className={cx('dot')} onClick={() => handleDotClick(1)}></span>
                        <span className={cx('dot')} onClick={() => handleDotClick(2)}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide
