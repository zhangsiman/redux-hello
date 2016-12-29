# Hello world
1.使用redux中的三大核心理念之一 --store  存储数据
２．安装redux npm i --save redux
3.mkdir store.js
```
import {createStore} from
let comment=[
'auter',
'content'
]
let store=createStore(reducer,comment)
export default store

```
４．修改数据：
```
基本原理：　组件发出action ,action 触发reducer ,真正修改数据是reducer来完成的
```

      1.action 是什么：
      action 对象有俩个部分组成：发出一个action　是在一个组件内部
    ```
    action({
      type:'ADD_COMMENT',
      comment:this.refs.content.value
      })

    －　第一部分：要有一个type属性,是一个字符串
    －　第二部分：要有一个payload 也就是这个action携带的数据
    ```

    发出一个action
    ```
    store.dispath(action)
    ```


    发出之后要有一个reducer来接受action携带过来的数据
      reducer
