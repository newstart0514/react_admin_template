const store = {
    state: {
        num: 20
    },
    actions: {
        // 只放同步的方法
        add1(newState: { num: number }, action: { type: string }) {
            newState.num++
        },
        add2(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        }
    },
    // 优化redux-thunk的异步写法（模仿Vuex的写法）
    asyncActions: {
        // 只放异步的方法
        asyncAdd1(dispatch: Function) {
            setTimeout(() => {
                dispatch({type: 'add1'})
            }, 500)
        }
    },
    // 名字的统一管理
    // add1:'add1',
    // add2:'add2'
    // actionNames: {
    //     add1:'add1',
    //     add2:'add2'
    // }
    actionNames: {}
}

// 让actionNames自动添加
// 定义一个全局的actionNames
let actionNames = {}
// actionNames有多少对键值对，取决于action里面有多少个函数，所以遍历store.actions，给actionNames添加键值对
for (let key in store.actions) actionNames[key] = key;
store.actionNames = actionNames

export default store