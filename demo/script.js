document.addEventListener('DOMContentLoaded', function() { 

    var btn = document.getElementsByTagName('button');

    for (var i = 0; i < btn.length; i ++) {
        
        btn[i].addEventListener('click', function() {
            var target = this.getAttribute('target');
            CBF(target, this)
        }, false)

    }

    function CBF(target, tag) {
        CBFimage({
            id: target,
            cache: false,
            start: function() {
                document.getElementById(target).insertAdjacentHTML('afterend', '<div id="loading"></div>')
                var text = document.createElement('p');
                text.innerHTML = 'start loading ...';
                tag.parentNode.appendChild(text)
            },
            progress: function(loaded, total) {
                document.getElementById('loading').style.width = loaded / total * (window.innerWidth * 0.7) +'px';
                var text = document.createElement('p');
                text.innerHTML = 'loaded: '+ loaded +' ### total: '+ total;
                tag.parentNode.appendChild(text)
            },
            end: function() {
                document.getElementById('loading').parentNode.removeChild(document.getElementById('loading'))
                var text = document.createElement('p');
                text.innerHTML = 'done';
                tag.parentNode.appendChild(text)
            }
        })
    }
})
