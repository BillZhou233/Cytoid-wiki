## 中文文案排版指北 - 空格 （Cytoid 定制版）

（[原文](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-CN.md) 采用 MIT 许可证授权，此处摘录版本有部分改动）

「有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。

与大家共勉之。」——[vinta/paranoid-auto-spacing](https://github.com/vinta/pangu.js)
 
 ### 中英文之间需要增加空格
 
 正确：
 
 - 在 Cytoid 中，一张谱面的基本信息均存储在 `level.json` 里。
 
 错误：
 
 - 在Cytoid中，一张谱面的基本信息均存储在`level.json`里。
 
 例外：「啊wee」等专有名词，按照官方所定义的格式书写。
 
 ### 中文与数字之间需要增加空格
 
 正确：
 
 - Cytoid 社区目前有超过 3000 张可游玩谱面。
 
 错误：
 
 - Cytoid 社区目前有超过3000张可游玩谱面。
 
 ### 数字与单位之间需要增加空格
 
 正确：
 
 - 这张谱面使用 192 Kbps 的音频文件，打包后的大小约 3 MB。
 
 错误：
 
 - 这张谱面使用 192Kbps 的音频文件，打包后的大小约 3MB。
 
 例外：度 / 百分比与数字之间不需要增加空格：
 
 正确：
 
 - 这是将 Flick 旋转 90° 之后的效果。

 - Rank 模式下取得满分即意味着 100% 的准确率。
 
 错误：
 
 - 这是将 Flick 旋转 90 ° 之后的效果。

 - Rank 模式下取得满分即意味着 100 % 的准确率。
 
 ### 全角标点与其他字符之间不加空格
 
 正确：
 
 - 终于玩到了 Cytoid 2.0，好开心！
 
 错误：
 
 - 终于玩到了 Cytoid 2.0 ，好开心！

 - 终于玩到了 Cytoid 2.0， 好开心！
 
 ### 用 `text-spacing` 来挽救？
 
 CSS Text Module Level 4 的 [`text-spacing`](https://www.w3.org/TR/css-text-4/#text-spacing-property) 和 Microsoft 的 [`-ms-text-autospace`](https://msdn.microsoft.com/library/ms531164(v=vs.85).aspx) 可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 macOS、iOS、Windows 等用户介面目前并不存在这个特性，所以请继续保持随手加空格的习惯。
 
 ### 争议：链接之间添加空格

 下述的用法存在争议，无论使用何种用法，从语法的角度来讲都是 **正确** 的。

 用法：
 
 - 请 [提交一个 issue](#) 来帮助我们更正！
 
 对比用法：
 
 - 请[提交一个 issue](#) 来帮助我们更正！