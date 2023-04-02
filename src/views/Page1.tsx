// 引入获取仓库数据的hook
import {useSelector, useDispatch} from 'react-redux'
import numStatus from "@/store/NumStatus";

const View = () => {
    const dispatch = useDispatch()

    // 对num的操作
    // 通过useSelector这个hook来获取仓库数据
    const {num,sarr} = useSelector((state:RootState) => ({
        num:state.handleNum.num,
        sarr:state.handleArr.sarr
    }))
    // 修改仓库的数据
    const changeNum = () => {
        // dispatch({type:'字符串(认为是一个记号)',值的对象形式})  值的对象形式满足key-value即可，key可以自定义
        // 最开始的写法-同步
        // dispatch({type:'add2',val:10})
        // 异步写法  react-thunk
        // dispatch((dis:Function)=>{
        //     setTimeout(()=>{
        //         dis({type:'add1'})
        //     },500)
        // })

        // 优化react-thunk的写法
        // dispatch(调用状态管理中的asyncAdd1())
        dispatch(numStatus.asyncActions.asyncAdd1)
    }

    return (
        <div className='page1'>
            <p>这是page1的页面内容</p>
            <p>{num}</p>
            <p>{sarr}</p>
            <button onClick={changeNum}>add</button>
        </div>
    )
}

export default View