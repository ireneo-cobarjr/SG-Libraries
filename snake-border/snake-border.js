const snakeBorder = {
    set: function (param = {}) {
        var args = {
            elem   : 'snake-border',
            color1 : '#757575',
            color2 : '#424242',
            width  : 2,
            speed  : 2
        } 

        Object.assign(args, param)
        snakeBorder(args);

        function snakeBorder( arg = defaultSnakeBorder ) {
            if ( arg.elem.startsWith('#') ) {
                snakeBorderApplyStyle(arg, document.querySelector(`${arg.elem}`))
        
            } else {
                Array.prototype.forEach.call(document.getElementsByClassName(`${arg.elem}`), el => {
                    snakeBorderApplyStyle(arg, el)
                })
            }
        }
        
        function snakeBorderApplyStyle (ApplyStyle, e) {
            addSnakeBorderClass(e);
            for (var snakes = 4; snakes > 0; snakes--) {
                var s = document.createElement('div')
                s.classList.add(`snake-${snakes}`)
                var delay = ApplyStyle.speed / 2;
        
                    switch (snakes) {
                        case 4:
                        s.setAttribute('style', `width:${ApplyStyle.width}px;background:linear-gradient(to top, ${ApplyStyle.color1},${ApplyStyle.color2});animation-duration:${ApplyStyle.speed}s;animation-delay:${delay}s`);
                        break;
        
                        case 3:
                        s.setAttribute('style', `height: ${ApplyStyle.width}px;background:linear-gradient(to left, ${ApplyStyle.color1},${ApplyStyle.color2});animation-duration:${ApplyStyle.speed}s;`);
                        break;
        
                        case 2:
                        s.setAttribute('style', `width:${ApplyStyle.width}px;background:linear-gradient(to bottom, ${ApplyStyle.color1},${ApplyStyle.color2});animation-duration:${ApplyStyle.speed}s;animation-delay:${delay}s`);
                        break;
        
                        case 1:
                        s.setAttribute('style', `height: ${ApplyStyle.width}px;background:linear-gradient(to right, ${ApplyStyle.color1},${ApplyStyle.color2});animation-duration:${ApplyStyle.speed}s;`);
                        break;
                    }
                e.insertBefore(s, e[0])
            }
        }
        
        function addSnakeBorderClass (x) {
            var name, arr;
            if (x.classList) {
                x.classList.add("snake-border");
            } else {
                name = "snake-border";
                arr = x.className.split(" ");
                if (arr.indexOf(name) == -1) {
                    x.className += " " + name;
                }
            } 
        }
        
    },
    unSet: function (elem) {
        if ( elem.startsWith('#') ) {
            removeStyle(document.querySelector(elem))
    
        } else {
            Array.prototype.forEach.call(document.getElementsByClassName(elem), el => {
                removeStyle(el)
            })
        }

        function removeStyle (e) {
            for (x = 4; x > 0; x--) {
                var c = e.querySelector(`.snake-${x}`)
                if (c) {
                    e.removeChild(c)
                }
            }

            var name, arr;
            if (e.classList) {
                e.classList.remove("snake-border");
            } else {
                name = "snake-border";
                arr = e.className.split(" ");
                if (arr.indexOf(name) != -1) {
                    e.replace(name, '')
                }
            } 
        }

    },
    changeColor: function (param = {}) {
        var arg = {
            color1 : 'no_value',
            color2 : 'no_value',
            width  : -1,
            speed  : -1
        }

        Object.assign(arg, param)

        function changeStyle (el) {
            console.log(arg)
        }
    }
}


//On the road features would be changing properties, setting distance from the element and removing snakeBorders dynamically.
