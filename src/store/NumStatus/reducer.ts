import handleNum from './index'

// 管理数据用的
let reducer = (state = {...handleNum.state},action:{type:string,val:number}) => {
    // 调用dispatch会执行这里的代码
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    // 思路：switc的做法是拿着action.type和case后面的每一个进行对比，这种做法很像遍历
    // 我们把case后面的这些值做成对象actionNames
    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState,action)
    //         break;
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState,action)
    //         break;
    //     default:
    //         break;
    // }
    // 优化：上面这样写，我们每添加一个方法，都要在这里多写一句case
    // 拿着action.type和actionNames的每一项进行对比,如果相等就直接调用 模块名.actions[下标](newState,action)
    for (let key in handleNum.actionNames) {
        // 判断是不是相等
        if(action.type === handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState,action);
            break;
        }
    }
    // 这样写就可以省去每次添加方法还需要改动这个文件的情况
    return newState
}

export default reducer