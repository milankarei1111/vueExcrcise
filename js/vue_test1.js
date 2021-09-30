// 複製新的functon功能
/**
 * 資料綁定
 */
var app = new Vue({
    el:'#app',                    // 功能要綁哪個元素的id
    data: {                        // 資料內容要那些
        message: 'hello world !!',
        score: 60
    }
});

var str = 2;
function addText(){
    var str = 3;
}
addText();
console.log(str);

// element  元素 el
// template 樣板 {{}}
// angular、react、vue ，用數據驅動內容

/**
 * 指令 v-if、v-for、v-on、v-model
 */
var app = new Vue({
    el:'#app2',
    data: {
        message: '指令 v-if',
        loading : false
    }  
});

var app = new Vue({
    el:'#score',
    data: {
        message: '指令 v-if',
        score: 80,
    }  
});

var app = new Vue({
    el:'#app3',
    data: {
        message123: '1000'
    }
});

var app = new Vue({
    el:'.app3',
    data: {
        message: '指令 v-for迴圈',
        colors: ['blue', 'red', 'black'],
        homes: [
                {
                    father:'john'
                },
                {
                    father:'tom'
                },
                {
                    father:'bob'
                }
        ]
    },
    methods: {
        myfather: function(father){
            alert('我的爸爸是' + father)
        }
    }
});

function check(){
    console.log(this);
}
check();

var colors = ['yellow', 'blue', 'red', 'pink'];
colors.splice(2,1); // 刪除第幾筆索引,筆數
console.log(colors); // yellow,blue,pink
console.log(colors.indexOf('pink')) // 詢問該資料在第幾筆索引  2
colors.splice(colors.indexOf('blue')); // 1
console.log(colors);  // yellow 

