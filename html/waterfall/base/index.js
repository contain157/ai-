/*
var arr = ['a','b','c','d']

arr.push('e')//尾部增加
arr.pop()//尾部删除
arr.unshift(1)//头部增加
arr.shift()//删除首个
arr.splice(1)//从下标1开始移除
arr.splice(1,1)///从下表1开始删除1个元素
arr.splice(1,0,true)//在下标1加入true，剩下元素后移
console.log(arr[0]);*/

/*
var arr=['a','b','c','d']
for(var i=0;i<arr.length;i++)
{
    arr[i]=arr[i]+1;
}
arr.forEach(funcation(item,index,arr) ){//回调
    console.log(item,index,arr);
}
*/

var arr=['a','b','c','d']
var arr2=[1,2,3]
/*
var newArr=arr.map(funcation(item,index,arr) {
    return item + 2
})*/

/*
console.log(arr.indexOf('a',2));//返回下标，如没有返回-1 从下标2开始找

console.log(aee.includes('a'));//返回是否存在

console.log(arr.lastIndexOf('b'));//返回下标，从右往左遍历，下标不变 无第二参数
*/

//console.log(arr.concat(arr2));//数组拼接 concat返回一个新数组

console.log([].concat(arr,arr2));//数组拼接