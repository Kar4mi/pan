let izq = 0
let der = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (izq) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 137)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
        basic.pause(50)
    }
    if (der) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 137)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
        basic.pause(50)
    }
})
