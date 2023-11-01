var baseObj = {
    //随机数在某个区间内
    randonNum: function(min,max){
        return parseInt(Math.random() * (max-min) + min);
    }
}