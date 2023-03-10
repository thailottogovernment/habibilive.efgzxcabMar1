/*!
* pickadate.js v3.2.2, 2013/09/19
* By Amsul, http://amsul.ca
* Hosted on http://amsul.github.io/pickadate.js
* Licensed under MIT
*/!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):this.Picker=a(jQuery)}(function(a){function b(d,e,f,g){function h(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",o.component.nodes(j.open),l.box),l.wrap),l.frame),l.holder)}function i(a){a.stopPropagation(),"focus"==a.type&&o.$root.addClass(l.focused),o.open()}if(!d)return b;var j={id:Math.abs(~~(1e9*Math.random()))},k=f?a.extend(!0,{},f.defaults,g):g||{},l=a.extend({},b.klasses(),k.klass),m=a(d),n=function(){return this.start()},o=n.prototype={constructor:n,$node:m,start:function(){return j&&j.start?o:(j.methods={},j.start=!0,j.open=!1,j.type=d.type,d.autofocus=d==document.activeElement,d.type="text",d.readOnly=!0,o.component=new f(o,k),o.$root=a(b._.node("div",h(),l.picker)).on({focusin:function(a){o.$root.removeClass(l.focused),a.stopPropagation()},"mousedown click":function(a){a.target!=o.$root.children()[0]&&a.stopPropagation()}}).on("click","[data-pick], [data-nav], [data-clear]",function(){var c=a(this),e=c.data(),f=c.hasClass(l.navDisabled)||c.hasClass(l.disabled),g=document.activeElement;g=g&&(g.type||g.href),(f||!a.contains(o.$root[0],g))&&d.focus(),e.nav&&!f?o.set("highlight",o.component.item.highlight,{nav:e.nav}):b._.isInteger(e.pick)&&!f?o.set("select",e.pick).close(!0):e.clear&&o.clear().close(!0)}),k.formatSubmit&&(o._hidden=a('<input type=hidden name="'+d.name+(k.hiddenSuffix||"_submit")+'"'+(m.data("value")?' value="'+b._.trigger(o.component.formats.toString,o.component,[k.formatSubmit,o.component.item.select])+'"':"")+">")[0]),m.addClass(l.input).on("focus.P"+j.id+" click.P"+j.id,i).on("change.P"+j.id,function(){o._hidden&&(o._hidden.value=d.value?b._.trigger(o.component.formats.toString,o.component,[k.formatSubmit,o.component.item.select]):"")}).on("keydown.P"+j.id,function(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(o.close(),!1):((32==b||c||!j.open&&o.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?o.clear().close():o.open()),void 0)}).val(m.data("value")?b._.trigger(o.component.formats.toString,o.component,[k.format,o.component.item.select]):d.value).after(o._hidden).data(e,o),k.container?a(k.container).append(o.$root):m.after(o.$root),o.on({start:o.component.onStart,render:o.component.onRender,stop:o.component.onStop,open:o.component.onOpen,close:o.component.onClose,set:o.component.onSet}).on({start:k.onStart,render:k.onRender,stop:k.onStop,open:k.onOpen,close:k.onClose,set:k.onSet}),d.autofocus&&o.open(),o.trigger("start").trigger("render"))},render:function(a){return a?o.$root.html(h()):o.$root.find("."+l.box).html(o.component.nodes(j.open)),o.trigger("render")},stop:function(){return j.start?(o.close(),o._hidden&&o._hidden.parentNode.removeChild(o._hidden),o.$root.remove(),m.removeClass(l.input).off(".P"+j.id).removeData(e),d.type=j.type,d.readOnly=!1,o.trigger("stop"),j.methods={},j.start=!1,o):o},open:function(e){return j.open?o:(m.addClass(l.active),o.$root.addClass(l.opened),e!==!1&&(j.open=!0,m.focus(),c.on("click.P"+j.id+" focusin.P"+j.id,function(a){a.target!=d&&a.target!=document&&o.close()}).on("keydown.P"+j.id,function(c){var e=c.keyCode,f=o.component.key[e],g=c.target;27==e?o.close(!0):g!=d||!f&&13!=e?a.contains(o.$root[0],g)&&13==e&&(c.preventDefault(),g.click()):(c.preventDefault(),f?b._.trigger(o.component.key.go,o,[f]):o.$root.find("."+l.highlighted).hasClass(l.disabled)||o.set("select",o.component.item.highlight).close())})),o.trigger("open"))},close:function(a){return a&&(m.off("focus.P"+j.id).focus(),setTimeout(function(){m.on("focus.P"+j.id,i)},0)),m.removeClass(l.active),o.$root.removeClass(l.opened+" "+l.focused),j.open&&(j.open=!1,c.off(".P"+j.id)),o.trigger("close")},clear:function(){return o.set("clear")},set:function(a,c,d){var e,f,g=b._.isObject(a),h=g?a:{};if(a){g||(h[a]=c);for(e in h)f=h[e],o.component.item[e]&&o.component.set(e,f,d||{}),("select"==e||"clear"==e)&&m.val("clear"==e?"":b._.trigger(o.component.formats.toString,o.component,[k.format,o.component.get(e)])).trigger("change");o.render()}return o.trigger("set",h)},get:function(a,c){return a=a||"value",null!=j[a]?j[a]:"value"==a?d.value:o.component.item[a]?"string"==typeof c?b._.trigger(o.component.formats.toString,o.component,[c,o.component.get(a)]):o.component.get(a):void 0},on:function(a,c){var d,e,f=b._.isObject(a),g=f?a:{};if(a){f||(g[a]=c);for(d in g)e=g[d],j.methods[d]=j.methods[d]||[],j.methods[d].push(e)}return o},trigger:function(a,c){var d=j.methods[a];return d&&d.map(function(a){b._.trigger(a,o,[c])}),o}};return new n}var c=a(document);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isObject:function(a){return{}.toString.call(a).indexOf("Object")>-1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&0===a%1}},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?(b._.trigger(g[e],g,[f]),this):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b});