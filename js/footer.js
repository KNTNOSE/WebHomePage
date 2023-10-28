window.addEventListener('DOMContentLoaded', async()=>{
    const header=document.querySelector('footer');
    const html=await fetch('https://homepages.buffalo.edu/~kentonos/footer.html').then(res => res.text());
    header.insertAdjacentHTML('afterbegin',html);

});