import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'
import LoaderAnimate from '@/components/ui/LoaderAmimate'
const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

const Loading = () => {
    return <h1>Loading...</h1>
}

export default Loading
