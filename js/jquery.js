jQuery.fn.superLightBox=function(e){var i,r,t,l,s={gallery:!0,swipe:!0,keyboard:!0,closeOutClick:!0,videopreviewurl:"images/video-preview.jpg",galleryThumbnailWidth:100,galleryThumbanilGap:1,maxZoom:3,mediaAttribute:"href",mediaCaption:"data-superlightcaption"},o=[],u=[],n=[],a=[],p=0,h=0,g=0,d=jQuery.extend({},s,e);d.keyboard&&jQuery(document).keyup(function(e){jQuery(".superlightboxcontainer").length&&jQuery(".superlightboxcontainer").hasClass(l)&&(e.preventDefault(),27==e.keyCode?v():37==e.keyCode||38==e.keyCode?w(i-1):39!=e.keyCode&&40!=e.keyCode||w(i+1))}),jQuery(window).resize(function(){jQuery(".superlightboxcontainer").length&&jQuery(".superlightboxcontainer").hasClass(l)&&(m(),_())});var c=function(e){var r=e.attr("href");if(o.indexOf(r)>-1){i=o.indexOf(r),jQuery(".superlightboxcontainer").length&&jQuery(".superlightboxcontainer").remove(),jQuery("body").append(L());var t='<div class="superlightbox_slide"></div>';jQuery(".superlightbox_slider").append(t),jQuery(".superlightbox_slider").append(t),jQuery(".superlightbox_slider").append(t),d.gallery&&o.length>1&&y(),jQuery(".superlightboxcontainer").fadeIn(),f(),w(i)}},y=function(){var e="";for(var i in o)e+=x(o[i],i);jQuery(".superlightbox_gallery_wrapper").append(e);var r=0;jQuery(".superlightbox_gallery_wrapper > div").each(function(e){var i=e*d.galleryThumbnailWidth+e*d.galleryThumbanilGap;r=i,jQuery(this).css({left:i})}),r+=d.galleryThumbnailWidth,jQuery(".superlightbox_gallery_wrapper").width(r)},b=function(e){if(jQuery(".superlightboxcontainer").length){var i=jQuery(window).width();if(jQuery(".superlightbox_gallery_wrapper").width()>i){var r=parseInt(jQuery(".superlightbox_gallery_wrapper").position().left)-e*i,t=-jQuery(".superlightbox_gallery_wrapper").width()+i;r<t?r=t:r>0&&(r=0),jQuery(".superlightbox_gallery_wrapper").animate({left:r},d.easingTime,function(){})}}},_=function(){if(jQuery(".superlightboxcontainer").length&&d.gallery){if(jQuery(window).width()>jQuery(".superlightbox_gallery_wrapper").width()){var e=(jQuery(window).width()-jQuery(".superlightbox_gallery_wrapper").width())/2;jQuery(".superlightbox_gallery_wrapper").css({left:e})}else jQuery(".superlightbox_gallery_wrapper").css({left:0});jQuery(".superlightbox_gallery_wrapper").is(":visible")?jQuery(".superlightbox_gallery_nav").show():jQuery(".superlightbox_gallery_nav").hide()}},x=function(e,i){var r=Z(e),t="",l="";return"image"==r?t=e:"youtube"==r?(t=W(e),l=" superlightbox_video"+S(e)):"vimeo"==r&&(t=d.videopreviewurl,O(e),l=" superlightbox_video"+q(e)),'<div class="superlightbox_thumb'+i+l+'" style="background-image: url(\''+t+"')\"></div>"},v=function(){if(jQuery(".superlightboxcontainer").length){var e=jQuery(".superlightbox_slide"+i);e.length&&e.addClass("superlightbox_remove"),jQuery(".superlightboxcontainer").fadeOut("slow",function(){jQuery(this).remove()})}},f=function(){jQuery(".superlightboxcontainer").length&&(jQuery(".superlightbox_close").click(function(){v()}),d.closeOutClick&&jQuery(".superlightbox_slider").click(function(e){"IMG"!=e.target.nodeName&&v()}),jQuery(".superlightbox_prev").click(function(){w(i-1)}),jQuery(".superlightbox_next").click(function(){w(i+1)}),d.gallery&&(jQuery(".superlightbox_gallery_button").click(function(){jQuery(this).hasClass("superlightbox_gallery_open")?(jQuery(this).removeClass("superlightbox_gallery_open"),jQuery(this).addClass("superlightbox_gallery_close"),jQuery(".superlightbox_gallery_wrapper").slideDown(),jQuery(".superlightbox_slider").addClass("superlightbox_gallery_visible"),_()):(jQuery(this).removeClass("superlightbox_gallery_close"),jQuery(this).addClass("superlightbox_gallery_open"),jQuery(".superlightbox_gallery_wrapper").slideUp(),jQuery(".superlightbox_gallery_nav").hide(),jQuery(".superlightbox_slider").removeClass("superlightbox_gallery_visible"))}),jQuery(".superlightbox_gallery_prev").click(function(){b(-1)}),jQuery(".superlightbox_gallery_next").click(function(){b(1)}),jQuery(".superlightbox_gallery_wrapper > div").click(function(){w(jQuery(this).index())}),d.swipe&&z(".superlightbox_gallery_wrapper",{swipeStart:function(e){p=jQuery(".superlightbox_gallery_wrapper").position().left},swipe:function(e){jQuery(window).width();jQuery(".superlightbox_gallery_wrapper").css({left:e.eX-e.sX+p})},swipeEnd:function(e,i){Math.abs(e.sX),Math.abs(e.eX);var r=jQuery(window).width(),t=jQuery(".superlightbox_gallery_wrapper").width();if(r>t){var l=(r-t)/2;jQuery(".superlightbox_gallery_wrapper").animate({left:l},d.easingTime)}else jQuery(".superlightbox_gallery_wrapper").position().left>0?jQuery(".superlightbox_gallery_wrapper").animate({left:0},d.easingTime):jQuery(".superlightbox_gallery_wrapper").position().left<-t+r&&jQuery(".superlightbox_gallery_wrapper").animate({left:-t+r},d.easingTime)}})),d.swipe&&z(".superlightbox_wrapper",{pinchImage:".superlightbox_slider > div:eq(1) img",maxZoom:d.maxZoom,pinchZoom:function(e){jQuery(".superlightbox_slider > div:eq(1) img").css(e)},pinchZoomStart:function(e){jQuery(".superlightbox_slider").addClass("superlightbox_sliding")},pinchZoomEnd:function(e){jQuery(".superlightbox_slider").removeClass("superlightbox_sliding"),X()},swipeStart:function(e){jQuery(".superlightbox_slider").addClass("superlightbox_sliding")},swipe:function(e){var i=jQuery(window).width();jQuery(".superlightbox_slider").css({left:-i+e.eX-e.sX})},swipeEnd:function(e,r){var t=Math.abs(e.sX)-Math.abs(e.eX),l=.2*(s=jQuery(window).width());if(Math.abs(t)>l)w(t>0?i+1:i-1);else{var s=jQuery(window).width();jQuery(".superlightbox_slider").animate({left:-s},d.easingTime,function(){jQuery(".superlightbox_slider").removeClass("superlightbox_sliding")})}}}))},w=function(e){var l="right";e<i&&(l="left"),e<0||e==o.length-1?(e=o.length-1,r=e-1,t=0):e>=o.length||0==e?(e=0,r=o.length-1,t=1):(r=e-1,t=e+1);var s,u=Y(e),n=1;e!=i?("left"==l?(s=jQuery(".superlightbox_slider > div:first"),n=-1):s=jQuery(".superlightbox_slider > div:last"),s.hasClass("superlightbox_slide"+e)||(s.replaceWith(u),k(e),X()),j(n),i=e):0==jQuery(".superlightbox_slider > div.superlightbox_slide"+e).length&&(jQuery(".superlightbox_slider > div:first").replaceWith(Y(r)),jQuery(".superlightbox_slider > div:eq(1)").replaceWith(u),jQuery(".superlightbox_slider > div:last").replaceWith(Y(t)),k(r),k(e),k(t),X())},j=function(e){if(jQuery(".superlightboxcontainer").length&&3==jQuery(".superlightbox_slider > div").length){var i=jQuery(window).width(),r=0;e>0&&(r=-2*i),jQuery(".superlightbox_slider").addClass("superlightbox_sliding"),jQuery(".superlightbox_slider").animate({left:r},d.easingTime,Q)}},Q=function(){var e=".superlightbox_slider > .superlightbox_slide"+i,l=".superlightbox_slider > .superlightbox_slide"+t,s=".superlightbox_slider > .superlightbox_slide"+r;jQuery(".superlightbox_slider > div").not(e+","+l+","+s).remove(),jQuery(e).length>1&&(0==jQuery(".superlightbox_slider").position().left?jQuery(e+":last").remove():jQuery(e+":first").remove()),jQuery(s).length>1&&jQuery(s+":last").remove(),jQuery(l).length>1&&jQuery(l+":first").remove(),jQuery(".superlightbox_slider > div:first").hasClass("superlightbox_slide"+r)||(jQuery(s).remove(),jQuery(".superlightbox_slider").prepend(Y(r)),k(r)),jQuery(".superlightbox_slider > div:last").hasClass("superlightbox_slide"+t)||(jQuery(l).remove(),jQuery(".superlightbox_slider").append(Y(t)),k(t)),jQuery(".superlightbox_slider").removeClass("superlightbox_sliding"),X(),C(i)},m=function(){C(r),C(i),C(t),X()},C=function(e){if(jQuery(".superlightboxcontainer").length){var r=jQuery(window).height(),t=jQuery(window).width();if(n[e]){e==i&&(g=0,h=0);var l=jQuery(".superlightbox_slide"+e),s=n[e],o=a[e],u=parseInt(s*t),p=parseInt(o*r);u>r?(l.find("img").css({height:r,width:p,left:"50%",top:"50%"}),jQuery(".superlightbox_slide"+e).find(".superlightbox_caption").length&&jQuery(".superlightbox_slide"+e).find(".superlightbox_caption").css({"max-width":p})):(l.find("img").css({width:t,height:u,left:"50%",top:"50%"}),jQuery(".superlightbox_slide"+e).find(".superlightbox_caption").length&&jQuery(".superlightbox_slide"+e).find(".superlightbox_caption").css({"max-width":t}))}else jQuery(".superlightbox_slide"+e).find(".superlightbox_embed_wrapper").length&&(jQuery(".superlightbox_slide"+e).find(".superlightbox_embed_wrapper").css({"max-width":parseInt(1.77*r)}),jQuery(".superlightbox_slide"+e).find(".superlightbox_caption").length&&jQuery(".superlightbox_slide"+e).find(".superlightbox_caption").css({"max-width":parseInt(1.77*r)}))}},X=function(){var e=jQuery(window).width();jQuery(".superlightbox_slider > div").each(function(i){jQuery(this).css({left:i*e,width:e})}),jQuery(".superlightbox_slider").css({left:-e,width:3*e})},Y=function(e){if(!o[e])return"";var i,r=o[e],t=Z(r);return"image"==t?i='<div class="superlightbox_slide superlightbox_slide'+e+' superloading">':"youtube"==t?(i='<div class="superlightbox_slide superlightbox_slide_video superlightbox_slide'+e+'">',i+=T(r)):"vimeo"==t&&(i='<div class="superlightbox_slide superlightbox_slide_video superlightbox_slide'+e+'">',i+=D(r)),""!=u[e]&&(i+='<div class="superlightbox_caption">'+u[e]+"</div>"),i+="</div>"},k=function(e){var i=o[e];if("image"==Z(i)){var r=new Image;r.superindex=e,r.onload=E,r.src=i}else C(e)},E=function(){if(void 0!==this.superindex&&jQuery(".superlightbox_slide"+this.superindex).length){var e=jQuery(".superlightbox_slide"+this.superindex),i="";""!=u[this.superindex]&&(i='<div class="superlightbox_caption">'+u[this.superindex]+"</div>"),e.html('<img src="'+this.src+'" />'+i),n[this.superindex]=this.naturalHeight/this.naturalWidth,a[this.superindex]=this.naturalWidth/this.naturalHeight,C(this.superindex),setTimeout(function(){e.removeClass("superloading")},800)}},Z=function(e){var i=e.split(".").reverse()[0].toLowerCase();return jQuery.inArray(i,["jpg","jpeg","png","gif"])>-1?"image":M(e)?"youtube":I(e)?"vimeo":""},I=function(e){var i=/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i.exec(e);return i&&i[1]},M=function(e){var i=/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i.exec(e);return i&&i[1]},T=function(e){return'<div class="superlightbox_embed_wrapper"><div class="superlightbox_embed"><iframe width="560" height="315" src="//www.youtube.com/embed/'+S(e)+'" frameborder="0" allowfullscreen></iframe></div></div>'},S=function(e){var i=e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!=i?i[1]:""},W=function(e){return"https://img.youtube.com/vi/"+S(e)+"/0.jpg"},D=function(e){var i=/(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(\S+)/g;if(i.test(e))var e=e.replace(i,'<div class="superlightbox_embed_wrapper"><div class="superlightbox_embed"><iframe width="420" height="345" src="//player.vimeo.com/video/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>');return e},O=function(e){var i=q(e);jQuery.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+i+".json",jsonp:"callback",dataType:"jsonp",success:function(e){if(jQuery(".superlightbox_video"+e[0].id).length){var i=e[0].thumbnail_large;jQuery(".superlightbox_video"+e[0].id).css({"background-image":"url('"+i+"')"})}}})},q=function(e){var i=e.match(/^.+vimeo.com\/(.*\/)?([^#\?]*)/);return i?i[2]||i[1]:null},L=function(){return'<div class="superlightboxcontainer '+l+'" style="display:none;"><a href="javascript: void(0);" class="superlightbox_close"></a><div class="superlightbox_wrapper"><div class="superlightbox_slider"></div></div><div class="superlightbox_gallery"><a href="javascript: void(0);" class="superlightbox_gallery_button superlightbox_gallery_open"></a><a href="javascript: void(0);" class="superlightbox_gallery_nav superlightbox_gallery_prev" style="display: none;"></a><a href="javascript: void(0);" class="superlightbox_gallery_nav superlightbox_gallery_next" style="display: none;"></a><div class="superlightbox_gallery_wrapper" style="display: none;"></div></div><a href="javascript: void(0);" class="superlightbox_prev"></a><a href="javascript: void(0);" class="superlightbox_next"></a></div>'},z=function(e,i){var r={pinchImage:"",pinchZoom:function(e){},pinchZoomStart:function(){},pinchZoomEnd:function(){},swipe:function(e){},swipeLeft:function(e){},swipeRight:function(e){},swipeUp:function(e){},swipeDown:function(e){},swipeStart:function(e){},swipeEnd:function(e,i){},maxZoom:3},t=jQuery.extend({},r,i),l=new Object,s=!1,o=!1;l.sX=0,l.sY=0,l.eX=0,l.eY=0;var u,n,a,p,d,c,y,b,_,x,v,f,w,j,Q,m,C,X,Y,k,E,Z,I,M,T,S,W,D,O=20,q=40,L="",z=1,A=0,G=0,U=h,B=g,H=jQuery(e);H.on("touchstart",function(e){if(1==e.originalEvent.touches.length){s=!0,o=!1;var i=e.originalEvent.touches[0];l.sX=i.screenX,l.sY=i.clientY,1==z?t.swipeStart(l):t.pinchZoomStart()}else if(2==e.originalEvent.touches.length){s=!1,o=!0;var r=jQuery(window).width()/2,d=jQuery(window).height()/2;0==h&&0==h&&(h=jQuery(t.pinchImage).width(),g=jQuery(t.pinchImage).height(),z=1,A=r-(U=h),G=d-(B=g)),u=e.originalEvent.touches[0].clientX,n=e.originalEvent.touches[0].clientY,a=e.originalEvent.touches[1].clientX,p=e.originalEvent.touches[1].clientY,W=((C=(u+a)/2)-A)/U,D=((X=(n+p)/2)-G)/B,_=Math.sqrt(Math.pow(a-u,2)+Math.pow(p-n,2)),t.pinchZoomStart()}}),H.on("touchmove",function(e){if(e.preventDefault(),s){var i=e.originalEvent.touches[0];l.eX=i.screenX,l.eY=i.clientY,z>1?((r={}).left=A+U+(l.eX-l.sX),r.top=G+B+(l.eY-l.sY),t.pinchZoom(r)):t.swipe(l)}else if(o){d=e.originalEvent.touches[0].clientX,c=e.originalEvent.touches[0].clientY,y=e.originalEvent.touches[1].clientX,b=e.originalEvent.touches[1].clientY,x=Math.sqrt(Math.pow(y-d,2)+Math.pow(b-c,2)),T=(E=(U-(j=h*(f=(v=x/_)*z)))*W)+(I=-C+(Y=(d+y)/2)),S=(Z=(B-(w=g*f))*D)+(M=-X+(k=(c+b)/2)),Q=parseInt(A+T),m=parseInt(G+S);var r={};r.left=Q+j,r.top=m+w,r.width=j,r.height=w,t.pinchZoom(r)}}),H.on("touchend",function(e){if(s){if(z>1)return A+=l.eX-l.sX,void(G+=l.eY-l.sY);var i=jQuery(window).width(),r=jQuery(window).height();O=.1*i,q=.1*r,(l.eX-O>l.sX||l.eX+O<l.sX)&&l.eY<l.sY+50&&l.sY>l.eY-50&&(L=l.eX>l.sX?"l":"r"),(l.eY-q>l.sY||l.eY+q<l.sY)&&l.eX<l.sX+40&&l.sX>l.eX-40&&(L=l.eY>l.sY?"d":"u"),""!=L&&("l"==L?t.swipeLeft(l):"r"==L?t.swipeRight(l):"u"==L?t.swipeUp(l):"d"==L&&t.swipeDown(l)),t.swipeEnd(l,L),L=""}else if(o){var u=jQuery(window).width()/2,n=jQuery(window).height()/2;if(f<1)f=1,(a={}).left="50%",a.top="50%",a.width=h,a.height=g,t.pinchZoom(a),Q=u-h,m=n-g,j=h,w=g;else if(f>t.maxZoom){f=t.maxZoom,T=(E=(U-(j=h*f))*W)+(I=-C+Y),S=(Z=(B-(w=g*f))*D)+(M=-X+k),Q=parseInt(A+T),m=parseInt(G+S);var a={};a.left=Q+j,a.top=m+w,a.width=j,a.height=w,t.pinchZoom(a)}A=Q,G=m,U=j,B=w,z=f,t.pinchZoomEnd()}s=!1,o=!1}),H.on("touchcancel",function(e){s=!1,o=!1})};return l=function(e,i){i=i||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var r="",t=0;t<e;t++){var l=Math.floor(Math.random()*i.length);r+=i.substring(l,l+1)}return r}(10),this.each(function(){var e=jQuery(this),i=e.attr(d.mediaAttribute);if(jQuery.inArray(i,o)<0){o.push(i);var r=void 0!==e.attr(d.mediaCaption)?e.attr(d.mediaCaption):"";u.push(r)}e.click(function(e){e.preventDefault(),c(jQuery(this))})})},jQuery(document).ready(function(){jQuery(".supergallery").length&&jQuery(".supergallery").superLightBox({mediaCaption:"data-caption"})});