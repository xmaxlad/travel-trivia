import confetti from 'canvas-confetti'

export const confetti_animation = () => {
    const defaults = {
        origin:{ y : 0.8},
    }

    const fire_confetti = (particleCount = 250, optionals = {}) => {
        confetti({
            ...defaults,
            ...optionals,
            particleCount
        })
    }

    fire_confetti(250,{
        spread: 90,
        startVelocity : 60,
        scaler:1,
    })

    setTimeout(()=>{
        fire_confetti(250,{
            spread: 90,
            startVelocity : 60,
        })
    },500)

    setTimeout(()=>{
        fire_confetti(250,{
            spread: 90,
            startVelocity : 60,
        })
    },1000)
}