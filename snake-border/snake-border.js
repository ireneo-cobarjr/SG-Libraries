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
        console.log(args)

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
        
    }
}


//todo: change API, creating an object. ---done
//expected resulting API will make setting this design via a call to snakeBorder.set()
//On the road features would be changing properties and removing snakeBorders dynamically.