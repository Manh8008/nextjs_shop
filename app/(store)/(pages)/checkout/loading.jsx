import classNames from 'classnames/bind'
import { LoadingSkeleton } from '@/components/ui'
import gridStyles from '@/assets/styles/grid.module.scss'
import styles from './Home.module.scss'
const cx = classNames.bind(styles)
const gx = classNames.bind(gridStyles)

function Loading() {
    return (
        <div className={gx('grid', 'wide')}>
            <div className={cx('wrapper')}>
                <LoadingSkeleton />
            </div>
        </div>
    )
}

export default Loading
