/*
* jQuery analogClock - v1.0
* Made by Ambrose Njane
* njaneambrose@gmail.com
* copyright 2018
 */
(function($) {
    var AnalogClock = function(element, options) {
        var settings = $.extend({}, $.fn.analogClock.defaults, options);
        /*Getting the selected element*/
        var watchouter = $(element);
        watchouter.addClass("analog-clock");
        watchouter.css("position", "relative");
        /* Appending watches*/
        if (settings.watch == 'small') {
            watchouter.append('<div id="small-watch">' + '<span class="logo s-logo"></span>' +'<div class="s-ball"></div> ' + '<div id="ss-hand" class="second-hand"></div>' + '<div id="sm-hand" class="minute-hand"></div>' + '<div id="sh-hand" class="hour-hand"></div>' + '<span class="s-inner-s s-s-1 minor">1</span>' + '<span class="s-inner-s s-s-2 minor">2</span>' + '<span class="s-inner-s s-s-3 major">3</span>' + '<span class="s-inner-s s-s-4 minor">4</span>' + '<span class="s-inner-s s-s-5 minor">5</span>' + '<span class="s-inner-s s-s-6 major">6</span>' + '<span class="s-inner-s s-s-7 minor">7</span>' + '<span class="s-inner-s s-s-8 minor">8</span>' + '<span class="s-inner-s s-s-9 major">9</span>' + '<span class="s-inner-s s-s-10 minor">10</span>' + '<span class="s-inner-s s-s-11 minor">11</span>' + '<span class="s-inner-s s-s-12 major">12</span>' + '</div>')
        } else if (settings.watch == 'large') {
            watchouter.append('<div id="large-watch">' + '<span class="logo l-logo"></span>'+ '<div class="l-ball"></div>' +'<div id="ls-hand" class="second-hand"></div>' + '<div id="lm-hand" class="minute-hand"></div>' + '<div id="lh-hand" class="hour-hand"></div>' + '<span class="l-inner-s l-s-1 minor">1</span>' + '<span class="l-inner-s l-s-2 minor">2</span>' + '<span class="l-inner-s l-s-3 major">3</span>' + '<span class="l-inner-s l-s-4 minor">4</span>' + '<span class="l-inner-s l-s-5 minor">5</span>' + '<span class="l-inner-s l-s-6 major">6</span>' + '<span class="l-inner-s l-s-7 minor">7</span>' + '<span class="l-inner-s l-s-8 minor">8</span>' + '<span class="l-inner-s l-s-9 major">9</span>' + '<span class="l-inner-s l-s-10 minor">10</span>' + '<span class="l-inner-s l-s-11 minor">11</span>' + '<span class="l-inner-s l-s-12 major">12</span>' + '</div>')
        } else if (settings.watch == 'extend') {
            watchouter.append('<div id="x-watch">' + '<div class="x-ball"></div> ' + '<span id="x-logo" class="logo"></span>' + ' <div id="second-hand" class="second-hand"></div>' + ' <div id="minute-hand" class="minute-hand"></div>' + '<div id="hour-hand" class="hour-hand"></div>' + ' <span class="inner-major m-0"></span>\n' + '  <span class="major-stick s-12"></span><span class="inner-t-major t-12" style="display: none">12</span>\n' + '    <span class="inner-minor m-1"></span>\n' + '    <span class="inner-minor m-2"></span>\n' + '    <span class="inner-minor m-3"></span>\n' + '    <span class="inner-minor m-4"></span>\n' + '    <span class="inner-major m-5"></span>\n' + '   <span class="major-stick s-1"></span> <span class="inner-t-major t-1" style="display: none">1</span>\n' + '    <span class="inner-minor m-6"></span>\n' + '    <span class="inner-minor m-7"></span>\n' + '    <span class="inner-minor m-8"></span>\n' + '    <span class="inner-minor m-9"></span>\n' + '    <span class="inner-major m-10"></span>\n' + ' <span class="major-stick s-2"></span><span class="inner-t-major t-2" style="display: none">2</span>\n' + '    <span class="inner-minor m-11"></span>\n' + '    <span class="inner-minor m-12"></span>\n' + '    <span class="inner-minor m-13"></span>\n' + '    <span class="inner-minor m-14"></span>\n' + '  <span class="major-stick s-3"></span>  <span class="inner-t-major t-3" style="display: none">3</span>\n' + '    <span class="inner-major m-15"></span>\n' + '    <span class="inner-minor m-16"></span>\n' + '    <span class="inner-minor m-17"></span>\n' + '    <span class="inner-minor m-18"></span>\n' + '    <span class="inner-minor m-19"></span>\n' + '    <span class="inner-major m-20"></span>\n' + '  <span class="major-stick s-4"></span> <span class="inner-t-major t-4"  style="display: none">4</span>\n' + '    <span class="inner-minor m-21"></span>\n' + '    <span class="inner-minor m-22"></span>\n' + '    <span class="inner-minor m-23"></span>\n' + '    <span class="inner-minor m-24"></span>\n' + '    <span class="inner-major m-25"></span>\n' + '  <span class="major-stick s-5"></span>  <span class="inner-t-major t-5"  style="display: none">5</span>\n' + '    <span class="inner-minor m-26"></span>\n' + '    <span class="inner-minor m-27"></span>\n' + '    <span class="inner-minor m-28"></span>\n' + '    <span class="inner-minor m-29"></span>\n' + '    <span class="inner-major m-30"></span>\n' + '  <span class="major-stick s-6"></span><span class="inner-t-major t-6" style="display: none">6</span>\n' + '    <span class="inner-minor m-31"></span>\n' + '    <span class="inner-minor m-32"></span>\n' + '    <span class="inner-minor m-33"></span>\n' + '    <span class="inner-minor m-34"></span>\n' + '    <span class="inner-major m-35"></span>\n' + ' <span class="major-stick s-7"></span><span class="inner-t-major t-7" style="display: none">7</span>\n' + '    <span class="inner-minor m-36"></span>\n' + '    <span class="inner-minor m-37"></span>\n' + '    <span class="inner-minor m-38"></span>\n' + '    <span class="inner-minor m-39"></span>\n' + '    <span class="inner-major m-40"></span>\n' + '   <span class="major-stick s-8"></span> <span class="inner-t-major t-8" style="display: none">8</span>\n' + '    <span class="inner-minor m-41"></span>\n' + '    <span class="inner-minor m-42"></span>\n' + '    <span class="inner-minor m-43"></span>\n' + '    <span class="inner-minor m-44"></span>\n' + '    <span class="inner-major m-45" ></span>\n' + '   <span class="major-stick s-9"></span> <span class="inner-t-major t-9" style="display: none">9</span>\n' + '    <span class="inner-minor m-46"></span>\n' + '    <span class="inner-minor m-47"></span>\n' + '    <span class="inner-minor m-48"></span>\n' + '    <span class="inner-minor m-49"></span>\n' + '    <span class="inner-major m-50"></span>\n' + '   <span class="major-stick s-10"></span> <span class="inner-t-major t-10" style="display: none">10</span>\n' + '    <span class="inner-minor m-51"></span>\n' + '    <span class="inner-minor m-52"></span>\n' + '    <span class="inner-minor m-53"></span>\n' + '    <span class="inner-minor m-54"></span>\n' + '    <span class="inner-major m-55"></span>\n' + '  <span class="major-stick s-11"></span> <span class="inner-t-major t-11" style="display: none">11</span>\n' + '    <span class="inner-minor m-56"></span>\n' + '    <span class="inner-minor m-57"></span>\n' + '    <span class="inner-minor m-58"></span>\n' + '    <span class="inner-minor m-59"></span>' + '</div>')
        } else {
            watchouter.append('<div id="medium-watch">' + '<span class="logo m-logo"></span>' + '<div class="m-ball"></div>'  + '<div id="ms-hand" class="second-hand"></div>' + '<div id="mm-hand" class="minute-hand"></div>' + '<div id="mh-hand" class="hour-hand"></div>' + '<span class="m-inner-s m-s-1 minor">1</span>' + '<span class="m-inner-s m-s-2 minor">2</span>' + '<span class="m-inner-s m-s-3 major">3</span>' + '<span class="m-inner-s m-s-4 minor">4</span>' + '<span class="m-inner-s m-s-5 minor">5</span>' + '<span class="m-inner-s m-s-6 major">6</span>' + '<span class="m-inner-s m-s-7 minor">7</span>' + '<span class="m-inner-s m-s-8 minor">8</span>' + '<span class="m-inner-s m-s-9 major">9</span>' + '<span class="m-inner-s m-s-10 minor">10</span>' + '<span class="m-inner-s m-s-11 minor">11</span>' + '<span class="m-inner-s m-s-12 major">12</span>' + '</div>')
        }
        /*Remove minor values if true and leave 3,6,9,12*/
        if (!settings.minor) {
            watchouter.find('.minor').hide();
        }
        /*Hide second hand if true*/
        if (!settings.second_hand) {
            watchouter.find('.second-hand').hide();
        }
        /*Setting the logo text*/
        if (settings.logo) {
            watchouter.find(".logo").show().html(settings.logo_text);
        } else {
            watchouter.find(".logo").hide();
        }
        if (!settings.major) {
            watchouter.find(".major").hide();
        }
        if (settings.extended.x_size == 'large') {
            watchouter.find("#x-watch").css({
                "transform": "scale(1.5)",
                "-webkit-transform": "scale(1.5)",
                "-moz-transform": "scale(1.5)",
                "-ms-transform": "scale(1.5)",
                "-o-transform": "scale(1.5)"
            })
        }
        if (settings.extended.inner_minor == false) {
            watchouter.find(".inner-minor").hide();
        }
        if (settings.extended.inner_major == false) {
            watchouter.find(".inner-major").hide();
        }
        if (settings.extended.inner_major_type == 'number') {
            watchouter.find(".inner-major").hide();
            watchouter.find(".major-stick").show();
            watchouter.find(".inner-t-major").show();
        } else {
            watchouter.find(".inner-major").show();
            watchouter.find(".major-stick").hide();
            watchouter.find(".inner-t-major").hide();
        }
        /*Run on computer time when GMT time is not provided optional time -- GMT true and provide GMT_offset*/
        if (!settings.GMT) {
            var seconds = (new Date().getSeconds() * 6);
            var minutes = (new Date().getMinutes() * 6);
            var hours = (new Date().getHours()).toFixed(0);
        } else {
            seconds = (new Date().getUTCSeconds() * 6);
            minutes = (new Date().getUTCMinutes() * 6);
            hours = (new Date().getUTCHours() + settings.GMT_offset).toFixed(0);
            if (hours < 0 || hours > 23) {
                hours = (new Date().getUTCHours());
            }
        }
        var minute1 = ((seconds / 6) / 60).toFixed(3);
        var minute3 = JSON.parse(minutes / 6);
        var minute4 = JSON.parse(minute1);
        var ult = (minute3 + minute4) * 6;
        var mid = ((minutes / 6) / 60).toFixed(3);
        var mid2 = JSON.parse(mid);
        var mid3 = JSON.parse(hours);
        var hour = mid2 + mid3;
        if (hour > 12) {
            hour = (hour - 12) * 30
        } else {
            hour = (hour) * 30
        }
        var second_h = watchouter.find(".second-hand");
        var minute_h = watchouter.find(".minute-hand");
        var hour_h = watchouter.find(".hour-hand");
        /* Watch effects library*/
        if (settings.effect == 'tick') {
            setInterval(function() {
                if (seconds > 354) {
                    seconds = 0;
                    hour = hour + 0.5;
                    if (ult > 359.9) {
                        ult = 0;
                        if (hour > 359.5) {
                            hour = 0;
                        }
                    }
                }
                seconds = seconds + 6;
                ult = ult + 0.1;
                second_h.css({
                    "-webkit-transform": "rotate(" + seconds + "deg)",
                    "-moz-transform": "rotate(" + seconds + "deg)",
                    "-ms-transform": "rotate(" + seconds + "deg)",
                    "-o-transform": "rotate(" + seconds + "deg)",
                    "transform": "rotate(" + seconds + "deg)"
                });
                minute_h.css({
                    "-webkit-transform": "rotate(" + ult + "deg)",
                    "-moz-transform": "rotate(" + ult + "deg)",
                    "-ms-transform": "rotate(" + ult + "deg)",
                    "-o-transform": "rotate(" + ult + "deg)",
                    "transform": "rotate(" + ult + "deg)"
                });
                hour_h.css({
                    "-webkit-transform": "rotate(" + hour + "deg)",
                    "-moz-transform": "rotate(" + hour + "deg)",
                    "-ms-transform": "rotate(" + hour + "deg)",
                    "-o-transform": "rotate(" + hour + "deg)",
                    "transform": "rotate(" + hour + "deg)"
                });
            }, 1000)
        } else if (settings.effect == 'flow') {
            setInterval(function() {
                if (seconds > 359.82) {
                    seconds = 0;
                    hour = hour + 0.5;
                    if (ult > 359.997) {
                        ult = 0;
                        if (hour > 359.5) {
                            hour = 0;
                        }
                    }
                }
                seconds = seconds + 0.18;
                ult = ult + 0.003;
                second_h.css({
                    "-webkit-transform": "rotate(" + seconds + "deg)",
                    "-moz-transform": "rotate(" + seconds + "deg)",
                    "-ms-transform": "rotate(" + seconds + "deg)",
                    "-o-transform": "rotate(" + seconds + "deg)",
                    "transform": "rotate(" + seconds + "deg)"
                });
                minute_h.css({
                    "-webkit-transform": "rotate(" + ult + "deg)",
                    "-moz-transform": "rotate(" + ult + "deg)",
                    "-ms-transform": "rotate(" + ult + "deg)",
                    "-o-transform": "rotate(" + ult + "deg)",
                    "transform": "rotate(" + ult + "deg)"
                });
                hour_h.css({
                    "-webkit-transform": "rotate(" + hour + "deg)",
                    "-moz-transform": "rotate(" + hour + "deg)",
                    "-ms-transform": "rotate(" + hour + "deg)",
                    "-o-transform": "rotate(" + hour + "deg)",
                    "transform": "rotate(" + hour + "deg)"
                });
            }, 30)
        }
    };
    $.fn.analogClock = function(options) {
        return this.each(function() {
            var element = $(this);
            if (element.data('analogWatch')) {
                return;
            }
            var analogwatch = new AnalogClock(this,options);
            element.data('analogWatch', analogwatch);
        });
    }
    ;
    /*analogWatch Defaults*/
    $.fn.analogClock.defaults = {
        watch: 'medium',
        minor: true,
        major: true,
        second_hand: true,
        logo: false,
        logo_text: 'Name',
        GMT: false,
        GMT_offset: 0,
        effect: "tick",
        extended: {
            x_size: "normal",
            inner_minor: true,
            inner_major: true,
            inner_major_type: 'sticks'
        }
    };
}
)(jQuery);
