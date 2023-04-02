// 引入样式文件
// import './Comp1.scss'    // 全局引入，会影响到其他的组件
// scss模块化引入
import styles from './Comp1.module.scss'

const Comp = () => {
    return(
        <div className={styles.box}>
            <p>这是Comp1的内容</p>
        </div>
    )
}

export default Comp