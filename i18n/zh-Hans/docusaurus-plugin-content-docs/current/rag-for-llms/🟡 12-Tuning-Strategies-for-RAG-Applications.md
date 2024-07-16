---
sidebar_position: 5
title: 12 Tuning Strategies for RAG Applications
description: This page provides a comprehensive guide on 12 tuning strategies to optimize the performance of Retrieval-Augmented Generation (RAG) applications.
keywords: [RAG, Retrieval-Augmented Generation, tuning strategies, machine learning, data science, performance optimization]
slug: /rag-for-llms/rag-tuning-strategies/
---
# 🟡  RAG应用的12种调优策略指南

> 😀 [原文](https://towardsdatascience.com/a-guide-on-12-tuning-strategies-for-production-ready-rag-applications-7ca646833439#a5e2)
> 作者：Leonie Monigatti
> 转发：欣

数据科学是一门实验性科学。它始于“无免费午餐定理”，即不存在适用于每个问题的通用算法。因此，数据科学家们使用[实验跟踪系统](https://medium.com/@iamleonie/intro-to-mlops-experiment-tracking-for-machine-learning-858e432bd133)来帮助调整他们机器学习项目的超参数，以实现最佳性能。

本文从数据科学家的角度审视了一种检索增强生成（Retrieval-Augmented Generation，以下简称RAG），讨论了一些潜在的“超参数”——您可以通过调整它提高RAG流程的性能。类似于深度学习中的实验，数据增强技术不是超参数，而是您可以调整和实验的旋钮，本文还将涵盖您可以应用的不同策略，这些策略并非严格意义上的超参数。

这篇文章按其相关阶段列举了以下RAG流程的“超参数”。在**数据索引**阶段，您可以通过以下方式实现性能提升：

1. 数据清洗
2. 分块
3. 嵌入模型
4. 元数据
5. 多索引
6. 索引算法

在**推理阶段**（检索和生成），您可以考虑调整以下内容：

1. 查询转换
2. 检索参数
3. 高级检索策略
4. 重新排序模型
5. 语言模型微调
6. 提示工程

请注意，本文的用例是基于文本类的RAG应用。对于多模态的RAG应用，可能需要考虑其他不同的因素。

## 数据索引

数据索引阶段是构建RAG的准备步骤，类似于机器学习中的数据清洗和预处理。数据索引阶段通常包括以下步骤：

1. **数据收集**
2. **分块：**将大量数据分割成较小的块，以便更有效地处理和管理数据。
3. **向量化：** 使用嵌入模型将每个数据块转换为向量表示这有助于在后续的检索和生成阶段中处理和分析文本。
4. **存储：**将生成的向量和相应的数据块存储在向量数据库中。

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/936bcbbc53dfb95e2a2e55ee5446adcb.webp)

### 数据清洗

数据质量在RAG中起着至关重要的作用。在进行以下任何步骤之前，请确保您的数据符合以下标准：

- 整洁：请应用一些在自然语言处理中常用的数据清洗方法。例如确保所有特殊字符被正确编码。
- 正确：确保信息的一致性与准确性，避免可能混淆语言模型的冲突信息。

### 分块

在RAG中，对文档进行切块是处理外部知识源的一项重要步骤，会接影响性能。分块是一种生成有逻辑关联的信息片段的技巧，通常做法是通过将长文档分割成小节（也可以将小片段组合成段落）。

**分块技术**是影响分块效果的一个因素。例如，在LangChain中，不同的文本拆分器根据不同的逻辑拆分文档，比如按字符、标记等。这要根据你的数据类型来决定。例如，如果你的输入数据是代码，那么你可能需要使用不同的切块技术；而如果是Markdown文件，可能需要另一种技术。

**分块长度**（chunk_size）也要具体情况具体分析：如果你的使用场景是问答，可能需要更短的、更具体的切块；但如果是摘要，可能需要更长的切块。此外，如果一个切块太短，可能不包含足够的上下文。另一方面，如果切块太长，可能包含太多不相关的信息。

另外，还需要考虑在切块之间引入一些额外上下文的“滚动窗口”（重叠），来提高信息连贯性。

### 嵌入

嵌入模型是检索的核心。嵌入的质量直接影响检索结果。通常来说，生成的嵌入的维度越高，嵌入的精度就越高。

关于可用的替代嵌入模型，可以参考大规模文本嵌入基准（Massive Text Embedding Benchmark，MTEB）排行榜，该排行榜涵盖了164个文本嵌入模型（截至本文撰写时）。

虽然你可以直接使用通用嵌入模型，但在某些情况下，对嵌入模型进行微调以适应特定用例可能是有意义的，因为这样可以避免后期出现领域外问题[9]。根据LlamaIndex的实验证明，微调嵌入模型可能导致检索评估指标提高5-10% [2]。

但不是所有嵌入模型都可以进行微调（例如，目前无法对OpenAI的text-ebmedding-ada-002进行微调）。

### 元数据

当把向量嵌入存储在向量数据库中时，一些向量数据库可以将它们与元数据（或未向量化的数据）一起存储。使用元数据注释向量嵌入可以对搜索结果进行后处理，例如元数据过滤[1, 3, 8, 9]，或者添加日期、章节或子章节引用等元数据。

### 多索引

如果元数据不足以在逻辑上区分不同类型的上下文，可以尝试使用多索引[1, 9]。例如，可以为不同类型的文档使用不同的索引。需要注意的是，您会需要在检索时进行一些索引路由[1, 9]。如果您对元数据和独立集合(separate collections)感兴趣，您可能也会想要了解[原生多租户](https://www.youtube.com/watch?v=KT2RFMTJKGs)。

### 索引算法

为了在大规模情况下实现快速相似性搜索，向量数据库和向量索引库使用的是近似最近邻搜索（Approximate Nearest Neighbor，ANN）而不是k最近邻搜索（k-nearest neighbor，kNN）。顾名思义，ANN算法近似最近邻，因此可能比kNN算法精度略低。

其中，有许多不同的ANN算法，例如Facebook Faiss（聚类）、Spotify Annoy（树）、Google ScaNN（向量压缩）和HNSWLIB（接近图）。这些ANN算法一般都有可以调整的参数，比如HNSW中的ef、efConstruction和maxConnections [1]。

此外，可以对索引算法启用向量压缩，使用向量压缩会损失一些精度。但是，你也可以（根据场景）对压缩算法的选择和调整进行优化。

在实践过程中，算法的参数通常已经由数据库研究团队在基准实验中进行调整了，RAG系统的开发人员通常不会改动。但如果您确实想要尝试调整这些参数，我建议从这篇文章开始：[《**An Overview on RAG Evaluation**》](https://weaviate.io/blog/rag-evaluation?source=post_page-----7ca646833439--------------------------------#indexing-knobs)

## 推理阶段（检索与生成）

RAG的主要组成部分是**检索**和**生成**。本节主要讨论提升检索效果的策略（查询转换、检索参数、高级检索策略和重新排序模型）。因为相对于生成，检索对结果的影响更大。但检索也会简单涉及到一些生成的策略（LLM和提示工程）。

![](https://cdn.jsdelivr.net/gh/donttal/imgbed/img/df169d2835ef8cc082a4df513da05e74.webp)

RAG中，用于获取额外上下文的搜索查询也被嵌入到向量空间中，因此查询的表达方式会对搜索结果产生影响。如果您的搜索查询没有得到满意的结果，您可以尝试一些查询转换技术[5, 8, 9]，比如：

1. **重新表达：** 使用语言模型（LLM）重新表达查询，然后再次尝试。
2. **假设性文档嵌入（HyDE）：** 使用语言模型生成对搜索查询的假设响应，然后将两者一起用于检索。
3. **子查询：** 将较长的查询分解为多个较短的查询。

检索参数

### 检索参数

检索是RAG的重要组成部分。你首先要考虑的是，语义搜索是否足够满足你的用例，或者你是否希望使用混合搜索。

在采用混合搜索的情况下，需要尝试调整混合搜索中稀疏和密集检索方法的加权聚合[1, 4, 9]。因此，调整参数alpha将变得至关重要。（alpha是控制语义搜索权重的参数，alpha=1表示完全语义搜索，alpha=0表示基于关键词的搜索）

此外，检索结果的数量也很重要。检索到的「上下文数量」将影响「所使用的上下文窗口的长度」（详见提示工程部分）。同时，如果使用重排序模型，您需要考虑将多少上下文输入到模型中（详见重新排序模型部分）。

虽然语义检索相似性度量方式可以设置，但应根据所使用的嵌入模型来修改，而不是进行不必要的实验。例如，text-embedding-ada-002支持余弦相似度，而multi-qa-MiniLM-l6-cos-v1支持余弦相似度、点积和欧几里得距离。

### 高级检索策略

从技术上讲，这一部分本身就可以成为一篇独立的文章。在这个概览中，我们将保持尽可能简洁。如果您想深入了解以下技术，请参考这门DeepLearning.AI课程[《**Building and Evaluating Advanced RAG Applications**》](https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/?source=post_page-----7ca646833439--------------------------------)。

基本思想是，用于检索的块不一定要与用于生成的块相同。理想情况下，会把检索嵌入为较小的块，去检索较大的上下文[7]。

- 句子窗口检索(**Sentence-window retrieval**)：不仅检索相关句子，还要检索句子之前和之后的窗口。
- 自动合并检索(**Auto-merging retrieval**)：文档以类似树状结构组织。查询时，可以将单独但相关的较小块合并成更大的上下文。

### 重排序模型

语义搜索是基于上下文与搜索查询的语义相似性来检索的，但**“最相似”并不一定意味着“最相关”**。重排序模型，例如Cohere的重排序模型，可以通过计算每个检索到的上下文与查询相关性的分数来消除不相关的搜索结果[1, 9]。

如果使用重排序模型，可能需要重新调整输入到重排序器的**搜索结果数量**，以及您希望将多少经过重新排序的结果输入到LLM中。

和嵌入模型一样，您可能需要根据您的用例来微调重排序模型。

### 大语言模型

LLM是生成响应的核心组件。类似于嵌入模型，根据您的需求（例如开放式与专有模型、推理成本、上下文长度等[1]），有各种各样的LLM可供选择。

与嵌入模型或重排序模型一样，您可能希望尝试对LLM进行微调来适应特定用例。

### 提示工程

prompt极大地影响LLM的生成结果[1, 8, 9]。

> 请仅基于提供的搜索结果回答问题，切勿参考其他信息！
> 

> 这一点非常重要！您的回答必须建立在提供的搜索结果之上。请解释您的答案为何基于搜索结果。
> 

此外，在提示中使用少量示例可以提高完成结果的质量。

上下文长度是一个您应该尝试实验的参数[1]。虽然通过增加相关上下文可以改善RAG的性能，但如果将相关上下文放置在过多上下文的中间，可能遇到“中间迷失”[6]效应，即LLM可能无法识别中间位置的相关上下文。

## 总结

随着越来越多的开发人员在创建RAG流程的原型方面积累经验，讨论如何使RAG流程达到投入生产所需的性能变得更为重要。本文阐述了在RAG过程中，可以根据阶段调整的不同“超参数”和其他参数：

本文涵盖了数据索引阶段中的策略：

- 数据清洗：确保数据清洁且正确。
- 切块：选择切块技术、切块大小（chunk_size）和切块重叠（overlap）。
- 嵌入模型：选择嵌入模型，包括维度，以及是否进行微调。
- 元数据：是否使用元数据以及元数据的选择。
- 多索引：决定是否为不同的数据集使用多个索引。
- 索引算法：ANN和向量压缩算法的选择和调整是可以进行调整的，但通常不由RAG应用开发者进行调整。

在推理阶段（检索和生成）中，涉及以下策略：

- 查询转换：尝试重新表达、HyDE或子查询。
- 检索参数：选择搜索技术（如果启用混合搜索，则为alpha）和检索到的搜索结果数量。
- 高级检索策略：是否使用高级检索策略，如句子窗口或自动合并检索。
- 重排序模型：是否使用重排序模型，重排序模型的选择，输入到重排序模型的搜索结果数量，以及是否对重排序模型进行微调。
- LLMs：LLM的选择以及是否对其进行微调。
- 提示工程：尝试不同的措辞和少量示例。

### 参考文献

[1] [Connor Shorten](https://medium.com/u/59216259c525?source=post_page-----7ca646833439--------------------------------) and [Erika Cardenas](https://medium.com/u/91b27bdf28df?source=post_page-----7ca646833439--------------------------------) (2023). Weaviate Blog. [An Overview on RAG Evaluation](https://weaviate.io/blog/rag-evaluation) (accessed Nov. 27, 2023)

[2] [Jerry Liu](https://medium.com/u/e76da1c45ef7?source=post_page-----7ca646833439--------------------------------) (2023). LlamaIndex Blog. [Fine-Tuning Embeddings for RAG with Synthetic Data](https://blog.llamaindex.ai/fine-tuning-embeddings-for-rag-with-synthetic-data-e534409a3971) (accessed Nov. 28, 2023)

[3] LlamaIndex Documentation (2023). [Building Performant RAG Applications for Production](https://gpt-index.readthedocs.io/en/stable/optimizing/production_rag.html) (accessed Nov. 28, 2023)

[4] Voyage AI (2023). [Embeddings Drive the Quality of RAG: A Case Study of Chat.LangChain](https://blog.voyageai.com/2023/10/29/a-case-study-of-chat-langchain/) (accessed Dec. 5, 2023)

[5] LlamaIndex Documentation (2023). [Query Transformations](https://gpt-index.readthedocs.io/en/v0.6.9/how_to/query/query_transformations.html) (accessed Nov. 28, 2023)

[6] Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2023). Lost in the middle: How language models use long contexts. *arXiv preprint arXiv:2307.03172*.

[7] DeepLearning.AI (2023). [Building and Evaluating Advanced RAG Applications](https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/) (accessed Dec 4, 2023)

[8] [Ahmed Besbes](https://medium.com/u/adc8ea174c69?source=post_page-----7ca646833439--------------------------------) (2023). Towards Data Science. [Why Your RAG Is Not Reliable in a Production Environment](https://towardsdatascience.com/why-your-rag-is-not-reliable-in-a-production-environment-9e6a73b3eddb) (accessed Nov. 27, 2023)

[9] [Matt Ambrogi](https://medium.com/u/1e23ad8f92c5?source=post_page-----7ca646833439--------------------------------) (2023). Towards Data Science. [10 Ways to Improve the Performance of Retrieval Augmented Generation Systems](https://towardsdatascience.com/10-ways-to-improve-the-performance-of-retrieval-augmented-generation-systems-5fa2cee7cd5c) (accessed Nov. 27, 2023)

### 参考图片

除非另有说明，所有图片均由原作者创建。