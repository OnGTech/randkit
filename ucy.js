window.addEventListener('DOMContentLoaded', ()=>{
    ucy();
})
function ucy(){
    let api_uri = 'https://worldtimeapi.org/api/ip';
    fetch(api_uri, {
        method: 'GET'
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let y = data.datetime.split('-')[0];
        document.querySelectorAll('.c-year').forEach((e)=>{
            e.innerHTML = y;
        })
    })
}