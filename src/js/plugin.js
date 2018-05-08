/* js */

class DataInfo{
    constructor(){

    }
    init(){

        this.getItem();

    }
    getItem(){

        let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();

        xhr.open('GET', 'http://bekey.io/testwork/test.ashx', true);

        xhr.addEventListener('load', () => {

            console.log('status: ', xhr.status);
            let data = xhr.response;
            let obj = JSON.parse(data);
            console.log('response: ', data);

        });

        xhr.send();

    }

}

let get_info = new DataInfo();

get_info.init();

/* 2 task */ 

class Player{

    constructor(element){

        this.player = element;
        this.giftBox = document.querySelector('#gift-btn');
        this.giftBoxCloseBtn = document.querySelector('.icon-close');
        this.giftInfoBox = document.querySelector('.gift-info-box')

    }

    init(){

        let self = this;
        this.toggle_giftBtn(0, -12);
        this.toggle_GiftBox(0, -50);
        this.dom_event(self);
        this.player_event(self)
        
    }

    dom_event(self){

        this.giftBox.addEventListener('click', el => {

            if( !this.player.paused )this.toggle_play();
            this.toggle_GiftBox(1, 0);

        });

        this.giftBoxCloseBtn.addEventListener('click', el => {

            this.toggle_GiftBox(0, -50);
            if( this.player.paused )this.toggle_play();

        });
    }

    player_event(){

        this.player.addEventListener('timeupdate', (e) => {

            this.player.currentTime > 24 && this.player.currentTime < 27 ? this.toggle_giftBtn(1,0) : this.toggle_giftBtn(0, -12);

        });

    }

    toggle_play(){

        let metod = this.player.paused ? 'play' : 'pause';
        this.player[metod]()
        
    }

    toggle_giftBtn(opacity, top, zIndex){

        this.giftBox.style.opacity = opacity;
        this.giftBox.style.top = top + '%'

    }

    toggle_GiftBox(opacity, left){

        this.giftInfoBox.style.opacity = opacity;
        this.giftInfoBox.style.left = left + '%'

    }

}

let videoTag = document.querySelector('.myvideo');

let player = new Player(videoTag);

player.init();
