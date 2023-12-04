let noti = document.querySelector('h1');
let select = document.querySelector('.select');
let button = document.getElementsByTagName('button');

for(btn of button){
    btn.addEventListener('click', (e)=> {
        let add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');

        let parent = e.target.parentNode;
        let clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";
        if(clone){
            noti.onclick = () => {
                select.classList.toggle('display');
            }
        }
        let image = e.target.parentNode.querySelector('img');
        let span = e.target.parentNode.querySelector('span');
        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(()=> {
            span.removeChild(s_image);
            span.classList.remove('active');
        }, 500)
    })
}