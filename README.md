# Module

#### commonJS
(1)使用的require, exports, module本质上是通过形参的方式传递到包装函数中。
commonJs/app.js module1.js/module2.js/module3.js
执行browserify ./commonJs/app.js  -o ./dist/bundle.js将app.js文件打包编译，commonJS对js代码进行了首尾包装
```
function(require,module,exports){
    module.exports = {
        msg: 'module1',
        foo() {
        console.log(this.msg)
        }
    }
}
```

(2)commonJS输入的是被输出的值的浅拷贝
例子：commonJs/lib.js main.js   commonJs/lib.js main1.js


#### esModule
(1)不能修改import导入的属性
esModule/a.js main.js
执行babel esModule/main.js -d dist/main.js报错：
SyntaxError: esModule/main.js: "num" is read-only

(2)esModule导出的是值的引用
例子：esModule/a.js main1.js

(3)ES6 module 的引入和导出是静态的，import 会自动提升到代码的顶层 ，import , export 不能放在块级作用域或条件语句中


