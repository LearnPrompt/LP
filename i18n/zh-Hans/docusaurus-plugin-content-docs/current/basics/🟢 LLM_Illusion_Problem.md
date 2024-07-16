---
sidebar_position: 35
title: Large Language Models and the Illusion Problem - A Misconception
description: This article discusses the so-called "illusion problem" in large language models (LLMs) and presents Andrej Karpathy's perspective on the matter.
keywords: [LLMs, large language models, illusion problem, AI, Andrej Karpathy, ChatGPT, artificial intelligence]
slug: /basics/illusion-problem-in-LLMs/
---
# 🟢大模型幻觉问题是伪命题[译]

> ☝ **Andrej Karpathy** 曾任 Tesla 人工智能总监、斯坦福大学博士，提出了对大模型幻觉的新思路，这里提供译文跟大家分享一下

每次有人问我关于大型语言模型（Large Language Models，LLMs）中的“幻觉问题”，我总感觉有些困惑。因为严格来说，制造**虚构内容**正是大型语言模型的主要功能。它们就像制造梦境的机器。

我们通过指令引导这些模型的“梦境”。这些指令触发了模型的梦境，并基于模型对其训练资料的模糊记忆，大多数时候能够引导到一些有用的结果。

只有当这些“梦境”偏离到被认为事实上不正确的领域时，我们才会将其标记为“虚构”。这看似是一个错误，但实际上，这只是大型语言模型一贯的工作方式。

再来看一个极端的例子，比如搜索引擎。它接受一个查询指令，然后直接返回其数据库中最相似的“训练文档”，原样不变。可以说，这样的搜索引擎存在“创新问题”——**它永远不会提供全新的内容**。大型语言模型则是100%在“做梦”，面临着虚构问题。而搜索引擎则是0%在“做梦”，面临着创新问题。

尽管如此，我明白人们*实际上*关心的是，**他们不希望像 ChatGPT 这样的大型语言模型助手产生虚构内容**。大型语言模型助手的系统比单纯的大型语言模型要复杂得多，尽管大型语言模型是其核心。有许多方法可以在这些系统中减少虚构现象，例如使用检索增强生成（Retrieval Augmented Generation，RAG）技术，通过上下文学习，使模型的输出更加紧密地依据真实数据。其他方法包括比较多个结果的不一致性、反思、验证链条、从激活状态中解析不确定性、使用工具等。这些都是目前研究的热点领域。

总而言之，我可能过于吹毛求疵，但大型语言模型本身并没有“幻觉问题”。幻觉不是一个缺陷，而是大型语言模型的一大特色。大型语言模型助手面临着虚构问题，我们应当去解决它。

> 好了，现在我感觉好多了 :)