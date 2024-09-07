import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import images from '@/app/assets/images'; // Đảm bảo đường dẫn đúng
import styles from '../ProductCard.module.scss';

const cx = classNames.bind(styles);

function Badge({ condition }) {
    const badgeContent = condition === 'showNew' ? 'New' : condition === 'showHot' ? 'Hot' : null;
    const badgeClass = condition === 'showNew' ? 'ticket' : condition === 'showHot' ? 'ticket' : '';

    return (
        <>
            {badgeContent && (
                <div
                    className={cx('info-ticket', badgeClass)}
                    style={{
                        backgroundImage: `url(${images.bgNew.default.src})`,
                    }}
                >
                    {badgeContent}
                </div>
            )}
        </>
    );
}

Badge.propTypes = {
    condition: PropTypes.oneOf(['showNew', 'showHot']).isRequired,
};

export default Badge;
