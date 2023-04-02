// import store from "@/store";
// 类型声明文件不要直接使用直接使用import ... from ... 的方式引入而是使用import（“”）这种语法

// TS中提供了ReturnType，用来获取函数类型的返回值的类型
type RootState = ReturnType<typeof import("@/store").getState>

// 注意这个的window首字母要大写
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function;
}