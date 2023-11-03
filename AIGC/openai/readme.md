# 跨境电商
AI 开店
玩具店 ->拼夕夕的海外版
- 需要翻译，NLP 不用打开Google 翻译，写程序
    pipeline('translate')
    AIGC 生成(generater)
- 卖什么货，
- 卖多少money
- 营销内容怎么写

- 如何让openai帮你开店？
    大模型(openai 接口调用) + prompt engineer (编写prompt)

## prompt工程
会问问题的人比解决问题的人更nb
大模型超越了大部分人的能力 

### openai 封装的过程
人生苦短 我用python 
特别适合NLP
一个功能写法就一种 
风格比较独特 缩进
def get_response(prompt):
调用了openai 库的completions这个模块(其他模块).create方法
向openai发出网络请求 
    completions = openai.Completions.create(
        engine=,
        prompt=,  吴恩达prompt  
        temperature = 0 ，自由度
        max_tokens=512 省钱 限制

    )
    <!-- python是同步的 js异步的 -->
    print(completions)
    result= completions[0].choices,text
    return result