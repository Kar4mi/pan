let izq = 0
let der = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (izq) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 13)
        basic.pause(115)
    }
    if (der) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 13)
        basic.pause(115)
    }
})
