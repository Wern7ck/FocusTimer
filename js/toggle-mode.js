let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')
const buttonAudioSelected = document.getElementsByClassName('audio')

for (let button of buttonAudioSelected) {
    button.addEventListener('click', function() {
        this.classList.toggle('soundSelected');
    });

}

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode
})


