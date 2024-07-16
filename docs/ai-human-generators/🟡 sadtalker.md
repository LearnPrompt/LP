---
sidebar_position: 15
title: SadTalker - Bringing Photos to Life with Speech
description: Explore how SadTalker leverages photos and audio to create speaking images, including installation guides and troubleshooting.
keywords: [SadTalker, photo animation, speech synthesis, AI communication, setup guide, troubleshooting]
slug: /ai-human-generators/sadtalker-speaking-photos/
---

# 🟡 SadTalker: Making Photos Speak

Project URL (including detailed documentation): [https://github.com/OpenTalker/SadTalker](https://github.com/OpenTalker/SadTalker)

First, the effect: Input a photo and an audio clip to make the person in the photo speak.

[demo.mp4](%F0%9F%9F%A1%20%5BPractical%5D%20SadTalker%EF%BC%9AMaking%20Photos%20Speak%20a3e38d22440448f89ead8dc94c75eb95/demo.mp4)

## Installation Method One: Direct Windows Installation

### Zero, Preliminary Work

Requires git, VPN for internet access, and python3.8+ environment. If you are unfamiliar with these, this method may not be suitable for you.

### One, Download ffmpeg

**1. Visit [https://ffmpeg.org/download.html, click on Windows, select gyan.dev](https://ffmpeg.org/download.html%EF%BC%8Cclick%20on%20Windows%EF%BC%8Cselect%20gyan.dev)**

![step1.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/70adf706909677a866014a3fd4831878.png)

**2. Download the full version of FFmpeg for Windows**

![step2.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ccd461840f72886e072604852938f7a2.png)

**3. Unzip and rename the extracted folder to FFmpeg**

P.S. Unzipping requires [installing 7zip](https://www.7-zip.org/download.html), a handy lightweight compression tool.

![step3.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/48305d9d5925172752d9719f54d66781.png)

**4. Configure PATH environment variable, remember to confirm after adding**

![step4.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/50cc7c4ba5d1cab72adbb088806419c1.png)

![step5.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/31cbdd2fec0c17cadf4bae904dccf55d.png)

**5. Check if the installation was successful**

```python
Open 【Command Prompt】, enter ffmpeg, as shown in the image
```

![step6.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ddda6669079739da2426c645f0b7fd49.png)

### Two, Download SadTalker Code

git clone [https://github.com/Winfredy/SadTalker.git](https://github.com/Winfredy/SadTalker.git)

![step7.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/4dc6b6f297a44b889573c5b0a2d8da78.png)

### Three, Download SadTalker Model Files

Refer to the [《Official Documentation》]((https://github.com/OpenTalker/SadTalker#-2-download-trained-models)) for three methods, among which Baidu Cloud is accessible without a VPN. The model files involve the following two directories:

- [checkpoints](https://pan.baidu.com/s/1P4fRgk9gaSutZnn8YW034Q?pwd=sadt), 提取码: sadt
- [gfpgan](https://pan.baidu.com/s/1kb1BCPaLOWX1JJb9Czbn6w?pwd=sadt), 提取码: sadt

Place the downloaded model files under checkpoints and weights directories.

![step8.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/5f60301930bd63fd73946a98db7f891c.png)

![step9.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ab758dfd3077041accb14b6e3b98560e.png)

### Four, Launch webUI

The first run requires downloading dependencies, which can be slow.

![step10.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/f152dae559b5baa471e354b6c532cb58.png)

### Five, Run demo in Browser

Default address is http://127.0.0.1:7860, drag in an image and voice, click Generate to synthesize [(Note: There are samples in SadTalker/example to try)]((http://127.0.0.1:7860%EF%BC%8C%E6%8B%96%E5%85%A5%E5%9B%BE%E5%83%8F%E5%92%8C%E8%AF%AD%E9%9F%B3%EF%BC%8C%E7%82%B9%E5%87%BBGenerate%E5%8D%B3%E5%8F%AF%E8%BF%9B%E8%A1%8C%E5%90%88%E6%88%90%EF%BC%88%E6%B3%A8%EF%BC%9ASadTalker/example%E4%B8%8B%E6%9C%89%E6%A0%B7%E4%BE%8B%E5%8F%AF%E4%BB%A5%E6%8B%96%E8%BF%9B%E6%9D%A5%E8%AF%95%EF%BC%89))

![step11.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/069c237b94a61ddf283f86ba40ffa4f3.png)

### Common Issues

1. Click Generate and the top-right corner shows 【Expecting value: line 1 column 1 (char 0) 】

Close the proxy server, please refer to [[Bug]: Something went wrong Expecting value: line 1 column 1 (char 0) #9174](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/9174)

2. Script fails to pull model files

Solution: Manually download the model files, place them under weights directory. For model file downloads, refer to [here](https://github.com/OpenTalker/SadTalker#-2-download-trained-models)。

![step12.png](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/72a14609d260bf3f41163e1f30d70566.png)

## Installation Method Two: Colab

1. Visit [SadTalker's Colab](https://colab.research.google.com/github/Winfredy/SadTalker/blob/main/quick_demo.ipynb), copy to your own cloud drive.

    ![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/ae8615e5f266e99aa1a11dc718255bde.png)

2. Click on different cells, run sequentially

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/040fd77ba5a4138e2caefcf79f79772e.png)

- Select an image, run, and complete the synthesis

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/60d287486ea2cea4b2c13db1b656025f.png)

- Run

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/fdd7ad3203c314b204ca1024e7476418.png)

- Preview the results

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/56bb96eaea3d5724dab83072f70da185.png)

### Common Issues

1. pip install prompts python3.8: command not found

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/f1e64c198c1d1db0ef9e6315360d9ddb.png)

Solution: Manually install python3.8

```python
!wget -O mini.sh https://repo.anaconda.com/miniconda/Miniconda3-py38_4.8.2-Linux-x86_64.sh
!chmod +x mini.sh
!bash ./mini.sh -b -f -p /usr/local
```

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/8471bc0679da77ac3676583678a5cab3.png)