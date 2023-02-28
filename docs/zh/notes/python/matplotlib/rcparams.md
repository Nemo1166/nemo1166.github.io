---
icon: note
date: 2023-03-01
category:
    - python 笔记
tag:
    - python
    - matplotlib
---

# matplotlib with latex

## 调整公式字体

```python
# 设置字体、字号、公式字体
mpl.rcParams['font.family'] = 'Times New Roman'
mpl.rcParams['font.size'] = 16
mpl.rcParams['mathtext.fontset'] = 'stix'
```

## 应用 latex 公式

直接写就行，为避免转义，使用 r 修饰符。
