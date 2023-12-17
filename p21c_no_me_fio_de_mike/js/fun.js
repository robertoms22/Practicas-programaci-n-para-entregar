const startBtn = document.querySelector ('.no-me-fio__start');
const subItems = document.querySelectorAll ('.no-me-fio__item');

startBtn.addEventListener('click', moveItems);

function moveItems(){
    subItems.forEach(item =>{
        item.classList.toggle('play');
    })

}


