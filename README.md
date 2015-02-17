# CBFimage
编码方式加载图片，显示图片加载进度，再用 canvas 方式显示图片，canvas 图片自适应。
### 使用方式
加载插件js `<script src="CBFimage.js"></script>`
#### javascript
```js
document.addEventListener('DOMContentLoaded', function() {
    CBFimage({
        id: 'canvas', // 定义 canvas 图片id（必须）
        url: 'alma.jpg', // 图片加载路径（必须）
        ver: 0, // 版本号（可选）
        blur: 0 // 是否定义模糊（可选，默认不模糊 0，数字越大模糊度越高）
    })
})
```
#### css
```css
body {
    position: relative;
    overflow: hidden;
    background: #333946; /* 定义容器背景 */
}
#canvas { /* canvas id */
    opacity: 0;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
}
#loading { /* loading 容器 */
    background: rgba(0,0,0,.1);
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
```
#### html
```html
<canvas id="canvas"></canvas>
```
### 工作方式
首次加载使用编码方式加载图片，base64 完成之后 canvas 方式显示图片，并且把相应图片 base64 编码储存在 localstorage。下一次加载就直接从 localstorage 获取图片 base64 编码，完成后 canvas 方式显示图片。可以定义版本号强制浏览器重新加载图片。
### thanks
http://blogs.adobe.com/webplatform/2012/01/13/html5-image-progress-events/

