---
sidebar_position: 35
title: One-Minute Setup for GPT-SoVITS Voice Cloning
description: This guide provides a step-by-step process to set up GPT-SoVITS for voice cloning with minimal cost and configuration.
keywords: [GPT-SoVITS, voice cloning, AI voice cloning, TTS, voice synthesis, voice cloning setup]
slug: /ai-human-generators/gpt-sovits-voice-cloning/
---

# 🟡  一分钟素材、零成本、零配置搭建GPT-SoVITS最强声音克隆

> 😀 大家好，我是晨辉|AI沃茨，一直致力于研究声音克隆的开源项目。今天给大家分享一下，目前最火的中文声音克隆项目GPT-SoVITS。

GPT-SoVITS，他是由 RVC 创始人 RVC-Boss 与 AI 声音转换技术专家 Rcell 共同开发的一款跨语言 TTS 克隆项目，这个项目被称为“最强大中文声音克隆项目”，被众多大佬和知名博主争相推荐，自上线以来，他在 github 上的 Stars 数已达到 8.6K。

之前做声音克隆，要么通过 autodl 线上租用 GPU，要么就需要本地有 GPU 环境，gpt-sovits 需要的配置相对低一些，基本上 6G 显存以上就能满足了，但 bert-vites2 就要 4090 卡，不然很容易就爆显存了。整体看下来，训练一次的价格在 30 元-50 元人民币的范围，而且需要大量繁琐的配置，出错率极高。

本人也是踩过无数的坑（泪崩）导致训练效果特别糟糕。后来 gpt-sovit 推出了 colab 版本，而且很多配置都已经默认设置好了，这样大大就简化了搭建的经济和时间成本，比之前要节省 10 倍时间。想体验的小伙伴，就跟着我一起操作吧，非常 easy

## 效果：

先给大伙看看我克隆出来的效果吧，我克隆的是我最喜欢的易中天老师的声音，他声音的辨别度还是非常高的。

**原声**

[Original.wav](../assets/original.wav)

**克隆1**

[Clone1.wav](../assets/clone1.wav)

**克隆2**

[Clone2.wav](../assets/clone2.wav)

## **功能：**

1. **零样本文本到语音（TTS）：** 输入 5 秒的声音样本，即刻体验文本到语音转换。
2. **少样本 TTS：** 仅需 1 分钟的训练数据即可微调模型，提升声音相似度和真实感。
3. **跨语言支持：** 支持与训练数据集不同语言的推理，目前支持英语、日语和中文。
4. **WebUI 工具：** 集成工具包括声音伴奏分离、自动训练集分割、中文自动语音识别(ASR)和文本标注，协助初学者创建训练数据集和 GPT/SoVITS 模型

项目地址：[https://github.com/KevinWang676/Bark-Voice-Cloning](https://github.com/KevinWang676/Bark-Voice-Cloning)

## 环境准备：

1. 一台电脑；
2. 一段 1 分钟音频；

这么简单？哈哈哈，就是这么简单，零成本，零配置。下面我跟我一起点点点吧！

## 操作步骤：

1. 在浏览器中输入项目地址 [https://github.com/KevinWang676/Bark-Voice-Cloning](https://github.com/KevinWang676/Bark-Voice-Cloning)，然后进入以下界面：

![Project Interface](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/3b968603021d768bcdfb1bc329b3eb73.png)

2. 点击项目中的 notboooks 文件夹，并点击 GPT_SoVITS，进入以下界面：

![Notebook Folder](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/f24700d6abe40bc8c1799ad8f7a642c5.png)

3. 点击 Open in Colab 按钮：

![Open in Colab](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/509c7401e6e09b3a46b2392e90479724.png)

4. 点击页面中的“代码执行程序”，并点击运行，“全部运行”，并等待运行：

![Run All](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/19f7451d12e64698a20be1b601eb62b4.png)

5. 点击 gpt-sovits 目录（切记是第二个，小写的 gpt-sovits），

![GPT-SoVITS Directory](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/97fe8d1fa73efe32a34aa60be836c4c4.png)

6. 将音频素材上传到 gpt-sovits 目录中，并点击 public URL

![Public URL](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/f6222baf8214864db7d25b20851f8feb.png)

7. 点击后打开以下界面：

![Interface](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ad7132cec1512d652a4e2c7367c4a27f.png)

8. 在“音频自动切分输入路径，可文件可文件夹”中输入刚上传的素材文件名（切记得是全名）

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ef586f69f7fd82e72ced3dcc9c96fac1.png)

9. 点击“开启语言切割”，等待出现切割结束的出现。然后再点击“开启离线批量 ASR 进程”，等待 ASR 进程输出信息出现“ASR 任务完成”

![ASR Process](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/c7413bef650d771e9a4998c82b94318b.png)

![ASR Task Completed](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/b28b4a6702dcc79562a28d0492c0b772.png)

10. 点击 1-GPT-SoVITS-TTS，然后修改实验/模型名，点击最下面的“开启一键三连”

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/68f972de9538cb00c9a9ce18115bc5cc.png)

11.等待一键三连进程输出信息出现“一键三连进程结束”后，点击“1B-微调训练”按钮，出现如下界面

![Fine-tuning Training](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/fcc4706df31d982c4826862d52dc77a3.png)

12. 点击"开启 SoVITS 训练"，等待出现"SoVIT 训练完成"

![SoVITS Training Completed](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/932706933aada773dc24633525d017a0.png)

13. 下面就可以点击"1C-T 推理"进行推理啦， 点击"刷新模型路径"，然后分别选择 GPT 模型和 SoVITS 模型，最后勾选是否开启 TTS 推理 WebUI。

![Inference](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/0a7173f85f653daef256244ae1632d68.png)

14. 然后再回到之前的 ipynb 界面，点击下面红框的 URL

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/dfd300533c0d56668be7542f2d8d4746.png)

1. 上传一段 5s 左右的声音（可以从切割路径中下载），然后在”参考音频“的文本输入框中输入声音的文本内容，最后在需要合成的文本中数据你想要克隆的文本，点击"合成语音"，等待输出的语音就好啦。

![Synthesize Speechs s s](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/08183eaeb728d4c0506f09b37c5d56be.png)是不是很简单，基本只要点点点，就好啦！

到此就可以克隆出你想要克隆的声音啦，说实话，个人觉得 gpt-sovits 目前的效果是很炸裂的，音调的变化处理要比之前细腻很多，真实感更强了！

期待后面变声以及多人声音克隆的迭代！