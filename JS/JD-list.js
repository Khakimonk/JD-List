var elSelected = document.getElementById('two');

function changeClass() {
    elSelected.className = 'cool';
}

function changeClassBack() {
    elSelected.className = 'hot';
}

elSelected.addEventListener('mouseenter', function() {
    changeClass();
}, false);

elSelected.addEventListener('mouseout', function() {
    changeClassBack();
}, false);