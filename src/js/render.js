window.render = (template) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = template.trim();
    document.querySelector('.product-listing-wrapper').appendChild(wrapper.firstElementChild);
};