!function(n){"use strict";n.fn.countdown=function(e){return n.fn.countdown.begin(this,n.extend({year:2016,month:1,day:1,hour:0,minute:0,second:0,timezone:-6,labels:!0,onFinish:function(){}},e))},n.fn.countdown.begin=function(e,t){var o,a,i;i=new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second),a=n.fn.countdown.convertTimezone(t.timezone),o=n.fn.countdown.getTimeRemaining(a,i,t),t.init?n.each(o,function(e,t){n(".time","#"+e).text(t<10?"0"+t:t.toLocaleString()),n(".label","#"+e).text(1===t?n.fn.countdown.singularize(e):e)}):(n.each(o,function(o,a){var i,d,r,u;i=n("<div/>").addClass("col-xs-6 col-sm-3").attr("id",o),d=n("<div/>").addClass("wrapper"),r=n("<span/>").addClass("time").text(a<10?"0"+a:a.toLocaleString()),t.labels?(u=n("<span/>").addClass("label").text(1===a?n.fn.countdown.singularize(o):o),i.append(d.append(r).append(u))):i.append(d.append(r)),e.append(i.addClass("animated rotateIn"))}),t.init=!0),t.target_reached?t.onFinish():setTimeout(function(){n.fn.countdown.begin(e,t)},1e3)},n.fn.countdown.singularize=function(n){return n.substr(0,n.length-1)},n.fn.countdown.convertTimezone=function(n){var e,t,o;return t=(e=new Date).getTime(),o=6e4*e.getTimezoneOffset(),new Date(t+o+36e5*n)},n.fn.countdown.getTimeRemaining=function(n,e,t){var o,a;return a={},0===(o=(o=e.getTime()-n.getTime())<0?0:o)&&(t.target_reached=!0),a.days=Math.floor(o/864e5),a.hours=Math.floor(24*(o/864e5-a.days)),a.minutes=Math.floor(60*(24*(o/864e5-a.days)-a.hours)),a.seconds=Math.floor(o/1e3%60),a}}(jQuery);
