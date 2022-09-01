var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var bg = storage.bg;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
    data = data.split(',');
    // console.log('已存在localStorage的数据：' + data); //已存在localStorage的数据
    $('#state a img').attr('src', data[0]); //头图
    $('.submitButton').css('background-color', data[1]); //按钮bgc
    $('#inputText').attr('placeholder', data[2]);
    $('#form').attr('action', data[3]);
    $('#inputText').attr('name', data[4]);
    $('#Select').css('color', data[1]);
    $('.span').css('background-color', data[1]);
}

if (storage.night != undefined) {
    night = night.split(',');
    console.log(night);
    $('#main').css('background-color', night[0]); //主界面
    $('#menu').css('background-color', night[1]); //侧栏
    document.getElementById("night").innerHTML = night[2];
    li.css('background-color', night[3]);
    li.css('color', night[4]);
    blockquote.css('color', night[5]);
}

if (storage.bg != undefined) {
    bg = bg.split(',');
    $('#main').css('background-image', bg[0]);
}

// rgb to hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
// rgb to hex结束

// 添加书签
$(function() {
        var bookmark = {
            data: [{
                name: '酷安',
                link: 'https://www.coolapk.com',
                box_shadow: '#11B063',
                icon: 'images/coolapk.png',
            }, {
                name: 'Via插件',
                link: 'http://via-app.cn',
                box_shadow: '#FA7199',
                icon: 'images/via.png',
            }, {
                name: '今日热榜',
                link: 'https://tophub.today/',
                box_shadow: '#F2584A',
                icon: 'images/headline.png',
            }, {
                name: '知乎',
                link: 'https://www.zhihu.com/',
                box_shadow: '#0078D8',
                icon: 'images/zhihulogo.png',
            }, {
                name: '小米商城',
                link: 'https://m.mi.com/',
                box_shadow: '#F57923',
                icon: 'images/mi.png',
            }, {
                name: 'unsplash',
                link: 'https://unsplash.com/',
                box_shadow: '#2C2C2C',
                icon: 'images/unsplash.png',
            }, {
                name: '豆瓣',
                link: 'https://m.douban.com/',
                box_shadow: '#37bf4c',
                icon: 'images/douban.png',
            }, {
                name: '虎扑',
                link: 'https://www.hupu.com/',
                box_shadow: '#c01d2f',
                icon: 'images/hupu.png',
            }, {
                name: '斗鱼',
                link: 'https://www.douyu.com/',
                box_shadow: '#fe7700',
                icon: 'images/douyu.png',
            }, {
                name: 'CSDN',
                link: 'https://www.csdn.net/',
                box_shadow: '#c5000a',
                icon: 'images/csdn.png',
            }, {
                name: 'XDA',
                link: 'https://www.xda-developers.com/',
                box_shadow: '#AC6E2F',
                icon: 'images/xda.png',
            }, {
                name: '少数派',
                link: 'https://sspai.com/',
                box_shadow: '#D7191A',
                icon: 'images/sspai.png',
            }, {
                name: '小众软件',
                link: 'https://www.appinn.com/',
                box_shadow: '#3279ea',
                icon: 'images/xiaozhong.png',
            }, {
                name: '数字尾巴',
                link: 'https://www.dgtle.com/',
                box_shadow: '#62677b',
                icon: 'images/shuziweiba.png',
            }, {
                name: '疫情跟踪',
                link: 'https://app.21jingji.com/html/2020yiqing/',
                box_shadow: '#7C5DC7',
                icon: 'images/ding.png',
            }, {
                name: '疫情辟谣',
                link: 'https://vp.fact.qq.com/home',
                box_shadow: '#00A0E9',
                icon: 'images/true.png',
            }]
        }
        for (var i = 0; i < bookmark.data.length; i++) {
            if (bookmark.data[i].name == 'Via插件') {
                var addList = '<li class="folder-item col-xs-3 col-sm-2 visible-xs visible-sm"><a target="_blank" href="' + bookmark.data[i].link + '"><div class="folder-item-box"><img class="folder-item-img" style="box-shadow:' + bookmark.data[i].box_shadow + ' 0 14px 12px -6px" src="' + bookmark.data[i].icon + '" /><p>' + bookmark.data[i].name + '</p></div></a></li>'
            } else {
                var addList = '<li class="folder-item col-xs-3 col-sm-2"><a target="_blank" href="' + bookmark.data[i].link + '"><div class="folder-item-box"><img class="folder-item-img" style="box-shadow:' + bookmark.data[i].box_shadow + ' 0 14px 12px -8px" src="' + bookmark.data[i].icon + '" /><p>' + bookmark.data[i].name + '</p></div></a></li>'
            }
            $('#folder ul').append(addList);
        }
    })
    // 添加书签结束

