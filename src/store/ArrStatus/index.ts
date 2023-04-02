 const store = {
    state: {
        sarr: [10,20,30]
    },
    actions: {
        sarrPush(newState:{sarr:number[]},action:{type:string,val:number}) {
            newState.sarr.push(action.val)
        }
    },
    // 名字统一管理
    // sarrPush: 'sarrPush'
    actionNames: {}
}

 // 让actionNames自动添加
 // 定义一个全局的actionNames
 let actionNames = {}
 // actionNames有多少对键值对，取决于action里面有多少个函数，所以遍历store.actions，给actionNames添加键值对
 for (let key in store.actions) actionNames[key] = key;
 store.actionNames = actionNames

export default store