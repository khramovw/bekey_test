'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* js */

var DataInfo = function () {
    function DataInfo() {
        _classCallCheck(this, DataInfo);
    }

    _createClass(DataInfo, [{
        key: 'init',
        value: function init() {

            this.getItem();
        }
    }, {
        key: 'getItem',
        value: function getItem() {

            var XHR = "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
            var xhr = new XHR();

            xhr.open('GET', 'http://bekey.io/testwork/test.ashx', true);

            xhr.addEventListener('load', function () {

                console.log('status: ', xhr.status);
                var data = xhr.response;
                var obj = JSON.parse(data);
                console.log('response: ', data);
            });

            xhr.send();
        }
    }]);

    return DataInfo;
}();

var get_info = new DataInfo();

get_info.init();

/* 2 task */

var Player = function () {
    function Player(element) {
        _classCallCheck(this, Player);

        this.player = element;
        this.giftBox = document.querySelector('#gift-btn');
        this.giftBoxCloseBtn = document.querySelector('.icon-close');
        this.giftInfoBox = document.querySelector('.gift-info-box');
    }

    _createClass(Player, [{
        key: 'init',
        value: function init() {

            var self = this;
            this.toggle_giftBtn(0, -12);
            this.toggle_GiftBox(0, -50);
            this.dom_event(self);
            this.player_event(self);
        }
    }, {
        key: 'dom_event',
        value: function dom_event(self) {
            var _this = this;

            this.giftBox.addEventListener('click', function (el) {

                if (!_this.player.paused) _this.toggle_play();
                _this.toggle_GiftBox(1, 0);
            });

            this.giftBoxCloseBtn.addEventListener('click', function (el) {

                _this.toggle_GiftBox(0, -50);
                if (_this.player.paused) _this.toggle_play();
            });
        }
    }, {
        key: 'player_event',
        value: function player_event() {
            var _this2 = this;

            this.player.addEventListener('timeupdate', function (e) {

                _this2.player.currentTime > 24 && _this2.player.currentTime < 27 ? _this2.toggle_giftBtn(1, 0) : _this2.toggle_giftBtn(0, -12);
            });
        }
    }, {
        key: 'toggle_play',
        value: function toggle_play() {

            var metod = this.player.paused ? 'play' : 'pause';
            this.player[metod]();
        }
    }, {
        key: 'toggle_giftBtn',
        value: function toggle_giftBtn(opacity, top, zIndex) {

            this.giftBox.style.opacity = opacity;
            this.giftBox.style.top = top + '%';
        }
    }, {
        key: 'toggle_GiftBox',
        value: function toggle_GiftBox(opacity, left) {

            this.giftInfoBox.style.opacity = opacity;
            this.giftInfoBox.style.left = left + '%';
        }
    }]);

    return Player;
}();

var videoTag = document.querySelector('.myvideo');

var player = new Player(videoTag);

player.init();