// 搜索相关
$(function() {
    var search = {
        data: [{
            name: 'baidu',
            icon: 'images/baidu-xs.png',
            searchlink: 'https://www.baidu.com/s',
            searchname: 'wd',
            color: '#3245df',
            placeholder: '百度一下...'
        }, {
            name: 'google',
            icon: 'images/google-xs.png',
            searchlink: 'https://www.google.com/search',
            searchname: 'q',
            color: '#4285f4',
            placeholder: '咕噜咕噜...'
        }, {
            name: 'bing',
            icon: 'images/bing-xs.png',
            searchlink: 'https://cn.bing.com/search',
            searchname: 'q',
            color: '#00868B',
            placeholder: 'Bing搜索...'
        }, {
            name: 'yahoo',
            icon: 'images/yahoo-xs.png',
            searchlink: 'https://search.yahoo.com/search',
            searchname: 'p',
            color: '#5f01d1',
            placeholder: 'Yahoo~'
        }, {
            name: 'magi',
            icon: 'images/magi-xs.png',
            searchlink: 'https://magi.com/search',
            searchname: 'q',
            color: 'black',
            placeholder: 'Mag[i]...'
        }, {
            name: 'sougou',
            icon: 'images/sougou-xs.png',
            searchlink: 'https://www.sogou.com/web',
            searchname: 'query',
            color: '#f94c18',
            placeholder: '搜狗搜索...'
        }, {
            name: 'wechat',
            icon: 'images/wechat-xs.png',
            searchlink: 'https://weixin.sogou.com/weixin',
            searchname: 'query',
            color: '#2ca43a',
            placeholder: '搜微信文章...'
        }, {
            name: 'quark',
            icon: 'images/quark-xs.png',
            searchlink: 'https://quark.sm.cn/s',
            searchname: 'q',
            color: '#6182f6',
            placeholder: '夸克搜索...'
        }, {
            name: 'taobao',
            icon: 'images/taobao-xs.png',
            searchlink: 'https://s.taobao.com/search',
            searchname: 'q',
            color: '#FF5B00',
            placeholder: '淘，我喜欢...'
        }, {
            name: 'jingdong',
            icon: 'images/jingdong-xs.png',
            searchlink: 'https://search.jd.com/Search',
            searchname: 'keyword',
            color: '#F30213',
            placeholder: '多，快，好，省...'
        }, {
            name: 'bilibili',
            icon: 'images/bilibili-xs.png',
            searchlink: 'https://search.bilibili.com/all',
            searchname: 'keyword',
            color: '#e47494',
            placeholder: 'b站是一个学习网站...'
        }, {
            name: 'github',
            icon: 'images/github-xs.png',
            searchlink: 'https://github.com/search',
            searchname: 'q',
            color: '#24292e',
            placeholder: '全球最大的开源社区...'
        }, {
            name: 'toutiao',
            icon: 'images/toutiao-xs.png',
            searchlink: 'https://m.toutiao.com/search',
            searchname: 'keyword',
            color: '#ed2f28',
            placeholder: '搜今日头条...'
        }, {
            name: 'weibo',
            icon: 'images/weibo-xs.png',
            searchlink: 'https://s.weibo.com/weibo',
            searchname: 'q',
            color: '#e6162d',
            placeholder: '搜微博...'
        }, {
            name: 'zhihu',
            icon: 'images/zhihu-xs.png',
            searchlink: 'https://www.zhihu.com/search',
            searchname: 'q',
            color: '#1087eb',
            placeholder: '我们都是有问题的人...'
        }, {
            name: 'kuaidi',
            icon: 'images/kuaidi-xs.png',
            searchlink: 'https://m.kuaidi100.com/result.jsp',
            searchname: 'nu',
            color: '#317EE7',
            placeholder: '搜快递...'
        }]
    }
    for (var i = 0; i < search.data.length; i++) { //添加搜索按钮
        var addList = '<li class="folder-item2 col-xs-3 col-sm-2"> <a href="#"> <div class="folder-item-box2"> <img id="' + search.data[i].name + '" class="folder-item-img2" src="' + search.data[i].icon + '" /> </div> </a> </li> '
        $('.nav ul').append(addList);
    }

    // 切换搜索引擎
    $(document).click(function(e) {
            var id = e.target.id;
            for (var i = 0; i < search.data.length; i++) {
                if (id == search.data[i].name) {
                    document.getElementById("state").innerHTML = "<a><img style='width:300px;' src='images/" + search.data[i].name + ".png'></a>";
                    $('#submitButton').css('background-color', search.data[i].color); //按钮bg
                    $('#Select').css('color', search.data[i].color); //选择器
                    $('#nav').css('display', 'none');
                    $('#folder').css('display', 'block');
                    document.getElementById("Select").innerHTML = "<hr>书签 <img src='images/search-change.svg'>";
                    $("#inputText").attr("placeholder", search.data[i].placeholder);
                    $("#form").attr("action", search.data[i].searchlink);
                    $("#inputText").attr("name", search.data[i].searchname);

                    //存入用户数据
                    var searchPho = $('#state a img').attr("src"); //搜索引擎头图
                    var color = rgb2hex($('.submitButton').css('background-color')); //搜索按钮颜色和搜索框四边颜色
                    var searchL = $('#form').attr("action"); //searchlink
                    var searchN = $('#inputText').attr("name"); //searchname
                    var placeholder = $('#inputText').attr('placeholder');
                    storage.data = [searchPho, color, placeholder, searchL, searchN] //记录用户数据
                        // console.log('新存入localStorage的数据：' + storage.data); //新存入localStorage的数据
                    break;
                }
            }
        })
        // 搜索相关结束

    // 夜间模式
    $('#night').click(function() {
            if (rgb2hex($('#main').css('background-color')) == '#ffffff') {
                $('#main').css('background-color', '#2f2f33'); //主界面
                $('#menu').css('background-color', '#5C5C5C'); //侧栏
                document.getElementById("night").innerHTML = "日间模式";
                li.css({
                    "background-color": "#575757",
                    "color": "#DBDBDB"
                });
                blockquote.css('color', '#DBDBDB');
            } else if (rgb2hex($('#main').css('background-color')) == '#2f2f33') {
                $('#main').css('background-color', '#ffffff'); //主界面
                $('#menu').css('background-color', '#EDEDED'); //侧栏
                document.getElementById("night").innerHTML = "夜间模式";
                li.css({
                    "background-color": "#E3E3E3",
                    "color": "black"
                });
                blockquote.css('color', 'black');
            }
            var mainbg = rgb2hex($('#main').css('background-color'));
            var menubg = rgb2hex($('#menu').css('background-color'));
            var inner = document.getElementById("night").innerHTML;
            var libg = rgb2hex(li.css('background-color'));
            var lico = rgb2hex(li.css('color'));
            var blockquoteco = rgb2hex(blockquote.css('color'));
            // storage.night = [mainbg, menubg, inner, libg, lico, blockquoteco];
            // localStorage.clear()
        })
        // 夜间模式结束
})

