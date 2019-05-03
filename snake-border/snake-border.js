function __AddClass (x, className) {
    var name, arr;
    if (x.classList) {
        x.classList.add(className);
    } else {
        name = className;
        arr = x.className.split(" ");
        if (arr.indexOf(name) == -1) {
            x.className += " " + name;
        }
    } 
}

function __RemoveClass (x, className) {
    var name, arr;
    if (x.classList) {
        x.classList.remove(className);
    } else {
        name = className;
        arr = x.className.split(" ");
        if (arr.indexOf(name) != -1) {
            x.replace(name, '')
        }
    } 
}

function __Snake(args) {
    this.pt = args.pt
    this.pn = args.pn

    this.instance = document.createElement('div')
    __AddClass(this.instance, `snake-${this.pn}`)

    switch (this.pn) {
        case 1:
        this.w = 'height'
        this.dn = 'right'
        break;

        case 2:
        this.w = 'width'
        this.dn = 'bottom'
        break;

        case 3:
        this.w = 'height'
        this.dn = 'left'
        break;

        case 4:
        this.w = 'width'
        this.dn = 'top'
        break;
    }

    this.setColor = function (c1,c2) {
        (this.instance).style.background = `linear-gradient(to ${this.dn}, ${c1},${c2})`
    }
    this.setWidth = function (w) {
        (this.instance).style[`${this.w}`] = `${w}px`
    }
    this.setSpeed = function (s) {
        if (this.pn == 4 || this.pn == 2) {(this.instance).style.animationDelay = `${s / 2}s`}
        (this.instance).style.animationDuration = `${s}s`
    }

    this.setColor(args.tail, args.head);
    this.setWidth(args.width);
    this.setSpeed(args.sd);
    (this.pt).insertBefore(this.instance,(this.pt)[0]);

}


function SnakeBorder(param = {}) {
    var args = {
        elem   : 'snake-border',
        color1 : '#757575',
        color2 : '#424242',
        width  : 2,
        speed  : 2
    } 

    Object.assign(args, param)

    this.head = args.color2;
    this.tail = args.color1;
    this.w = args.width;
    this.s = args.speed;
    this.snakes = [];

    // Needs to add check and then throw error if args.elem is invalid 
    ( args.elem.startsWith('#')) ?
        (
            this.el = document.querySelector(args.elem),
            this.access = function (cb) { cb(this.el) }
        )
        :
        (
            this.el = document.getElementsByClassName(args.elem),
            this.access = function (cb) {
                Array.prototype.forEach.call(this.el, e => {cb(e)})
            }
        )

    this.access( e => {
        for (var snakes = 4; snakes > 0; snakes--) {
            let snake = new __Snake({
                pt   : e,
                pn   : snakes,
                tail : this.tail,
                head : this.head,
                sd   : this.s,
                width: this.w
            })
            this.snakes.push(snake)
        }
        __AddClass(e,'snake-border')
    })

    this.destroy = function () {
        this.access(e => {
            this.snakes.forEach(s => {
                e.removeChild(s.instance)
            })
            __RemoveClass(e, 'snake-border')
        })
    }

    this.changeColor = function(a = {}) {
        var d = {tail : this.tail, head : this.head}
        Object.assign(d, a)

        this.access(e => {
            this.snakes.forEach(s => {
                s.setColor(d.tail,d.head)
            })
        })
    }
}