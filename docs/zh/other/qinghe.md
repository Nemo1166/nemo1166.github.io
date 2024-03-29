---
icon: note
date: 2023-04-12

index: false
article: false
---

# AIGC for 御剑门清荷

<decl aigc=1 />

基于国家互联网信息办公室关于《生成式人工智能服务管理办法（征求意见稿）》[^reg]之精神，现在此公开为觅长生游戏 mod《御剑门清荷》提供插画的部分生成信息。

[^reg]: [生成式人工智能服务管理办法（征求意见稿）](http://www.cac.gov.cn/2023-04/11/c_1682854275475410.htm)

## 基本信息

- 工具：Stable Diffusion[^sd] / sd-webui[^webui]
- 路线：文生图 (txt2img)、图生图 (img2img)
- 模型：anypastelAnythingV45 (99d004eeec), cetusMix (59ea4aa1d8), QteaMix (0c1efcbbd6)
- 变分自编码器 (VAE)：kl-f8-anime2-vae.ckpt[^vae]
- 附加网络 (LoRA / LyCORIS)：elegantHanfuRuqun_v10 (18e059ae584a), GuoFeng3.2_Lora (5d35ac960118)
- 扩散控制网络 (ControlNet[^cnet])：涂鸦 (scribble)、法线贴图 (normal)、深度图 (depth)
- 高清修复 (Highres.fix)：R-ESRGAN 4x+ (2.25x)
- 后期处理：Adobe Photoshop 2022

[^sd]: <span class="icon iconfont icon-github"></span> [CompVis/stable-diffusion](https://github.com/CompVis/stable-diffusion)
[^webui]: <span class="icon iconfont icon-github"></span> [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
[^vae]: 🤗 [hakurei/waifu-diffusion](https://huggingface.co/hakurei/waifu-diffusion)
[^cnet]: 🤗 [lllyasviel/ControlNet](https://huggingface.co/lllyasviel/ControlNet)

## 供图一览

### 横版插画

获取原图：[Query for raw images](mailto:zhangguoxi1166@gmail.com)

|直出原图|后期处理|
|-|-|
|![](./res/00-r.webp)|![](./res/00-p.webp)|
|![](./res/01-r.webp)<br>构图参考：明日方舟 主题曲 6-17|![](./res/01-p.webp)|
|![](./res/02-r.webp)<br>构图参考：同上|![](./res/02-p.webp)|
|![](./res/03-r.webp)|![](./res/03-p.webp)|
|![](./res/04-r.webp)|![](./res/04-p.webp)|
|![](./res/05-r.webp)|![](./res/05-p.webp)|
|![](./res/06-r.webp)|![](./res/06-p.webp)|

### 表情包贴纸

|直出原图|后期处理及其变体|||
|-|-|-|-|
|![](./res/st-wink-raw.webp)|![](./res/st-wink-1.webp)|||
|![](./res/st-smile-raw.webp)|![](./res/st-smile-1.webp)|||
|![](./res/st-angry-raw.webp)|![](./res/st-angry-1.webp)|||
|![](./res/st-sad-raw.webp)|![](./res/st-sad-1.webp)|![](./res/st-sad-2.webp)|
|![](./res/st-sigh-raw.webp)|![](./res/st-sigh-1.webp)|![](./res/st-sigh-2.webp)||
|![](./res/st-sluggish-raw.webp)|![](./res/st-sluggish-1.webp)|![](./res/st-sluggish-2.webp)|![](./res/st-sluggish-3.gif)|
|![](./res/st-thinking-raw.webp)|![](./res/st-thinking-1.webp)|||
|![](./res/st-tearing-raw.webp)|![](./res/st-tearing-1.webp)|||
|![](./res/st-w-raw.webp)|![](./res/st-w-1.webp)|||
|![](./res/st-expressionless-raw.webp)|![](./res/st-expressionless-1.webp)|![](./res/st-expressionless-2.webp)|![](./res/st-expressionless-3.webp)|
|![](./res/st-sleeping-raw.webp)|![](./res/st-sleeping-1.webp)|||
|![](./res/st-sigh-raw.webp)|![](./res/st-sigh-2.webp)|![](./res/st-sigh-1.webp)||
|![](./res/st-surprised-raw.webp)|![](./res/st-surprised-1.webp)|||
|![](./res/st-bunny-raw.webp)|![](./res/st-bunny-1.webp)|![](./res/st-bunny-2.webp)||

### References
