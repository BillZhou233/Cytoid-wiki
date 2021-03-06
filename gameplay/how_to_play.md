# 开始游玩 Cytoid

<!-- Autjor: 冰糖酱-BillZhou233 a.k.a 贵阳市非官方客服娘 / 2020.10.13 -->

## 下载 Cytoid

对于中国大陆玩家，请到 TapTap（安卓）/ App Store（iOS）下载。

对于其他国家或地区玩家，请在 Google Play Store (Android) / App Store (iOS) 下载。

相关渠道的链接：[TapTap](https://www.taptap.com/app/158749) | [App Store](https://apps.apple.com/cn/app/cytoid/id1266582726) | [Google Play Store](https://play.google.com/store/apps/details?id=me.tigerhix.cytoid)

## 游戏玩法

Cytoid 的规则很简单，您只需要配合着音乐的节奏在恰当的时机尽可能准确地清除屏幕上出现的各种 Note。

### Note 类型

Cytoid 中的 Note 有如下几类：

- 单点 Click：当扫描线扫过 Note 时点击即可清除。
- 侧滑 Flick：当扫描线扫过 Note 时点击并向任意一侧滑动即可清除。
  - 没有 Good / Bad 判定，同时如果没有点击动作只是滑动不判定。
- 长条 Hold：当扫描线扫过 Note 头部时长按直到当扫描线扫过 Note 尾部或 Note 外的指示圈满后即可清除。
  - 只要在判定窗口之内一直按着就可以得到 Perfect，所以提前按下或者延后松开也没有关系。
- 锁链 Drag：当扫描线扫过每个节点时手指在判定区域内拖动或点击即可清除。
  - 每个节点各算一个连击数，成功清除即为 Perfect 判定，所以提前划到也没有关系。
- 点锁 C-Drag：当扫描线扫过第一个节点时点击，之后节点在判定区域内拖动或点击即可清除。
  - 第一个节点的判定方式同 Click，之后节点同 Drag。

想要在实际操作中练习一下？请尝试游戏中内置的 Tutorial 谱面，该谱面的两个难度分别对应着基础和进阶的玩法教学。

还行了解更多详细的玩法说明？请参阅 [游戏机制](/gameplay/mechanism) 中的介绍。

## 偏移校正

音频的播放存在着不可避免的延迟。由于不同设备的性能不尽相同，延迟的具体数值也不尽相同。不论游玩哪一种音游，为了得到最佳的游玩体验，您都需要对游戏的偏移值进行校正，Cytoid 也不例外。不过，您不必担心校正这一问题，因为 Cytoid 有着多种便捷的偏移校正方式。

### 通过自动偏移向导

在初次启动 Cytoid 时，游戏会运行自动偏移向导。按照屏幕提示，随着节拍点击数次后，游戏会自动测量偏移值并应用至全局偏移。

您也可以在 __主页设置（扳手图标）__ 中随时运行自动偏移向导。

### 通过校正模式

感觉自动偏移向导的测试结果不够准确？您也可以通过 __谱面游玩页设置（齿轮图标）__ 中的 __校正模式__ 进行手动调节。

在校正模式中，您可以自由切换自动或手动游玩来进行可视化的偏移调整，下面所述的校正操作仅供参考。

 - 使用自动预览模式的调整

在设备性能允许的情况下，开启按键音，调整下方偏移值使得按键音和音乐节拍相合。若设备按键音延迟较大，则只能通过目视方法进行该调整。

 - 关闭自动预览模式的调整

按照和正常游玩一样的规则清除 Note，并留意观察判定。若 Late 判定出现较多，则 __正向__ 调整，若 Early 判定出现较多，则 __负向__ 调整，直到调整至手感相对准确的值。

使用该方法调整全局偏移时，您可以前往社区下载 [Offset Setting Guide](https://cytoid.cn/levels/teages.offset_guide) 或直接点击左侧链接下载并导入。调整完成后将该谱的谱面偏移值叠加到原先的全局偏移值中即可应用至全局偏移，您可能需要将该谱面偏移值清零后再次测试调整是否有效。

在调节至准确的全局偏移之后，若您觉得某张谱面的所有 Note 太快或太慢，也可以使用校正模式对该谱面单独设置偏移，此时 __不需__ 手动叠加到全局偏移，设置完后的偏移值仅对该谱面生效，游玩该谱面时游戏会自动叠加。

## 谱面下载

### 官方谱面

刚入门 Cytoid？不妨试试 Cytoid 自带的官方谱面。

Cytoid 非常愿意与艺术家进行合作，为玩家提供优秀的游戏体验。

### 社区谱面

内置的谱面不能满足你？快来尝试下社区关卡吧。在 Cytoid 主界面选择“社区”即可开始游玩社区关卡！

社区关卡质量参差不齐，也存在这不少“魔王”谱，如果发现自己只能得到很差的分数，也请不要感到沮丧，多加练习，终有一天你也能将这些魔王谱制服！

社区有一个评分系统，若是有喜欢的 __谱面__ ，不妨为它打个五星吧。

如果你觉得谱面有改进空间，不妨在 Cytoid 官网谱面页的评论区为谱师提供建议。

请不要因为谱面难度而打差评，这不只是 __对谱师成果的不尊重__ ，也是 __对自己的不负责任__ ！

### 导入外部谱面

除了通过游戏内下载谱面之外，Cytoid 也支持导入外部谱面，只需要获取到 `cytoidlevel` 格式的谱面后选择 __在 Cytoid 打开__ 即可。

对于 Android 设备，您也可以将谱面复制到 手机存储 > Cytoid 文件夹中，这种方法支持一次同时导入多个谱面。

## 更多模式

### 活动

在此处参与不定期举办的特别活动，游玩限定谱面并赢取丰厚的奖励！

活动中达成一定的目标后可以获得段位奖牌，显示在游戏内的玩家资料卡中。

### 训练

在此处游玩循序渐进的训练谱面，提升 Cytoid 技巧。

同时，您也可以在此处向 Kaede 询问 Rating 方面的分析和建议。

### 段位

在此处挑战段位，证明自己的实力并获取限定角色和谱面。

每个段位需要连续游玩 3 个曲目，并满足一定的过关要求（例如精准度、连击等），通过后的段位会显示在游戏内的玩家资料卡中。