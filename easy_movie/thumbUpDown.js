window.onload = function(){
    alert('hhh');
    var goodBtn = document.getElementsByClassName('good')[0];
    var goodFlag = 0;
    var thumbsUp = document.getElementsByClassName('fas fa-thumbs-up')[0];
    var thumbsDown = document.getElementsByClassName('fas fa-thumbs-down')[0];
    goodBtn.onclick = function(){
        goodFlag+=1;
        if(goodFlag%2===1){
            thumbsUp.className += ' selected';
            var goodScore = document.getElementsByClassName('goodScore')[0];
            goodScore.innerHTML = goodScore.innerHTML*1+1;
        }else{
            thumbsUp.className = 'fas fa-thumbs-up';
            var goodScore = document.getElementsByClassName('goodScore')[0];
            goodScore.innerHTML = goodScore.innerHTML*1-1;
        }
    }
    var badBtn = document.getElementsByClassName('bad')[0];
    var badFlag=0;
    badBtn.onclick = function(){
        badFlag+=1;
        if(badFlag%2===1){
            thumbsDown.className += ' selected';
            var badScore = document.getElementsByClassName('badScore')[0];
            badScore.innerHTML = badScore.innerHTML*1+1;
        }else{
            thumbsDown.className = 'fas fa-thumbs-down';
            var badScore = document.getElementsByClassName('badScore')[0];
            badScore.innerHTML = badScore.innerHTML*1-1;
        }
    }
}