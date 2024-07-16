---
sidebar_position: 35
title: One-Minute Setup for GPT-SoVITS Voice Cloning
description: This guide provides a step-by-step process to set up GPT-SoVITS for voice cloning with minimal cost and configuration.
keywords: [GPT-SoVITS, voice cloning, AI voice cloning, TTS, voice synthesis, voice cloning setup]
slug: /ai-human-generators/gpt-sovits-voice-cloning/
---

# 🟡 One-Minute Setup, Zero Cost, Zero Configuration for the Strongest Voice Cloning with GPT-SoVITS

> 😀 Hi everyone, I am Chenhui | AI-warts, and I have been dedicated to researching open-source projects for voice cloning. Today, I want to share with you the most popular Chinese voice cloning project, GPT-SoVITS.

GPT-SoVITS, developed by RVC founder RVC-Boss and AI voice conversion technology expert Rcell, is a cross-lingual TTS cloning project. It is known as "the most powerful Chinese voice cloning project" and has been highly recommended by many experts and famous bloggers. Since its launch, it has received 8.6K Stars on GitHub.

Previously, to do voice cloning, you either had to rent a GPU online through autodl or have a local GPU environment. GPT-SoVITS requires relatively lower configuration, needing just around 6GB of VRAM. However, bert-vites2 requires a 4090 card, otherwise, it easily runs out of memory. Overall, training once costs between 30 to 50 RMB and requires a lot of complex configurations with a high error rate.

I have personally encountered numerous issues (tears) leading to very poor training results. Later, GPT-SoVITS released a Colab version with many pre-configured settings, significantly reducing both economic and time costs, saving about 10 times the time compared to before. If you want to experience it, follow my steps. It's very easy.

## Results:

First, let me show you the results I cloned. I cloned the voice of my favorite teacher, Yi Zhongtian, whose voice is highly recognizable.

**Original Voice**

[Original.wav](../assets/original.wav)

**Clone 1**

[Clone1.wav](../assets/clone1.wav)

**Clone 2**

[Clone2.wav](../assets/clone2.wav)

## **Features:**

1. **Zero-sample Text-to-Speech (TTS):** Input a 5-second voice sample to experience text-to-speech conversion.
2. **Few-shot TTS:** Requires only 1 minute of training data to fine-tune the model, improving voice similarity and realism.
3. **Cross-language Support:** Supports inference in languages different from the training dataset, currently supporting English, Japanese, and Chinese.
4. **WebUI Tools:** Integrated tools include voice accompaniment separation, automatic training set segmentation, Chinese automatic speech recognition (ASR), and text annotation, assisting beginners in creating training datasets and GPT/SoVITS models.

Project link: [https://github.com/KevinWang676/Bark-Voice-Cloning](https://github.com/KevinWang676/Bark-Voice-Cloning)

## Environment Preparation:

1. A computer;
2. A 1-minute audio clip;

Is it that simple? Haha, yes, it is that simple—zero cost, zero configuration. Now, let's click along together!

## Steps:

1. Enter the project URL [https://github.com/KevinWang676/Bark-Voice-Cloning](https://github.com/KevinWang676/Bark-Voice-Cloning) in your browser, and you will see the following interface:

![Project Interface](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/3b968603021d768bcdfb1bc329b3eb73.png)

2. Click on the notebooks folder in the project, then click on GPT_SoVITS, and you will see the following interface:

![Notebook Folder](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/f24700d6abe40bc8c1799ad8f7a642c5.png)

3. Click the Open in Colab button:

![Open in Colab](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/509c7401e6e09b3a46b2392e90479724.png)

4. On the page, click "Runtime" and then click "Run all" and wait for the execution to complete:

![Run All](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/19f7451d12e64698a20be1b601eb62b4.png)

5. Click on the gpt-sovits directory (make sure it is the second one, lowercase gpt-sovits),

![GPT-SoVITS Directory](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/97fe8d1fa73efe32a34aa60be836c4c4.png)

6. Upload the audio material to the gpt-sovits directory and click the public URL

![Public URL](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/f6222baf8214864db7d25b20851f8feb.png)

7. After clicking, the following interface will open:

![Interface](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ad7132cec1512d652a4e2c7367c4a27f.png)

8. In the "Audio auto-split input path, can be a file or folder" field, enter the name of the uploaded material file (make sure it is the full name)

![Audio Auto-split](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ef586f69f7fd82e72ced3dcc9c96fac1.png)

9. Click "Start language splitting" and wait until the splitting process is completed. Then click "Start offline batch ASR process" and wait until the ASR process outputs "ASR task completed."

![ASR Process](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/c7413bef650d771e9a4998c82b94318b.png)

![ASR Task Completed](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/b28b4a6702dcc79562a28d0492c0b772.png)

10. Click on 1-GPT-SoVITS-TTS, then modify the experiment/model name, and click "Start one-click triple" at the bottom

![One-click Triple](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/68f972de9538cb00c9a9ce18115bc5cc.png)

11. Wait for the one-click triple process to output "one-click triple process ended," then click the "1B-Fine-tuning training" button, and you will see the following interface

![Fine-tuning Training](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/fcc4706df31d982c4826862d52dc77a3.png)

12. Click "Start SoVITS training" and wait until "SoVITS training completed" appears

![SoVITS Training Completed](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/932706933aada773dc24633525d017a0.png)

13. Now you can click "1C-T Inference" to perform inference. Click "Refresh model path," then select the GPT model and SoVITS model, and finally check whether to enable TTS inference WebUI.

![Inference](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/0a7173f85f653daef256244ae1632d68.png)

14. Then return to the previous ipynb interface and click the URL in the red box below

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/dfd300533c0d56668be7542f2d8d4746.png)

1. Upload a voice sample of about 5 seconds (you can download it from the split path), then enter the text content of the voice in the "Reference Audio" text input box, and finally enter the text you want to clone in the "Text to Synthesize" box. Click "Synthesize Speech" and wait for the synthesized speech to output.

![Synthesize Speech](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/08183eaeb728d4c0506f09b37c5d56be.png)

Isn't it simple? Just click a few times, and you're done!

By following these steps, you can clone the voice you want. Personally, I think GPT-SoVITS currently produces very impressive results. The handling of pitch changes is much more delicate than before, and the realism is significantly enhanced!

Looking forward to future updates for voice transformation and multi-voice cloning!
