# 打包和上传

<!-- Autjor: 冰糖酱-BillZhou233 a.k.a 贵阳市非官方客服娘 / 2020.10.22 -->

谱面已经做好？将它打包后就可以在 Cytoid 中游玩了！

这里将会介绍谱面打包和上传的相关事项。

## 谱面的打包

### 文件结构

Cytoid 的谱面包以 `cytoidlevel` 为后缀，其本质是一个 ZIP 压缩包。一个谱面包通常会中包含以下文件：

- 游玩用音频（推荐使用 OGG 格式，WAV / MP3 也可）

- 预览用音频（也可直接使用游玩用音频作为预览但 __极其不推荐__ ）

- 封面（PNG / JPG）

- 谱面（TXT / JSON，内容使用 C2 / C1 格式）

- 故事板及相关资源（如果有）

- `level.json`（十分重要的索引文件，必须使用此文件名）

在压缩时，文件只需放置在压缩包根目录下即可，__一般不使用子文件夹__ 。压缩完成后，别忘了将 `.zip` 后缀修改为 `.cytoidlevel` 。

在之前的解说中，相信您已经对谱面制作方法有了一定的了解，但可能对索引文件 `level.json` 有所疑问。所以接下来将对其进行解说。

### level.json

`level.json` 是记录着谱面中很多关键信息（例如音频和谱面的位置、歌手和谱师的名称等）的索引文件，Cytoid 根据这个文件来加载对应的资源。该文件可以按照模板手动编写或通过工具自动生成。

以下是一个 `level.json` 示例模板：

```json
{
    "schema_version": 2,
    "version": 1,
    "id": "level.json.sample",
    "title": "在这里填入标题",
    "title_localized": "在这里填入副标题",
    "artist": "在这里填入曲师名",
    "artist_localized": "<Enter Composer's Name>",
    "artist_source": "https://example.com/",
    "illustrator": "在这里填入封面绘师名",
    "illustrator_localized": "<Enter Illustrator's Name>",
    "illustrator_source": "https://example.org/",
    "charter": "填入您的 ID",
    "storyboarder": "填入故事板作者的 ID",
    "music": {
        "path": "bgm.ogg"
    },
    "music_preview": {
        "path": "preview.ogg"
    },
    "background": {
        "path": "bg.png"
    },
    "charts": [
        {
            "type": "easy",
            "difficulty": 4,
            "path": "easy-c2.txt"
        },
        {
            "type": "hard",
            "difficulty": 9,
            "path": "hard-c2.txt",
            "storyboard": {
                "path": "hard-sb.json"
            }
        },
        {
            "type": "extreme",
            "name": "Expert",
            "difficulty": 14,
            "path": "ex-c2.txt",
            "storyboard": {
                "path": "ex-sb.json"
            },
            "music_override": {
                "path": "bgm-ex.ogg"
            }
        }
    ]
}
```

您可以复制并修改或删除此模板中的属性，为自己的谱面编写 `level.json`。

接下来的部分还将对各个属性进行进一步解说。

!> 选填项若不填写，请将该项属性所对应的整个键值对完全删除。

#### 全局属性

- `schema_version`：整数，代表谱面编写格式。使用 C2 格式时填入 2，使用 C1 格式时填入 1。
- `version`：正整数，代表谱面版本。对谱面进行更新时，重传的谱面版本需要比原版本大。
- `id`：字符串，由小写字母、数字、点和横线组成的谱面 ID，作为谱面包在游戏和官网内的唯一标识，也会在链接内显示。
- `title`：字符串，填入乐曲标题。一般按照原始的语言和形式填写。
- `title_localized`：字符串，填入乐曲标题译文或副标题。（选填）
- `artist`：字符串，填入曲师名。一般按照原始的语言和形式填写。
- `artist_localized`：字符串，填入曲师译名或别名。（选填）
- `artist_source`：字符串，填入乐曲的公开发布链接。（选填）
- `illustrator`：字符串，填入封面绘师名。
- `illustrator_localized`：字符串，填入封面绘师译名或别名。（选填）
- `illustrator_source`：字符串，填入封面的发布链接。（选填）
- `charter`：字符串，填入谱师（您）的 ID。
- `storyboarder`：字符串，谱面包含故事板时，填入故事板作者的 ID。（选填）
- `music & music_preview & background`：各个对象下的 `path` 属性分别填入游玩音频、预览音频和乐曲封面的路径。
- `charts`：数组，存储谱面的属性。

#### 谱面属性

每个谱面包最多可以添加三个难度，每个难度的配置分别作为对象存储在 `charts` 数组中。

- `type`：`"easy" / "hard" / "extreme"` 三选一，分别对应 Easy / Hard / EX 三种难度。
- `name`：字符串，填入难度名，不填则使用该难度预设名称。（选填）
- `difficulty`：整数，代表难度标级。特殊地，`0` 和负数将显示为 ? 难度，`16` 及以上显示为 15+ 难度。
- `path`：字符串，填入该难度谱面文件路径。
- `storyboard`：对象，若使用故事板，其 `path` 属性填入该难度使用的故事板路径。（选填）
- `music_override`：对象，若该难度需要替换音频，其 `path` 属性填入该难度使用的音频路径。（选填）

## 上传并发布

想要让更多的人游玩您的创作谱面？那就将它上传到 Cytoid 官网并发布吧！

!> 在发布前，请仔细阅读 [DMCA 方针](https://cytoid.cn/pages/dmca) 并确认您谱面中使用的各种素材无版权问题，否则您的谱面将下架。

### 谱面的上传

使用电脑登入 Cytoid 官网，进入 __工作室__ 页面，点击上传框选中 __打包后的谱面__ 或直接将其拖拽至上传框中即可上传。上传成功后，将会进入简介编辑（Edit Listing）页面。

在简介编辑页面中，您可以为谱面编写简介和管理标签，并可以修改谱面的公开范围。

- 公开 / Public：在游戏内的“社区”中上架。
- 非公开 / Unlisted：不上架，但任何人都可凭链接查看。
- 仅自己 / Private：仅自己可见。

全部填写好后，点击保存即可确认上传。

### 谱面的管理

在工作室中，您可以查看谱面的下载量、游玩次数和评分等信息，并可以编辑谱面信息或删除谱面。

打开谱面管理页将默认进入简介编辑选项。在左侧菜单中选择 __Edit Level__ 将会进入谱面更新选项，您可以在此处更新您的谱面，更新方式和上传新谱面基本一致。

!> 更新时，请注意重传的谱面 ID 需与原 ID 一致，且版本要比原谱面版本更高。

### 上传常见问题

- 截至本文发稿前，Cytoid 中国区官网可能无法正常上传谱面，并提示 500。此时请使用国际版官网上传（可能较慢）。

TBD...