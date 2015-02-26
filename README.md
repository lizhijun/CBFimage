# CBFimage
一个利用canvas全屏图片插件，可以自定义图片模糊程度，并且可以显示图片加载进度。
### 预览地址
- 正常图片：http://loeify.github.io/CBFimage/
- 模糊图片：http://loeify.github.io/CBFimage/blur.html

### 原理
通过修改 XMLHttpRequest 的 overrideMimeType 为 text/plain 方式加载图片，这时候就可以显示图片加载进度，加载完成后 base64 还原图片，利用 canvas 方式显示图片，同时可以定义图片模糊程度。为了减少二次打开加载时间，通过直接读取首次加载完成的图片 base64 编码存储在 localstorage 的编码，直接显示图片，完全去除网络加载图片时间。可以通过定义版本号强制浏览器重新加载图片
### 使用方式
加载插件js `<script src="CBFimage.js"></script>`
#### javascript
```js
CBFimage({
    id: 'canvas', /*（必须）定义canvas作用id */

    /* 以下接口函数只触发在首次图片的加载，或者是更新图片时候 */
    start: function() {
        // 图片开始加载
    },
    progress: function(loaded, total) {
        // 图片加载过程，loaded 表示已经加载大小，total 表示总大小
    },
    end: function() {
        // 图片加载结束
    }
})
```
#### css
```css
#canvas {
    opacity: 0;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
}
```
#### html
```html
<!-- 
	url: 图片地址
 	version: 定义版本（可选)，不支持跨域
	blur: 定义模糊（可选），默认不模糊 0，数字越大，模糊度越高 
-->
<canvas id="canvas" url="alma.jpg" version="0" blur="0"></canvas>
```
### 感谢
- http://blogs.adobe.com/webplatform/2012/01/13/html5-image-progress-events/
- 图片来源：alma

### License
MIT