//检查搜索框是否为空
function check() {
    var o = document.getElementById("inputText");
    var v = o.value;
    v = v.replace(/[ ]/g, "");
    if (v == '') {
        return false;
    }
}
//检查搜索框是否为空结束

//title问候语
var d = new Date();
var time = d.getHours();
if (time < 24) {
    document.getElementById("title").innerHTML = "Good evening";
}
if (time < 18) {
    document.getElementById("title").innerHTML = "Good afternoon";
}
if (time < 12) {
    document.getElementById("title").innerHTML = "Good morning";
}
if (time < 5) {
    document.getElementById("title").innerHTML = "Stay up late again";
}
//title问候语结束

//导航、引擎选择器
function select() {
    $('#folder').css('display') == 'block' ? ($('#folder').css('display', 'none'), $('#nav').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>切换搜索引擎<img src='images/search-change.svg'>") : ($('#nav').css('display', 'none'), $('#folder').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>书签<img src='images/search-change.svg'>");
}
//导航、引擎选择器结束

// 搜索提示词
class searchHint {
    constructor() {
        this.search = inputText;
        this.list = list;
        this.body = document.body;
        this.init();
    };
    init() {
        this.watchInput();
    };
    watchInput() {
        this.search.onkeyup = () => {
            if (this.search.value.length == 0) {
                this.list.innerHTML = '';
                return;
            }
            const script = document.createElement('script');
            script.src = "https://www.baidu.com/su?wd=" + this.search.value + "&cb=jsonp.showMsg";
            this.body.appendChild(script);
            this.body.removeChild(script);
        }
    };
    showMsg(msg) {
        var href = $('#form').attr('action');
        var name = $('#inputText').attr('name');
        var v = $('#inputText').val();
        var str = '';
        for (var i = 0; i < msg.s.length; i++) {
            var sk = new Array();
            sk[i] = msg.s[i].replace(/\s*/g, ''); //去掉关键字空格
            str += '<a href=' + href + '?' + name + '=' + sk[i] + '><li><span>' + (i + 1) + '</span>' + msg.s[i] + '</li></a>';
        }
        this.list.innerHTML = str;
        if (str) { //有返回才显示#searchlist
            $('#searchlist').css("display", "block");
        }
        document.onkeydown = function(event) {
            if (event.keyCode == 8 && v.length == 1) {
                $('#searchlist').css("display", "none");
            }
        };
        $(document).click(function() { //点击其他地方隐藏#searchlist
            $('#searchlist').css("display", "none");
        });
    }
}
const jsonp = new searchHint();