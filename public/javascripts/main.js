
if(document.querySelector('#search-bar')){
    let inputEl = document.querySelector('#search-bar')
    inputEl.addEventListener('input', searchFun)

    function searchFun(){
        let recipes = document.querySelectorAll('#recipe-card');

        recipes.forEach( r => {
        
            if(r.textContent.toLowerCase().includes(inputEl.value)){
                r.style.display = 'grid'
            }else if(inputEl === ''){
                r.style.display = 'grid'
            }else{
                r.style.display = 'none'
            }
        })

}
}
if(document.getElementById('update-button')){

    let updateButtonEl = document.getElementById('update-button')
    updateButtonEl.addEventListener('click', showUpdate)
}

function showUpdate(e){
    let update = document.getElementById('update')
    let create = document.getElementById('create')

    update.style.display = 'block';
    create.style.display = 'none'
}

if(document.getElementById('user-update')){
    let userUpdateEl = document.getElementById('user-update')
    userUpdateEl.addEventListener('click', showBio)
}
function showBio(e){
    let updateBio = document.getElementById('update-bio')
    let hideBio = document.getElementById('hide-bio')

    updateBio.style.display = 'block';
    hideBio.style.display = 'none';
}