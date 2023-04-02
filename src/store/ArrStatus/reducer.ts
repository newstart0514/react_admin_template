import handleArr from './index'

// 管理数据用的
let reducer = (state = {...handleArr.state},action:{type:string,val:number}) => {
    // 调用dispatch会执行这里的代码
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    // 拿着action.type和actionNames的每一项进行对比,如果相等就直接调用 模块名.actions[下标](newState,action)
    for (let key in handleArr.actionNames) {
        // 判断是不是相等
        if(action.type === handleArr.actionNames[key]) {
            handleArr.actions[handleArr.actionNames[key]](newState,action);
            break;
        }
    }
    return newState
}

export default reducer