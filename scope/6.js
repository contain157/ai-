function foo(){
    var c = 3// 当声明变量前没有关键字，会变为全局变量 c=3
}

foo()

console.log(c)