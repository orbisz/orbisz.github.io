import{_ as s,c as e,a,o as i}from"./app-Bz2N6WBW.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h3 id="_41-和为s的连续整数序列" tabindex="-1"><a class="header-anchor" href="#_41-和为s的连续整数序列"><span>41. 和为s的连续整数序列</span></a></h3><h4 id="和为s的两个数字" tabindex="-1"><a class="header-anchor" href="#和为s的两个数字"><span>和为S的两个数字</span></a></h4><p>输入一个递增排序的数组array和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，返回任意一组即可，如果无法找出这样的数字，返回一个空数组即可。</p><p>思路：双指针，哈希表</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public ArrayList&lt;Integer&gt; FindNumbersWithSum(int [] array,int sum) {</span>
<span class="line">        ArrayList&lt;Integer&gt; res = new ArrayList&lt;Integer&gt;();</span>
<span class="line">        //左右双指针</span>
<span class="line">        int left = 0, right = array.length - 1;</span>
<span class="line">        //对撞双指针</span>
<span class="line">        while(left &lt; right){</span>
<span class="line">            //相加等于sum，找到目标</span>
<span class="line">            if(array[left] + array[right] == sum){</span>
<span class="line">                res.add(array[left]);</span>
<span class="line">                res.add(array[right]);</span>
<span class="line">                break;</span>
<span class="line">            //和太大，缩小右边</span>
<span class="line">            }else if(array[left] + array[right] &gt; sum)</span>
<span class="line">                right--;</span>
<span class="line">            //和太小，扩大左边</span>
<span class="line">            else</span>
<span class="line">                left++;</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和为s的连续正数序列" tabindex="-1"><a class="header-anchor" href="#和为s的连续正数序列"><span>和为S的连续正数序列</span></a></h4><p>小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列?</p><p>思路：滑动窗口，从某一个数字开始的连续序列和等于目标数如果有，只能有一个，于是我们可以用这个性质来使区间滑动。 两个指针l,r分别指向区间首和区间尾，公式<code>(l+r)*(r-l+1)/2</code>计算区间和。如果和目标结果相等，记录该序列，然后l++，如果区间和大于该序列，l++，如果区间和小于该序列，r--；</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public ArrayList&lt;ArrayList&lt;Integer&gt;&gt; FindContinuousSequence (int sum) {</span>
<span class="line">        ArrayList&lt;ArrayList&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();</span>
<span class="line">        int l=1,r=2;</span>
<span class="line">        while(l&lt;r){</span>
<span class="line">            int sum2 = (r+l)*(r-l+1)/2;</span>
<span class="line">            if(sum2==sum){</span>
<span class="line">                ArrayList&lt;Integer&gt; temp = new ArrayList&lt;&gt;();</span>
<span class="line">                for(int i=l;i&lt;=r;i++){</span>
<span class="line">                    temp.add(i);</span>
<span class="line">                }</span>
<span class="line">                res.add(temp);</span>
<span class="line">                l++;</span>
<span class="line">            }else if(sum2&gt;sum){</span>
<span class="line">                l++;</span>
<span class="line">            }else{</span>
<span class="line">                r++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_42-翻转字符串" tabindex="-1"><a class="header-anchor" href="#_42-翻转字符串"><span>42. 翻转字符串</span></a></h3><h4 id="翻转单词序列" tabindex="-1"><a class="header-anchor" href="#翻转单词序列"><span>翻转单词序列</span></a></h4><p>把单词序列反转，每一个单词都是正常的</p><p>思路：把序列去掉空格转换成数组，然后倒序输出</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public String ReverseSentence(String str) {</span>
<span class="line">        if(str==null||str.length()==0) return new String();</span>
<span class="line">        String[] s = str.split(&quot; &quot;);</span>
<span class="line">        StringBuilder res = new StringBuilder();</span>
<span class="line">        for(int i=s.length-1;i&gt;=0;i--){</span>
<span class="line">            res.append(s[i]).append(&quot; &quot;);</span>
<span class="line">        }</span>
<span class="line">        res.deleteCharAt(res.length()-1);</span>
<span class="line">        return res.toString();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="左旋转字符串" tabindex="-1"><a class="header-anchor" href="#左旋转字符串"><span>左旋转字符串</span></a></h4><p>汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列 S ，请你把其循环左移 K 位后的序列输出。</p><p>思路：反转三次即可，循环左移相当于从第n个位置开始，左右两部分视作整体翻转。即abcdefg左移3位defgabc可以看成AB翻转成BA（这里小写字母看成字符元素，大写字母看成整体）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public String LeftRotateString (String str, int n) {</span>
<span class="line">        if(str==null||str.length()==0) return &quot;&quot;;</span>
<span class="line">        int m = str.length();</span>
<span class="line">        n = n%m;</span>
<span class="line">        char[] s = str.toCharArray();</span>
<span class="line">        reverse(s,0,m-1);</span>
<span class="line">        reverse(s,0,m-n-1);</span>
<span class="line">        reverse(s,m-n,m-1);</span>
<span class="line">        return new String(s);</span>
<span class="line">    }</span>
<span class="line">    private void reverse(char[] s,int start, int end){</span>
<span class="line">        while(start&lt;end){</span>
<span class="line">            char temp = s[start];</span>
<span class="line">            s[start] = s[end];</span>
<span class="line">            s[end] = temp;</span>
<span class="line">            start++;</span>
<span class="line">            end--;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_43-n个骰子的点数及出现的概率" tabindex="-1"><a class="header-anchor" href="#_43-n个骰子的点数及出现的概率"><span>43. n个骰子的点数及出现的概率</span></a></h3><p>你选择掷出 n 个色子，请返回所有点数总和的概率。</p><p>思路：动态规划，根据i个骰子的概率推算出i+1个骰子的概率。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public double[] statisticsProbability(int num) {</span>
<span class="line">        int maxSum = 6 * num;</span>
<span class="line">        int minSum = num;</span>
<span class="line">        int total = (int) Math.pow(6, num); // 所有可能情况数</span>
<span class="line">        int[][] dp = new int[num + 1][maxSum + 1];</span>
<span class="line">        for (int i = 1; i &lt;= 6; i++) {</span>
<span class="line">            dp[1][i] = 1;</span>
<span class="line">        }</span>
<span class="line">        for (int i = 2; i &lt;= num; i++) {</span>
<span class="line">            for (int j = i; j &lt;= 6 * i; j++) {</span>
<span class="line">                for (int k = 1; k &lt;= 6; k++) {</span>
<span class="line">                    if (j - k &gt;= i - 1) {</span>
<span class="line">                        dp[i][j] += dp[i - 1][j - k];</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        double[] result = new double[maxSum - minSum + 1];</span>
<span class="line">        for (int i = minSum; i &lt;= maxSum; i++) {</span>
<span class="line">            result[i - minSum] = (double) dp[num][i] / total;</span>
<span class="line">        }</span>
<span class="line">        return result;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_44-扑克牌的顺子" tabindex="-1"><a class="header-anchor" href="#_44-扑克牌的顺子"><span>44. 扑克牌的顺子</span></a></h3><p>现在有2副扑克牌，从扑克牌中随机五张扑克牌，我们需要来判断一下是不是顺子。</p><p>思路：遍历数组，遇到零牌计数，遇到非零牌计算与其后的间隔数，最后比较零牌数与间隔数，若是间隔数大于零牌数则不能组成顺子。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public boolean IsContinuous (int[] numbers) {</span>
<span class="line">        Arrays.sort(numbers);</span>
<span class="line">        int zeros=0;</span>
<span class="line">        int gap=0;</span>
<span class="line">        for(int i=0;i&lt;numbers.length-1;i++){</span>
<span class="line">            if(numbers[i]==0) zeros++;</span>
<span class="line">            else{</span>
<span class="line">                if(numbers[i]-numbers[i+1]==0) return false;</span>
<span class="line">                else gap += numbers[i+1]-numbers[i]-1;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return gap&lt;=zeros;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_45-圆圈中最后剩下的数" tabindex="-1"><a class="header-anchor" href="#_45-圆圈中最后剩下的数"><span>45. 圆圈中最后剩下的数</span></a></h3><p>每年六一儿童节，牛客都会准备一些小礼物和小游戏去看望孤儿院的孩子们。其中，有个游戏是这样的：首先，让 n 个小朋友们围成一个大圈，小朋友们的编号是0~n-1。然后，随机指定一个数 m ，让编号为0的小朋友开始报数。每次喊到 m-1 的那个小朋友要出列唱首歌，然后可以在礼品箱中任意的挑选礼物，并且不再回到圈中，从他的下一个小朋友开始，继续0... m-1报数....这样下去....直到剩下最后一个小朋友，可以不用表演，并且拿到牛客礼品，请你试着想下，哪个小朋友会得到这份礼品呢？</p><p>思路：约瑟夫环问题，迭代实现，空间复杂度较低，递推关系：<code>J(n, m) = (J(n-1, m) + m) % n</code>,定义 J(n, m)：表示 n 个小朋友围成圈、每次数 m 个（报数到 m-1）时，最后剩余小朋友的编号（编号从 0 开始）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public int LastRemaining_Solution (int n, int m) {</span>
<span class="line">        if(n==0||m==0) return -1;</span>
<span class="line">        int x=0;</span>
<span class="line">        for(int i=2;i&lt;=n;i++){</span>
<span class="line">            x=(m+x)%i;</span>
<span class="line">        }</span>
<span class="line">        return x;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_46-1-2-3-n的和" tabindex="-1"><a class="header-anchor" href="#_46-1-2-3-n的和"><span>46. 1+2+3+…+n的和</span></a></h3><p>求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。</p><p>思路：不用 for/while 循环，改用递归实现累加（每次递归计算 n + sum (n-1)）。利用逻辑与（&amp;&amp;）的短路特性替代 if 判断终止条件。</p><ul><li>逻辑与的规则：A &amp;&amp; B中，若 A 为 false，则 B 不会执行。</li><li>当 n=0 时，递归终止；当 n&gt;0 时，继续递归计算 sum (n-1)。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public int Sum_Solution(int n) {</span>
<span class="line">        boolean flag = (n&gt;1)&amp;&amp;((n+=Sum_Solution(n-1))&gt;0);</span>
<span class="line">        return n;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_47-不用加减乘除做加法" tabindex="-1"><a class="header-anchor" href="#_47-不用加减乘除做加法"><span>47. 不用加减乘除做加法</span></a></h3><p>写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。空间复杂度 O(1)，时间复杂度 O(1)。</p><p>思路：加法运算可拆解为两个独立过程，循环执行直至无进位产生。</p><ul><li>无进位相加：用异或（^） 运算实现。异或的特性是 “相同位为 0，不同位为 1”，恰好对应二进制中 “不考虑进位时的加法结果”。</li><li>进位计算：用与（&amp;） 运算结合左移（&lt;&lt;1） 实现。与运算的特性是 “只有两位都为 1 时结果为 1”，可定位进位发生的位置；左移 1 位则将进位值移动到正确的高位（如个位进位需移到十位）。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public int Add(int num1,int num2) {</span>
<span class="line">        while(num2!=0){</span>
<span class="line">            int sum = num1^num2;</span>
<span class="line">            int carry = (int)((long)(num1&amp;num2)&lt;&lt;1);</span>
<span class="line">            num1=sum;</span>
<span class="line">            num2=carry;</span>
<span class="line">        }</span>
<span class="line">        return num1;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_48-不能被继承的类" tabindex="-1"><a class="header-anchor" href="#_48-不能被继承的类"><span>48. 不能被继承的类</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_49-字符串转换为整数" tabindex="-1"><a class="header-anchor" href="#_49-字符串转换为整数"><span>49. 字符串转换为整数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_50-树中两个节点的最低公共祖先" tabindex="-1"><a class="header-anchor" href="#_50-树中两个节点的最低公共祖先"><span>50. 树中两个节点的最低公共祖先</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_51-找出重复的数" tabindex="-1"><a class="header-anchor" href="#_51-找出重复的数"><span>51. 找出重复的数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_52-构建乘积数组" tabindex="-1"><a class="header-anchor" href="#_52-构建乘积数组"><span>52. 构建乘积数组</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_53-正则表达式匹配" tabindex="-1"><a class="header-anchor" href="#_53-正则表达式匹配"><span>53. 正则表达式匹配</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_54-表示数值的字符串" tabindex="-1"><a class="header-anchor" href="#_54-表示数值的字符串"><span>54. 表示数值的字符串</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_55-字符流中第一个不重复的字符" tabindex="-1"><a class="header-anchor" href="#_55-字符流中第一个不重复的字符"><span>55. 字符流中第一个不重复的字符</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_56-链表中环的入口节点" tabindex="-1"><a class="header-anchor" href="#_56-链表中环的入口节点"><span>56. 链表中环的入口节点</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_57-删除链表中重复的节点" tabindex="-1"><a class="header-anchor" href="#_57-删除链表中重复的节点"><span>57. 删除链表中重复的节点</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_58-二叉树的下一个节点" tabindex="-1"><a class="header-anchor" href="#_58-二叉树的下一个节点"><span>58. 二叉树的下一个节点</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_59-对称的二叉树" tabindex="-1"><a class="header-anchor" href="#_59-对称的二叉树"><span>59. 对称的二叉树</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_60-按之字形顺序打印二叉树" tabindex="-1"><a class="header-anchor" href="#_60-按之字形顺序打印二叉树"><span>60. 按之字形顺序打印二叉树</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_61-把二叉树打印成多行" tabindex="-1"><a class="header-anchor" href="#_61-把二叉树打印成多行"><span>61. 把二叉树打印成多行</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_62-序列化二叉树" tabindex="-1"><a class="header-anchor" href="#_62-序列化二叉树"><span>62. 序列化二叉树</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_63-二叉搜索树的第k个节点" tabindex="-1"><a class="header-anchor" href="#_63-二叉搜索树的第k个节点"><span>63. 二叉搜索树的第K个节点</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_64-数据流中的中位数" tabindex="-1"><a class="header-anchor" href="#_64-数据流中的中位数"><span>64. 数据流中的中位数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_65-滑动窗口的最大值" tabindex="-1"><a class="header-anchor" href="#_65-滑动窗口的最大值"><span>65. 滑动窗口的最大值</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_66-矩阵中的路径" tabindex="-1"><a class="header-anchor" href="#_66-矩阵中的路径"><span>66. 矩阵中的路径</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_67-机器人的运动范围" tabindex="-1"><a class="header-anchor" href="#_67-机器人的运动范围"><span>67. 机器人的运动范围</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80)]))}const c=s(l,[["render",d]]),p=JSON.parse('{"path":"/blogs/algorithm/offer-java3.html","title":"剑指offer-Java版 41-67","lang":"en-US","frontmatter":{"title":"剑指offer-Java版 41-67","date":"2025/09/14","tags":["Java"],"categories":["算法"]},"headers":[{"level":3,"title":"41. 和为s的连续整数序列","slug":"_41-和为s的连续整数序列","link":"#_41-和为s的连续整数序列","children":[]},{"level":3,"title":"42. 翻转字符串","slug":"_42-翻转字符串","link":"#_42-翻转字符串","children":[]},{"level":3,"title":"43. n个骰子的点数及出现的概率","slug":"_43-n个骰子的点数及出现的概率","link":"#_43-n个骰子的点数及出现的概率","children":[]},{"level":3,"title":"44. 扑克牌的顺子","slug":"_44-扑克牌的顺子","link":"#_44-扑克牌的顺子","children":[]},{"level":3,"title":"45. 圆圈中最后剩下的数","slug":"_45-圆圈中最后剩下的数","link":"#_45-圆圈中最后剩下的数","children":[]},{"level":3,"title":"46. 1+2+3+…+n的和","slug":"_46-1-2-3-n的和","link":"#_46-1-2-3-n的和","children":[]},{"level":3,"title":"47. 不用加减乘除做加法","slug":"_47-不用加减乘除做加法","link":"#_47-不用加减乘除做加法","children":[]},{"level":3,"title":"48. 不能被继承的类","slug":"_48-不能被继承的类","link":"#_48-不能被继承的类","children":[]},{"level":3,"title":"49. 字符串转换为整数","slug":"_49-字符串转换为整数","link":"#_49-字符串转换为整数","children":[]},{"level":3,"title":"50. 树中两个节点的最低公共祖先","slug":"_50-树中两个节点的最低公共祖先","link":"#_50-树中两个节点的最低公共祖先","children":[]},{"level":3,"title":"51. 找出重复的数","slug":"_51-找出重复的数","link":"#_51-找出重复的数","children":[]},{"level":3,"title":"52. 构建乘积数组","slug":"_52-构建乘积数组","link":"#_52-构建乘积数组","children":[]},{"level":3,"title":"53. 正则表达式匹配","slug":"_53-正则表达式匹配","link":"#_53-正则表达式匹配","children":[]},{"level":3,"title":"54. 表示数值的字符串","slug":"_54-表示数值的字符串","link":"#_54-表示数值的字符串","children":[]},{"level":3,"title":"55. 字符流中第一个不重复的字符","slug":"_55-字符流中第一个不重复的字符","link":"#_55-字符流中第一个不重复的字符","children":[]},{"level":3,"title":"56. 链表中环的入口节点","slug":"_56-链表中环的入口节点","link":"#_56-链表中环的入口节点","children":[]},{"level":3,"title":"57. 删除链表中重复的节点","slug":"_57-删除链表中重复的节点","link":"#_57-删除链表中重复的节点","children":[]},{"level":3,"title":"58. 二叉树的下一个节点","slug":"_58-二叉树的下一个节点","link":"#_58-二叉树的下一个节点","children":[]},{"level":3,"title":"59. 对称的二叉树","slug":"_59-对称的二叉树","link":"#_59-对称的二叉树","children":[]},{"level":3,"title":"60. 按之字形顺序打印二叉树","slug":"_60-按之字形顺序打印二叉树","link":"#_60-按之字形顺序打印二叉树","children":[]},{"level":3,"title":"61. 把二叉树打印成多行","slug":"_61-把二叉树打印成多行","link":"#_61-把二叉树打印成多行","children":[]},{"level":3,"title":"62. 序列化二叉树","slug":"_62-序列化二叉树","link":"#_62-序列化二叉树","children":[]},{"level":3,"title":"63. 二叉搜索树的第K个节点","slug":"_63-二叉搜索树的第k个节点","link":"#_63-二叉搜索树的第k个节点","children":[]},{"level":3,"title":"64. 数据流中的中位数","slug":"_64-数据流中的中位数","link":"#_64-数据流中的中位数","children":[]},{"level":3,"title":"65. 滑动窗口的最大值","slug":"_65-滑动窗口的最大值","link":"#_65-滑动窗口的最大值","children":[]},{"level":3,"title":"66. 矩阵中的路径","slug":"_66-矩阵中的路径","link":"#_66-矩阵中的路径","children":[]},{"level":3,"title":"67. 机器人的运动范围","slug":"_67-机器人的运动范围","link":"#_67-机器人的运动范围","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/algorithm/offer-java3.md"}');export{c as comp,p as data};
