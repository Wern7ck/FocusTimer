import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
   state.isRunning = document.documentElement.classList.toggle('running')

   timer.countdown()
   sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    
}

export function plus(){
    let minutes = Number(el.minutes.textContent)
    minutes += 5;
    timer.updateDisplay(minutes);
}

export function minus(){
    let minutes = Number(el.minutes.textContent)
    minutes -= 5;
    if(minutes < 0) minutes = 0; 
    timer.updateDisplay(minutes);
}


export function forest(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.forestAudio.play()
        return
    }

    sounds.forestAudio.pause()
}

export function rain(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.rainAudio.play()
        return
    }

    sounds.rainAudio.pause()
    
}
export function coffee(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.coffeshopAudio.play()
        return
    }

    sounds.coffeshopAudio.pause()
}
export function fireplace(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.fireplaceAudio.play()
        return
    }
    sounds.fireplaceAudio.pause()
}

