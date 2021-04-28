'use strict'

export class Button {
    _text = ''
    _callback = null
  
    constructor (text, callback) {
        this._text = text
        this._callback = callback
    }
  
    onBtnClick () {
        const callback = this._callback
        if (typeof callback === 'function') {
            callback()
        }
    }
  
    getTemplate (classBtn) {
        const btn = document.createElement('button')
        btn.classList.add(classBtn)
        return btn
    }
  
    render (placeToRender, classBtn) {
        if (placeToRender) {
            const btn = this.getTemplate(classBtn)
            btn.innerHTML = this._text
            placeToRender.appendChild(btn)
  
            btn.addEventListener('click', () => {
                this.onBtnClick()
            })
        }
    }
  }