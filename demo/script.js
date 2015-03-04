document.addEventListener('DOMContentLoaded', function() { 
    CBFimage({
        id: 'canvas',
        cache: false,
        start: function() {
            document.getElementById('canvas').insertAdjacentHTML('afterend', '<div id="loading"></div>')
            document.getElementById('canvas').insertAdjacentHTML('afterend', '<div id="text"></div>')
        },
        progress: function(loaded, total) {
            document.getElementById('loading').style.width = loaded / total * window.innerWidth +'px';
            document.getElementById('text').textContent = (loaded / total).toFixed(2) * 100 +'%';
        },
        end: function() {
            document.getElementById('loading').parentNode.removeChild(document.getElementById('loading'))
            document.getElementById('text').parentNode.removeChild(document.getElementById('text'))
        }
    })
})
