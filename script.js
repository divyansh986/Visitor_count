const counter = document.getElementById('count');
    
updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/visit/count/?amount=1')
    .then(res => res.json())
    .then(res => {
        counter.innerHTML = res.value;
    });
    
}