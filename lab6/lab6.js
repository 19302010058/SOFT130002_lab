/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var num = 1;
    var count = 0;
    s = setInterval(judge,5000)
    function judge() {
        var date = new Date();
        var second = date.getSeconds();
        if (second <= 55 && count <= 10) {
            num = num * 2;
            count = count + 1;
            console.log(num);
        } else if (second > 55 && count <= 10) {
            num = num * 2;
            count = count + 1;
            console.log("已到一分钟，停止！")
            clearInterval(s)
        }else if(count > 10){
            clearInterval(s)
            console.log("已计数超过10次，停止！")
        }
    }
}
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    var phone = /^[1][345789][0-9]{9}$/;
    var mail1 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(phone.test(telephone) === true&&mail1.test(mail) === true){
        console.log("The telephone and the mail are true!")
    }
    if(phone.test(telephone) === true&&mail1.test(mail) === false){
        console.log("The telephone is right and the mail is wrong!")
    }
    if(phone.test(telephone) === false&&mail1.test(mail) === true){
        console.log("The telephone is wrong and the mail is true!")
    }
    if(phone.test(telephone) === false&&mail1.test(mail) === false){
        console.log("The telephone and the mail are false!")
    }
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
var a = 0;
var b = 1;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var word1 = new Array();
var word2 = new Array();
while(a < str.length){
    if(a === 0){
        if(str[0] !== " "){
            b = 0;
        }
        a++;
    }
    if(a === str.length-1){
        if(str.charAt(a) !== " "){
            c = a;
            word1[d] = str.slice(b,a+1);
            break;
        }
    }else {if (a !== 0) {
            if (str.charAt(a) !== " " && str.charAt(a - 1) === " ") {
                b = a;
            }
            if (str.charAt(a) === " " && str.charAt(a - 1) !== " ") {
                c = a;
                word1[d] = str.slice(b, c);
                d++;
            }
            a++;
        }
    }
}
while(f < word1.length-1){
        var re1 = new RegExp(word1[f], "i");
        if(re1.test(word1[f-1])){
            word2[e] = word1[f-1]+" "+word1[f];
            e++;
        }
        if(re1.test(word1[f+1])){
            word2[e] = word1[f]+" "+word1[f+1];
            e++;
        }
    //}
    f++;
}
word2.sort();
var set = new Set(word2);
set.size = 10;
console.log(set);
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
   var set1 = new Set(actualInput);
   var a = 0;
   var b = 0;
   var c = set1.size;
   var d = 0;
   var word1 = new Array();
   while(a < wantInput.length){
       set1.add(wantInput[a]);
       if(set1.size ===  c+1){
           word1[d] = wantInput[a].toUpperCase();
           d++;
           c = set1.size;
       }
       a++;
   }
   var set2 = new Set(word1);
   console.log(set2);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var a = str.length-1;
    var b = 0;
    var c = 0;
    var d = 0;
    var word1 = new Array();
    while(a > 0){
        if(str.charAt(a-1) ===" "&&str.charAt(a) === " " ){
            b = a;
        }
        if(str.charAt(a-1) === " "&&str.charAt(a) !== " "){
            c = a;
            word1[d] = str.slice(c,b);
            d++;
        }
        a--;
    }
    console.log(word1);
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    var a = 0;
    var b = a+1;
    var c = 0;
    var map = new Map();
    while(a<nums.length-1){
        while(b < nums.length){
            if(parseInt(nums[a])+parseInt(nums[b]) ===parseInt( target)){
                map.set(c,[a,b]);
                c++;
            }
            b++;
        }
        a++;
        b = a+1;
    }
    console.log(map);
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var a = 0;
    var map = new Map();
    while(a < str.length){
        map.set(str[a],0);
        a++;
    }
    console.log(map.size);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
function DevelopingCountry() {
    Country.apply(this,arguments);
    this.name = "DevelopingCountry";
    this.sayHi = function () {
    console.log("Hi,i am a developing country.");
    }
}
function PoorCountry() {
   this.name = PoorCountry;
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
console.log("I am a sad poor country.");
}
function DevelopedCountry() {
  this.name = "DevelopedCountry";
}
DevelopedCountry.prototype = Object.create(Country.prototype);
DevelopedCountry.prototype.sayHappy = function () {
console.log("I am a Happy developed country.");
}
function test() {
 testTime();
 testMail(15987156361,"2233299790@qq.com");
 testRedundancy("Is is the iS is cost of of gasoline going up up");
 testKeyBoard("7_This_is_a_test","_hs_s_a_es");
 testSpecialReverse(" hello  world!  ");
 twoSum([1,2,3,4],5);
 lengthOfLongestSubstring("asdfggggg");
 var country1 = new DevelopingCountry();
 country1.sayHi();
 var country2 = new PoorCountry();
 country2.saySad();
 var country3 = new DevelopedCountry();
 country3.sayHappy();
}