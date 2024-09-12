import React from 'react'
import classNames from 'classnames/bind'
import styles from './LoaderAnimate.module.scss'

const cx = classNames.bind(styles)

const LoaderAnimate = () => {
    const one = 'Loading'
    const two = 'Wait...'

    const hue = 260
    const saturation = `${Math.floor(Math.random() * 50 + 1) + 50}%`
    const lightness = `${Math.floor(Math.random() * 25) + 50}%`

    return (
        <div className={cx('scene')}>
            <div className={cx('word')}>
                {one.split('').map((letter, index) => (
                    <div
                        key={index}
                        className={cx('letter__wrap')}
                        style={{ '--index': index, '--hue': hue, '--saturation': saturation, '--lightness': lightness }}
                    >
                        <span className={cx('letter__panel')} aria-hidden="true">
                            {letter}
                        </span>
                        <span className={cx('letter__panel')} aria-hidden="true">
                            {two[index] || ''}
                        </span>
                        <span className={cx('letter__panel')} aria-hidden="true">
                            {letter}
                        </span>
                        <span className={cx('letter__panel')} aria-hidden="true">
                            {two[index] || ''}
                        </span>
                        <span className={cx('letter__panel')} aria-hidden="true"></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoaderAnimate
