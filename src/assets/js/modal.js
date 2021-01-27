const onArray = document.querySelectorAll(".modal-wrapper-block");
const modalWindow = document.querySelector(".modal-wrapper-block");
const modalCloseCross = document.querySelector(".modal-close").getAttribute('class');
const modalCloseBg = document.querySelector(".modal-wrapper-block").getAttribute('class');
const modalCloseCrossBascet = document.querySelector(".modal-backet__img").getAttribute('class');


document.querySelector('.product-listing-wrapper').addEventListener('click', e => {
    e.preventDefault();
    const modal = e.target.getAttribute('data-id');
    onArray.forEach(event => {
        const modalClose = e.target.getAttribute('class');
        // open popap 
        if (event.getAttribute("data-popup") === modal) {
            event.style.display = "block";
        }
        // close popap "cross"
        if (modalClose == modalCloseBg || modalClose == modalCloseCross || modalClose == modalCloseCrossBascet) {
            event.style.display = "none";
        }

    });
})

// close popap "Esc"

window.document.addEventListener('keyup', e => {
    onArray.forEach(esc => {
        if (e.keyCode == "27") {
            esc.style.display = "none";
        }
    });
})