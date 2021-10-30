
window.addEventListener('DOMContentLoaded', (event) => {

    let pomaoimg = new Image()
    pomaoimg.src = 'rcpomao.png'

    const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
    for(let t = 0;t<10000000;t++){
        squaretable[`${t}`] = Math.sqrt(t)
        if(t > 999){
            t+=9
        }
    }
    const gamepadAPI = {
        controller: {},
        turbo: true,
        connect: function (evt) {
            if (navigator.getGamepads()[0] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[1] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[2] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            } else if (navigator.getGamepads()[3] != null) {
                gamepadAPI.controller = navigator.getGamepads()[0]
                gamepadAPI.turbo = true;
            }
            for (let i = 0; i < gamepads.length; i++) {
                if (gamepads[i] === null) {
                    continue;
                }
                if (!gamepads[i].connected) {
                    continue;
                }
            }
        },
        disconnect: function (evt) {
            gamepadAPI.turbo = false;
            delete gamepadAPI.controller;
        },
        update: function () {
            gamepadAPI.controller = navigator.getGamepads()[0]
            gamepadAPI.buttonsCache = [];// clear the buttons cache
            for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
                gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
            }
            gamepadAPI.buttonsStatus = [];// clear the buttons status
            var c = gamepadAPI.controller || {}; // get the gamepad object
            var pressed = [];
            if (c.buttons) {
                for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
                    if (c.buttons[b].pressed) {
                        pressed.push(gamepadAPI.buttons[b]);
                    }
                }
            }
            var axes = [];
            if (c.axes) {
                for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
                    axes.push(c.axes[a].toFixed(2));
                }
            }
            gamepadAPI.axesStatus = axes;// assign received values
            gamepadAPI.buttonsStatus = pressed;
            // //////console.log(pressed); // return buttons for debugging purposes
            return pressed;
        },
        buttonPressed: function (button, hold) {
            var newPress = false;
            for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
                if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
                    newPress = true;// set the boolean variable to true
                    if (!hold) {// if we want to check the single press
                        for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
                            if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
                                newPress = false;
                            }
                        }
                    }
                }
            }
            return newPress;
        },
        buttons: [
            'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
        ],
        buttonsCache: [],
        buttonsStatus: [],
        axesStatus: []
    };
    let canvas
    let canvas_context
    let keysPressed = {}
    let FLEX_engine
    let TIP_engine = {}
    let XS_engine
    let YS_engine
    TIP_engine.x = 350
    TIP_engine.y = 350
    class Point {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.radius = 0
        }
        pointDistance(point) {
            return (new LineOP(this, point, "transparent", 0)).hypotenuse()
        }
    }

    class Vector{ // vector math and physics if you prefer this over vector components on circles
        constructor(object = (new Point(0,0)), xmom = 0, ymom = 0){
            this.xmom = xmom
            this.ymom = ymom
            this.object = object
        }
        isToward(point){
            let link = new LineOP(this.object, point)
            let dis1 = link.sqrDis()
            let dummy = new Point(this.object.x+this.xmom, this.object.y+this.ymom)
            let link2 = new LineOP(dummy, point)
            let dis2 = link2.sqrDis()
            if(dis2 < dis1){
                return true
            }else{
                return false
            }
        }
        rotate(angleGoal){
            let link = new Line(this.xmom, this.ymom, 0,0)
            let length = link.hypotenuse()
            let x = (length * Math.cos(angleGoal))
            let y = (length * Math.sin(angleGoal))
            this.xmom = x
            this.ymom = y
        }
        magnitude(){
            return (new Line(this.xmom, this.ymom, 0,0)).hypotenuse()
        }
        normalize(size = 1){
            let magnitude = this.magnitude()
            this.xmom/=magnitude
            this.ymom/=magnitude
            this.xmom*=size
            this.ymom*=size
        }
        multiply(vect){
            let point = new Point(0,0)
            let end = new Point(this.xmom+vect.xmom, this.ymom+vect.ymom)
            return point.pointDistance(end)
        }
        add(vect){
            return new Vector(this.object, this.xmom+vect.xmom, this.ymom+vect.ymom)
        }
        subtract(vect){
            return new Vector(this.object, this.xmom-vect.xmom, this.ymom-vect.ymom)
        }
        divide(vect){
            return new Vector(this.object, this.xmom/vect.xmom, this.ymom/vect.ymom) //be careful with this, I don't think this is right
        }
        draw(){
            let dummy = new Point(this.object.x+this.xmom, this.object.y+this.ymom)
            let link = new LineOP(this.object, dummy, "#FFFFFF", 1)
            link.draw()
        }
    }
    class Line {
        constructor(x, y, x2, y2, color, width) {
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        angle() {
            return Math.atan2(this.y1 - this.y2, this.x1 - this.x2)
        }
        squareDistance() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.x1 - this.x2
            let ydif = this.y1 - this.y2
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if(hypotenuse < 10000000-1){
                if(hypotenuse > 1000){
                    return squaretable[`${Math.round(10*Math.round((hypotenuse*.1)))}`]
                }else{
                return squaretable[`${Math.round(hypotenuse)}`]
                }
            }else{
                return Math.sqrt(hypotenuse)
            }
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.x1, this.y1)
            canvas_context.lineTo(this.x2, this.y2)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class LineOP {
        constructor(object, target, color, width) {
            this.object = object
            this.target = target
            this.color = color
            this.width = width
        }
        squareDistance() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let squareDistance = (xdif * xdif) + (ydif * ydif)
            return squareDistance
        }
        hypotenuse() {
            let xdif = this.object.x - this.target.x
            let ydif = this.object.y - this.target.y
            let hypotenuse = (xdif * xdif) + (ydif * ydif)
            if(hypotenuse < 10000000-1){
                if(hypotenuse > 1000){
                    return squaretable[`${Math.round(10*Math.round((hypotenuse*.1)))}`]
                }else{
                return squaretable[`${Math.round(hypotenuse)}`]
                }
            }else{
                return Math.sqrt(hypotenuse)
            }
        }
        angle() {
            return Math.atan2(this.object.y - this.target.y, this.object.x - this.target.x)
        }
        draw() {
            let linewidthstorage = canvas_context.lineWidth
            canvas_context.strokeStyle = this.color
            canvas_context.lineWidth = this.width
            canvas_context.beginPath()
            canvas_context.moveTo(this.object.x, this.object.y)
            canvas_context.lineTo(this.target.x, this.target.y)
            canvas_context.stroke()
            canvas_context.lineWidth = linewidthstorage
        }
    }
    class Triangle {
        constructor(x, y, color, length, fill = 0, strokeWidth = 0, leg1Ratio = 1, leg2Ratio = 1, heightRatio = 1) {
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.x1 = this.x + this.length * leg1Ratio
            this.x2 = this.x - this.length * leg2Ratio
            this.tip = this.y - this.length * heightRatio
            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
            this.fill = fill
            this.stroke = strokeWidth
        }
        draw() {
            canvas_context.strokeStyle = this.color
            canvas_context.stokeWidth = this.stroke
            canvas_context.beginPath()
            canvas_context.moveTo(this.x, this.y)
            canvas_context.lineTo(this.x1, this.y)
            canvas_context.lineTo(this.x, this.tip)
            canvas_context.lineTo(this.x2, this.y)
            canvas_context.lineTo(this.x, this.y)
            if (this.fill == 1) {
                canvas_context.fill()
            }
            canvas_context.stroke()
            canvas_context.closePath()
        }
        isPointInside(point) {
            if (point.x <= this.x1) {
                if (point.y >= this.tip) {
                    if (point.y <= this.y) {
                        if (point.x >= this.x2) {
                            this.accept1 = (this.y - this.tip) / (this.x1 - this.x)
                            this.accept2 = (this.y - this.tip) / (this.x2 - this.x)
                            this.basey = point.y - this.tip
                            this.basex = point.x - this.x
                            if (this.basex == 0) {
                                return true
                            }
                            this.slope = this.basey / this.basex
                            if (this.slope >= this.accept1) {
                                return true
                            } else if (this.slope <= this.accept2) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }
    class Rectangle {
        constructor(x, y, width, height, color, fill = 1, stroke = 0, strokeWidth = 1) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.stroke = stroke
            this.strokeWidth = strokeWidth
            this.fill = fill
        }
        draw() {
            canvas_context.fillStyle = this.color
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }
    class Circle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                //////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } 
    class UnitCircle {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = strokeWidth
            this.strokeColor = strokeColor
        }
        draw() {
            map_context.lineWidth = this.strokeWidth
            map_context.strokeStyle = this.color
            map_context.beginPath();
            if (this.radius > 0) {
                map_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                map_context.fillStyle = this.color
                map_context.fill()
                map_context.strokeStyle = "black"
                map_context.stroke();
            } else {
                //////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } 
    class CircleRing {
        constructor(x, y, radius, color, xmom = 0, ymom = 0, friction = 1, reflect = 0, strokeWidth = 0, strokeColor = "transparent") {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.friction = friction
            this.reflect = reflect
            this.strokeWidth = 10
            this.strokeColor = strokeColor
        }
        draw() {
            canvas_context.lineWidth = this.strokeWidth
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            if (this.radius > 0) {
                canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), true)
                canvas_context.fillStyle = this.color
                canvas_context.fill()
                canvas_context.stroke();
            } else {
                //////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
            }
        }
        move() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
        }
        unmove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x -= this.xmom
            this.y -= this.ymom
        }
        frictiveMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.x += this.xmom
            this.y += this.ymom
            this.xmom *= this.friction
            this.ymom *= this.friction
        }
        frictiveunMove() {
            if (this.reflect == 1) {
                if (this.x + this.radius > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y + this.radius > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.x - this.radius < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.y - this.radius < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.xmom /= this.friction
            this.ymom /= this.friction
            this.x -= this.xmom
            this.y -= this.ymom
        }
        isPointInside(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.radius * this.radius)) {
                return true
            }
            return false
        }
        doesPerimeterTouch(point) {
            this.areaY = point.y - this.y
            this.areaX = point.x - this.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= ((this.radius + point.radius) * (this.radius + point.radius))) {
                return true
            }
            return false
        }
    } class Polygon {
        constructor(x, y, size, color, sides = 3, xmom = 0, ymom = 0, angle = 0, reflect = 0) {
            if (sides < 2) {
                sides = 2
            }
            this.reflect = reflect
            this.xmom = xmom
            this.ymom = ymom
            this.body = new Circle(x, y, size - (size * .293), "transparent")
            this.nodes = []
            this.angle = angle
            this.size = size
            this.color = color
            this.angleIncrement = (Math.PI * 2) / sides
            this.sides = sides
            for (let t = 0; t < sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
        }
        isPointInside(point) { // rough approximation
            this.body.radius = this.size - (this.size * .293)
            if (this.sides <= 2) {
                return false
            }
            this.areaY = point.y - this.body.y
            this.areaX = point.x - this.body.x
            if (((this.areaX * this.areaX) + (this.areaY * this.areaY)) <= (this.body.radius * this.body.radius)) {
                return true
            }
            return false
        }
        move() {
            if (this.reflect == 1) {
                if (this.body.x > canvas.width) {
                    if (this.xmom > 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y > canvas.height) {
                    if (this.ymom > 0) {
                        this.ymom *= -1
                    }
                }
                if (this.body.x < 0) {
                    if (this.xmom < 0) {
                        this.xmom *= -1
                    }
                }
                if (this.body.y < 0) {
                    if (this.ymom < 0) {
                        this.ymom *= -1
                    }
                }
            }
            this.body.x += this.xmom
            this.body.y += this.ymom
        }
        draw() {
            this.nodes = []
            this.angleIncrement = (Math.PI * 2) / this.sides
            this.body.radius = this.size - (this.size * .293)
            for (let t = 0; t < this.sides; t++) {
                let node = new Circle(this.body.x + (this.size * (Math.cos(this.angle))), this.body.y + (this.size * (Math.sin(this.angle))), 0, "transparent")
                this.nodes.push(node)
                this.angle += this.angleIncrement
            }
            canvas_context.strokeStyle = this.color
            canvas_context.fillStyle = this.color
            canvas_context.lineWidth = 0
            canvas_context.beginPath()
            canvas_context.moveTo(this.nodes[0].x, this.nodes[0].y)
            for (let t = 1; t < this.nodes.length; t++) {
                canvas_context.lineTo(this.nodes[t].x, this.nodes[t].y)
            }
            canvas_context.lineTo(this.nodes[0].x, this.nodes[0].y)
            canvas_context.fill()
            canvas_context.stroke()
            canvas_context.closePath()
        }
    }
    class Shape {
        constructor(shapes) {
            this.shapes = shapes
        }
        draw() {
            for (let t = 0; t < this.shapes.length; t++) {
                this.shapes[t].draw()
            }
        }
        isPointInside(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].isPointInside(point)) {
                    return true
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return true
                }
            }
            return false
        }
        innerShape(point) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (this.shapes[t].doesPerimeterTouch(point)) {
                    return this.shapes[t]
                }
            }
            return false
        }
        isInsideOf(box) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (box.isPointInside(this.shapes[t])) {
                    return true
                }
            }
            return false
        }
        adjustByFromDisplacement(x,y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if(typeof this.shapes[t].fromRatio == "number"){
                    this.shapes[t].x+=x*this.shapes[t].fromRatio
                    this.shapes[t].y+=y*this.shapes[t].fromRatio
                }
            }
        }
        adjustByToDisplacement(x,y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if(typeof this.shapes[t].toRatio == "number"){
                    this.shapes[t].x+=x*this.shapes[t].toRatio
                    this.shapes[t].y+=y*this.shapes[t].toRatio
                }
            }
        }
        mixIn(arr){
            for(let t = 0;t<arr.length;t++){
                for(let k = 0;k<arr[t].shapes.length;k++){
                    this.shapes.push(arr[t].shapes[k])
                }
            }
        }
        push(object) {
            this.shapes.push(object)
        }
    }

    class Spring {
        constructor(x, y, radius, color, body = 0, length = 1, gravity = 0, width = 1) {
            if (body == 0) {
                this.body = new Circle(x, y, radius, color)
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            } else {
                this.body = body
                this.anchor = new Circle(x, y, radius, color)
                this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", width)
                this.length = length
            }
            this.gravity = gravity
            this.width = width
        }
        balance() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += (this.body.x - this.anchor.x) / this.length
                this.body.ymom += (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom -= (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom -= (this.body.y - this.anchor.y) / this.length
            } else {
                this.body.xmom -= (this.body.x - this.anchor.x) / this.length
                this.body.ymom -= (this.body.y - this.anchor.y) / this.length
                this.anchor.xmom += (this.body.x - this.anchor.x) / this.length
                this.anchor.ymom += (this.body.y - this.anchor.y) / this.length
            }
            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam = new Line(this.body.x, this.body.y, this.anchor.x, this.anchor.y, "yellow", this.width)
            this.beam.draw()
            this.body.draw()
            this.anchor.draw()
        }
        move() {
            this.anchor.ymom += this.gravity
            this.anchor.move()
        }

    }  
    class SpringOP {
        constructor(body, anchor, length, width = 3, color = body.color) {
            this.body = body
            this.anchor = anchor
            this.beam = new LineOP(body, anchor, color, width)
            this.length = length
        }
        balance() {
            if (this.beam.hypotenuse() < this.length) {
                this.body.xmom += ((this.body.x - this.anchor.x) / this.length) 
                this.body.ymom += ((this.body.y - this.anchor.y) / this.length) 
                this.anchor.xmom -= ((this.body.x - this.anchor.x) / this.length) 
                this.anchor.ymom -= ((this.body.y - this.anchor.y) / this.length) 
            } else if (this.beam.hypotenuse() > this.length) {
                this.body.xmom -= (this.body.x - this.anchor.x) / (this.length)
                this.body.ymom -= (this.body.y - this.anchor.y) / (this.length)
                this.anchor.xmom += (this.body.x - this.anchor.x) / (this.length)
                this.anchor.ymom += (this.body.y - this.anchor.y) / (this.length)
            }

            let xmomentumaverage = (this.body.xmom + this.anchor.xmom) / 2
            let ymomentumaverage = (this.body.ymom + this.anchor.ymom) / 2
            this.body.xmom = (this.body.xmom + xmomentumaverage) / 2
            this.body.ymom = (this.body.ymom + ymomentumaverage) / 2
            this.anchor.xmom = (this.anchor.xmom + xmomentumaverage) / 2
            this.anchor.ymom = (this.anchor.ymom + ymomentumaverage) / 2
        }
        draw() {
            this.beam.draw()
        }
        move() {
            //movement of SpringOP objects should be handled separate from their linkage, to allow for many connections, balance here with this object, move nodes independently
        }
    }

    class Color {
        constructor(baseColor, red = -1, green = -1, blue = -1, alpha = 1) {
            this.hue = baseColor
            if (red != -1 && green != -1 && blue != -1) {
                this.r = red
                this.g = green
                this.b = blue
                if (alpha != 1) {
                    if (alpha < 1) {
                        this.alpha = alpha
                    } else {
                        this.alpha = alpha / 255
                        if (this.alpha > 1) {
                            this.alpha = 1
                        }
                    }
                }
                if (this.r > 255) {
                    this.r = 255
                }
                if (this.g > 255) {
                    this.g = 255
                }
                if (this.b > 255) {
                    this.b = 255
                }
                if (this.r < 0) {
                    this.r = 0
                }
                if (this.g < 0) {
                    this.g = 0
                }
                if (this.b < 0) {
                    this.b = 0
                }
            } else {
                this.r = 0
                this.g = 0
                this.b = 0
            }
        }
        normalize() {
            if (this.r > 255) {
                this.r = 255
            }
            if (this.g > 255) {
                this.g = 255
            }
            if (this.b > 255) {
                this.b = 255
            }
            if (this.r < 0) {
                this.r = 0
            }
            if (this.g < 0) {
                this.g = 0
            }
            if (this.b < 0) {
                this.b = 0
            }
        }
        randomLight() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12) + 4)];
            }
            var color = new Color(hash, 55 + Math.random() * 200, 55 + Math.random() * 200, 55 + Math.random() * 200)
            return color;
        }
        randomDark() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 12))];
            }
            var color = new Color(hash, Math.random() * 200, Math.random() * 200, Math.random() * 200)
            return color;
        }
        random() {
            var letters = '0123456789ABCDEF';
            var hash = '#';
            for (var i = 0; i < 6; i++) {
                hash += letters[(Math.floor(Math.random() * 16))];
            }
            var color = new Color(hash, Math.random() * 255, Math.random() * 255, Math.random() * 255)
            return color;
        }
    }
    class Softbody { //buggy, spins in place
        constructor(x, y, radius, color, size, members = 10, memberLength = 5, force = 10, gravity = 0) {
            this.springs = []
            this.pin = new Circle(x, y, radius, color)
            this.points = []
            this.flop = 0
            let angle = 0
            this.size = size 
            let line = new Line((Math.cos(angle)*size), (Math.sin(angle)*size), (Math.cos(angle+ ((Math.PI*2)/members))*size), (Math.sin(angle+ ((Math.PI*2)/members))*size) )
            let distance = line.hypotenuse()
            for(let t =0;t<members;t++){
                let circ = new Circle(x+(Math.cos(angle)*size), y+(Math.sin(angle)*size), radius, color)
                circ.reflect = 1
                circ.bigbody = new Circle(x+(Math.cos(angle)*size), y+(Math.sin(angle)*size), distance, color)
                circ.draw()
                circ.touch = []
                this.points.push(circ)
                angle += ((Math.PI*2)/members)
            }

            for(let t =0;t<this.points.length;t++){
                for(let k =0;k<this.points.length;k++){
                    if(t!=k){
                        if(this.points[k].bigbody.doesPerimeterTouch(this.points[t])){
                        if(!this.points[k].touch.includes(t) && !this.points[t].touch.includes(k)){
                                let spring = new SpringOP(this.points[k], this.points[t], (size*Math.PI)/members, 2, color)
                                this.points[k].touch.push(t)
                                this.points[t].touch.push(k)
                                this.springs.push(spring)
                                spring.beam.draw()
                            }
                        }
                    }
                }
            }

            //////console.log(this)

            // this.spring = new Spring(x, y, radius, color, this.pin, memberLength, gravity)
            // this.springs.push(this.spring)
            // for (let k = 0; k < members; k++) {
            //     this.spring = new Spring(x, y, radius, color, this.spring.anchor, memberLength, gravity)
            //     if (k < members - 1) {
            //         this.springs.push(this.spring)
            //     } else {
            //         this.spring.anchor = this.pin
            //         this.springs.push(this.spring)
            //     }
            // }
            this.forceConstant = force
            this.centroid = new Circle(0, 0, 10, "red")
        }
        circularize() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.springs.length; s++) {
                this.xpoint += (this.springs[s].anchor.x / this.springs.length)
                this.ypoint += (this.springs[s].anchor.y / this.springs.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            this.angle = 0
            this.angleIncrement = (Math.PI * 2) / this.springs.length
            for (let t = 0; t < this.points.length; t++) {
                this.points[t].x = this.centroid.x + (Math.cos(this.angle) * this.forceConstant)
                this.points[t].y = this.centroid.y + (Math.sin(this.angle) * this.forceConstant)
                this.angle += this.angleIncrement 
            }
        }
        balance() {
            this.xpoint = 0
            this.ypoint = 0
            for (let s = 0; s < this.points.length; s++) {
                this.xpoint += (this.points[s].x / this.points.length)
                this.ypoint += (this.points[s].y / this.points.length)
            }
            this.centroid.x = this.xpoint
            this.centroid.y = this.ypoint
            // this.centroid.x += TIP_engine.x / this.points.length
            // this.centroid.y += TIP_engine.y / this.points.length
            for (let s = 0; s < this.points.length; s++) {
                this.link = new LineOP(this.points[s], this.centroid, 0, "transparent")
                if (this.link.hypotenuse() != 0) {

                    if(this.size < this.link.hypotenuse()){
                        this.points[s].xmom -= (Math.cos(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
                        this.points[s].ymom -= (Math.sin(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
                    }else{
                        this.points[s].xmom += (Math.cos(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
                        this.points[s].ymom += (Math.sin(this.link.angle())*(this.link.hypotenuse())) * this.forceConstant*.1
                    }

                    // this.points[s].xmom += (((this.points[s].x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
                    // this.points[s].ymom += (((this.points[s].y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
                }
            }
            if(this.flop%2 == 0){
                for (let s =  0; s < this.springs.length; s++) {
                    this.springs[s].balance()
                }
            }else{
                for (let s = this.springs.length-1;s>=0; s--) {
                    this.springs[s].balance()
                }
            }
            for (let s = 0; s < this.points.length; s++) {
                this.points[s].move()
                this.points[s].draw()
            }
            for (let s =  0; s < this.springs.length; s++) {
                this.springs[s].draw()
            }
            this.centroid.draw()
        }
    }
    class Observer {
        constructor(x, y, radius, color, range = 100, rays = 10, angle = (Math.PI * .125)) {
            this.body = new Circle(x, y, radius, color)
            this.color = color
            this.ray = []
            this.rayrange = range
            this.globalangle = Math.PI
            this.gapangle = angle
            this.currentangle = 0
            this.obstacles = []
            this.raymake = rays
        }
        beam() {
            this.currentangle = this.gapangle / 2
            for (let k = 0; k < this.raymake; k++) {
                this.currentangle += (this.gapangle / Math.ceil(this.raymake / 2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white", (((Math.cos(this.globalangle + this.currentangle)))), (((Math.sin(this.globalangle + this.currentangle)))))
                ray.collided = 0
                ray.lifespan = this.rayrange - 1
                this.ray.push(ray)
            }
            for (let f = 0; f < this.rayrange; f++) {
                for (let t = 0; t < this.ray.length; t++) {
                    if (this.ray[t].collided < 1) {
                        this.ray[t].move()
                        for (let q = 0; q < this.obstacles.length; q++) {
                            if (this.obstacles[q].isPointInside(this.ray[t])) {
                                this.ray[t].collided = 1
                            }
                        }
                    }
                }
            }
        }
        draw() {
            this.beam()
            this.body.draw()
            canvas_context.lineWidth = 1
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath()
            canvas_context.moveTo(this.body.x, this.body.y)
            for (let y = 0; y < this.ray.length; y++) {
                canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                canvas_context.lineTo(this.body.x, this.body.y)
            }
            canvas_context.stroke()
            canvas_context.fill()
            this.ray = []
        }
    }
    function setUp(canvas_pass, style = "#000000") {
        canvas = canvas_pass
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        window.setInterval(function () {
            main()
        }, 30)
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
        window.addEventListener('pointerdown', e => {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            if(TIP_engine.x <= sandmap.window.body.x+sandmap.window.body.width){
                if(keysPressed['b']){
                    let structuredpoint = new Point(0,0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x*.5)
                    structuredpoint.y += (TIP_engine.y*.5)
                    structuredpoint.x = Math.floor(structuredpoint.x*.1)
                    structuredpoint.y = Math.floor(structuredpoint.y*.1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                    let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn] )
                }else{
                        let structuredpoint = new Point(0,0)
                        structuredpoint.x += sandmap.window.guide.x
                        structuredpoint.y += sandmap.window.guide.y
                        structuredpoint.x += (TIP_engine.x*.5)
                        structuredpoint.y += (TIP_engine.y*.5)
                        structuredpoint.x = Math.floor(structuredpoint.x*.1)
                        structuredpoint.y = Math.floor(structuredpoint.y*.1)
                        sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                        sandmap.turn++
                        sandmap.turn%=sandmap.players.length

                    for(let t = 0;t<sandmap.players[0].units.length;t++){
                        if(sandmap.players[0].units[t].selected == 1){
                            sandmap.players[0].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile )
                        }
                    }
                }
            }else{
                if(sandmap.window.minibody.isPointInside(TIP_engine)){
                    let structuredpoint = new Point(0,0)
                    let inv = 1/.28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x)*inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y)*inv
                    sandmap.window.guide.x = structuredpoint.x-(sandmap.window.body.width*.25)
                    sandmap.window.guide.y = structuredpoint.y-(sandmap.window.body.height*.25)
                }
            }



            // example usage: if(object.isPointInside(TIP_engine)){ take action }
        window.addEventListener('pointermove', continued_stimuli);

        });

        window.addEventListener('pointerup', e => {
            window.removeEventListener("pointermove", continued_stimuli);
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine

            if(TIP_engine.x <= sandmap.window.body.x+sandmap.window.body.width){
                // let structuredpoint = new Point(0,0)
                // structuredpoint.x += sandmap.window.guide.x
                // structuredpoint.y += sandmap.window.guide.y
                // structuredpoint.x += (TIP_engine.x*.5)
                // structuredpoint.y += (TIP_engine.y*.5)
                // structuredpoint.x = Math.floor(structuredpoint.x*.1)
                // structuredpoint.y = Math.floor(structuredpoint.y*.1)
                // sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                // sandmap.turn++
                // sandmap.turn%=sandmap.players.length
            }else{
                if(sandmap.window.minibody.isPointInside(TIP_engine)){
                    let structuredpoint = new Point(0,0)
                    let inv = 1/.28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x)*inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y)*inv
                    sandmap.window.guide.x = structuredpoint.x-(sandmap.window.body.width*.25)
                    sandmap.window.guide.y = structuredpoint.y-(sandmap.window.body.height*.25)
                }
            }
        }
    }
    function gamepad_control(object, speed = 1) { // basic control for objects using the controler
//         //////console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
        if (typeof object.body != 'undefined') {
            if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
                if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
                object.body.x += (gamepadAPI.axesStatus[0] * speed)
                object.body.y += (gamepadAPI.axesStatus[1] * speed)
                }
            }
        } else if (typeof object != 'undefined') {
            if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
                if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
                object.x += (gamepadAPI.axesStatus[0] * speed)
                object.y += (gamepadAPI.axesStatus[1] * speed)
                }
            }
        }
    }
    function control(object, speed = 1) { // basic control for objects
        if (typeof object.body != 'undefined') {
            if (keysPressed['w']) {
                object.body.y -= speed
            }
            if (keysPressed['d']) {
                object.body.x += speed
            }
            if (keysPressed['s']) {
                object.body.y += speed
            }
            if (keysPressed['a']) {
                object.body.x -= speed
            }
        } else if (typeof object != 'undefined') {
            if (keysPressed['w']) {
                object.y -= speed
            }
            if (keysPressed['d']) {
                object.x += speed
            }
            if (keysPressed['s']) {
                object.y += speed
            }
            if (keysPressed['a']) {
                object.x -= speed
            }
        }
    }
    function getRandomLightColor() { // random color that will be visible on  black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12) + 4)];
        }
        return color;
    }
    function getRandomColor() { // random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 16) + 0)];
        }
        return color;
    }
    function getRandomDarkColor() {// color that will be visible on a black background
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[(Math.floor(Math.random() * 12))];
        }
        return color;
    }
    function castBetween(from, to, granularity = 10, radius = 1) { //creates a sort of beam hitbox between two points, with a granularity (number of members over distance), with a radius defined as well
            let limit = granularity
            let shape_array = []
            for (let t = 0; t < limit; t++) {
                let circ = new Circle((from.x * (t / limit)) + (to.x * ((limit - t) / limit)), (from.y * (t / limit)) + (to.y * ((limit - t) / limit)), radius, "red")
                circ.toRatio = t/limit
                circ.fromRatio = (limit-t)/limit
                shape_array.push(circ)
            }
            return (new Shape(shape_array))
    }

    let setup_canvas = document.getElementById('canvas') //getting canvas from document


    let map_canvas = document.getElementById('map') //getting canvas from document

    map_context = map_canvas.getContext('2d');
    map_canvas.style.background = "tan"
    setUp(setup_canvas)
    // object instantiation and creation happens here 
   
    
    
    class Tile {
        constructor(x, y, width, height, color, id, size, posx, posy, walkable) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            

        var F;
    
        var parent;
        this.inPath = false;
        this.getGCost = this.getValueG;
        this.getHCost = this.getValueH;
    
        this.size = size;
        this.posx = posx;
        this.posy = posy;
        this.walkable = walkable;
        if(Math.random()<.01){
            this.walkable = false
            this.color = "#000000"
        }
    
        this.id = id;
        }

  createStartNode() {
    // nodeDrawer(gctx, this, 2, "black", "#00FFFF88");

  }
  createEndNode() {
    // nodeDrawer(gctx, this, 2, "black", "#FFFF0088");

  }
  toggleWalkable() {
    this.walkable = !this.walkable;
  }
  getValueF() {
    //this is a problem
    var fValue = (this.getValueH()) + (this.getValueG());

    return (fValue);
  }
  getValueH() {
    var endNodePosition = {
      posx: endPoint.x,
      posy: endPoint.y
    };

    return (getDistance(this, endNodePosition));

  }
  getValueG() {
    var startPointPosition = {
      posx: endPoint.x,
      posy: endPoint.y
    };
    return (getDistance(this, startPointPosition));
  }
  createWall() {
    // nodeDrawer(gctx, this, 2, "transparent", "black");

  }
  drawOpenNode() {
    // nodeDrawer(gctx, this, 2, "transparent", "transparent");

  }
  drawClosedNode() {
    // nodeDrawer(gctx, this, 2, "transparent", "transparent");
  }
  drawPath() {
    // nodeDrawer(gctx, this, 2, "transparent", "#FF000033");
  }
  drawNode() {

    //gctx.beginPath();
    //gctx.lineWidth = ".1";
    //gctx.strokeStyle = "black";
    //gctx.fillStyle = "transparent";

    // let link = new Line(this.posx, this.posy, bottle.crew[bottle.selectedcrew].body.x-100, bottle.crew[bottle.selectedcrew].body.y-300, "red", 1)
    // if (link.hypotenuse() < 108) {
    // //////////console.log(link)
    // //////////console.log(bottle)
    // }
    let roundedx = (Math.round((startPoint.x)/10))
    let roundedy = (Math.round((startPoint.y)/10))
    if (this.walkable !== false) {
    //gctx.fillRect(this.posx, this.posy, this.size, this.size);
    //gctx.rect(this.posx, this.posy, this.size, this.size);
    //gctx.closePath();
    //gctx.stroke();
    }
    if (this.inPath === true) {
      this.drawPath();
    }else if (this.walkable === false) {
        // //////////console.log(this)

      this.createWall();
      return;
    // }else if (link.hypotenuse() < 11) {
    }else if(this.posx == roundedx && this.posy == roundedy){
    //   //////////console.log("hit the startNode");
    //   this.createStartNode();
      return;
    }else if (this.posx == endPoint.x && this.posy == endPoint.y) {
    //   this.createEndNode();

    }

  }
        draw() {
            map_context.fillStyle = this.color
            map_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move() {
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point) {
            if (point.x >= this.x) {
                if (point.y >= this.y) {
                    if (point.x <= this.x + this.width) {
                        if (point.y <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        doesPerimeterTouch(point) {
            if (point.x + point.radius >= this.x) {
                if (point.y + point.radius >= this.y) {
                    if (point.x - point.radius <= this.x + this.width) {
                        if (point.y - point.radius <= this.y + this.height) {
                            return true
                        }
                    }
                }
            }
            return false
        }
    }

    class Sandmap {
        constructor(width, height, posx, posy, gridPoints) {
            this.width = width;
            this.height = height;
            this.posx = posx;
            this.posy = posy;
            this.gridPoints = gridPoints;
            this.turn = 0
            this.blocks = []
            let id = 0
            for(let t = 0;t<128;t++){
                let rects = []
                for(let k = 0;k<128;k++){
                    
                    let rect = new Tile(t*10, k*10, 10, 10, "tan", id, 10, t*10,k*10, true)
                    if(Math.random()<.013){
                        // rect.color = getRandomColor()
                        rect.rock = 1
                    }
                    rect.t = t
                    rect.k = k
                    rects.push(rect)
                    id++
                }
                this.blocks.push(rects)
            }
            this.window = new Window()
            this.players = []
            this.players.push(new Player('Blattadar', "#FF00FF"))
            // this.players.push(new Player('Skribulons', "#696969"))
            // this.players.push(new Player('Palletae', "pink"))
            // this.players.push(new Player('Bulbato', "#00ff00"))
            // this.players.push(new Player('Hydruzan' , "purple" ))
            this.createGrid()
            this.gridPoints = []
            
            for(let t = 0;t<this.blocks.length;t++){
                for(let k = 0;k<this.blocks[t].length;k++){
               this.gridPoints.push(this.blocks[t][k])
            }
        }
        }

  createGrid() {
    // //gctx.drawImage(shipImage, 0, 0, shipImage.width/2, shipImage.height/2)
    var tempNode;
    var countNodes = 0;
    //gctx.beginPath();
    //gctx.lineWidth =  0;
    //gctx.strokeStyle = "transparent";
    //gctx.rect(0, 0, this.width, this.height);
    //gctx.stroke();

    for (var i = 0; i < this.width; i += NODESIZE) {
      gridPointsByPos[i] = [];

      for (var j = 0; j < this.height; j += NODESIZE) {
        gridPointsByPos[i][j] = countNodes;
        //here's the problem , need to set the walkability of the node without always being true...
        //////////console.log(countNodes)
        tempNode = new Tile(i,j, 10, 10, "tan", countNodes, NODESIZE, i, j, true);

        // let cutOut = [0,1 ,2, 3, 4, 5,6,7, 8, 9, 10, 11, 12,13, 18, 19,20, 32,33,  26, 31, 39, 44, 45, 46, 52, 57,58,59,99, 112, 108, 95, 197, 198, 199, 205, 203, 204, 236, 237, 238, 242, 243,244, 216, 212, 229, 225, 210, 211, 223, 224, 217, 218, 230, 231]
        // for(let t = 0; t< 1000; t++){
        //     if(t%13 == 0){
        //         cutOut.push(t)
        //     }
        //     if((t-12)%13 == 0){
        //         cutOut.push(t)
        //     }
        //     if((t-1)%13 == 0){
        //         if(t>195){
        //             cutOut.push(t)
        //         }
        //     }
        //     if((t-11)%13 == 0){
        //         if(t>195){
        //             cutOut.push(t)
        //         }
        //     }
        // }
        // for(let t  = 0; t<bottle.crew.length; t++){
        //     if(tempNode.isPointInside(bottle.crew[t].body)){
        //         tempNode.walkable = false;
        //     }
        // }
        // if (cutOut.includes(countNodes)){
        //         tempNode.walkable = false;
     
        // }
        // if (wallSet.has(countNodes)) {
        // //   //////////console.log("wallSet had countNodes!")
        //   tempNode.walkable = false;
        // }

        // tempNode.drawNode();
        tempNode.F = tempNode.getValueF();
        this.gridPoints.push(tempNode);

        countNodes++;

      }
    }

  }

        draw(){
            for(let t = 0;t<this.blocks.length;t++){
                for(let k = 0;k<this.blocks[t].length;k++){
                this.blocks[t][k].draw()
            }
        }
            for(let t = 0;t<this.players.length;t++){
                this.players[t].draw()
            }
            this.window.draw()
        }
    }
    class Window{
        constructor(){
            this.body = new Rectangle(0,0,900,720,"transparent")
            this.minibody = new Rectangle(this.body.x+this.body.width+10,360,360,360,"transparent")
            this.guide = new Circle(0,0,1,"transparent")
        }
        draw(){
            control(this.guide,5)
            if(this.guide.x < 0){
                this.guide.x = 0
            }
            if(this.guide.y < 0){
                this.guide.y = 0
            }
            if(this.guide.x > map_canvas.width-(this.body.width*.5)){
                this.guide.x = map_canvas.width-(this.body.width*.5)
            }
            if(this.guide.y > map_canvas.width-(this.body.height*.5)){
                this.guide.y = map_canvas.width-(this.body.height*.5)
            }
            canvas_context.drawImage(map_canvas, this.guide.x, this.guide.y, this.body.width*.5, this.body.height*.5, this.body.x, this.body.y, this.body.width, this.body.height )
            canvas_context.drawImage(map_canvas, 0,0, map_canvas.width, map_canvas.height, this.minibody.x, this.minibody.y, this.minibody.width, this.minibody.height)
            canvas_context.strokeStyle = "white"
            canvas_context.lineWidth = 1
            canvas_context.strokeRect(this.minibody.x+(this.guide.x*.28125), this.minibody.y+(this.guide.y*.28125),(this.body.width*.5)*.28125, (this.body.height*.5)*.28125 )
        }
    }
    class Player {
        constructor(name, color){
            this.name = name
            this.selected_tile = {}
            this.color = color
            this.buildings = []
            this.units = []
        }
        draw(){
            // this.selected_tile.color = this.color
            for(let t = 0;t<this.buildings.length;t++){
                this.buildings[t].draw()
            }
            for(let t = 0;t<this.units.length;t++){
                this.units[t].move()
            }
            for(let t = 0;t<this.units.length;t++){
                this.units[t].draw()
            }
            //console.log(this)
        }
    }


    var gCanvas = document.getElementById("gCanvas");
    var gCanvasOffset;
    var gctx = gCanvas.getContext("2d");
    var CANVAS_WIDTH = 1280;
    var CANVAS_HEIGHT = 1280;
    var NODESIZE = 10;
    
    
    var path;
    
    var openSet = new Set();
    var closedSet = new Set();
    var gridPointsByPos = [];
    var gridPoints = [];
    
    var wallSet = new Set;
    
    //used to store the start and endPoint during resets, etc. 
    var startPoint;
    var endPoint;
    let mode = "endPoint"
    
    //any point in 2D space
    class Vec2 {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }
    
    
    gCanvasOffset = new Vec2(gCanvas.offsetLeft, gCanvas.offsetTop);
    
    
    // startPoint = new Vec2(bottle.crew[bottle.selectedcrew].body.x, bottle.crew[bottle.selectedcrew].body.y);
    endPoint = new Vec2(640, 640);
  
    class PathFindingAlg {
        constructor(grid, startNode, endNode, agent = {}) {
            this.agent = agent
          this.grid = grid;
          let gridarray = Array.from(grid)
          // for(let t = 0; t<gridarray.length; t++){
          //     for(let k = 0; k<gridarray[t].length; k++){
                  
          //     }
          // }
          gridPointsByPos = [...this.grid]
          // this.startNode = gridPointsByPos[startNode.x][startNode.y];
          let roundedx = (Math.round((startNode.x)))*.1
          let roundedy = (Math.round((startNode.y)))*.1
          //////console.log(gridPointsByPos, roundedx, roundedy)
          //////////console.log(gridPointsByPos[roundedx] [roundedy])
          this.startNode = startNode // gridPointsByPos[roundedx] [roundedy]
          this.endNode = endNode //gridPointsByPos[endNode.x][endNode.y];
          this.currentNode = null;
      
          this.openSet = [];
          this.closedset = [];
          this.breaker = 0
        }
        findPath() {
            // this.breaker++
            // if(this.breaker > 1){
            //     return
            // }
          openSet.clear();
          closedSet.clear();
      
          var grid = this.grid; //the grid we're working with
      
          var currentNode = this.startNode; // the currentNode, defaults to start node for now
      
          var endNode = sandmap.gridPoints[this.endNode.id]; //the target node
          var startNode = sandmap.gridPoints[this.startNode.id];
      
          var tempArray;
      
          var newMovementCost; //the new movement cost to neighbor
      
          openSet.add(currentNode);
        //   ////console.log(currentNode)
        // currentNode.color = "black"
          // //////////console.log('begin');
          while (openSet.size > 0) {
            tempArray = Array.from(openSet);
            ////console.log(tempArray)
            currentNode = tempArray[0];
      
            for (var i = 1; i < tempArray.length; i++) {
              //this if statement is solely to build the starting walls.
              if (tempArray[i].getValueF() < currentNode.getValueF() || tempArray[i].getValueF() == currentNode.getValueF() && tempArray[i].getValueH() < currentNode.getValueH()) {
                currentNode = tempArray[i]; //sets the currentNode to openSetI if it has a lower F value, or an = F value with a lower HCost.
      
              }
            }
      
            //exits for loop with either lowest F value or combined H value and F value
      
            openSet.delete(currentNode);
      
            // currentNode.drawClosedNode();
      
            closedSet.add(currentNode);
      
            //might need to put this after getNighbors.... then replace closedSet.hasIn(neighborNode with currentNode
            // if (currentNode.id == startNode.id) {
            //   currentNode.drawNode();
            // }
            // if (currentNode.id == endNode.id) {
            //   currentNode.drawNode();
            // }
            // if (currentNode.walkable == false) {
            //   currentNode.drawNode();
            // }
      
            ////console.log(currentNode, endNode)
            // currentNode.color = "black"
            //////console.log(currentNode, endNode)
            if (currentNode.id == endNode.id) {
              retracePath(startNode, endNode, this.agent);
              //hit the last point, exit's the loop.
      
              return; //exits loop
            }
            getNeighbors(currentNode).forEach(function(neighbor) {
      
              var neighborNode = sandmap.gridPoints[neighbor.id];
              var neighborH = neighborNode.getHCost();
              var neighborG = neighborNode.getGCost();
      
              var currentG = currentNode.getGCost();
              var currentH = currentNode.getHCost();
      
              if (!neighborNode.walkable || closedSet.has(neighborNode)) {
      
                return; //acts as a continue, no need to continue if the wall was already checked.
      
              }
      
              newMovementCost = currentG + (getDistance(currentNode, neighborNode));
      
              if (newMovementCost < neighborG || !openSet.has(neighborNode)) {
      
                neighborNode.gCost = newMovementCost;
                neighborNode.hCost = neighborH;
                neighborNode.parent = currentNode;
      
                if (!openSet.has(neighborNode)) {
                  //push the neighborNode to the openSet, to check against other open values
                  openSet.add(neighborNode);
      
                  neighborNode.drawOpenNode();
      
                }
              }
      
            })
          }
      
        }
      
      }
    //distance from a node to  another node
    function getDistance(nodeA, nodeB) {
      var distX = Math.abs(nodeA.x - nodeB.x);
      var distY = Math.abs(nodeA.y - nodeB.y);
    
      if (distX > distY) {
        return ((1.4 * distY) + ((distX - distY)))
    
      }
      return (1.4 * distX + ( (distY - distX)));
    }
    
    function retracePath(startNode, endNode, agent = {}) {
      path = new Set();
      var currentNode = endNode;
      var reverseArray;
      while (currentNode != startNode) {
        path.add(currentNode);
        currentNode = currentNode.parent;
        currentNode.inPath = true;
        if (currentNode != startNode)
          currentNode.drawPath();
      }
    
      reverseArray = Array.from(path);
    
      reverseArray.reverse();
      path = new Set(reverseArray);
    
    //   //////////console.log(path)
    
      realPath = Array.from(path)
    //   //////////console.log(realPath)
    
    if(realPath.length == 1){
        realPath[0].walkable = false
        ////////console.log("hit")
        wallSet.add( realPath[0])
        ////////console.log(wallSet)
    }
    
    ////console.log(realPath)
      if(realPath.length>0){
          realPath.unshift(agent.tile)
          agent.realPath = [...realPath]
        //   for(let t = 0;t<realPath.length;t++){
        //       realPath[t].color = "black"
        //   }
        // bottle.crew[bottle.selectedcrew].body.x =realPath[0].posx+105
        // bottle.crew[bottle.selectedcrew].body.y  = realPath[0].posy+285
    
    // startPoint = new Vec2(bottle.crew[bottle.selectedcrew].body.x, bottle.crew[bottle.selectedcrew].body.y);
    // startPoint = new Vec2(realPath[0].posx+100, realPath[0].posy+280);
    // bottle.crew[bottle.selectedcrew].body.x =startPoint.x+4
    // bottle.crew[bottle.selectedcrew].body.y  = startPoint.y+4
        // startPoint = new Vec2(realPath[0].posx, realPath[0].posy);
        //////////console.log(startPoint)
        // bottle.crew[bottle.selectedcrew].moving = 1
      }else{
        //   //////console.log(endPoint)
    
    //     if(bottle.crew[bottle.selectedcrew].moving == 1){
    //         // //////console.log(endPoint)
    //     // bottle.crew[bottle.selectedcrew].body.x =endPoint.x+96
    //     // bottle.crew[bottle.selectedcrew].body.y  = endPoint.y+284
    //     // bottle.crew[bottle.selectedcrew].moving = 0
    //     // //////console.log(endPoint)
    //         reset()
    //   }
      }
    }
    //list of neighbors
    function getNeighbors(node) {
      var checkX;
      var checkY;
      var neighborList = [];
      var tempList = [];
    //   for (var x = -NODESIZE; x <= NODESIZE; x += NODESIZE) {
    //     for (var y = -NODESIZE; y <= NODESIZE; y += NODESIZE) {
    //       if (x == 0 && y == 0) {
    //         continue;
    //       }
    //       checkX = node.posx + x;
    //       checkY = node.posy + y;
    
    //       if (checkX >= 0 && checkX <= CANVAS_WIDTH - NODESIZE && checkY >= 0 && checkY <= CANVAS_HEIGHT - NODESIZE) {
    
    //         if(x == 0 || y == 0){
    
    //             if(checkX<=gridPointsByPos.length ){
    //                 if(checkY<=gridPointsByPos[checkX].length ){
    //                     if(sandmap.gridPoints[gridPointsByPos[checkX][checkY].id].walkable !== false){
    //                         tempList.push(gridPointsByPos[checkX][checkY]);
    //                     }
    
    //             }
    //         }
    //         }
    //       }
    //     }
    //   }


    for (var x = -1; x <= 1; x += 1) {
        for (var y = -1; y <= 1; y += 1) {
          if (x == 0 && y == 0) {
            continue;
          }
          checkX = node.t + x;
          checkY = node.k + y;
    
          if (checkX >= 0 && checkX <= 127 && checkY >= 0 && checkY <= 127) { //127 mapsize
    
            if(x == 0 || y == 0 || Math.random()< .25){  // randomness leads to organic
    
                if(checkX<sandmap.blocks.length ){
                    if(checkY<sandmap.blocks[0].length ){
                        if(sandmap.gridPoints[sandmap.blocks[checkX][checkY].id].walkable !== false){
                            tempList.push(sandmap.blocks[checkX][checkY]);
                        }
    
                }
            }
            }
          }
        }
      }


      neighborList = tempList;
      ////console.log(neighborList)
      return (neighborList);
    
    }
    
    
    
    //UI, buttons, and click events/functions
    
    //tells canvas to how to draw the node
    function nodeDrawer(context, target, lineW, strokeS, fillS) {
    //   context.beginPath();
    //   context.lineWidth = lineW;
    //   context.strokeStyle = strokeS;
    //   context.fillStyle = fillS;
    //   context.fillRect(target.posx, target.posy, target.size, target.size);
    //   context.rect(target.posx, target.posy, target.size, target.size);
    //   context.closePath();
    //   context.stroke();
    }
    //clears the path WITHOUT clearing the walls
    function reset() {
      gridPoints = []; // resets the gridPoints so that it clears the walls etc. on reset.
      gridPointsByPos = [];
      openSet.clear();
      closedSet.clear();
      //gctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      grid.createGrid();
    
    }
    //resets everything INCLUDING walls
    function resetWalls() {
    
      wallSet.clear();
      reset();
    }
    

    let sandmap = new Sandmap(CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0, []);

    class Building {
        constructor(tile, faction){
            if(tile.id%128 < 1){
                tile = sandmap.gridPoints[tile.id+1]
            }
            if(tile.id < 128){
                tile = sandmap.gridPoints[tile.id+128]
            }
            this.tile = tile
            this.faction = faction
            this.tiles = []
            for(let t = -1;t<1;t++){
                for(let k = -1;k<1;k++){
                this.tiles.push(sandmap.blocks[tile.t+t][tile.k+k])
                }
            }
            this.faction.buildings.push(this)
        }
        draw(){
            for(let t = 0;t<this.tiles.length;t++){
                this.tiles[t].walkable = false
                this.tiles[t].color =  "brown" // this.faction.color
            }

        }
    }
    class Agent {
        constructor(tile, player){
            this.selected = 1
            this.faction = player
            this.tile = tile
            this.movespeedcount = 0
            this.movespeed = Math.floor(Math.random()*3)+2
            this.pather = new PathFindingAlg(sandmap.blocks, this.tile, this.tile, this)
            this.body = new Circle(this.tile.x+(this.tile.width*.5), this.tile.y+(this.tile.height*.5), 5, this.faction.color)
            this.faction.units.push(this)
            this.index = 0
            this.realPath = [this.tile]
            this.repath = 0
        }
        pathTo(point){
            if(point.walkable == true){
                this.pather = new PathFindingAlg(sandmap.blocks, this.tile, point, this)
                this.pather.agent = this
                this.obvious = this.realPath[this.index]
                this.pathsto = []
                for(let t = 0;t<this.realPath.length;t++){
                    this.pathsto.push(this.realPath[t])
                }
                this.pather.findPath()
                if(this.obvious ==  this.realPath[0]){
                    this.index = 0
                }else{
                    this.realPath = [...this.pathsto]
                    this.repath = 10
                    this.snapto = point
                }
            }
        }
        move(){
            this.repath--
            if(this.repath == 0){
               this.pathTo(this.snapto)
            }
            
            if(this.index < this.realPath.length-1){
                this.movespeedcount++
                if(this.movespeedcount%this.movespeed == 0){
                    this.index+=1
                    if(this.realPath[this.index].walkable == false){
                        if(this.index == 0){
                            let goal = 0
                            goal += this.tile.id
                            goal += (Math.sign(Math.random()-.5)*127)
                            goal += (Math.sign(Math.random()-.5))
                            goal = Math.min(goal, sandmap.gridPoints.length)
                            goal = Math.max(goal, 0)
                            // let goal = Math.max(Math.min(this.tile.id+(Math.sign(Math.random()-.5)*127)+ Math.sign(Math.random()-.5), sandmap.gridPoints.length),0)
                            this.pathTo(sandmap.gridPoints[goal])
                        }else{
                            this.index--
                        }
                    }
                }
            }
            this.tile.walkable = true
            this.tile = this.realPath[this.index]
            this.tile.walkable = false

        }
        draw(){
            this.body = new UnitCircle(this.tile.x+(this.tile.width*.5), this.tile.y+(this.tile.height*.5), 5, this.faction.color)
            if(this.movespeed == 4){
                this.body.color = "gray"
                this.body.radius = 5.5
            }
            if(this.movespeed == 2){
                this.body.color = "red"
                this.body.radius = 4
            }
            if(this.movespeed == 3){
                this.body.color = "magenta"
                this.body.radius = 4.8
            }
            if(this.movespeed == 5){
                this.body.color = "black"
                this.body.radius = 6
            }
            this.body.draw()
        }
    }

    for(let t = 0;t<20;t++){
        let agent1 = new Agent(sandmap.blocks[0][0], sandmap.players[0])
    }


    // let pather = new PathFindingAlg(sandmap.blocks, sandmap.blocks[10][10], sandmap.blocks[12][25])
    // for(let t = 0;t<10;t++){
        // pather.findPath()
        
    // }

    function main() {
        canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
        gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
        // // game code goes here
        sandmap.draw()
    }

})
