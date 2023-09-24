window.addEventListener('DOMContentLoaded', async()=>{
    const header=document.querySelector('header');
    const html=await fetch('https://homepages.buffalo.edu/~kentonos/header.html').then(res => res.text());
    header.insertAdjacentHTML('afterbegin',html);

});