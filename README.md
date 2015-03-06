# CBFimage
一个显示图片加载进度插件，利用 canvas 显示图片，同时可以自定义图片模糊程度。
### 预览地址
http://loeify.github.io/CBFimage/demo/

### 原理
通过修改 XMLHttpRequest 的 overrideMimeType 为 text/plain 方式加载图片，这时候就可以显示图片加载进度，加载完成后，利用 canvas 显示图片，同时可以定义图片模糊程度。通过存储首次加载完成的图片 base64 编码在 localstorage，二次打开直接显示图片，完全去除网络加载图片时间。可以通过定义版本号强制浏览器重新加载图片
### 使用方式
加载插件js `<script src="CBFimage.js"></script>`
#### javascript
```js
CBFimage({
    id: 'canvas', /*（必须）定义canvas作用id */
	cache: 'true', /* (可选) 设定是否缓存，默认true，当为 false 时候每次都会重新加载图片 */
	
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
#### html
```html
<!-- 
	url: 图片地址
 	version: 定义版本（可选)，注意不支持跨域
	blur: 定义模糊（可选 0－10），默认不模糊 0，数字越大，模糊度越高 
-->
<canvas id="canvas" url="alma.jpg" version="0" blur="0"></canvas>
```
### 感谢
- http://blogs.adobe.com/webplatform/2012/01/13/html5-image-progress-events/
- 图片来源：alma

### License
MIT
