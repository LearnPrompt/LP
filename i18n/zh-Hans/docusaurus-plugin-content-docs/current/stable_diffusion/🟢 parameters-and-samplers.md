---
sidebar_position: 25
title: Parameters and Sampling Techniques in Image Generation
description: This page details different parameters and samplers used in image generation, explaining their effects and optimal settings.
keywords: [Image generation, samplers, Euler, DDIM, LMS, PLMS, DPM2, tiling, high-resolution, CFG scale, random seed]
slug: /stable-diffusion/parameters-and-samplers/
---

# 🟢  参数

参数设置不同，生成的图片也会有区别

## 采样器 Sampler

Euler, Euler a(更细腻)， Euler 是最简单的，因此生成图的速度比较快。Euler a更有创造力，不同步数可以生成不同的图片。但是部署大于30的时候效果不会更好。

DDIM收敛快，但效率相对低，需要比较多的步数才能获得好的效果，在重绘的时候比较适合使用。

LMS和PLMS是Euler的衍生。大概在步数为30的时候能得到稳定的结果。

DPM2是改进DDIM的采样，减少步骤以获得更好的结果。它每运行一步会经过两次去噪，速度大约是DDIM的两倍。但是如果提示词还在调整的时候，这个采样器的效果一般。

DPM++2M和DPM++2M Karras适合生成真人图片；DPM adaptive和DPM++ SDE Karras适合生成真人写真。

## 采样迭代步数 Step

图片生成时需要经过多少步的计算，一般为20-50，步数太低图片效果质量不好，但太高也会导致图片失真。步数增加也会增加图片生成的时间。

## 面部修复 Restore faces

修复面部细节，用于人像图片生成

## 平铺图 Tiling

生成平铺拼接的图像，类似瓷砖拼接的效果

## 高分辨率修复 Hires.fix

用于大尺寸的高清图片生成，对设备性能要求很高，耗时比较久

## 宽度 高度

图像的宽度，高度，像素。这个值越大，需要的显存越多，默认是512 x 512。这个值是8的倍数。

## 总批次数

每次生成图执行的批次数，出来的图=总批次数*单批数量

## 单批数量

每批画图的数量，增加这个值可以提高性能，但需要更多的显存，一般默认为1

## 提示词引导系数 CFG scale

是否严格按照提示词来生成图像，数值越小AI越freestyle。过大过小都会让图片效果变差，一般为7-10

## 随机种子

图片生成的时候在初始状态设置的一个值，在相同提示词、参数和种子下，出来的图片会一模一样；-1指每次生成时随机取一个值，这样生成的图片会有所不同