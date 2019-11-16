// Create button module
function createButton (color, text, className) {
    const btn = document.createElement('button')
    btn.innerHTML = text,
    btn.style.backgroundColor = color
    btn.className = className
    return btn
}
// Create div module
function createDiv (text, className, child) {
    let div = document.createElement('div');
    div.className = className
    div.innerHTML = text
    if(child) {
        for(let i = 0; i < child.length; i++) {
            div.appendChild(child[i])
        }
    }
    return div;
}
// Create textarea module
function createTextarea (placeholder, className) {
    let textarea = document.createElement('textarea');
    textarea.className = className
    textarea.placeholder = placeholder
    return textarea;
}
// Create input module
function createInput (placeholder, className) {
    let input = document.createElement('input');
    input.className = className
    input.placeholder = placeholder
    return input;
}
// Create span module
function createSpan (text, className, child) {
    let span = document.createElement('span');
    span.className = className
    span.innerHTML = text
    if(child) {
        for(let i = 0; i < child.length; i++) {
            span.appendChild(child[i])
        }
    }
    return span;
}
// Create span module
function createP (text, className, child) {
    let p = document.createElement('p');
    p.className = className
    p.innerHTML = text
    if(child) {
        for(let i = 0; i < child.length; i++) {
            p.appendChild(child[i])
        }
    }
    return p;
}
// Create header module
function createHeader (text, className, child) {
    let header = document.createElement('header');
    header.className = className
    header.innerHTML = text
    if(child) {
        for(let i = 0; i < child.length; i++) {
            header.appendChild(child[i])
        }
    }
    return header;
}
// Create image module
function createImg (text, className, src, alt) {
    let img = document.createElement('img');
    img.src = src
    img.alt = alt
    img.className = className
    img.innerHTML = text
    return img;
}
// Price maker for normal view
function price (num) {
    let str = String(num)
    return str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}
// Smooth scroll to top
function smoothScrollToTop(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothScrollToTop);
         window.scrollTo (0, currentScroll - (currentScroll/5));
    }    
}