let a = 0
let izq = 0
let der = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    a = maqueen.readPatrol(maqueen.Patrol.PatrolLeft) + maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (izq) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 225)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 26)
        basic.pause(115)
    }
    if (der) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 225)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 26)
        basic.pause(115)
    }
    if (a) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
