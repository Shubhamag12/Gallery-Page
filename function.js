var Images = document.querySelectorAll('.image-box'),
    lightbox = document.getElementById('lightbox'),
    close = document.getElementById('close'),
    overlay = document.getElementById('overlay');


Images.forEach(function(el){
    el.onclick = function(){
        lightbox.classList.add('show-it');
        lightbox.children[1].setAttribute('src',el.children[0].getAttribute('src'));
    }
})

function closeLightbox(){
    lightbox.classList.remove('show-it');
}

close.onclick = closeLightbox;
overlay.onclick = closeLightbox;

for(var i = 0; i<Images.length; i++){
    var thumb = document.createElement('img');
    thumb.className = 'thumbnail';
    document.getElementById('thumb').appendChild(thumb);
    thumb.setAttribute('src',Images[i].children[0].getAttribute('src'));
}

var thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(el){
    el.onclick = function(){
        lightbox.children[1].setAttribute('src',el.getAttribute('src'));
    }
})