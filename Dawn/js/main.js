layui.use(['layer', 'element'], function(){
    var $ = layui.$,
    layer = layui.layer,
    element = layui.element;
    $(".nav-btn").on('click', function(){
        $('.nav-btn dl').toggleClass('layui-show');
    });

    //友情链接tips
    $(".link div a").mouseover(function(e) {
        if ($.trim(this.title) != '') {
            this.Title = this.title;
            this.title = "";
            layer.tips(this.Title, this, {tips: 3});
        }
    }).mouseout(function() {
        if (this.Title != null) {
            this.title = this.Title;
        }
    })

    $(document).ready(function () {
        console.log('%c公主终仙逝\n少年点天灯\n恶龙今犹在\n不见安徒生', 'font-size:18px; font-weight:600; padding: 5px 10px; background: #f7aeb9; color:#F03861; text-shadow:0 1px 1px hsla(0,0%,100%,.8)');
        console.log('%c ♥♥♥♥♥♥♥♥♥♥♥♥♥ ', 'color:#EB3F34')
    })


    document.addEventListener('visibilitychange', function () {
        
        var isHidden = document.hidden;
        
        if (isHidden) {
            document.title = '_(:3 」∠)_你还会回来么？';
            
        } else {
            document.title = '阴影中的曙光';
            
        }
        
    });

    //文章图片点击事件
    $(".text img").click(function() {
        $.previewImage(this.src);
    });
    $.previewImage = function (src) {
        var img = new Image(), index = layer.load(2, {time: 0, scrollbar: false, shade: [0.02, '#000']});
        img.style.background = '#fff', img.style.display = 'none';
        img.src = src;
        document.body.appendChild(img), img.onerror = function () {
            layer.close(index);
        }, img.onload = function () {
            layer.open({
                type: 1, shadeClose: true, success: img.onerror, content: $(img), title: false,
                area: img.width > 1140 ? '1140px' : img.width, closeBtn: 1, skin: 'layui-layer-nobg', end: function () {
                    document.body.removeChild(img);
                }
            });
        };
    };
    
});