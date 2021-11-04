
window.addEventListener('DOMContentLoaded', (event) => {

    let debreak = 1
    let start = 0
    function empty() {

    }
    let dataflop = 0
    let snow = new Image()
    snow.src = 'smoothsnow4.png'
    let nowalk = new Image()
    nowalk.src = 'nowalk.png'

    let sounds = []
    let soundspamdrop = .55

    let postwind = new Audio()
    postwind.src = "postwind.mp3"
    // sounds.push(postwind)
    postwind.volume = .4

    let hopeyouknow = new Audio()
    hopeyouknow.src = "hopeyouknow.mp3"
    sounds.push(hopeyouknow)
    let myfuneral = new Audio()
    myfuneral.src = "myfuneral.mp3"
    sounds.push(myfuneral)
    let systems = new Audio()
    systems.src = "systems.mp3"
    sounds.push(systems)
    let redlight = new Audio()
    redlight.src = "redlight.mp3"
    sounds.push(redlight)
    let feelcold = new Audio()
    feelcold.src = "feelcold.mp3"
    sounds.push(feelcold)
    let hitsomething = new Audio()
    hitsomething.src = "hitsomething.mp3"
    sounds.push(hitsomething)
    let rollout = new Audio()
    rollout.src = "rollout.mp3"
    sounds.push(rollout)
    let overtime = new Audio()
    overtime.src = "overtime.mp3"
    sounds.push(overtime)
    let movin = new Audio()
    movin.src = "movin.mp3"
    sounds.push(movin)

    //nymph audio
    let itstheedgeofusfight = new Audio()
    itstheedgeofusfight.src = "itstheedgeofusfight.mp3"
    sounds.push(itstheedgeofusfight)
    let sureilike = new Audio()
    sureilike.src = "sureilike.mp3"
    sounds.push(sureilike)
    let seethemseetheme = new Audio()
    seethemseetheme.src = "seethemseetheme.mp3"
    sounds.push(seethemseetheme)
    let seeasvillaneh = new Audio()
    seeasvillaneh.src = "seeasvillaneh.mp3"
    sounds.push(seeasvillaneh)
    let spreadoutseemult = new Audio()
    spreadoutseemult.src = "spreadoutseemult.mp3"
    sounds.push(spreadoutseemult)
    let whoarewetomolt = new Audio()
    whoarewetomolt.src = "whoarewetomolt.mp3"
    sounds.push(whoarewetomolt)

    //imago audio
    let boh = new Audio()
    boh.src = "boh.mp3"
    sounds.push(boh)
    let sieveceaselessly = new Audio()
    sieveceaselessly.src = "sieveceaselessly.mp3"
    sounds.push(sieveceaselessly)
    let sieveseejunior = new Audio()
    sieveseejunior.src = "sieveseejunior.mp3"
    sounds.push(sieveceaselessly)
    let ahhbarber = new Audio()
    ahhbarber.src = "sieveceaselessly.mp3"
    sounds.push(ahhbarber)
    let go = new Audio()
    go.src = "go.mp3"
    sounds.push(go)
    let die = new Audio()
    die.src = "die.mp3"
    sounds.push(die)
    let youneedmyassagain = new Audio()
    youneedmyassagain.src = "youneedmyassagain.mp3"
    sounds.push(youneedmyassagain)
    let yeahiminthisroom = new Audio()
    yeahiminthisroom.src = "yeahiminthisroom.mp3"
    sounds.push(yeahiminthisroom)
    let slamdownmustard = new Audio()
    slamdownmustard.src = "slamdownmustard.mp3"
    sounds.push(slamdownmustard)


    let donttellme = new Audio()
    donttellme.src = "onmyway.mp3"
    sounds.push(donttellme)
    let reporting = new Audio()
    reporting.src = "reporting.mp3"
    sounds.push(reporting)
    let onmyway = new Audio()
    onmyway.src = "onmyway.mp3"
    sounds.push(onmyway)
    let lesgo = new Audio()
    lesgo.src = "lesgo.mp3"
    sounds.push(lesgo)
    let lightemup = new Audio()
    lightemup.src = "lightemup.mp3"
    sounds.push(lightemup)
    let tellmywife = new Audio()
    tellmywife.src = "tellmywife.mp3"
    sounds.push(tellmywife)
    let deathrattle = new Audio()
    deathrattle.src = "deathrattle.mp3"
    sounds.push(deathrattle)
    let orders = new Audio()
    orders.src = "orders.mp3"
    sounds.push(orders)
    let righton = new Audio()
    righton.src = "righton.mp3"
    sounds.push(righton)
    let freezin = new Audio()
    freezin.src = "freezin.mp3"
    sounds.push(freezin)


    let combatinit = new Audio()
    combatinit.src = "combatinit.mp3"
    sounds.push(combatinit)
    let online = new Audio()
    online.src = "online.mp3"
    sounds.push(online)
    let scanning = new Audio()
    scanning.src = "scanning.mp3"
    sounds.push(scanning)
    let hello = new Audio()
    hello.src = "hello.mp3"
    sounds.push(hello)
    let pathfound = new Audio()
    pathfound.src = "pathfound.mp3"
    sounds.push(pathfound)
    let pathing = new Audio()
    pathing.src = "pathing.mp3"
    sounds.push(pathing)
    let signallost = new Audio()
    signallost.src = "signallost.mp3"
    sounds.push(signallost)
    let error = new Audio()
    error.src = "error.mp3"
    sounds.push(signallost)
    let collect = new Audio()
    collect.src = "collect.mp3"
    sounds.push(collect)



    function soundCancel() {
        for (let t = 0; t < sounds.length; t++) {
            sounds[t].pause()
            sounds[t].currentTime = 0
        }
    }

    let defenseicon = new Image()
    defenseicon.src = "defenseicon.png"
    let attackicon = new Image()
    attackicon.src = "attackicon.png"

    let icewall = new Image()
    icewall.src = "icewall2.png"
    let barracks = new Image()
    barracks.src = "barracks.png"

    let windmeter = new Image()
    windmeter.src = "windmeter.png"
    let progress = new Image()
    progress.src = "progressmeter.png"
    let harvester = new Image()
    harvester.src = "harvester2.png"
    let drone = new Image()
    drone.src = "drone1.png"
    let infantry = new Image()
    infantry.src = "infantry.png"
    let imago = new Image()
    imago.src = "imagobl3.png"
    let scuttler = new Image()
    scuttler.src = "scuttler3.png"
    let nymph = new Image()
    nymph.src = "nymph2.png"
    let hotrock1 = new Image()
    hotrock1.src = "hotrock1.png"
    let hotrock2 = new Image()
    hotrock2.src = "hotrock2.png"
    let rectstart = {}
    rectstart.x = 0
    rectstart.y = 0
    let selectrect = {}
    selectrect.x = 0
    selectrect.y = 0
    selectrect.width = 0
    selectrect.height = 0
    selectrect.color = "transparent"
    selectrect.draw = empty
    selectrect.isPointInside = empty

    const squaretable = {} // this section of code is an optimization for use of the hypotenuse function on Line and LineOP objects
    for (let t = 0; t < 10000000; t++) {
        squaretable[`${t}`] = Math.sqrt(t)
        if (t > 999) {
            t += 9
        }
    }
    // const gamepadAPI = {
    //     controller: {},
    //     turbo: true,
    //     connect: function (evt) {
    //         if (navigator.getGamepads()[0] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[1] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[2] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         } else if (navigator.getGamepads()[3] != null) {
    //             gamepadAPI.controller = navigator.getGamepads()[0]
    //             gamepadAPI.turbo = true;
    //         }
    //         for (let i = 0; i < gamepads.length; i++) {
    //             if (gamepads[i] === null) {
    //                 continue;
    //             }
    //             if (!gamepads[i].connected) {
    //                 continue;
    //             }
    //         }
    //     },
    //     disconnect: function (evt) {
    //         gamepadAPI.turbo = false;
    //         delete gamepadAPI.controller;
    //     },
    //     update: function () {
    //         gamepadAPI.controller = navigator.getGamepads()[0]
    //         gamepadAPI.buttonsCache = [];// clear the buttons cache
    //         for (var k = 0; k < gamepadAPI.buttonsStatus.length; k++) {// move the buttons status from the previous frame to the cache
    //             gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    //         }
    //         gamepadAPI.buttonsStatus = [];// clear the buttons status
    //         var c = gamepadAPI.controller || {}; // get the gamepad object
    //         var pressed = [];
    //         if (c.buttons) {
    //             for (var b = 0, t = c.buttons.length; b < t; b++) {// loop through buttons and push the pressed ones to the array
    //                 if (c.buttons[b].pressed) {
    //                     pressed.push(gamepadAPI.buttons[b]);
    //                 }
    //             }
    //         }
    //         var axes = [];
    //         if (c.axes) {
    //             for (var a = 0, x = c.axes.length; a < x; a++) {// loop through axes and push their values to the array
    //                 axes.push(c.axes[a].toFixed(2));
    //             }
    //         }
    //         gamepadAPI.axesStatus = axes;// assign received values
    //         gamepadAPI.buttonsStatus = pressed;
    //         // //////////////////console.log(pressed); // return buttons for debugging purposes
    //         return pressed;
    //     },
    //     buttonPressed: function (button, hold) {
    //         var newPress = false;
    //         for (var i = 0, s = gamepadAPI.buttonsStatus.length; i < s; i++) {// loop through pressed buttons
    //             if (gamepadAPI.buttonsStatus[i] == button) {// if we found the button we're looking for...
    //                 newPress = true;// set the boolean variable to true
    //                 if (!hold) {// if we want to check the single press
    //                     for (var j = 0, p = gamepadAPI.buttonsCache.length; j < p; j++) {// loop through the cached states from the previous frame
    //                         if (gamepadAPI.buttonsCache[j] == button) { // if the button was already pressed, ignore new press
    //                             newPress = false;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         return newPress;
    //     },
    //     buttons: [
    //         'A', 'B', 'X', 'Y', 'LB', 'RB', 'Left-Trigger', 'Right-Trigger', 'Back', 'Start', 'Axis-Left', 'Axis-Right', 'DPad-Up', 'DPad-Down', 'DPad-Left', 'DPad-Right', "Power"
    //     ],
    //     buttonsCache: [],
    //     buttonsStatus: [],
    //     axesStatus: []
    // };
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

    class Vector { // vector math and physics if you prefer this over vector components on circles
        constructor(object = (new Point(0, 0)), xmom = 0, ymom = 0) {
            this.xmom = xmom
            this.ymom = ymom
            this.object = object
        }
        isToward(point) {
            let link = new LineOP(this.object, point)
            let dis1 = link.sqrDis()
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
            let link2 = new LineOP(dummy, point)
            let dis2 = link2.sqrDis()
            if (dis2 < dis1) {
                return true
            } else {
                return false
            }
        }
        rotate(angleGoal) {
            let link = new Line(this.xmom, this.ymom, 0, 0)
            let length = link.hypotenuse()
            let x = (length * Math.cos(angleGoal))
            let y = (length * Math.sin(angleGoal))
            this.xmom = x
            this.ymom = y
        }
        magnitude() {
            return (new Line(this.xmom, this.ymom, 0, 0)).hypotenuse()
        }
        normalize(size = 1) {
            let magnitude = this.magnitude()
            this.xmom /= magnitude
            this.ymom /= magnitude
            this.xmom *= size
            this.ymom *= size
        }
        multiply(vect) {
            let point = new Point(0, 0)
            let end = new Point(this.xmom + vect.xmom, this.ymom + vect.ymom)
            return point.pointDistance(end)
        }
        add(vect) {
            return new Vector(this.object, this.xmom + vect.xmom, this.ymom + vect.ymom)
        }
        subtract(vect) {
            return new Vector(this.object, this.xmom - vect.xmom, this.ymom - vect.ymom)
        }
        divide(vect) {
            return new Vector(this.object, this.xmom / vect.xmom, this.ymom / vect.ymom) //be careful with this, I don't think this is right
        }
        draw() {
            let dummy = new Point(this.object.x + this.xmom, this.object.y + this.ymom)
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
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
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
            if (hypotenuse < 10000000 - 1) {
                if (hypotenuse > 1000) {
                    return squaretable[`${Math.round(10 * Math.round((hypotenuse * .1)))}`]
                } else {
                    return squaretable[`${Math.round(hypotenuse)}`]
                }
            } else {
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
    class UiRectangle {
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
                //////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
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
                //////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
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
                //////////////////console.log("The circle is below a radius of 0, and has not been drawn. The circle is:", this)
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
        adjustByFromDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].fromRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].fromRatio
                    this.shapes[t].y += y * this.shapes[t].fromRatio
                }
            }
        }
        adjustByToDisplacement(x, y) {
            for (let t = 0; t < this.shapes.length; t++) {
                if (typeof this.shapes[t].toRatio == "number") {
                    this.shapes[t].x += x * this.shapes[t].toRatio
                    this.shapes[t].y += y * this.shapes[t].toRatio
                }
            }
        }
        mixIn(arr) {
            for (let t = 0; t < arr.length; t++) {
                for (let k = 0; k < arr[t].shapes.length; k++) {
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
            let line = new Line((Math.cos(angle) * size), (Math.sin(angle) * size), (Math.cos(angle + ((Math.PI * 2) / members)) * size), (Math.sin(angle + ((Math.PI * 2) / members)) * size))
            let distance = line.hypotenuse()
            for (let t = 0; t < members; t++) {
                let circ = new Circle(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size), radius, color)
                circ.reflect = 1
                circ.bigbody = new Circle(x + (Math.cos(angle) * size), y + (Math.sin(angle) * size), distance, color)
                circ.draw()
                circ.touch = []
                this.points.push(circ)
                angle += ((Math.PI * 2) / members)
            }

            for (let t = 0; t < this.points.length; t++) {
                for (let k = 0; k < this.points.length; k++) {
                    if (t != k) {
                        if (this.points[k].bigbody.doesPerimeterTouch(this.points[t])) {
                            if (!this.points[k].touch.includes(t) && !this.points[t].touch.includes(k)) {
                                let spring = new SpringOP(this.points[k], this.points[t], (size * Math.PI) / members, 2, color)
                                this.points[k].touch.push(t)
                                this.points[t].touch.push(k)
                                this.springs.push(spring)
                                spring.beam.draw()
                            }
                        }
                    }
                }
            }

            //////////////////console.log(this)

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

                    if (this.size < this.link.hypotenuse()) {
                        this.points[s].xmom -= (Math.cos(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                        this.points[s].ymom -= (Math.sin(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                    } else {
                        this.points[s].xmom += (Math.cos(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                        this.points[s].ymom += (Math.sin(this.link.angle()) * (this.link.hypotenuse())) * this.forceConstant * .1
                    }

                    // this.points[s].xmom += (((this.points[s].x - this.centroid.x) / (this.link.hypotenuse()))) * this.forceConstant
                    // this.points[s].ymom += (((this.points[s].y - this.centroid.y) / (this.link.hypotenuse()))) * this.forceConstant
                }
            }
            if (this.flop % 2 == 0) {
                for (let s = 0; s < this.springs.length; s++) {
                    this.springs[s].balance()
                }
            } else {
                for (let s = this.springs.length - 1; s >= 0; s--) {
                    this.springs[s].balance()
                }
            }
            for (let s = 0; s < this.points.length; s++) {
                this.points[s].move()
                this.points[s].draw()
            }
            for (let s = 0; s < this.springs.length; s++) {
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
    function setUp(canvas_pass, style = "#888888") {
        canvas = canvas_pass
        canvas_context = canvas.getContext('2d');
        canvas.style.background = style
        window.setInterval(function () {
            main()
        }, 35)
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
            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {
                if (keysPressed['b']) {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                    let wet = 0
                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                            wet = 1
                        }
                    }
                    if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                        wet = 1
                    }
                    // if (sandmap.players[sandmap.turn].hotrock < 10) {
                    //     wet = 1
                    // }

                    if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                        wet = 1
                    }
                    if (wet == 0) {
                        sandmap.players[sandmap.turn].buildWall(sandmap.players[sandmap.turn].selected_tile, 0)
                    }
                } else if (keysPressed['x']) {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                            for (let k = 0; k < sandmap.players[sandmap.turn].buildings[t].tiles.length; k++) {
                                sandmap.players[sandmap.turn].buildings[t].tiles[k].walkable = true
                                sandmap.players[sandmap.turn].buildings[t].tiles[k].color = "#AACCFF"
                                delete sandmap.players[sandmap.turn].buildings[t].tiles[k].wallcolor
                            }
                            sandmap.players[sandmap.turn].buildings.splice(t, 1)
                            break
                        }
                    }
                } else if (keysPressed['n']) {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                    let wet = 0
                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                            wet = 1
                        }
                    }
                    // if (sandmap.players[sandmap.turn].hotrock < 70) {
                    //     wet = 1
                    // }
                    if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                        wet = 1
                    }
                    if (wet == 0) {
                        sandmap.players[sandmap.turn].buildBarracks(sandmap.players[sandmap.turn].selected_tile, 0)
                        // let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn], 0)

                    }
                } else {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    if (structuredpoint.x < 0) {
                        structuredpoint.x = 0
                    }
                    if (structuredpoint.y < 0) {
                        structuredpoint.y = 0
                    }
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].buildings[t].tiles.includes(sandmap.players[sandmap.turn].selected_tile)) {
                            sandmap.players[sandmap.turn].buildings[t].selected = 1
                        } else {
                            sandmap.players[sandmap.turn].buildings[t].selected = 0
                        }
                    }

                    // sandmap.turn++
                    sandmap.turn %= sandmap.players.length
                    rectstart.x = structuredpoint.x
                    rectstart.y = structuredpoint.y
                    for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].units[t].tile) {
                            if (sandmap.players[sandmap.turn].units[t].selected == 0) {

                                // if(Math.random()<soundspamdrop){
                                soundCancel()
                                if (sandmap.players[sandmap.turn].units[t].drone == 1) {
                                    if (Math.random() < .5) {
                                        hello.play()
                                    } else {
                                        scanning.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                                    seeasvillaneh.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].imago == 1) {
                                    yeahiminthisroom.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].infantry == 1) {
                                    if (Math.random() < .8) {
                                        orders.play()
                                    } else {
                                        freezin.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].harvester == 1) {
                                    if (Math.random() < .9) {
                                        rollout.play()
                                    } else {
                                        hitsomething.play()
                                    }
                                }
                                // }
                            }
                            sandmap.players[sandmap.turn].units[t].selected = 2
                        } else {
                            // sandmap.players[sandmap.turn].units[t].selected = 0
                        }
                    }
                    // for(let t = 0;t<sandmap.players[sandmap.turn].units.length;t++){
                    //     if(sandmap.players[sandmap.turn].units[t].selected == 1){
                    //         sandmap.players[sandmap.turn].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile )
                    //     }
                    // }
                }
            } else {
                for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                    if (sandmap.players[sandmap.turn].buildings[t].spawnsmall.isPointInside(TIP_engine)) {
                        sandmap.players[sandmap.turn].buildings[t].makeScout()
                    }
                    if (sandmap.players[sandmap.turn].buildings[t].spawnmedium.isPointInside(TIP_engine)) {
                        sandmap.players[sandmap.turn].buildings[t].makeInfantry()
                    }
                    if (sandmap.players[sandmap.turn].buildings[t].spawnbig.isPointInside(TIP_engine)) {
                        sandmap.players[sandmap.turn].buildings[t].makeHarvester()
                    }
                }
                for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                    if (sandmap.players[sandmap.turn].units[t].spawnsmall.isPointInside(TIP_engine)) {
                        sandmap.players[sandmap.turn].units[t].makeNymph()
                    }
                    if (sandmap.players[sandmap.turn].units[t].morph.isPointInside(TIP_engine)) {
                        sandmap.players[sandmap.turn].units[t].metamorph1()
                        if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                            if (Math.random() < soundspamdrop) {
                                soundCancel()
                                whoarewetomolt.play()
                            }
                        }
                    }
                    if (sandmap.players[sandmap.turn].units[t].morph2.isPointInside(TIP_engine)) {
                        sandmap.players[sandmap.turn].units[t].metamorph2()
                    }
                }
                if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                    let structuredpoint = new Point(0, 0)
                    let inv = 1 / .28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                    sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .25)
                    sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .25)
                }
            }



            // example usage: if(object.isPointInside(TIP_engine)){ take action }
            window.addEventListener('pointermove', continued_stimuli);

        });
        window.addEventListener('contextmenu', e => {
            e.preventDefault()
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine
            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {

                let structuredpoint = new Point(0, 0)
                structuredpoint.x += sandmap.window.guide.x
                structuredpoint.y += sandmap.window.guide.y
                structuredpoint.x += (TIP_engine.x * .5)
                structuredpoint.y += (TIP_engine.y * .5)
                structuredpoint.x = Math.floor(structuredpoint.x * .1)
                structuredpoint.y = Math.floor(structuredpoint.y * .1)
                sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                // sandmap.turn++
                sandmap.turn %= sandmap.players.length

                for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                    if (sandmap.players[sandmap.turn].units[t].selected == 1) {
                        sandmap.players[sandmap.turn].units[t].selected = 2

                        ////////console.log(sandmap.players[sandmap.turn].selected_tile)
                        sandmap.players[sandmap.turn].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile)


                        if (Math.random() < soundspamdrop) {
                            if (sandmap.players[sandmap.turn].selected_tile.hotrock > 0) {

                                soundCancel()
                                if (sandmap.players[sandmap.turn].units[t].imago == 1) {
                                    if (Math.random() < .5) {
                                        sieveseejunior.play()
                                    } else {
                                        sieveceaselessly.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].drone == 1) {
                                    collect.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                                    sureilike.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].infantry == 1) {
                                    righton.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].harvester == 1) {
                                    overtime.play()
                                }
                            } else {

                                soundCancel()
                                if (sandmap.players[sandmap.turn].units[t].imago == 1) {
                                    go.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].harvester == 1) {
                                    movin.play()
                                }
                                if (sandmap.players[sandmap.turn].units[t].drone == 1) {
                                    if (Math.random() < .5) {
                                        pathfound.play()
                                    } else {
                                        pathing.play()
                                    }
                                }
                                if (sandmap.players[sandmap.turn].units[t].nymph == 1) {
                                    spreadoutseemult.play()
                                }

                                if (sandmap.players[sandmap.turn].units[t].infantry == 1) {
                                    if (Math.random() < .3) {
                                        lesgo.play()
                                    } else if (Math.random() < .3) {
                                        onmyway.play()
                                    } else {
                                        donttellme.play()
                                    }
                                }
                            }
                        }

                        for (let k = 0; k < sandmap.players[Math.abs(sandmap.turn - 1)].units.length; k++) {
                            if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[Math.abs(sandmap.turn - 1)].units[k].tile) {
                                sandmap.players[sandmap.turn].units[t].attacktarget = sandmap.players[Math.abs(sandmap.turn - 1)].units[k]
                            }
                        }
                    }
                }

            } else {
                if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                    let structuredpoint = new Point(0, 0)
                    let inv = 1 / .28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                    sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .25)
                    sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .25)

                    structuredpoint.x = Math.floor((sandmap.window.guide.x + (sandmap.window.body.width * .25)) * .1)
                    structuredpoint.y = Math.floor(((sandmap.window.guide.y + (sandmap.window.body.height * .25)) * .1))
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                    for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                        if (sandmap.players[sandmap.turn].units[t].selected == 1) {
                            if (typeof sandmap.players[sandmap.turn].units[t].realPath[sandmap.players[sandmap.turn].units[t].index + 1] != "undefined") {
                                if (sandmap.players[sandmap.turn].units[t].realPath[sandmap.players[sandmap.turn].units[t].index + 1] == sandmap.players[sandmap.turn].selected_tile) {
                                    continue
                                }
                            }
                            ////////console.log(sandmap.players[sandmap.turn].selected_tile)
                            sandmap.players[sandmap.turn].units[t].pathTo(sandmap.players[sandmap.turn].selected_tile)
                            if (sandmap.players[sandmap.turn].selected_tile.hotrock > 0) {

                                // soundCancel()
                                // if( sandmap.players[sandmap.turn].units[t].drone == 1){
                                //     collect.play()
                                // }
                            }
                        }
                    }
                }
            }



            // example usage: if(object.isPointInside(TIP_engine)){ take action }
            window.addEventListener('pointermove', continued_stimuli);

        });

        window.addEventListener('pointerup', e => {
            window.removeEventListener("pointermove", continued_stimuli);
            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {
                for (let t = 0; t < sandmap.players[sandmap.turn].units.length; t++) {
                    if (selectrect.isPointInside(sandmap.players[sandmap.turn].units[t].body)) {

                        sandmap.players[sandmap.turn].units[t].selected = 1


                    } else {
                        if (sandmap.players[sandmap.turn].units[t].selected == 2) {
                            sandmap.players[sandmap.turn].units[t].selected = 1
                        } else {
                            sandmap.players[sandmap.turn].units[t].selected = 0
                        }
                    }
                }
            }
            selectrect = new Tile(0, 0, 0, 0, "transparent")
        })
        function continued_stimuli(e) {
            FLEX_engine = canvas.getBoundingClientRect();
            XS_engine = e.clientX - FLEX_engine.left;
            YS_engine = e.clientY - FLEX_engine.top;
            TIP_engine.x = XS_engine
            TIP_engine.y = YS_engine
            TIP_engine.body = TIP_engine

            if (TIP_engine.x <= sandmap.window.body.x + sandmap.window.body.width) {

                if (keysPressed['b']) {
                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)
                    sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]

                    let wet = 0
                    for (let t = 0; t < sandmap.players[sandmap.turn].buildings.length; t++) {
                        if (sandmap.players[sandmap.turn].selected_tile == sandmap.players[sandmap.turn].buildings[t].tile) {
                            wet = 1
                        }
                    }
                    // if (sandmap.players[sandmap.turn].hotrock < 10) {
                    //     wet = 1
                    // }

                    if (sandmap.players[sandmap.turn].blocks[sandmap.players[sandmap.turn].selected_tile.t][sandmap.players[sandmap.turn].selected_tile.k].markdraw !== 1) {
                        wet = 1
                    }
                    if (wet == 0) {
                        // let building = new Building(sandmap.players[sandmap.turn].selected_tile, sandmap.players[sandmap.turn], 0)

                        sandmap.players[sandmap.turn].buildWall(sandmap.players[sandmap.turn].selected_tile, 0)
                    }
                } else {

                    let structuredpoint = new Point(0, 0)
                    structuredpoint.x += sandmap.window.guide.x
                    structuredpoint.y += sandmap.window.guide.y
                    structuredpoint.x += (TIP_engine.x * .5)
                    structuredpoint.y += (TIP_engine.y * .5)
                    structuredpoint.x1 = Math.ceil(structuredpoint.x * .1)
                    structuredpoint.y1 = Math.ceil(structuredpoint.y * .1)
                    structuredpoint.x = Math.floor(structuredpoint.x * .1)
                    structuredpoint.y = Math.floor(structuredpoint.y * .1)

                    selectrect = new Tilex(rectstart.x * 10, rectstart.y * 10, (structuredpoint.x1 - rectstart.x) * 10, (structuredpoint.y1 - rectstart.y) * 10, sandmap.players[sandmap.turn].color + "22")
                    if (selectrect.width < 0) {
                        selectrect.x += selectrect.width
                        selectrect.width = Math.abs(selectrect.width)
                    }
                    if (selectrect.height < 0) {
                        selectrect.y += selectrect.height
                        selectrect.height = Math.abs(selectrect.height)
                    }

                    // ////////////console.log(selectrect)
                    // selectrect.draw()
                    // sandmap.players[sandmap.turn].selected_tile = sandmap.blocks[structuredpoint.x][structuredpoint.y]
                    // sandmap.turn++
                    // sandmap.turn%=sandmap.players.length


                }


            } else {
                if (sandmap.window.minibody.isPointInside(TIP_engine)) {
                    let structuredpoint = new Point(0, 0)
                    let inv = 1 / .28125
                    structuredpoint.x += (TIP_engine.x - sandmap.window.minibody.x) * inv
                    structuredpoint.y += (TIP_engine.y - sandmap.window.minibody.y) * inv
                    sandmap.window.guide.x = structuredpoint.x - (sandmap.window.body.width * .25)
                    sandmap.window.guide.y = structuredpoint.y - (sandmap.window.body.height * .25)
                }
            }
        }
    }
    //     function gamepad_control(object, speed = 1) { // basic control for objects using the controler
    // //         //////////////////console.log(gamepadAPI.axesStatus[1]*gamepadAPI.axesStatus[0]) //debugging
    //         if (typeof object.body != 'undefined') {
    //             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
    //                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
    //                 object.body.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.body.y += (gamepadAPI.axesStatus[1] * speed)
    //                 }
    //             }
    //         } else if (typeof object != 'undefined') {
    //             if(typeof (gamepadAPI.axesStatus[1]) != 'undefined'){
    //                 if(typeof (gamepadAPI.axesStatus[0]) != 'undefined'){
    //                 object.x += (gamepadAPI.axesStatus[0] * speed)
    //                 object.y += (gamepadAPI.axesStatus[1] * speed)
    //                 }
    //             }
    //         }
    //     }
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
            circ.toRatio = t / limit
            circ.fromRatio = (limit - t) / limit
            shape_array.push(circ)
        }
        return (new Shape(shape_array))
    }

    let setup_canvas = document.getElementById('canvas') //getting canvas from document


    let map_canvas = document.getElementById('map') //getting canvas from document

    map_context = map_canvas.getContext('2d');
    map_context.imageSmoothingEnabled = false;
    map_canvas.style.background = "tan"
    setUp(setup_canvas)
    canvas_context.imageSmoothingEnabled = false;
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
            this.koffset = 0
            this.toffset = 0
            // this.markdraw = 1 //remove for fog

            var F;

            var parent;
            // this.inPath = false;
            this.getGCost = this.getValueG;
            this.getHCost = this.getValueH;

            this.size = size;
            this.posx = posx;
            this.posy = posy;
            this.walkable = walkable;
            if (Math.random() < .01) {
                if (this.hotrock != 1 && this.hotrock != 2) {
                    this.walkable = false
                    this.ice = 1
                    this.color = "#AAFFFF"
                }
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
            // //////////////////////console.log(link)
            // //////////////////////console.log(bottle)
            // }
            // let roundedx = (Math.round((startPoint.x) / 10))
            // let roundedy = (Math.round((startPoint.y) / 10))
            // if (this.walkable !== false) {
            //     //gctx.fillRect(this.posx, this.posy, this.size, this.size);
            //     //gctx.rect(this.posx, this.posy, this.size, this.size);
            //     //gctx.closePath();
            //     //gctx.stroke();
            // }
            // if (this.inPath === true) {
            //     // this.drawPath();
            // } else if (this.walkable === false) {
            //     // //////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   //////////////////////console.log("hit the startNode");
            //     //   this.createStartNode();
            //     return;
            // } else if (this.posx == endPoint.x && this.posy == endPoint.y) {
            //     //   this.createEndNode();

            // }

        }
        draw() {
            if (this.sourcerock <= 0 && this.hotrock != 0) {
                this.hotrock = 0
                // this.color = "#AACCFF"
                sandmap.hotrocks.splice(sandmap.hotrocks.indexOf(this), 1)
            }

            if (this.walkable == false && this.builtOn == 1) {
                if (typeof this.wallcolor != "undefined") {
                    map_context.fillStyle = this.color
                    map_context.fillRect(this.x, this.y, this.width, this.height)
                    map_context.strokeStyle = this.wallcolor
                    map_context.strokeRect(this.x, this.y, this.width, this.height)
                }
                map_context.fillStyle = this.color
                map_context.fillRect(this.x, this.y, this.width, this.height)

            } else if (this.walkable == false && this.ice == 1) {
                map_context.drawImage(nowalk, this.x, this.y)
            } else if (this.hotrock == 1) {
                map_context.drawImage(hotrock1, this.x, this.y)
            } else if (this.hotrock == 2) {
                map_context.drawImage(hotrock2, this.x, this.y)
            } else {
                if (typeof this.wallcolor != "undefined") {
                    map_context.fillStyle = this.color
                    map_context.fillRect(this.x, this.y, this.width, this.height)
                    map_context.strokeStyle = this.wallcolor
                    map_context.strokeRect(this.x, this.y, this.width, this.height)
                } else {
                    // if(this.walkable== true || this.drawish == 1){
                    //     map_context.drawImage(snow, ((this.t+this.toffset))%189, (this.k+this.koffset)%189, 10,10, this.x, this.y, 10, 10)
                    // }else{
                    // if(this.walkable == false){
                    //     map_context.fillStyle = this.color
                    //     map_context.fillRect(this.x, this.y, this.width, this.height)
                    // }
                    // }
                }
                // if (sandmap.winddiry == 1) {
                //     this.toffset += sandmap.windspeed
                // }
                // if (sandmap.winddirx == 1) {
                //     this.koffset += sandmap.windspeed
                // }
                // if (sandmap.winddiry == -1) {
                //     this.toffset -= sandmap.windspeed
                //     if ((this.t + this.toffset) < 0) {
                //         this.toffset = 189 - this.t
                //     }
                // }
                // if (sandmap.winddirx == -1) {
                //     this.koffset -= sandmap.windspeed
                //     if ((this.k + this.koffset) < 0) {
                //         this.koffset = 189 - this.t
                //     }
                // }
            }
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

    class Tilex {
        constructor(x, y, width, height, color, id, size, posx, posy, walkable) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.koffset = 0
            this.toffset = 0
            this.markdraw = 1 //remove for fog

            var F;

            var parent;
            // this.inPath = false;
            this.getGCost = this.getValueG;
            this.getHCost = this.getValueH;

            this.size = size;
            this.posx = posx;
            this.posy = posy;
            this.walkable = walkable;
            if (Math.random() < .01) {
                if (this.hotrock != 1 && this.hotrock != 2) {
                    this.walkable = false
                    this.ice = 1
                    this.color = "#AAFFFF"
                }
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
            // //////////////////////console.log(link)
            // //////////////////////console.log(bottle)
            // }
            // let roundedx = (Math.round((startPoint.x) / 10))
            // let roundedy = (Math.round((startPoint.y) / 10))
            // if (this.walkable !== false) {
            //     //gctx.fillRect(this.posx, this.posy, this.size, this.size);
            //     //gctx.rect(this.posx, this.posy, this.size, this.size);
            //     //gctx.closePath();
            //     //gctx.stroke();
            // }
            // if (this.inPath === true) {
            //     // this.drawPath();
            // } else if (this.walkable === false) {
            //     // //////////////////////console.log(this)

            //     // this.createWall();
            //     return;
            //     // }else if (link.hypotenuse() < 11) {
            // } else if (this.posx == roundedx && this.posy == roundedy) {
            //     //   //////////////////////console.log("hit the startNode");
            //     //   this.createStartNode();
            //     return;
            // } else if (this.posx == endPoint.x && this.posy == endPoint.y) {
            //     //   this.createEndNode();

            // }

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


    class FogTile {
        constructor(x, y) {
            this.timer = 100
            this.x = x
            this.y = y
            this.height = 10
            this.width = 10
            this.color = "black"
        }
        draw() {
            map_context.fillStyle = this.color
            map_context.fillRect(this.x, this.y, this.width, this.height)
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
            this.windspeed = 1
            this.winddiry = 1
            this.winddirx = 0
            this.width = width;
            this.height = height;
            this.posx = posx;
            this.posy = posy;
            this.gridPoints = gridPoints;
            this.turn = 0
            this.blocks = []
            this.fog = []
            let id = 0
            this.hotrocks = []
            this.players = []
            this.players.push(new Player('Earthoids', "#AA00AA", 1, Math.floor(Math.random() * 2)))
            this.players.push(new Player('Cold Itzlerians', "#09DD99", 1, Math.floor(Math.random() * 2)))
            this.players[1].units = []
            for (let g = 0; g < this.players.length + 1; g++) {
                for (let t = 0; t < 128; t++) {
                    let rects = []
                    let fogs = []
                    for (let k = 0; k < 128; k++) {
                        let rect = new Tile(t * 10, k * 10, 10, 10, "#AACCFF", id, 10, t * 10, k * 10, true)
                        let fogtile = new FogTile(t * 10, k * 10, 10, 10, "#090909", id, 10, t * 10, k * 10, true)
                        if (t > 2 && k > 2) {
                            if (t < 125 && k < 125) {

                                if (Math.random() < .009) {
                                    rect.hotrock = 1
                                    rect.sourcerock = 200
                                    rect.walkable = true
                                    rect.color = "#DDAA44"
                                    if (Math.random() < .5) {
                                        rect.hotrock = 2
                                        rect.sourcerock = 400
                                        rect.walkable = true
                                        rect.color = "#AA8822"
                                    }
                                }
                            }
                        }
                        rect.t = t
                        rect.k = k
                        rects.push(rect)
                        fogs.push(fogtile)
                        id++
                    }
                    if (g == 2) {
                        this.blocks.push(rects)
                        this.fog.push(fogs)
                    } else {
                        this.players[g].blocks.push(rects)
                        this.players[g].fog.push(fogs)
                    }
                }
            }


            this.window = new Window()
            // this.players.push(new Player('Skribulons', "#696969"))
            // this.players.push(new Player('Palletae', "pink"))
            // this.players.push(new Player('Bulbato', "#00ff00"))
            // this.players.push(new Player('Hydruzan' , "purple" ))
            this.createGrid()
            this.gridPoints = []

            for (let t = 0; t < this.blocks.length; t++) {
                for (let k = 0; k < this.blocks[t].length; k++) {
                    this.gridPoints.push(this.blocks[t][k])
                    if (this.blocks[t][k].hotrock == 1 || this.blocks[t][k].hotrock == 2) {
                        this.hotrocks.push(this.blocks[t][k])
                    }
                }
            }
            ////console.log(this)
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
                    //////////////////////console.log(countNodes)
                    tempNode = new Tile(i, j, 10, 10, "tan", countNodes, NODESIZE, i, j, true);

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
                    // //   //////////////////////console.log("wallSet had countNodes!")
                    //   tempNode.walkable = false;
                    // }

                    // tempNode.drawNode();
                    tempNode.F = tempNode.getValueF();
                    this.gridPoints.push(tempNode);

                    countNodes++;

                }
            }

        }

        draw() {

            if (Math.random() < .05) {
                let chooser = Math.floor(Math.random() * 2)
                if (chooser == 0) {
                    if (this.windspeed > .1051) {
                        this.windspeed /= 1.05
                    }
                }
                if (chooser == 1) {
                    if (this.windspeed < 2.37) {
                        this.windspeed *= 1.05
                    }
                }
                if (chooser == 2) {
                    this.winddirx *= -1
                }
                if (chooser == 3) {
                    this.winddiry *= -1
                }
                if (chooser == 4) {
                    this.winddirx = 0
                }
                if (chooser == 5) {
                    this.winddirx = 1
                }
                if (chooser == 6) {
                    this.winddiry = 0
                }
                if (chooser == 7) {
                    this.winddiry = 1
                }
                if (chooser == 8) {
                    this.winddirx = -1
                }
                if (chooser == 9) {
                    this.winddiry = -1
                }
            }

            canvas_context.fillStyle = "black"
            canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
            canvas_context.lineWidth = 1.5
            canvas_context.font = "18px arial"
            canvas_context.strokeText("Windspeed: " + Math.round(this.windspeed * 2000) + "cm/s", this.window.minibody.x, this.window.minibody.y - 20)
            canvas_context.fillText("Windspeed: " + Math.round(this.windspeed * 2000) + "cm/s", this.window.minibody.x, this.window.minibody.y - 20)
            canvas_context.drawImage(windmeter, 0, 10 * (Math.round(this.windspeed * 10)), windmeter.width, 10, this.window.minibody.x, this.window.minibody.y - 12, 250, 10)

            for (let t = 0; t < this.players[this.turn].blocks.length; t++) {
                for (let k = 0; k < this.players[this.turn].blocks[t].length; k++) {
                    if (this.players[this.turn].blocks[t][k].markdraw == 1) {

                        this.blocks[t][k].draw()

                    }
                }
            }
            for (let t = 0; t < this.players.length; t++) {
                if (this.players[t].isAI == 1) {
                    this.players[t].ai()
                }
            }
            for (let t = 0; t < this.players.length; t++) {
                this.players[t].draw()
            }

            //abstract fog to player teams
            for (let t = 0; t < this.fog.length; t++) {
                for (let k = 0; k < this.fog[t].length; k++) {
                    if (this.players[this.turn].blocks[t][k].markdraw == 1) {
                        this.players[this.turn].fog[t][k].timer--
                        if (this.players[this.turn].fog[t][k].timer <= 0) {
                            this.players[this.turn].fog[t][k].color = "#09090922"
                            this.players[this.turn].fog[t][k].draw()
                        }
                    } else {
                        this.players[this.turn].fog[t][k].draw()
                    }
                }
            }
            this.window.draw()
        }
    }
    class Window {
        constructor() {
            this.body = new Rectangle(0, 0, 900, 720, "transparent")
            this.minibody = new Rectangle(this.body.x + this.body.width + 10, 360, 360, 360, "transparent")
            this.guide = new Circle(0, 0, 1, "transparent")
        }
        draw() {
            control(this.guide, 5)
            if (this.guide.x < 0) {
                this.guide.x = 0
            }
            if (this.guide.y < 0) {
                this.guide.y = 0
            }
            if (this.guide.x > map_canvas.width - (this.body.width * .5)) {
                this.guide.x = map_canvas.width - (this.body.width * .5)
            }
            if (this.guide.y > map_canvas.width - (this.body.height * .5)) {
                this.guide.y = map_canvas.width - (this.body.height * .5)
            }
            selectrect.color = (sandmap.players[sandmap.turn].color + "22")
            selectrect.draw()
            canvas_context.drawImage(map_canvas, this.guide.x, this.guide.y, this.body.width * .5, this.body.height * .5, this.body.x, this.body.y, this.body.width, this.body.height)
            canvas_context.drawImage(map_canvas, 0, 0, map_canvas.width, map_canvas.height, this.minibody.x, this.minibody.y, this.minibody.width, this.minibody.height)
            canvas_context.strokeStyle = "#FFFFFF"
            canvas_context.lineWidth = 1
            canvas_context.strokeRect(this.minibody.x + (this.guide.x * .28125), this.minibody.y + (this.guide.y * .28125), (this.body.width * .5) * .28125, (this.body.height * .5) * .28125)
        }
    }
    class Player {
        constructor(name, color, ai, type) {
            this.attacktimeout = 0
            this.blocks = []
            this.seen = []
            this.fog = []
            this.name = name
            this.selected_tile = {}
            this.color = color
            this.buildings = []
            this.units = []
            this.hotrock = 250
            this.isAI = ai
            this.type = type
            this.chunk = 0
            this.clickrate = 2
            this.aimode = 0
            this.racks = 0
            this.averageSpace = {}
            this.baseMoveFlag = 0
            this.defending = 0
        }
        findBase() {
            this.averageSpace.dirs1 = 0
            this.averageSpace.dirs2 = 0
            this.averageSpace.dirs3 = 0
            this.averageSpace.dirs4 = 0
            for (let t = 0; t < this.faction.buildings.length; t++) {
                if (this.averageSpace.dirs1 == 0) {// right
                    if (this.faction.buildings[t].tile.x >= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.averageSpace.dirs1 += 1
                        }
                    }
                }
                if (this.averageSpace.dirs2 == 0) {// down
                    if (this.faction.buildings[t].tile.y >= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.averageSpace.dirs2 += 1
                        }
                    }
                }
                if (this.averageSpace.dirs3 == 0) { // left
                    if (this.faction.buildings[t].tile.x <= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.averageSpace.dirs3 += 1
                        }
                    }
                }
                if (this.averageSpace.dirs4 == 0) {  // up
                    if (this.faction.buildings[t].tile.y <= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.averageSpace.dirs4 += 1
                        }
                    }
                }
            }

            this.averageSpace.decayingInTheWind = 1 - ((this.averageSpace.dirs1 + this.averageSpace.dirs2 + this.averageSpace.dirs3 + this.averageSpace.dirs4) / 4)
        }
        findBase() {
            if (this.buildings.length > 0) {
                let tindex = 0
                let kindex = 0
                for (let t = 0; t < this.buildings.length; t++) {
                    tindex += (this.buildings[t].tile.t)
                    kindex += (this.buildings[t].tile.k)
                }
                if (this.averageSpace.tile != sandmap.blocks[Math.floor(tindex / this.buildings.length)][Math.floor(kindex / this.buildings.length)]) {
                    this.averageSpace.tile = sandmap.blocks[Math.floor(tindex / this.buildings.length)][Math.floor(kindex / this.buildings.length)]
                    this.baseMoveFlag = 1
                }
            } else {
                this.averageSpace.tile = sandmap.blocks[10][10]
            }
        }
        ai() {
            this.defending--
            if (this.type == 1) {

                if (this.defending >= 32) {
                    this.defending = 0
                    this.defenseforce = 0
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].nymph == 2) {
                            this.defenseforce++
                        }
                        if (this.units[t].nymph == 1) {
                            this.units[t].metamorph1()
                        }
                    }
                    if (this.defenseforce > 0) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 2) {
                                if (Math.random() < 2 / this.defenseforce) {
                                    this.units[t].pathTo(this.attackedAt)
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.units.length; t++) {
                            if (Math.random() < 2 / this.defenseforce) {
                                if (this.units[t].nymph !== 1) {
                                    if (this.units[t].imago == 1 && Math.random() < .9) {
                                        continue
                                    }
                                    this.units[t].pathTo(this.attackedAt)
                                }
                            }
                        }

                    }
                }
                let index = sandmap.hotrocks.length + 1
                this.chunk++
                if (this.aimode == 1) {
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].imago == 1) {
                            this.units[t].makeNymph()
                        }
                    }
                    let j = 0
                    if (Math.random() < this.units.length * .075) {
                        // for (let t = 0; t < this.units.length; t++) {
                        //     if (this.units[t].imago !== 1) {
                        //         //hardcoding this gid helf mi
                        //         if (Math.random() < .3) {
                        //             if (sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units.length > 0) {
                        //                 if (typeof sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units[Math.floor(Math.random() * sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units.length)].tile !== "undefined") {
                        //                     j++
                        //                     this.units[t].pathTo(sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units[Math.floor(Math.random() * sandmap.players[Math.abs(sandmap.players.indexOf(this) - 1)].units.length)].tile)
                        //                     if (j > 6) {
                        //                         break
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        this.aimode = 0
                    }
                } else if (this.aimode == 0) {
                    let j = 0

                    if (this.chunk % this.clickrate == 1) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].realPath.length - 1 == this.units[t].index) { //} || this.units[t].realPath[this.units[t].index].walkable !== true) {
                                if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                    let max = 999999999
                                    for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                        if (sandmap.hotrocks[h].walkable == true && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                            let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                            // ////console.log(link)
                                            if (link < max) {
                                                max = link
                                                index = h
                                            }
                                        }
                                    }

                                    if (typeof sandmap.hotrocks[index] !== "undefined") {
                                        if (this.units[t].attacktarget.health > 0) {

                                        } else {
                                            j++
                                            this.units[t].pathTo(sandmap.hotrocks[index])
                                            if (j > 6) {
                                                break
                                            }
                                        }
                                    } else {
                                        if (Math.random() < (1 / this.units.length)) {
                                            if (this.seen.length > 0) {
                                                let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                this.units[t].pathTo(block)
                                            }
                                        }
                                    }
                                }
                            } else if (typeof this.units[t].realPath[this.units[t].index + 1] !== "undefined") {
                                if (this.units[t].realPath[this.units[t].index + 1].walkable !== true) {
                                    if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                        let max = 999999999
                                        for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                            if (sandmap.hotrocks[h].walkable == true && this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                                let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                                // ////console.log(link)
                                                if (link < max) {
                                                    max = link
                                                    index = h
                                                }
                                            }
                                        }

                                        if (typeof sandmap.hotrocks[index] !== "undefined") {
                                            if (this.units[t].attacktarget.health > 0) {

                                            } else {
                                                j++
                                                this.units[t].pathTo(sandmap.hotrocks[index])
                                                if (j > 6) {
                                                    break
                                                }
                                            }
                                        } else {
                                            if (Math.random() < .03) {
                                                if (this.seen.length > 0) {
                                                    let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                    this.units[t].pathTo(block)
                                                }
                                            } else {
                                                if (this.units[t].nymph == 1) {
                                                    if (Math.random() < .01) {
                                                        let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                        this.units[t].pathTo(block)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (Math.random() < .1) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 1) {
                                this.units[t].attackmove()
                            }
                            if (this.units[t].nymph == 2) {
                                this.units[t].attackmove()
                            }
                        }
                    }

                    if (Math.random() < (.3 / this.units.length)) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].imago == 1) {
                                this.units[t].makeNymph()
                                if (Math.random() < .1) {
                                    break
                                }
                            }
                        }
                    }
                    if (Math.random() < (this.units.length * .001)) {
                        let n = 0
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 1) {
                                n++
                            }
                        }
                        if (n > 2) {
                            for (let t = 0; t < this.units.length; t++) {
                                if (this.units[t].nymph == 1) {
                                    this.units[t].metamorph1()
                                    break
                                }
                            }
                        }
                    }
                    if (Math.random() < (this.units.length * .0009)) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 2) {
                                this.units[t].metamorph2()
                                break
                            }
                        }
                    }

                    if (this.units.length > 25) {
                        if (this.attacktimeout <= 0) {
                            this.aimode = 1
                            this.attacktimeout = 3000
                        }
                        this.attacktimeout--
                    }
                }



            } else { // human below, itzler above

                if (this.defending >= 32) {
                    this.defending = 0
                    this.defenseforce = 0
                    for (let t = 0; t < this.units.length; t++) {
                        if (this.units[t].infantry == 1) {
                            this.defenseforce++
                        }
                    }
                    for (let t = 0; t < this.buildings.length; t++) {
                        if (this.buildings[t].barracks == 1) {
                            if(this.hotrock > 40){
                                this.buildings[t].makeInfantry()
                            }
                        }
                    }
                    if (this.defenseforce > 0) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].infantry == 1) {
                                if (Math.random() < 2 / this.defenseforce) {
                                    this.units[t].pathTo(this.attackedAt)
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.units.length; t++) {
                            if (Math.random() < 2 / this.defenseforce) {
                                if (this.units[t].harvester == 1 && Math.random() < .9) {
                                    continue
                                }
                                this.units[t].pathTo(this.attackedAt)
                            }
                        }

                    }
                }

                if (Math.random() < .0001) {
                    this.racks = 0
                }
                let index = 0
                this.chunk++
                if (this.aimode == 1) {
                    let j = 0
                    if (Math.random() < this.units.length * .075) {
                        // for (let t = 0; t < this.units.length; t++) {
                        //     if (this.units[t].imago !== 1) {
                        //         //hardcoding this gid helf mi
                        //         if (Math.random() < .3) {
                        //             if (sandmap.players[0].units.length > 0) {
                        //                 if (typeof sandmap.players[0].units[Math.floor(Math.random() * sandmap.players[0].units.length)].tile !== "undefined") {
                        //                     j++
                        //                     this.units[t].pathTo(sandmap.players[0].units[Math.floor(Math.random() * sandmap.players[0].units.length)].tile)
                        //                     if (j > 6) {
                        //                         break
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        this.aimode = 0
                    }
                } else if (this.aimode == 0) {
                    let j = 0

                    if (this.chunk % this.clickrate == 1) {

                        this.findBase() // to make an averagespace
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].realPath.length - 1 == this.units[t].index) { //} || this.units[t].realPath[this.units[t].index].walkable !== true) {

                                if (this.units[t].health < (this.units[t].maxhealth * .33)) {
                                    j++
                                    let block = this.averageSpace.tile
                                    this.units[t].pathTo(block)
                                    if (j > 6) {
                                        break
                                    }
                                } else {
                                    if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                        let max = 999999999
                                        for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                            if (this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                                if (sandmap.hotrocks[h].walkable == true) {
                                                    let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                                    // ////console.log(link)
                                                    if (link < max) {
                                                        max = link
                                                        index = h
                                                    }
                                                }
                                            }
                                        }

                                        if (typeof sandmap.hotrocks[index] !== "undefined" && max < 999999999) {
                                            if (this.units[t].attacktarget.health > 0) {

                                            } else {
                                                j++
                                                this.units[t].pathTo(sandmap.hotrocks[index])
                                                if (j > 6) {
                                                    break
                                                }
                                            }
                                        } else {
                                            if (this.units[t].drone == 1 && Math.random() < (.05 / this.units.length)) {
                                                if (this.units[t].health > (this.units[t].maxhealth * .33)) {
                                                    let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                                    this.units[t].pathTo(block)
                                                } else {
                                                    j++
                                                    let block = this.averageSpace.tile
                                                    this.units[t].pathTo(block)
                                                    if (j > 6) {
                                                        break
                                                    }
                                                }
                                            } else if (Math.random() < (1 / this.units.length)) {
                                                if (this.units[t].health > (this.units[t].maxhealth * .33)) {
                                                    if (this.seen.length > 0) {
                                                        j++
                                                        let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                        this.units[t].pathTo(block)
                                                        if (j > 6) {
                                                            break
                                                        }
                                                    }
                                                } else {
                                                    j++
                                                    let block = this.averageSpace.tile
                                                    this.units[t].pathTo(block)
                                                    if (j > 6) {
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (typeof this.units[t].realPath[this.units[t].index + 1] !== "undefined") {
                                if (this.units[t].health < (this.units[t].maxhealth * .33)) {
                                    j++
                                    let block = this.averageSpace.tile
                                    this.units[t].pathTo(block)
                                    if (j > 6) {
                                        break
                                    }
                                } else {
                                    if (this.units[t].realPath[this.units[t].index + 1].walkable !== true) {
                                        if (this.units[t].tile.hotrock != 1 && this.units[t].tile.hotrock != 2) {
                                            let max = 999999999
                                            for (let h = 0; h < sandmap.hotrocks.length; h++) {
                                                if (this.blocks[sandmap.hotrocks[h].t][sandmap.hotrocks[h].k].markdraw == 1) {
                                                    if (sandmap.hotrocks[h].walkable == true) {
                                                        let link = (new LineOP(this.units[t].tile, sandmap.hotrocks[h])).hypotenuse()
                                                        // ////console.log(link)
                                                        if (link < max) {
                                                            max = link
                                                            index = h
                                                        }
                                                    }
                                                }
                                            }

                                            if (typeof sandmap.hotrocks[index] !== "undefined" && max < 999999999) {
                                                if (this.units[t].attacktarget.health > 0) {

                                                } else {
                                                    j++
                                                    this.units[t].pathTo(sandmap.hotrocks[index])
                                                    if (j > 6) {
                                                        break
                                                    }
                                                }
                                            } else {
                                                if (Math.random() < (1 / this.units.length)) {
                                                    if (this.seen.length > 0) {
                                                        j++
                                                        let block = this.seen[Math.floor(Math.random() * this.seen.length)]
                                                        this.units[t].pathTo(block)
                                                        if (j > 6) {
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (Math.random() < .01) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].infantry == 1) {
                                this.units[t].attackmove()
                            }
                            if (this.units[t].drone == 1) {
                                if (Math.random() < .03) {
                                    // let block = sandmap.gridPoints[Math.floor(Math.random()*sandmap.gridPoints.length)]
                                    // this.units[t].pathTo(block)
                                    let block = sandmap.gridPoints[Math.floor(Math.random() * sandmap.gridPoints.length)]
                                    this.units[t].pathTo(block)
                                }
                            }
                        }
                    }

                    if (Math.random() < (.3 / this.units.length)) {
                        for (let t = 0; t < this.buildings.length; t++) {
                            if (this.buildings[t].barracks == 1) {
                                if (Math.random() < .1 - (this.units.length * .008)) {
                                    if (this.hotrock > 70) {
                                        this.buildings[t].makeScout()
                                    }
                                }
                                if (Math.random() < .1 - (this.units.length * .005)) {
                                    if (this.hotrock > 140) {
                                        this.buildings[t].makeInfantry()
                                    }
                                }
                                if (Math.random() < .1 - (this.units.length * .005)) {
                                    if (this.hotrock > 240) {
                                        this.buildings[t].makeHarvester()
                                    }
                                }
                                if (Math.random() < .3) {
                                    break
                                }
                            }
                        }
                    } else {
                        for (let t = 0; t < this.buildings.length; t++) {
                            if (this.buildings[t].barracks == 1) {
                                if (Math.random() < .005) {
                                    if (this.hotrock > 200) {
                                        this.buildings[t].makeInfantry()
                                    }
                                }
                            }
                        }
                    }



                    if (this.baseMoveFlag == 1) {
                        this.baseMoveFlag = 0
                        if (this.averageSpace.dirs2 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.k; x < 126; x++) {
                                if (x < 0 || x > 126) {
                                    continue
                                }
                                if (this.blocks[this.averageSpace.tile.t][x + 1].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                } else if (x == 127) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                        if (this.averageSpace.dirs4 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.k; x > 1; x--) {
                                if (x < 0 || x > 126) {
                                    continue
                                }
                                if (this.blocks[this.averageSpace.tile.t][x - 1].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                } else if (x == 2) {
                                    this.buildWall(sandmap.blocks[this.averageSpace.tile.t][x])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                        if (this.averageSpace.dirs3 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.t; x > 1; x--) {
                                if (x < 0 || x > 126) {
                                    continue
                                }
                                if (this.blocks[x - 1][this.averageSpace.tile.k].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                } else if (x == 2) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                        if (this.averageSpace.dirs1 == 1) {
                        } else {
                            for (let x = this.averageSpace.tile.t; x < 126; x++) {
                                if (x < 0 || x > 126) {
                                    continue
                                }
                                if (this.blocks[x + 1][this.averageSpace.tile.k].markdraw != 1) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                } else if (x == 127) {
                                    this.buildWall(sandmap.blocks[x][this.averageSpace.tile.k])
                                }
                                if (debreak == 0) {
                                    break
                                }
                            }
                        }
                    }




                    if ((Math.random() * .13) && this.hotrock >= 10) {

                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].tile.sourcerock >= 1 || ((Math.random() * .03) && this.units[t].index < this.units[t].realPath.length - 1)) {

                            } else {
                                continue
                            }


                            let calcdeath = this.units[t].health / (((this.units[t].decayRate * this.units[t].decayingInTheWind * sandmap.windspeed)))

                            if (Math.abs(this.units[t].realPath.length - this.units[t].index) < 3 || Math.abs(this.units[t].realPath.length - this.units[t].index) > (calcdeath - (this.units[t].movespeed * 10))) {

                                // //console.log(this.units[t])

                            } else {
                                continue
                            }


                            if ((this.units[t].decayingInTheWind == 1 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind == 1 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .002)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }


                            } else if ((this.units[t].decayingInTheWind > .51 && this.units[t].decayingInTheWind < .8 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind > .51 && this.units[t].decayingInTheWind < .8 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .004)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else if ((this.units[t].decayingInTheWind > .27 && this.units[t].decayingInTheWind < .55 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind > .27 && this.units[t].decayingInTheWind < .55 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .006)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else if ((this.units[t].decayingInTheWind >= .01 && this.units[t].decayingInTheWind < .3 && this.units[t].drone != 1) || (this.units[t].decayingInTheWind > .01 && this.units[t].decayingInTheWind < .3 && this.units[t].drone == 1 && (Math.random() < (this.hotrock * .008)))) {
                                if (this.units[t].dirs2 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x + 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs4 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.k; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[this.units[t].tile.t][x - 1].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[this.units[t].tile.t][x])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs3 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x > 1; x--) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x - 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 2) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }
                                if (this.units[t].dirs1 == 1) {
                                } else {
                                    if (this.units[t].health < (this.units[t].maxhealth * .9)) {
                                        for (let x = this.units[t].tile.t; x < 126; x++) {
                                            if (x < 0 || x > 126) {
                                                continue
                                            }
                                            if (this.blocks[x + 1][this.units[t].tile.k].markdraw != 1) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            } else if (x == 127) {
                                                this.buildWall(sandmap.blocks[x][this.units[t].tile.k])
                                            }
                                            if (debreak == 0) {
                                                break
                                            }
                                        }
                                    }
                                }

                            } else {


                            }
                        }

                    }

                    if (Math.random() < (this.units.length * .0009)) {
                        for (let t = 0; t < this.units.length; t++) {
                            if (this.units[t].nymph == 2) {
                                this.units[t].metamorph2()
                                break
                            }
                        }
                    }

                    if (this.units.length > 25) {
                        if (this.attacktimeout <= 0) {
                            this.aimode = 1
                            this.attacktimeout = 3000
                        }
                        this.attacktimeout--
                    }
                }



            }
        }
        buildWall(tile) {
            if (this.type == 1) {
                return
            }
            if (this.racks == 0 && this.isAI == 1) {
                this.buildBarracks(tile)
                this.racks = 1
            } else {
                let wet = 0
                for (let t = 0; t < this.buildings.length; t++) {
                    if (tile == this.buildings[t].tile || this.blocks[tile.t][tile.k].markdraw != 1) {
                        wet = 1
                        debreak = 1
                        // //console.log(tile)
                    }
                }
                if (wet == 0) {
                    if (this.hotrock >= 10) {
                        this.hotrock -= 10
                        let building = new Building(tile, this, 0)
                        building.defense = 3
                        building.damage = 0
                    }
                }
            }

        }
        buildBarracks(tile) {

            if (this.type == 1) {
                return
            }
            if (this.hotrock >= 70) {
                this.hotrock -= 70
                let building = new Building(tile, this, 0)
                building.barracks = 1
                building.name = "Barracks"
                building.health = 500
                building.maxhealth = building.health
                building.defense = 6
                building.damage = 0
            }
        }
        draw() {
            for (let t = 0; t < this.buildings.length; t++) {
                this.buildings[t].clean()
            }
            for (let t = 0; t < this.buildings.length; t++) {
                this.buildings[t].draw()
            }
            for (let t = 0; t < this.units.length; t++) {
                this.units[t].move()
            }
            for (let t = 0; t < this.units.length; t++) {
                this.units[t].draw()
            }
            for (let t = 0; t < this.units.length; t++) {
                if (this.units[t].marked == 1) {
                    this.units[t].tile.walkable = true

                    if (sandmap.players.indexOf(this) == sandmap.turn) {
                        if (Math.random() < soundspamdrop) {
                            soundCancel()
                            if (this.units[t].drone == 1) {
                                if (Math.random() < .5) {
                                    signallost.play()
                                } else {
                                    error.play()
                                }
                            }
                            if (this.units[t].infantry == 1) {
                                if (Math.random() < .5) {
                                    tellmywife.play()
                                } else {
                                    deathrattle.play()
                                }
                            }
                            if (this.units[t].harvester == 1) {
                                if (Math.random() < .5) {
                                    feelcold.play()
                                } else {
                                    redlight.play()
                                }
                            }
                            if (this.units[t].imago == 1) {
                                if (Math.random() < .5) {
                                    boh.play()
                                } else {
                                    die.play()
                                }
                            }
                        }
                    }
                    this.units.splice(t, 1)
                }
            }
            for (let t = 0; t < this.units.length; t++) {
                this.units[t].see()
            }
            if (sandmap.players.indexOf(this) == sandmap.turn) {
                canvas_context.fillStyle = "black"
                canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
                canvas_context.lineWidth = 1.5
                canvas_context.font = "18px arial"
                canvas_context.strokeText("Hotrock: " + Math.round(this.hotrock), sandmap.window.body.x + sandmap.window.body.width + 10, 315)
                canvas_context.fillText("Hotrock: " + Math.round(this.hotrock), sandmap.window.body.x + sandmap.window.body.width + 10, 315)
                canvas_context.strokeText("Units: " + Math.round(this.units.length), sandmap.window.body.x + sandmap.window.body.width + 10, 290)
                canvas_context.fillText("Units: " + Math.round(this.units.length), sandmap.window.body.x + sandmap.window.body.width + 10, 290)
            }
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
            let roundedx = (Math.round((startNode.x))) * .1
            let roundedy = (Math.round((startNode.y))) * .1
            //////////////////console.log(gridPointsByPos, roundedx, roundedy)
            //////////////////////console.log(gridPointsByPos[roundedx] [roundedy])
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
            ////////console.log(this.endNode)
            var endNode = this.endNode //sandmap.gridPoints[this.endNode.id]; //the target node
            var startNode = this.startNode

            var tempArray;

            var newMovementCost; //the new movement cost to neighbor

            openSet.add(currentNode);
            //   ////////////////console.log(currentNode)
            // currentNode.color = "black"
            // //////////////////////console.log('begin');

            let j = 0
            let timeout = 0
            while (openSet.size > 0) {
                j++
                if (j > 50000) {
                    timeout = 1
                }
                tempArray = Array.from(openSet);
                ////////////////console.log(tempArray)
                currentNode = tempArray[0];

                for (var i = 1; i < tempArray.length; i++) {
                    //this if statement is solely to build the starting walls.
                    if (tempArray[i].getValueF() < currentNode.getValueF() || tempArray[i].getValueF() == currentNode.getValueF() && tempArray[i].getValueH() < currentNode.getValueH()) {
                        currentNode = tempArray[i]; //sets the currentNode to openSetI if it has a lower F value, or an = F value with a lower HCost.
                        if (currentNode.walkable == false) {
                            j += 100
                        }
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

                ////////////////console.log(currentNode, endNode)
                // currentNode.color = "black"
                ////////console.log(currentNode, endNode)
                if (currentNode.id == endNode.id) {
                    //////console.log(startNode, endNode)
                    retracePath(startNode, endNode, this.agent);
                    //hit the last point, exit's the loop.

                    return; //exits loop
                } else if (timeout == 1) {

                    //////console.log(startNode, endNode)
                    retracePath(startNode, currentNode, this.agent);
                    //hit the last point, exit's the loop.

                    return; //exits loop
                }
                getNeighbors(currentNode).forEach(function (neighbor) {

                    var neighborNode = neighbor;
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
        return (1.4 * distX + ((distY - distX)));
    }

    function retracePath(startNode, endNode, agent = {}) {
        path = new Set();
        var currentNode = endNode;
        var reverseArray;
        while (currentNode != startNode) {
            path.add(currentNode);
            //////console.log(currentNode)
            currentNode = currentNode.parent;
            //////console.log(currentNode)
            // currentNode.inPath = true;
            // if (currentNode != startNode)
            //     currentNode.drawPath();
        }

        reverseArray = Array.from(path);

        reverseArray.reverse();
        path = new Set(reverseArray);

        //   //////////////////////console.log(path)

        realPath = Array.from(path)
        //   //////////////////////console.log(realPath)

        if (realPath.length == 1) {
            // realPath[0].walkable = false
            ////////////////////console.log("hit")
            // wallSet.add(realPath[0])
            ////////////////////console.log(wallSet)
        }

        ////////////////console.log(realPath)
        if (realPath.length > 0) {
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
            //////////////////////console.log(startPoint)
            // bottle.crew[bottle.selectedcrew].moving = 1
        } else {
            //   //////////////////console.log(endPoint)

            //     if(bottle.crew[bottle.selectedcrew].moving == 1){
            //         // //////////////////console.log(endPoint)
            //     // bottle.crew[bottle.selectedcrew].body.x =endPoint.x+96
            //     // bottle.crew[bottle.selectedcrew].body.y  = endPoint.y+284
            //     // bottle.crew[bottle.selectedcrew].moving = 0
            //     // //////////////////console.log(endPoint)
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

                if (checkX >= 0 && checkX <= sandmap.blocks.length && checkY >= 0 && checkY <= sandmap.blocks.length) { //127 mapsize

                    if (x == 0 || y == 0 || Math.random() < .25) {  // randomness leads to organic
                        ////////console.log(sandmap)
                        if (checkX < sandmap.blocks.length) {
                            if (checkY < sandmap.blocks[0].length) {
                                if (sandmap.blocks[checkX][checkY].walkable !== false) {
                                    tempList.push(sandmap.blocks[checkX][checkY]);
                                }

                            }
                        }
                    }
                }
            }
        }


        neighborList = tempList;
        ////////////////console.log(neighborList)
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
        constructor(tile, faction, size) {
            if (tile.id % 128 < 0) {
                tile = sandmap.gridPoints[tile.id + 1]
            }
            if (tile.id < 128) {
                tile = sandmap.gridPoints[tile.id + 128]
            }
            this.tile = tile
            this.tile.builtOn == 1
            this.timer = -1

            this.faction = faction
            this.tiles = []
            for (let t = -size; t <= size; t++) {
                for (let k = -size; k <= size; k++) {
                    this.tiles.push(sandmap.blocks[tile.t + t][tile.k + k])
                }
            }
            this.selected = 0
            this.health = 100
            this.maxhealth = this.health
            this.name = "Wall"
            // this.cost = 10
            // this.faction.hotrock -= this.cost
            this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            this.faction.buildings.push(this)
        }
        makeScout() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 30 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 30
                    this.que = 1
                    this.drone = 1
                    this.timer = 25
                    this.maxtimer = this.timer
                }
            }
        }
        finishScout() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    online.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isScout()
        }
        makeInfantry() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 90 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 90
                    this.que = 1
                    this.infantry = 1
                    this.timer = 70
                    this.maxtimer = this.timer
                }
            }
        }
        finishInfantry() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    reporting.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isInfantry()
        }
        makeHarvester() {

            if (this.que != 1) {
                if (this.faction.hotrock >= 160 && this.faction.units.length < 51) {
                    this.faction.hotrock -= 160
                    this.que = 1
                    this.harvester = 1
                    this.timer = 140
                    this.maxtimer = this.timer
                }
            }
        }
        finishHarvester() {
            if (Math.random() < soundspamdrop) {
                if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                    soundCancel()
                    systems.play()
                }
            }
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isHarvester()
        }

        dataOutput() {
            if (dataflop == 0) {
                dataflop = 1
                canvas_context.fillStyle = this.faction.color
                canvas_context.font = "18px arial"

                canvas_context.fillStyle = "black"
                canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
                canvas_context.lineWidth = 1.5
                canvas_context.font = "18px arial"
                canvas_context.strokeText(this.name + " " + Math.ceil(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)
                canvas_context.fillText(this.name + " " + Math.ceil(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)

                canvas_context.strokeText("Attack " + Math.ceil(this.damage) , sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.fillText("Attack " + Math.ceil(this.damage) , sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.strokeText("Defense " + Math.ceil(this.defense) , sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                canvas_context.fillText("Defense " + Math.ceil(this.defense) , sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                if (this.barracks == 1) {
                    canvas_context.strokeText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText("Units", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(drone, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    this.spawnmedium = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 110, 125, 90, 50, "black")
                    this.spawnmedium.draw()
                    canvas_context.drawImage(infantry, 0, 0, 10, 10, this.spawnmedium.x + 10, this.spawnmedium.y + 5, 30, 30)
                    this.spawnbig = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 210, 125, 90, 50, "black")
                    this.spawnbig.draw()
                    canvas_context.drawImage(harvester, 0, 0, 10, 10, this.spawnbig.x + 10, this.spawnbig.y + 5, 30, 30)
                    

                    canvas_context.fillStyle = "white"
                    canvas_context.font = "13px arial"
                    canvas_context.fillText("Drone: 30", this.spawnsmall.x + 1, this.spawnsmall.y + 46)
                    canvas_context.fillText("Infantry: 90", this.spawnmedium.x + 1, this.spawnmedium.y + 46)
                    canvas_context.fillText("Harvester: 160", this.spawnbig.x + 1, this.spawnbig.y + 46)
                    // canvas_context.fillText("Drone: 30")
                    // canvas_context.fillText("Drone: 30")
                    if (this.timer > 0) {
                        canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
                    }
                }
            }
        }
        draw() {
            if (this.barracks == 1) {
                this.timer--
                if (this.timer == 0) {
                    if (this.drone == 1) {
                        this.que = 0
                        this.drone = 0
                        this.finishScout()
                    }
                    if (this.infantry == 1) {
                        this.infantry = 0
                        this.que = 0
                        this.finishInfantry()
                    }
                    if (this.harvester == 1) {
                        this.harvester = 0
                        this.que = 0
                        this.finishHarvester()
                    }
                }
            }
            for (let t = 0; t < this.tiles.length; t++) {
                this.tiles[t].walkable = false
                this.tiles[t].color = this.faction.color  // this.faction.color
                if (this.barracks != 1) {
                    map_context.drawImage(icewall, this.tiles[t].x, this.tiles[t].y)
                } else {
                    map_context.drawImage(barracks, this.tiles[t].x, this.tiles[t].y)
                }
                if (this.selected == 1) {
                    this.tiles[t].wallcolor = "black"
                } else {
                    // this.tiles[t].wallcolor = this.faction.color
                    this.tiles[t].wallcolor = "transparent"
                }
            }
            if (this.selected == 1) {
                if (sandmap.turn == sandmap.players.indexOf(this.faction)) {
                    this.dataOutput()
                }
            } else {
                this.spawnsmall = new UiRectangle(0, 0, 0, 0, "red")
                this.spawnmedium = new UiRectangle(0, 0, 0, 0, "red")
                this.spawnbig = new UiRectangle(0, 0, 0, 0, "red")
            }

        }
        clean() {
            if (this.health <= 0) {
                this.tile.walkable = 1
                this.tile.color = "#AACCFF"
                delete this.tile.wallcolor
                if (this.barracks == 1) {
                    this.faction.racks = 0
                }

                this.tile.builtOn == 0
                this.faction.buildings.splice(this.faction.buildings.indexOf(this), 1)
            }
        }
    }
    class Agent {
        constructor(tile, player) {
            this.swing = 0
            this.swingout = 3
            this.stepout = 1
            this.selected = 0
            this.faction = player
            this.tile = tile
            this.movespeedcount = 0
            this.movespeed = Math.floor(Math.random() * 3) + 2
            this.pather = new PathFindingAlg(sandmap.blocks, this.tile, this.tile, this)
            this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            this.faction.units.push(this)
            this.index = 0
            this.realPath = [this.tile]
            this.repath = 0
            this.sight = 1 + this.movespeed
            this.damage = this.body.radius
            this.firerate = (this.movespeed * 5)
            this.attackrange = this.sight - 1
            this.decayRate = (this.sight * this.movespeed) * .05
            this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attacktargetmove = {}
            this.attacktargetmove.health = 0
            this.attackcounter = 0
            this.projectilespeed = 7 // 9
            this.name = "agent"
            if (this.faction.type == 1) {
                this.isNymph()
            } else {
                if (start == 0) {
                    if (this.faction.units.length == 1) {
                        this.isScout()
                    }
                    if (this.faction.units.length == 2) {
                        this.isInfantry()
                    }
                    if (this.faction.units.length == 3) {
                        this.isHarvester()
                    }
                }
            }
        }
        isNymph() {
            this.body.color = "teal"
            this.body.radius = 4
            this.movespeed = 1
            this.firerate = 3
            this.decayRate = 0
            this.damage = (this.body.radius * 2.5)+1
            this.name = "Nymph"
            this.nymph = 1
            this.defense = 0
            this.sight = 2 + this.movespeed
            // this.firerate = (this.movespeed * 5)
            this.attackrange = this.sight - 1
            // this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.health = 70
            this.maxhealth = this.health
        }
        isScout() {
            this.drone = 1
            this.movespeed = 2
            this.body.color = "red"
            this.body.radius = 4
            this.defense = 1
            this.damage = this.body.radius
            this.name = "Scout Drone"
            this.sight = 3 + this.movespeed
            this.damage = this.body.radius
            this.firerate = 4  // 9//(this.movespeed * 5)
            this.attackrange = this.sight - 1
            this.health = (this.sight - 2) * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = ((this.sight - 2) * this.movespeed) * .015
            this.health = 100
            this.maxhealth = this.health
        }
        isInfantry() {
            this.infantry = 1
            this.movespeed = 3 //4
            this.body.color = "magenta"
            this.body.radius = 4.8
            this.defense = 4
            this.damage = this.body.radius
            this.name = "Infantry"
            this.sight = 1 + this.movespeed
            this.damage = (this.body.radius * 2)
            this.firerate = 5 //12 //(this.movespeed * 5)
            this.attackrange = this.sight
            this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = (this.sight * this.movespeed) * .02
            this.health = 350
            this.maxhealth = this.health
        }
        isHarvester() {
            this.harvester = 1
            this.movespeed = 5 //5 // 4
            this.body.color = "gray"
            this.body.radius = 5.5
            this.defense = 10
            this.name = "Harvesting Vehicle"
            this.sight = 1 + this.movespeed
            this.damage = (this.body.radius * 5.4)
            this.firerate = 25 //(this.movespeed * 5)
            this.attackrange = this.sight - 1
            this.health = this.sight * 100
            this.maxhealth = this.health
            this.shots = []
            this.attacktarget = {}
            this.attacktarget.health = 0
            this.attackcounter = 0
            this.decayRate = (this.sight * this.movespeed) * .025
            this.health = 700
            this.maxhealth = this.health
        }
        spawnNymph() {
            let agent1 = new Agent(this.tile, this.faction)
            agent1.isNymph()
            // agent1.body.color = "teal"
            // agent1.body.radius = 4
            // agent1.movespeed = 1
            // agent1.firerate = 3
            // agent1.decayRate = 0
            // agent1.damage = (agent1.body.radius * .5)
            // agent1.name = "Nymph"
            // agent1.nymph = 1
            // agent1.health = 70
            // agent1.maxhealth = agent1.health
            for (let t = -2; t <= 2; t++) {
                for (let k = -2; k <= 2; k++) {
                    if (this.tile.t + t >= 0) {
                        if (this.tile.k + k >= 0) {
                            if (this.tile.t + t < 128) {
                                if (this.tile.k + k < 128) {
                                    if (sandmap.blocks[this.tile.t + t][this.tile.k + k].walkable == true) {
                                        agent1.pathTo(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        makeNymph() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 120 && this.faction.units.length < 51) {
                    if (this.imago == 1) {
                        this.faction.hotrock -= 120
                        this.spawn = 1
                        this.que = 1
                        this.timer = 55
                        this.maxtimer = this.timer
                        if (Math.random() < soundspamdrop * 3) {
                            if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                                soundCancel()
                                youneedmyassagain.play()
                            }
                        }
                    }
                }
            }
        }
        finishMorph1() {
            this.body.color = "blue"
            this.body.radius = 4.8
            this.movespeed = 3
            this.sight = 1 + this.movespeed
            this.firerate = 5
            this.decayRate = 0
            this.damage = (this.body.radius * 3) + 1
            this.name = "Scurrier"
            this.nymph = 2
            this.health = 400
            this.defense = 3
            this.maxhealth = this.health
            this.attackrange = this.sight - 1
        }
        finishMorph2() {
            this.body.color = "white"
            this.body.radius = 6.5
            this.movespeed = 8
            this.sight = 1 + this.movespeed
            this.firerate = 9
            this.decayRate = 0
            this.defense = 8
            this.damage = (this.body.radius * 4) + 1.5
            this.name = "Imago"
            this.imago = 1
            this.nymph = 0
            this.health = 2100
            this.maxhealth = this.health
            this.attackrange = this.sight - 1
        }
        metamorph1() {
            //console.log(this.que, 1)
            if (this.que != 1) {
                //console.log(this.hotrock, 2)
                if (this.faction.hotrock >= 200) {
                    //console.log(this.nymph, 3)
                    if (this.nymph == 1) {
                        this.faction.hotrock -= 200
                        this.morphing = 1
                        this.que = 1
                        this.timer = 100
                        this.maxtimer = this.timer
                    }
                }
            }
            //console.log(this.timer, 4)
        }
        metamorph2() {
            if (this.que != 1) {
                if (this.faction.hotrock >= 300) {
                    if (this.nymph == 2) {
                        this.faction.hotrock -= 300
                        this.morphingagain = 1
                        this.que = 1
                        this.timer = 200
                        this.maxtimer = this.timer
                    }
                }
            }
        }
        dataOutput() {
            if (dataflop == 0) {
                dataflop = 1
                canvas_context.fillStyle = this.faction.color
                // canvas_context.font = "18px arial"

                canvas_context.fillStyle = "black"
                canvas_context.strokeStyle = sandmap.players[sandmap.turn].color
                canvas_context.lineWidth = 1.5
                canvas_context.font = "18px arial"
                canvas_context.strokeText(this.name + " " + Math.round(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)
                if (this.faction.type == 0) {
                    canvas_context.strokeText(((1 - this.decayingInTheWind) * 100) + "% Cover", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                    canvas_context.fillText(((1 - this.decayingInTheWind) * 100) + "% Cover", sandmap.window.body.x + sandmap.window.body.width + 10, 55)
                }
                canvas_context.fillText(this.name + " " + Math.round(this.health) + "/" + this.maxhealth, sandmap.window.body.x + sandmap.window.body.width + 10, 25)


                canvas_context.strokeText("Attack " + Math.ceil(this.damage*3) , sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.fillText("Attack " + Math.ceil(this.damage*3) , sandmap.window.body.x + sandmap.window.body.width + 10, 85)
                canvas_context.strokeText("Defense " + Math.ceil(this.defense) , sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                canvas_context.fillText("Defense " + Math.ceil(this.defense) , sandmap.window.body.x + sandmap.window.body.width + 10, 115)
                if (this.imago == 1) {
                    this.spawnsmall = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                    this.spawnsmall.draw()
                    canvas_context.drawImage(nymph, 0, 0, 10, 10, this.spawnsmall.x + 10, this.spawnsmall.y + 5, 30, 30)
                    canvas_context.fillStyle = "white"
                    canvas_context.font = "13px arial"
                    canvas_context.fillText("Nymph: 120", this.spawnsmall.x + 1, this.spawnsmall.y + 46)

                }
                if (this.nymph == 1 || this.nymph == 2) {
                    if (this.nymph == 1) {
                        this.morph = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                        this.morph.draw()
                        canvas_context.drawImage(scuttler, 0, 0, 10, 10, this.morph.x + 10, this.morph.y + 5, 30, 30)
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "13px arial"
                        canvas_context.fillText("Scurrier: 200", this.morph.x + 1, this.morph.y + 46)
                        // this.morph = {}
                        // this.morph.isPointInside = empty
                    } else {
                        // this.morph = {}
                        // this.morph.isPointInside = empty
                        this.morph2 = new UiRectangle(sandmap.window.body.x + sandmap.window.body.width + 10, 125, 90, 50, "black")
                        this.morph2.draw()
                        canvas_context.drawImage(imago, 0, 0, 10, 10, this.morph2.x + 10, this.morph2.y + 5, 30, 30)
                        canvas_context.fillStyle = "white"
                        canvas_context.font = "13px arial"
                        canvas_context.fillText("Imago: 300", this.morph2.x + 1, this.morph2.y + 46)
                    }
                }

            }

            if (this.timer > 0) {
                canvas_context.drawImage(progress, 0, (250 - (Math.round((this.timer / this.maxtimer) * 250))), progress.width, 10, sandmap.window.minibody.x, 185, 250, 10)
            }
        }

        attack() {
            if (this.attacktarget.health <= 0 || (Math.abs((this.attacktarget.tile.y - this.tile.y)) + Math.abs((this.attacktarget.tile.x - this.tile.x))) > (this.attackrange * 21)) {
                for (let t = -this.attackrange; t <= this.attackrange; t++) {
                    for (let k = -this.attackrange; k <= this.attackrange; k++) {
                        if (this.tile.t + t >= 0) {
                            if (this.tile.k + k >= 0) {
                                if (this.tile.t + t < 128) {
                                    if (this.tile.k + k < 128) {
                                        if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                            if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {

                                                        if (sandmap.players.indexOf(this.faction) == sandmap.turn) {
                                                            if (this.nymph == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .5) {
                                                                        itstheedgeofusfight.play()
                                                                    } else {
                                                                        seethemseetheme.play()
                                                                    }
                                                                }
                                                            }
                                                            if (this.imago == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .5) {
                                                                        ahhbarber.play()
                                                                    } else[
                                                                        slamdownmustard.play()
                                                                    ]
                                                                }
                                                            }
                                                            if (this.drone == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    combatinit.play()
                                                                }
                                                            }
                                                            if (this.infantry == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    lightemup.play()
                                                                }
                                                            }
                                                            if (this.harvester == 1) {
                                                                if (Math.random() < soundspamdrop) {
                                                                    soundCancel()
                                                                    if (Math.random() < .3) {
                                                                        myfuneral.play()
                                                                    } else {
                                                                        hopeyouknow.play()
                                                                    }
                                                                }
                                                            }
                                                        }

                                                        this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]
                                                        if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                            sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].pathTo(this.tile)
                                                            sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                            if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                            } else {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                            }



                                                        }
                                                        break
                                                    }
                                                }
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {
                                                        this.attacktarget = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g]
                                                        this.attacktarget.isABuilding = 1

                                                        if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].isAI == 1) {
                                                            sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].attackedAt = this.tile

                                                            if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending < 0) {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending = 1
                                                            } else {
                                                                sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].defending += sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length
                                                            }

                                                        }
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (Math.abs(this.attacktarget.tile.x - this.tile.x) + Math.abs((this.attacktarget.tile.y - this.tile.y)) > (this.attackrange * 21)) {
                    this.attacktarget = {}
                    this.attacktarget.health = 0
                    return
                }
                this.attackcounter++
                if (this.attackcounter % this.firerate == 0) {
                    let shot = new UnitCircle(this.body.x, this.body.y, 2, this.faction.color)
                    shot.attacktarget = {}
                    shot.attacktarget.body = new UnitCircle(this.attacktarget.body.x, this.attacktarget.body.y, 1, "transparent")
                    shot.projectilespeed = this.projectilespeed
                    shot.refhealth = this.attacktarget
                    shot.attacktarget.defense = this.attacktarget.defense
                    shot.stage = 0
                    this.shots.push(shot)
                }
            }
        }
        attackmove() {
            if (this.attacktargetmove.health <= 0 || (Math.abs((this.attacktargetmove.tile.y - this.tile.y)) + Math.abs((this.attacktargetmove.tile.x - this.tile.x))) > (this.sight * 21)) {
                for (let t = -this.sight; t <= this.sight; t++) {
                    for (let k = -this.sight; k <= this.sight; k++) {
                        if (this.tile.t + t >= 0) {
                            if (this.tile.k + k >= 0) {
                                if (this.tile.t + t < 128) {
                                    if (this.tile.k + k < 128) {
                                        if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                            if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {
                                                        this.attacktargetmove = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].units[g]
                                                        this.pathTo(this.attacktargetmove.tile)
                                                        break
                                                    }
                                                }
                                                for (let g = 0; g < sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings.length; g++) {
                                                    if (sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g].tile == sandmap.blocks[this.tile.t + t][this.tile.k + k]) {
                                                        this.attacktargetmove = sandmap.players[Math.abs(sandmap.players.indexOf(this.faction) - 1)].buildings[g]
                                                        this.pathTo(this.attacktargetmove.tile)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (Math.abs(this.attacktargetmove.tile.x - this.tile.x) + Math.abs((this.attacktargetmove.tile.y - this.tile.y)) > (this.sight * 21)) {
                    this.attacktargetmove = {}
                    this.attacktargetmove.health = 0
                    return
                }
            }
        }
        pathTo(point) {
            if (point.walkable == true) {
                this.stepout = 1
                this.pather = new PathFindingAlg(sandmap.blocks, this.tile, point, this)
                this.pather.agent = this
                this.obvious = this.realPath[this.index]
                this.pathsto = []
                for (let t = 0; t < this.realPath.length; t++) {
                    this.pathsto.push(this.realPath[t])
                }
                this.pather.findPath()
                if (this.obvious == this.realPath[0]) {
                    this.index = 0
                } else {
                    this.realPath = [...this.pathsto]
                    this.repath = 5 + Math.floor(Math.random() * 10)
                    this.snapto = point
                }
            } else {
                this.tempcheck = []
                let index = 0
                let wet = 0
                for (let t = point.t - this.stepout; t <= point.t + this.stepout; t++) {
                    for (let k = point.k - this.stepout; k <= point.k + this.stepout; k++) {
                        if (t > 0) {
                            if (t < 128) {
                                if (k > 0) {
                                    if (k < 128) {
                                        if (sandmap.blocks[t][k].walkable == true) {
                                            this.tempcheck.push(sandmap.blocks[t][k])
                                            wet = 1
                                            // break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (wet == 0) {
                    this.stepout++
                    this.pathsto = []
                    for (let t = 0; t < this.realPath.length; t++) {
                        this.pathsto.push(this.realPath[t])
                    }
                    this.realPath = [...this.pathsto]
                    this.repath = 40 + Math.floor(Math.random() * 40)
                    this.snapto = point
                } else {
                    let max = 9999999999
                    for (let t = 0; t < this.tempcheck.length; t++) {
                        let link = (new LineOP(this.tile, this.tempcheck[t])).hypotenuse()
                        // ////console.log(link)
                        if (link < max) {
                            max = link
                            index = t
                        }
                    }

                    this.pathTo(this.tempcheck[index])
                }
            }
        }
        see() {
            for (let t = -this.sight; t <= this.sight; t++) {
                for (let k = -this.sight; k <= this.sight; k++) {
                    if (this.tile.t + t >= 0) {
                        if (this.tile.k + k >= 0) {
                            if (this.tile.t + t < 128) {
                                if (this.tile.k + k < 128) {

                                    if (typeof (sandmap.blocks[this.tile.t + t] != undefined)) {
                                        if (typeof (sandmap.blocks[this.tile.t + t][this.tile.k + k] != undefined)) {
                                            this.faction.fog[this.tile.t + t][this.tile.k + k].color = "transparent"
                                            this.faction.fog[this.tile.t + t][this.tile.k + k].timer = 100
                                            this.faction.blocks[this.tile.t + t][this.tile.k + k].markdraw = 1
                                            if (!this.faction.seen.includes(sandmap.blocks[this.tile.t + t][this.tile.k + k])) {
                                                this.faction.seen.push(sandmap.blocks[this.tile.t + t][this.tile.k + k])
                                                if (sandmap.blocks[this.tile.t + t][this.tile.k + k].sourcerock >= 1) {
                                                    this.faction.clickrate++
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        heatwallcheck() {
            this.dirs1 = 0
            this.dirs2 = 0
            this.dirs3 = 0
            this.dirs4 = 0
            for (let t = 0; t < this.faction.buildings.length; t++) {
                if (this.dirs1 == 0) {// right
                    if (this.faction.buildings[t].tile.x >= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.dirs1 += 1
                        }
                    }
                }
                if (this.dirs2 == 0) {// down
                    if (this.faction.buildings[t].tile.y >= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.dirs2 += 1
                        }
                    }
                }
                if (this.dirs3 == 0) { // left
                    if (this.faction.buildings[t].tile.x <= this.tile.x) {
                        if (this.faction.buildings[t].tile.y == this.tile.y) {
                            this.dirs3 += 1
                        }
                    }
                }
                if (this.dirs4 == 0) {  // up
                    if (this.faction.buildings[t].tile.y <= this.tile.y) {
                        if (this.faction.buildings[t].tile.x == this.tile.x) {
                            this.dirs4 += 1
                        }
                    }
                }
            }

            this.decayingInTheWind = 1 - ((this.dirs1 + this.dirs2 + this.dirs3 + this.dirs4) / 4)
        }
        move() {
            this.swing++
            if (this.swing % this.swingout == 0) {
                this.attack()
            }
            this.repath--
            if (this.repath == 0) {
                this.pathTo(this.snapto)
            }

            if (this.index < this.realPath.length - 1) {
                this.movespeedcount++
                if (this.movespeedcount % this.movespeed == 0) {
                    this.movespeedcount = 0
                    this.index += 1
                    if (this.realPath[this.index].walkable == false) {
                        if (this.index == 0) {
                            let goal = 0
                            goal += this.tile.id
                            goal += (Math.sign(Math.random() - .5) * 127)
                            goal += (Math.sign(Math.random() - .5))
                            goal = Math.min(goal, sandmap.gridPoints.length)
                            goal = Math.max(goal, 0)
                            // let goal = Math.max(Math.min(this.tile.id+(Math.sign(Math.random()-.5)*127)+ Math.sign(Math.random()-.5), sandmap.gridPoints.length),0)
                            this.pathTo(sandmap.gridPoints[goal])
                        } else {
                            this.index--
                            this.movespeedcount = 0
                        }
                    }
                }
            } else {
                this.movespeedcount = 0
            }
            this.tile.drawish = 0
            this.tile.walkable = true
            this.tile = this.realPath[this.index]
            if (this.index == this.realPath.length - 1) {
                this.realPath = [this.tile]
                this.index = 0
            }
            if(this.faction.type == 0){
                this.heatwallcheck()
            }else{
                this.decayingInTheWind = 0
            }
            //////////console.log( (this.decayingInTheWind*sandmap.windspeed))
            this.health -= ((this.decayRate * this.decayingInTheWind * sandmap.windspeed))
            if (this.decayingInTheWind == 0) {
                this.health += this.decayRate
                if (this.health > this.maxhealth) {
                    this.health = this.maxhealth
                }
            }
            if (this.health <= 0) {
                this.marked = 1
            }
            if (this.tile.hotrock == 1) {
                if (this.drone == 1) {

                    this.faction.hotrock += this.movespeed * .005
                    this.tile.sourcerock -= this.movespeed * .005
                } else {

                    this.faction.hotrock += this.movespeed * .01
                    this.tile.sourcerock -= this.movespeed * .01
                    if (this.nymph == 1 || this.harvester == 1) {
                        this.faction.hotrock += this.movespeed * .025
                        this.tile.sourcerock -= this.movespeed * .025
                    }
                    if (this.nymph == 1) {
                        this.faction.hotrock += this.movespeed * .025
                        this.tile.sourcerock -= this.movespeed * .025
                    }
                }
            }
            if (this.tile.hotrock == 2) {

                if (this.drone == 1) {
                    this.faction.hotrock += this.movespeed * .01
                    this.tile.sourcerock -= this.movespeed * .01
                } else {
                    this.faction.hotrock += this.movespeed * .02
                    this.tile.sourcerock -= this.movespeed * .02
                    if (this.nymph == 1 || this.harvester == 1) {
                        this.faction.hotrock += this.movespeed * .05
                        this.tile.sourcerock += this.movespeed * .05
                    }
                    if (this.nymph == 1) {
                        this.faction.hotrock += this.movespeed * .05
                        this.tile.sourcerock += this.movespeed * .05
                    }
                }
            }
            this.tile.walkable = false
            this.tile.drawish = 1
            // this.tile.draw()
        }
        draw() {


            if (this.imago == 1 || this.nymph > 0) {
                this.timer--
                if (this.timer == 0) {
                    if (this.spawn == 1) {
                        this.que = 0
                        this.spawn = 0
                        this.spawnNymph()
                    }
                    if (this.morphing == 1) {
                        this.morphing = 0
                        this.que = 0
                        this.finishMorph1()
                    }
                    if (this.morphingagain == 1) {
                        this.morphingagain = 0
                        this.que = 0
                        this.finishMorph2()
                    }
                }
            }


            if (this.realPath.length - 1 > this.index) {
                if (this.realPath[this.index + 1].walkable == true) {
                    let rat = (this.movespeedcount + 1) / this.movespeed
                    let invrat = 1 - rat

                    this.body.x = ((this.realPath[this.index].x + (this.tile.width * .5)) * invrat) + ((this.realPath[this.index + 1].x + (this.tile.width * .5)) * rat)
                    this.body.y = ((this.realPath[this.index].y + (this.tile.height * .5)) * invrat) + ((this.realPath[this.index + 1].y + (this.tile.height * .5)) * rat)

                } else {
                    this.body.x = this.tile.x + (this.tile.width * .5)
                    this.body.y = this.tile.y + (this.tile.height * .5)
                }

            } else {

                this.body.x = this.tile.x + (this.tile.width * .5)
                this.body.y = this.tile.y + (this.tile.height * .5)
                // this.body = new UnitCircle(this.tile.x + (this.tile.width * .5), this.tile.y + (this.tile.height * .5), 5, this.faction.color)
            }

            if (this.drone == 1) {
                map_context.drawImage(drone, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.infantry == 1) {
                map_context.drawImage(infantry, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.harvester == 1) {
                map_context.drawImage(harvester, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.nymph == 1) {
                map_context.drawImage(nymph, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.nymph == 2) {
                map_context.drawImage(scuttler, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else if (this.imago == 1) {
                map_context.drawImage(imago, Math.floor(this.body.x) - 5, Math.floor(this.body.y) - 5)
            } else {
                this.body.draw()
            }

            if (this.selected == 1 || this.selected == 2) {
                this.healthbar = new Rectangle(this.body.x - 5.5, this.body.y + 2.5, 11, 3, "black")
                this.healthbar.draw()
                this.healthbar = new Rectangle(this.body.x - 5, this.body.y + 3, (this.health / this.maxhealth) * 10, 2, `rgb(${255 - ((this.health / this.maxhealth) * 255)},${(this.health / this.maxhealth) * 255},  0)`)
                this.healthbar.draw()
                if (sandmap.turn == sandmap.players.indexOf(this.faction)) {
                    this.dataOutput()
                }
            } else {
                this.spawnsmall = {}
                this.spawnsmall.isPointInside = empty
                this.morph = {}
                this.morph.isPointInside = empty
                this.morph2 = {}
                this.morph2.isPointInside = empty
            }

            for (let t = 0; t < this.shots.length; t++) {
                this.shots[t].stage++
                this.shots[t].x = (this.body.x * (1 - (this.shots[t].stage / this.projectilespeed))) + (((this.shots[t].stage / this.projectilespeed)) * this.shots[t].attacktarget.body.x)
                this.shots[t].y = (this.body.y * (1 - (this.shots[t].stage / this.projectilespeed))) + (((this.shots[t].stage / this.projectilespeed)) * this.shots[t].attacktarget.body.y)
                this.shots[t].draw()
                if (this.shots[t].stage >= this.projectilespeed) {
                    this.shots[t].refhealth.health -= Math.max((this.damage * 3)-this.shots[t].attacktarget.defense, 0) //5?
                    ////console.log(this.shots[t].refhealth)
                    this.shots[t].marked = 1
                }
            }
            for (let t = 0; t < this.shots.length; t++) {
                if (this.shots[t].marked == 1) {
                    this.shots.splice(t, 1)
                }
            }
        }
    }

    for (let t = 0; t < 3; t++) {
        let agent1 = new Agent(sandmap.blocks[10][t + 10], sandmap.players[0])
    }
    for (let t = 0; t < 3; t++) {
        let agent2 = new Agent(sandmap.blocks[117][117 - t], sandmap.players[1])
    }


    // let pather = new PathFindingAlg(sandmap.blocks, sandmap.blocks[10][10], sandmap.blocks[12][25])
    // for(let t = 0;t<10;t++){
    // pather.findPath()

    // }
    start = 1
    function main() {
        if (keysPressed[' ']) {
            sandmap.players[sandmap.turn].isAI = 0
        }

        // sandmap.players[1].units = []
        postwind.play()
        // if(Math.random()<.2){
        //     debreak = 0
        // }
        canvas_context.clearRect(0, 0, canvas.width, canvas.height)  // refreshes the image
        map_context.clearRect(0, 0, map_canvas.width, map_canvas.height)  // refreshes the image
        map_context.drawImage(snow, 0, 0, snow.width, snow.height, 0, 0, 1280, 1280)
        // gamepadAPI.update() //checks for button presses/stick movement on the connected controller)
        // // game code goes here
        dataflop = 0
        sandmap.draw()
        if (keysPressed['h']) {
            sandmap.turn = 1
        }
        if (keysPressed['k']) {
            sandmap.turn = 0
        }
        if (keysPressed['q']) {
            //console.log(sandmap)
        }
        ////////////console.log(selectrect)
    }

})
