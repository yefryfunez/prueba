function createList(){
    let i = document.getElementsByTagName('li').length;
    if (i == 0){
        document.getElementById('ul_1').appendChild(document.createTextNode('TEXTOS'));
    }
    const li = document.createElement('li');
    li.innerHTML = i+') ' +
    document.getElementById('p_1').innerHTML;
    document.getElementById('ul_1').appendChild(li);
    document.getElementById('p_1').style.display = 'none';
}