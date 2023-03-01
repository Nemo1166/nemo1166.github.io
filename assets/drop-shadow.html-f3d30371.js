import{_ as n,V as d,W as r,a1 as c,Y as e,Z as o,X as a,a0 as t,C as i}from"./framework-f8b085cf.js";const l={},p=t('<h1 id="用-drop-shadow-为元素加投影" tabindex="-1"><a class="header-anchor" href="#用-drop-shadow-为元素加投影" aria-hidden="true">#</a> 用 drop-shadow() 为元素加投影</h1><p><code>drop-shadow()</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> CSS 函数将投影效果应用于输入图像。一般情况下搭配 <code>filter</code><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 使用。</p>',2),h=t(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">drop-shadow</span><span class="token punctuation">(</span>offset-x offset-y blur-radius spread-radius color<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>offset-x: 水平距离，其中负值将阴影放置到元素的左侧，必要。</li><li>offset-y: 垂直距离，其中负值将阴影置于元素之上，必要。</li><li>blur-radius: 阴影的模糊半径，默认 0。</li><li>spread-radius: 阴影的扩展半径。</li><li>color: 阴影的颜色。</li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p>一般搭配 <code>filter</code> 使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0 1px red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="filter:drop-shadow(0 0 1px red);">示例文字。</span></p><h2 id="对比-text-shadow-和-box-shadow" tabindex="-1"><a class="header-anchor" href="#对比-text-shadow-和-box-shadow" aria-hidden="true">#</a> 对比 <code>text-shadow</code> 和 <code>box-shadow</code></h2><p>对于纯文本内容，<code>text-shadow</code> 和 <code>drop-shadow</code> 几乎没有区别，参数也可以共用。</p><p><span style="text-shadow:0 0 1px red;">示例文字。</span></p><p>而对于图像或其他含透明通道的元素，<code>drop-shadow</code> 只会在不透明的部分绘制投影，<code>box-shadow</code> 投影整个元素。</p><p>另一方面，<code>box-shadow</code> 可以任意叠加，而 <code>drop-shadow</code> 不能叠加。</p><hr class="footnotes-sep">`,13),f={class:"footnotes"},u={class:"footnotes-list"},_={id:"footnote1",class:"footnote-item"},x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow",target:"_blank",rel:"noopener noreferrer"},m=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),b={id:"footnote2",class:"footnote-item"},w={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"},v=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function k(g,N){const s=i("ExternalLinkIcon");return d(),r("div",null,[p,c(" more "),h,e("section",f,[e("ol",u,[e("li",_,[e("p",null,[e("a",x,[o("drop-shadow | MDN"),a(s)]),o(),m])]),e("li",b,[e("p",null,[e("a",w,[o("filter | MDN"),a(s)]),o(),v])])])])])}const S=n(l,[["render",k],["__file","drop-shadow.html.vue"]]);export{S as default};
