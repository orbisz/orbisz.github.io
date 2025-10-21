import{_ as s,c as i,a as e,o as l}from"./app-CwN1xCkZ.js";const a={};function d(p,n){return l(),i("div",null,n[0]||(n[0]=[e(`<h3 id="_41-和为s的连续整数序列" tabindex="-1"><a class="header-anchor" href="#_41-和为s的连续整数序列"><span>41. 和为s的连续整数序列</span></a></h3><h4 id="和为s的两个数字" tabindex="-1"><a class="header-anchor" href="#和为s的两个数字"><span>和为S的两个数字</span></a></h4><p>输入一个递增排序的数组array和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，返回任意一组即可，如果无法找出这样的数字，返回一个空数组即可。</p><p>思路：双指针，哈希表</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_49-字符串转换为整数" tabindex="-1"><a class="header-anchor" href="#_49-字符串转换为整数"><span>49. 字符串转换为整数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public int myAtoi(String str) {</span>
<span class="line">        int n=str.length();</span>
<span class="line">        int i=0;</span>
<span class="line">        while(i&lt;n&amp;&amp;str.charAt(i)==&#39; &#39;){</span>
<span class="line">            i++;</span>
<span class="line">        }</span>
<span class="line">        if(i==n) return 0;</span>
<span class="line">        int sign=1;</span>
<span class="line">        if(str.charAt(i)==&#39;-&#39;||str.charAt(i)==&#39;+&#39;){</span>
<span class="line">            sign  = str.charAt(i)==&#39;-&#39;?-1:1;</span>
<span class="line">            i++;</span>
<span class="line">        }</span>
<span class="line">        int res=0;</span>
<span class="line">        while(i&lt;n&amp;&amp;Character.isDigit(str.charAt(i))){</span>
<span class="line">            int didgit = str.charAt(i)-&#39;0&#39;;</span>
<span class="line">            if(res&gt;((Integer.MAX_VALUE-didgit)/10)){</span>
<span class="line">                return sign==-1?Integer.MIN_VALUE:Integer.MAX_VALUE;</span>
<span class="line">            }</span>
<span class="line">            res = res*10+didgit;</span>
<span class="line">            i++;</span>
<span class="line">        }</span>
<span class="line">        return res*sign;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_50-树中两个节点的最低公共祖先" tabindex="-1"><a class="header-anchor" href="#_50-树中两个节点的最低公共祖先"><span>50. 树中两个节点的最低公共祖先</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {</span>
<span class="line">        if(root==null||p==root||q==root) return root;</span>
<span class="line">        TreeNode left = lowestCommonAncestor(root.left,p,q);</span>
<span class="line">        TreeNode right = lowestCommonAncestor(root.right,p,q);</span>
<span class="line">        if(left!=null&amp;&amp;right!=null){</span>
<span class="line">            return root;</span>
<span class="line">        }</span>
<span class="line">        return left!=null?left:right;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_51-找出重复的数" tabindex="-1"><a class="header-anchor" href="#_51-找出重复的数"><span>51. 找出重复的数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public int duplicate (int[] numbers) {</span>
<span class="line">        if(numbers==null||numbers.length&lt;2) return -1;</span>
<span class="line">        Set&lt;Integer&gt; set = new HashSet&lt;&gt;();</span>
<span class="line">        for(int num:numbers){</span>
<span class="line">            if(set.contains(num)) return num;</span>
<span class="line">            set.add(num);</span>
<span class="line">        }</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_52-构建乘积数组" tabindex="-1"><a class="header-anchor" href="#_52-构建乘积数组"><span>52. 构建乘积数组</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public int[] multiply (int[] A) {</span>
<span class="line">        if(A == null||A.length==0) return new int[0];</span>
<span class="line">        int n=A.length;</span>
<span class="line">        int[] pre = new int[n];</span>
<span class="line">        pre[0]=1;</span>
<span class="line">        for(int i=1;i&lt;n;i++){</span>
<span class="line">            pre[i] = pre[i-1]*A[i-1];</span>
<span class="line">        }</span>
<span class="line">        int[] res = new int[n];</span>
<span class="line">        int back=1;</span>
<span class="line">        for(int i=n-1;i&gt;=0;i--){</span>
<span class="line">            res[i]=pre[i]*back;</span>
<span class="line">            back *= A[i];</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_53-正则表达式匹配" tabindex="-1"><a class="header-anchor" href="#_53-正则表达式匹配"><span>53. 正则表达式匹配</span></a></h3><p>给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 &#39;.&#39; 和 &#39;*&#39; 的正则表达式匹配。</p><p>&#39;.&#39; 匹配任意单个字符 &#39;*&#39; 匹配零个或多个前面的那一个元素 所谓匹配，是要涵盖 整个 字符串 s 的，而不是部分字符串。</p><p>思路：设$s $ 的长度为 $ n $，$ p $ 的长度为 $ m $；将 $ s $ 的第 $ i $ 个字符记为 $ s_i $，$ p $ 的第 $ j $ 个字符记为 $ p_j $，将 $ s $ 的前 $ i $ 个字符组成的子字符串记为 $ s[:i] $，同理将 $ p $ 的前 $ j $ 个字符组成的子字符串记为 $ p[:j] $。本题可转化为求 $ s[:n] $ 是否能和 $ p[:m] $ 匹配。</p><p>总体思路是从 $ s[:1] $ 和 $ p[:1] $ 开始判断是否能匹配，每轮添加一个字符并判断是否能匹配，直至添加完整个字符串 $ s $ 和 $ p $。</p><p>展开来看，假设 $ s[:i] $ 与 $ p[:j] $ 可以匹配，那么下一状态有两种：</p><ol><li>添加一个字符 $ s_{i+1} $ 后是否能匹配？</li><li>添加字符 $ p_{j+1} $ 后是否能匹配？</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public boolean isMatch(String s, String p) {</span>
<span class="line">        int m = s.length() + 1, n = p.length() + 1;</span>
<span class="line">        boolean[][] dp = new boolean[m][n];</span>
<span class="line">        dp[0][0] = true;</span>
<span class="line">        for(int j = 2; j &lt; n; j += 2)</span>
<span class="line">            dp[0][j] = dp[0][j - 2] &amp;&amp; p.charAt(j - 1) == &#39;*&#39;;</span>
<span class="line">        for(int i = 1; i &lt; m; i++) {</span>
<span class="line">            for(int j = 1; j &lt; n; j++) {</span>
<span class="line">                dp[i][j] = p.charAt(j - 1) == &#39;*&#39; ?</span>
<span class="line">                    dp[i][j - 2] || dp[i - 1][j] &amp;&amp; (s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == &#39;.&#39;) :</span>
<span class="line">                    dp[i - 1][j - 1] &amp;&amp; (p.charAt(j - 1) == &#39;.&#39; || s.charAt(i - 1) == p.charAt(j - 1));</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return dp[m - 1][n - 1];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_54-表示数值的字符串" tabindex="-1"><a class="header-anchor" href="#_54-表示数值的字符串"><span>54. 表示数值的字符串</span></a></h3><p>有效数字（按顺序）可以分成以下几个部分：</p><ol><li>若干空格</li><li>一个 小数 或者 整数</li><li>（可选）一个 &#39;e&#39; 或 &#39;E&#39; ，后面跟着一个 整数</li><li>若干空格</li></ol><p>小数（按顺序）可以分成以下几个部分：</p><ol><li>（可选）一个符号字符（&#39;+&#39; 或 &#39;-&#39;）</li><li>下述格式之一： <ol><li>至少一位数字，后面跟着一个点 &#39;.&#39;</li><li>至少一位数字，后面跟着一个点 &#39;.&#39; ，后面再跟着至少一位数字</li><li>一个点 &#39;.&#39; ，后面跟着至少一位数字</li></ol></li></ol><p>整数（按顺序）可以分成以下几个部分：</p><ol><li>（可选）一个符号字符（&#39;+&#39; 或 &#39;-&#39;）</li><li>至少一位数字</li></ol><p>思路：有限状态自动机。根据字符类型和合法数值的特点，先定义状态，再画出状态转移图，最后编写代码。</p><p>字符类型：</p><p>空格 「 」、数字「 0—9 」 、正负号 「 +, − 」 、小数点 「 . 」 、幂符号 「 e, E 」 。</p><p>状态定义：</p><p>按照字符串从左到右的顺序，定义以下 9 种状态。</p><ol start="0"><li>开始的空格</li><li>幂符号前的正负号</li><li>小数点前的数字</li><li>小数点、小数点后的数字</li><li>当小数点前为空格时，小数点、小数点后的数字</li><li>幂符号</li><li>幂符号后的正负号</li><li>幂符号后的数字</li><li>结尾的空格</li></ol><p>结束状态： 合法的结束状态有 2, 3, 7, 8 。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    public boolean validNumber(String s) {</span>
<span class="line">        Map[] states = {</span>
<span class="line">            new HashMap&lt;&gt;(){{put(&#39; &#39;,0);put(&#39;s&#39;,1);put(&#39;d&#39;,2);put(&#39;.&#39;,4);}},</span>
<span class="line">            new HashMap&lt;&gt;(){{put(&#39;d&#39;,2);put(&#39;.&#39;,4);}},</span>
<span class="line">            new HashMap&lt;&gt;(){{put(&#39;d&#39;,2);put(&#39;.&#39;,3);put(&#39;e&#39;,5);put(&#39; &#39;,8);}},</span>
<span class="line">            new HashMap&lt;&gt;(){{put(&#39;d&#39;,3);put(&#39;e&#39;,5);put(&#39; &#39;,8);}},</span>
<span class="line">            new HashMap&lt;&gt;() {{ put(&#39;d&#39;, 3); }},</span>
<span class="line">            new HashMap&lt;&gt;() {{ put(&#39;s&#39;, 6); put(&#39;d&#39;, 7); }},</span>
<span class="line">            new HashMap&lt;&gt;() {{ put(&#39;d&#39;, 7); }},</span>
<span class="line">            new HashMap&lt;&gt;() {{ put(&#39;d&#39;, 7); put(&#39; &#39;, 8); }},</span>
<span class="line">            new HashMap&lt;&gt;() {{ put(&#39; &#39;, 8); }}</span>
<span class="line">        };</span>
<span class="line">        int p = 0;</span>
<span class="line">        char t;</span>
<span class="line">        for(char c:s.toCharArray()){</span>
<span class="line">            if(c &gt;= &#39;0&#39; &amp;&amp; c &lt;= &#39;9&#39;) t=&#39;d&#39;;</span>
<span class="line">            else if(c==&#39;+&#39;||c==&#39;-&#39;) t=&#39;s&#39;;</span>
<span class="line">            else if(c==&#39;e&#39;||c==&#39;E&#39;) t=&#39;e&#39;;</span>
<span class="line">            else if(c==&#39;.&#39;||c==&#39; &#39;) t =c;</span>
<span class="line">            else t=&#39;?&#39;;</span>
<span class="line">            if(!states[p].containsKey(t)) return false;</span>
<span class="line">            p = (int)states[p].get(t);</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">        return p==2||p==3||p==7||p==8;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_55-字符流中第一个不重复的字符" tabindex="-1"><a class="header-anchor" href="#_55-字符流中第一个不重复的字符"><span>55. 字符流中第一个不重复的字符</span></a></h3><p>请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符 &quot;go&quot; 时，第一个只出现一次的字符是 &quot;g&quot; 。当从该字符流中读出前六个字符 “google&quot; 时，第一个只出现一次的字符是&quot;l&quot;。</p><p>思路:查找是否重复的问题，使用哈希表来记录各个字符出现的次数。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   private StringBuilder s = new StringBuilder();</span>
<span class="line">    private HashMap&lt;Character,Integer&gt; mp = new HashMap&lt;&gt;();</span>
<span class="line">    public void Insert(char ch)</span>
<span class="line">    {</span>
<span class="line">        s.append(ch);</span>
<span class="line">        mp.put(ch,mp.getOrDefault(ch,0)+1);</span>
<span class="line">    }</span>
<span class="line">  //return the first appearence once char in current stringstream</span>
<span class="line">    public char FirstAppearingOnce()</span>
<span class="line">    {</span>
<span class="line">        for(int i=0;i&lt;s.length();i++){</span>
<span class="line">            if(mp.get(s.charAt(i))==1) return s.charAt(i);</span>
<span class="line">        }</span>
<span class="line">        return &#39;#&#39;;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_56-链表中环的入口节点" tabindex="-1"><a class="header-anchor" href="#_56-链表中环的入口节点"><span>56. 链表中环的入口节点</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public ListNode EntryNodeOfLoop(ListNode pHead) {</span>
<span class="line">        if(pHead == null) return null;</span>
<span class="line">        ListNode fast = pHead;</span>
<span class="line">        ListNode slow = pHead;</span>
<span class="line">        while(fast != null &amp;&amp; fast.next != null){</span>
<span class="line">            fast = fast.next.next;</span>
<span class="line">            slow = slow.next;</span>
<span class="line">            if(fast==slow){</span>
<span class="line">                ListNode curr = pHead;</span>
<span class="line">                while(slow!=curr){</span>
<span class="line">                    curr = curr.next;</span>
<span class="line">                    slow = slow.next;</span>
<span class="line">                }</span>
<span class="line">                return slow;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return null;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_57-删除链表中重复的节点" tabindex="-1"><a class="header-anchor" href="#_57-删除链表中重复的节点"><span>57. 删除链表中重复的节点</span></a></h3><p>在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。</p><p>思路：升序链表，重复的节点都连在一起，我们就可以很轻易地比较到重复的节点，然后将所有的连续相同的节点都跳过，连接不相同的第一个节点。 给链表前加上表头，方便可能的话删除第一个节点。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public ListNode deleteDuplication(ListNode pHead) {</span>
<span class="line">        if(pHead==null) return null;</span>
<span class="line">        ListNode dummy = new ListNode(0);</span>
<span class="line">        dummy.next = pHead;</span>
<span class="line">        ListNode cur = dummy;</span>
<span class="line">        while(cur.next!=null&amp;&amp;cur.next.next!=null){</span>
<span class="line">            if(cur.next.val == cur.next.next.val){</span>
<span class="line">                int temp = cur.next.val;</span>
<span class="line">                while(cur.next!=null&amp;&amp;cur.next.val==temp){</span>
<span class="line">                    cur.next = cur.next.next;</span>
<span class="line">                }</span>
<span class="line">            }else{</span>
<span class="line">                cur = cur.next;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return dummy.next;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_58-二叉树的下一个节点" tabindex="-1"><a class="header-anchor" href="#_58-二叉树的下一个节点"><span>58. 二叉树的下一个节点</span></a></h3><p>给定一个二叉树其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的next指针。</p><p>思路：直接找下一个节点，分三种情况讨论</p><ol><li>有右子树，下一结点是右子树中的最左结点，例如 B，下一结点是 H</li><li>无右子树，且结点是该结点父结点的左子树，则下一结点是该结点的父结点，例如 H，下一结点是 E</li><li>无右子树，且结点是该结点父结点的右子树，则我们一直沿着父结点追朔，直到找到某个结点是其父结点的左子树，如果存在这样的结点，那么这个结点的父结点就是我们要找的下一结点。例如 I，下一结点是 A；例如 G，并没有符合情况的结点，所以 G 没有下一结点</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public TreeLinkNode GetNext(TreeLinkNode pNode) {</span>
<span class="line">        if(pNode.right!=null){</span>
<span class="line">            TreeLinkNode cur = pNode.right;</span>
<span class="line">            while(cur.left!=null){</span>
<span class="line">                cur = cur.left;</span>
<span class="line">            }</span>
<span class="line">            return cur;</span>
<span class="line">        }</span>
<span class="line">        if(pNode.next!=null&amp;&amp;pNode.next.left == pNode){</span>
<span class="line">            return pNode.next;</span>
<span class="line">        }</span>
<span class="line">        if(pNode.next!=null){</span>
<span class="line">            TreeLinkNode pnext = pNode.next;</span>
<span class="line">            while(pnext.next!=null&amp;&amp;pnext.next.right==pnext){</span>
<span class="line">                pnext=pnext.next;</span>
<span class="line">            }</span>
<span class="line">            return pnext.next;</span>
<span class="line">        }</span>
<span class="line">        return null;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_59-对称的二叉树" tabindex="-1"><a class="header-anchor" href="#_59-对称的二叉树"><span>59. 对称的二叉树</span></a></h3><p>给定一棵二叉树，判断其是否是自身的镜像（即：是否对称）</p><p>思路：递归实现，</p><ul><li>step 1：两种方向的前序遍历，同步过程中的当前两个节点，同为空，属于对称的范畴。</li><li>step 2：当前两个节点只有一个为空或者节点值不相等，已经不是对称的二叉树了。</li><li>step 3：第一个节点的左子树与第二个节点的右子树同步递归对比，第一个节点的右子树与第二个节点的左子树同步递归比较。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public boolean isSymmetrical (TreeNode pRoot) {</span>
<span class="line">        return recursion(pRoot,pRoot);</span>
<span class="line">    }</span>
<span class="line">    public boolean recursion(TreeNode root1,TreeNode root2){</span>
<span class="line">        if(root1==null&amp;&amp;root2==null) return true;</span>
<span class="line">        if(root1==null||root2==null) return false;</span>
<span class="line">        return root1.val==root2.val&amp;&amp;recursion(root1.left,root2.right)&amp;&amp;recursion(root1.right,root2.left);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_60-按之字形顺序打印二叉树" tabindex="-1"><a class="header-anchor" href="#_60-按之字形顺序打印二叉树"><span>60. 按之字形顺序打印二叉树</span></a></h3><p>给定一个二叉树，返回该二叉树的之字形层序遍历，（第一层从左向右，下一层从右向左，一直这样交替）</p><p>思路：层序遍历，用一个变量记录是偶数层还是奇数层，修改遍历顺序（从左到右-&gt;从右到左-&gt;从左到右）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public ArrayList&lt;ArrayList&lt;Integer&gt;&gt; Print (TreeNode pRoot) {</span>
<span class="line">        ArrayList&lt;ArrayList&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();</span>
<span class="line">        if(pRoot==null) return res;</span>
<span class="line">        Queue&lt;TreeNode&gt; q = new LinkedList&lt;&gt;();</span>
<span class="line">        q.offer(pRoot);</span>
<span class="line">        boolean falg = true;</span>
<span class="line">        while(!q.isEmpty()){</span>
<span class="line">            ArrayList&lt;Integer&gt; ans = new ArrayList&lt;&gt;();</span>
<span class="line">            int n = q.size();</span>
<span class="line">            falg = !falg;</span>
<span class="line">            for(int i=0;i&lt;n;i++){</span>
<span class="line">                TreeNode node = q.poll();</span>
<span class="line">                ans.add(node.val);</span>
<span class="line">                if(node.left!=null) q.offer(node.left);</span>
<span class="line">                if(node.right!=null) q.offer(node.right);</span>
<span class="line">            }</span>
<span class="line">            if(falg){</span>
<span class="line">                Collections.reverse(ans);</span>
<span class="line">            }</span>
<span class="line">            res.add(ans);</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_61-把二叉树打印成多行" tabindex="-1"><a class="header-anchor" href="#_61-把二叉树打印成多行"><span>61. 把二叉树打印成多行</span></a></h3><p>二叉树层序遍历</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public ArrayList&lt;ArrayList&lt;Integer&gt; &gt; Print(TreeNode pRoot) {</span>
<span class="line">        TreeNode head = pRoot;</span>
<span class="line">        ArrayList&lt;ArrayList&lt;Integer&gt; &gt; res = new ArrayList&lt;ArrayList&lt;Integer&gt; &gt;();</span>
<span class="line">        if(head == null) return res;</span>
<span class="line">        Queue&lt;TreeNode&gt; temp = new LinkedList&lt;TreeNode&gt;();</span>
<span class="line">        temp.offer(head);</span>
<span class="line">        TreeNode p;</span>
<span class="line">        while(!temp.isEmpty()){</span>
<span class="line">            ArrayList&lt;Integer&gt; row = new ArrayList&lt;Integer&gt;();</span>
<span class="line">            int n = temp.size();</span>
<span class="line">            for(int i = 0; i &lt; n; i++){</span>
<span class="line">                p = temp.poll();</span>
<span class="line">                row.add(p.val);</span>
<span class="line">                if(p.left != null)</span>
<span class="line">                    temp.offer(p.left);</span>
<span class="line">                if(p.right != null)</span>
<span class="line">                    temp.offer(p.right);</span>
<span class="line">            }</span>
<span class="line">            res.add(row);</span>
<span class="line">        }</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_62-序列化二叉树" tabindex="-1"><a class="header-anchor" href="#_62-序列化二叉树"><span>62. 序列化二叉树</span></a></h3><p>请实现两个函数，分别用来序列化和反序列化二叉树，不对序列化之后的字符串进行约束，但要求能够根据序列化之后的字符串重新构造出一棵与原二叉树相同的树。</p><p>思路：使用层序遍历的方式进行存储，对于某个叶子节点的空节点进行存储，同时确保不递归存储空节点对应的子节点。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   int INF = 0x3f3f3f3f;</span>
<span class="line">    TreeNode emptyNode = new TreeNode(INF);</span>
<span class="line">    String Serialize(TreeNode root) {</span>
<span class="line">        if(root==null) return &quot;&quot;;</span>
<span class="line">        StringBuilder sb = new StringBuilder();</span>
<span class="line">        Deque&lt;TreeNode&gt; d = new ArrayDeque&lt;&gt;();</span>
<span class="line">        d.addLast(root);</span>
<span class="line">        while(!d.isEmpty()){</span>
<span class="line">            TreeNode poll = d.pollFirst();</span>
<span class="line">            sb.append(poll.val+&quot;_&quot;);</span>
<span class="line">            if(!poll.equals(emptyNode)){</span>
<span class="line">                d.addLast(poll.left!=null?poll.left:emptyNode);</span>
<span class="line">                d.addLast(poll.right != null ? poll.right : emptyNode);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return sb.toString();</span>
<span class="line">    }</span>
<span class="line">    TreeNode Deserialize(String data) {</span>
<span class="line">       if (data.equals(&quot;&quot;)) return null;</span>
<span class="line">        String[] ss = data.split(&quot;_&quot;);</span>
<span class="line">        int n = ss.length;</span>
<span class="line">        TreeNode root = new TreeNode(Integer.parseInt(ss[0]));</span>
<span class="line">        Deque&lt;TreeNode&gt; d = new ArrayDeque&lt;&gt;();</span>
<span class="line">        d.addLast(root);</span>
<span class="line">        for (int i = 1; i &lt; n - 1; i += 2) {</span>
<span class="line">            TreeNode poll = d.pollFirst();</span>
<span class="line">            int a = Integer.parseInt(ss[i]), b = Integer.parseInt(ss[i + 1]);</span>
<span class="line">            if (a != INF) {</span>
<span class="line">                poll.left = new TreeNode(a);</span>
<span class="line">                d.addLast(poll.left);</span>
<span class="line">            }</span>
<span class="line">            if (b != INF) {</span>
<span class="line">                poll.right = new TreeNode(b);</span>
<span class="line">                d.addLast(poll.right);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return root;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_63-二叉搜索树的第k个节点" tabindex="-1"><a class="header-anchor" href="#_63-二叉搜索树的第k个节点"><span>63. 二叉搜索树的第K个节点</span></a></h3><p>给定一棵结点数为n 二叉搜索树，请找出其中的第 k 小的TreeNode结点值。</p><p>思路：根据二叉搜索树的性质，左子树的元素都小于根节点，右子树的元素都大于根节点。因此它的中序遍历（左中右）序列正好是由小到大的次序，因此我们可以尝试递归中序遍历，也就是从最小的一个节点开始，找到k个就是我们要找的目标。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   private int count=0;</span>
<span class="line">    private TreeNode res=null;</span>
<span class="line">    public int KthNode (TreeNode proot, int k) {</span>
<span class="line">        midOrder(proot,k);</span>
<span class="line">        if(res!=null) return res.val;</span>
<span class="line">        else return -1;</span>
<span class="line">    }</span>
<span class="line">    public void midOrder(TreeNode root,int k){</span>
<span class="line">        if(root==null||count&gt;k) return;</span>
<span class="line">        midOrder(root.left,k);</span>
<span class="line">        count++;</span>
<span class="line">        if(count==k) res = root;</span>
<span class="line">        midOrder(root.right,k);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_64-数据流中的中位数" tabindex="-1"><a class="header-anchor" href="#_64-数据流中的中位数"><span>64. 数据流中的中位数</span></a></h3><p>如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。</p><p>思路：优先队列，中位数是数组较小的一半元素中最大的那个，优势数组中较大的一半元素中较小的那个。因此只需要维护最小的一半元素和最大的一半元素，就可以快速找到最大值和最小值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   private PriorityQueue&lt;Integer&gt; max = new PriorityQueue&lt;&gt;();</span>
<span class="line">    private PriorityQueue&lt;Integer&gt; min = new PriorityQueue&lt;&gt;((o1, o2)-&gt;o2.compareTo(o1));</span>
<span class="line">    public void Insert(Integer num) {</span>
<span class="line">        min.offer(num);</span>
<span class="line">        max.offer(min.poll());</span>
<span class="line">        if(min.size()&lt;max.size()) min.offer(max.poll());</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public Double GetMedian() {</span>
<span class="line">        if(min.size()&gt;max.size()) return (double) min.peek();</span>
<span class="line">        else return (double) (min.peek()+max.peek())/2;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_65-滑动窗口的最大值" tabindex="-1"><a class="header-anchor" href="#_65-滑动窗口的最大值"><span>65. 滑动窗口的最大值</span></a></h3><p>给定一个长度为 n 的数组 num 和滑动窗口的大小 size ，找出所有滑动窗口里数值的最大值。</p><p>思路：若是一个数字A进入窗口后，若是比窗口内其他数字都大，那么这个数字之前的数字都没用了，因为它们必定会比A早离开窗口，在A离开之前都争不过A，所以A在进入时依次从尾部排除掉之前的小值再进入，而每次窗口移动要弹出窗口最前面值，因此队首也需要弹出，所以我们选择双向队列。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public ArrayList&lt;Integer&gt; maxInWindows (int[] num, int size) {</span>
<span class="line">        ArrayList&lt;Integer&gt; res = new ArrayList&lt;Integer&gt;();</span>
<span class="line">        if(size &lt;= num.length &amp;&amp; size != 0){</span>
<span class="line">            ArrayDeque &lt;Integer&gt; dq = new ArrayDeque&lt;Integer&gt;(); </span>
<span class="line">            for(int i = 0; i &lt; size; i++){</span>
<span class="line">                while(!dq.isEmpty() &amp;&amp; num[dq.peekLast()] &lt; num[i])</span>
<span class="line">                     dq.pollLast();</span>
<span class="line">                dq.add(i);</span>
<span class="line">            }</span>
<span class="line">            for(int i = size; i &lt; num.length; i++){</span>
<span class="line">                res.add(num[dq.peekFirst()]);</span>
<span class="line">                while(!dq.isEmpty() &amp;&amp; dq.peekFirst() &lt; (i - size + 1))</span>
<span class="line">                    dq.pollFirst();</span>
<span class="line">                while(!dq.isEmpty() &amp;&amp; num[dq.peekLast()] &lt; num[i])</span>
<span class="line">                    dq.pollLast();</span>
<span class="line">                dq.add(i);</span>
<span class="line">            }</span>
<span class="line">            res.add(num[dq.pollFirst()]);</span>
<span class="line">        }    </span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_66-矩阵中的路径" tabindex="-1"><a class="header-anchor" href="#_66-矩阵中的路径"><span>66. 矩阵中的路径</span></a></h3><p>请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。</p><p>思路：DFS方法，矩阵中的每个格子都可能是路径的起点，因此需要遍历矩阵的每个元素。从起点开始，向上下左右四个方向递归探索，检查是否匹配字符串的下一个字符。</p><ul><li>标记当前格子为已访问（避免重复进入）</li><li>若当前路径不匹配，则回溯（恢复标记，尝试其他方向）</li><li>若匹配到字符串末尾，则返回 true</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">   public boolean hasPath(char[][] matrix, String word) {</span>
<span class="line">        if (matrix == null || matrix.length == 0 || matrix[0].length == 0 || word == null) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        int rows = matrix.length;</span>
<span class="line">        int cols = matrix[0].length;</span>
<span class="line">        boolean[][] visited = new boolean[rows][cols]; </span>
<span class="line">        for (int i = 0; i &lt; rows; i++) {</span>
<span class="line">            for (int j = 0; j &lt; cols; j++) {</span>
<span class="line">                if (dfs(matrix, word, i, j, 0, visited)) {</span>
<span class="line">                    return true;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return false;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    /**</span>
<span class="line">     * 深度优先搜索</span>
<span class="line">     * @param matrix 矩阵</span>
<span class="line">     * @param word 目标字符串</span>
<span class="line">     * @param i 当前行索引</span>
<span class="line">     * @param j 当前列索引</span>
<span class="line">     * @param index 匹配到字符串的第几个字符</span>
<span class="line">     * @param visited 访问标记数组</span>
<span class="line">     * @return 是否找到匹配路径</span>
<span class="line">     */</span>
<span class="line">    private boolean dfs(char[][] matrix, String word, int i, int j, int index, boolean[][] visited) {</span>
<span class="line">        if (index == word.length()) {</span>
<span class="line">            return true;</span>
<span class="line">        }</span>
<span class="line">        int rows = matrix.length;</span>
<span class="line">        int cols = matrix[0].length;</span>
<span class="line">        if (i &lt; 0 || i &gt;= rows || j &lt; 0 || j &gt;= cols || </span>
<span class="line">            visited[i][j] || matrix[i][j] != word.charAt(index)) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">        visited[i][j] = true;</span>
<span class="line">        </span>
<span class="line">        boolean found = dfs(matrix, word, i - 1, j, index + 1, visited) ||</span>
<span class="line">                        dfs(matrix, word, i + 1, j, index + 1, visited) ||</span>
<span class="line">                        dfs(matrix, word, i, j - 1, index + 1, visited) ||</span>
<span class="line">                        dfs(matrix, word, i, j + 1, index + 1, visited);</span>
<span class="line">        if (!found) {</span>
<span class="line">            visited[i][j] = false;</span>
<span class="line">        }</span>
<span class="line">        return found;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_67-机器人的运动范围" tabindex="-1"><a class="header-anchor" href="#_67-机器人的运动范围"><span>67. 机器人的运动范围</span></a></h3><p>地上有一个 rows 行和 cols 列的方格。坐标从 [0,0] 到 [rows-1,cols-1] 。一个机器人从坐标 [0,0] 的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于 threshold 的格子。</p><p>思路：DFS,我们从[0,0]开始，每次选择一个方向开始检查能否访问，如果能访问进入该节点，该节点作为子问题，继续按照这个思路访问，一条路走到黑，然后再回溯，回溯的过程中每个子问题再选择其他方向，正是深度优先搜索。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class Solution{</span>
<span class="line">    int[][] dir = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};</span>
<span class="line">    int res = 0;</span>
<span class="line">    int cal(int n){</span>
<span class="line">        int sum = 0;</span>
<span class="line">        while(n != 0){</span>
<span class="line">            sum += (n % 10);</span>
<span class="line">            n /= 10;</span>
<span class="line">        }</span>
<span class="line">        return sum;</span>
<span class="line">    }</span>
<span class="line">    void dfs(int i, int j, int rows, int cols, int threshold, boolean[][] vis){</span>
<span class="line">        if(i &lt; 0 || i &gt;= rows || j &lt; 0 || j &gt;= cols || vis[i][j] == true)</span>
<span class="line">            return;</span>
<span class="line">        if(cal(i) + cal(j) &gt; threshold)</span>
<span class="line">            return;</span>
<span class="line">        res += 1;</span>
<span class="line">        vis[i][j] = true;</span>
<span class="line">        for(int k = 0; k &lt; 4; k++)</span>
<span class="line">            dfs(i + dir[k][0], j + dir[k][1], rows, cols, threshold, vis);</span>
<span class="line">    }</span>
<span class="line">    public int movingCount(int threshold, int rows, int cols) {</span>
<span class="line">        if(threshold &lt;= 0)</span>
<span class="line">            return 1;</span>
<span class="line">        boolean[][] vis = new boolean[rows][cols];</span>
<span class="line">        dfs(0, 0, rows, cols, threshold, vis);</span>
<span class="line">        return res;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123)]))}const c=s(a,[["render",d]]),t=JSON.parse('{"path":"/blogs/algorithm/offer-java3.html","title":"剑指offer-Java版 41-67","lang":"en-US","frontmatter":{"title":"剑指offer-Java版 41-67","date":"2025/09/14","tags":["Java"],"categories":["算法"]},"headers":[{"level":3,"title":"41. 和为s的连续整数序列","slug":"_41-和为s的连续整数序列","link":"#_41-和为s的连续整数序列","children":[]},{"level":3,"title":"42. 翻转字符串","slug":"_42-翻转字符串","link":"#_42-翻转字符串","children":[]},{"level":3,"title":"43. n个骰子的点数及出现的概率","slug":"_43-n个骰子的点数及出现的概率","link":"#_43-n个骰子的点数及出现的概率","children":[]},{"level":3,"title":"44. 扑克牌的顺子","slug":"_44-扑克牌的顺子","link":"#_44-扑克牌的顺子","children":[]},{"level":3,"title":"45. 圆圈中最后剩下的数","slug":"_45-圆圈中最后剩下的数","link":"#_45-圆圈中最后剩下的数","children":[]},{"level":3,"title":"46. 1+2+3+…+n的和","slug":"_46-1-2-3-n的和","link":"#_46-1-2-3-n的和","children":[]},{"level":3,"title":"47. 不用加减乘除做加法","slug":"_47-不用加减乘除做加法","link":"#_47-不用加减乘除做加法","children":[]},{"level":3,"title":"49. 字符串转换为整数","slug":"_49-字符串转换为整数","link":"#_49-字符串转换为整数","children":[]},{"level":3,"title":"50. 树中两个节点的最低公共祖先","slug":"_50-树中两个节点的最低公共祖先","link":"#_50-树中两个节点的最低公共祖先","children":[]},{"level":3,"title":"51. 找出重复的数","slug":"_51-找出重复的数","link":"#_51-找出重复的数","children":[]},{"level":3,"title":"52. 构建乘积数组","slug":"_52-构建乘积数组","link":"#_52-构建乘积数组","children":[]},{"level":3,"title":"53. 正则表达式匹配","slug":"_53-正则表达式匹配","link":"#_53-正则表达式匹配","children":[]},{"level":3,"title":"54. 表示数值的字符串","slug":"_54-表示数值的字符串","link":"#_54-表示数值的字符串","children":[]},{"level":3,"title":"55. 字符流中第一个不重复的字符","slug":"_55-字符流中第一个不重复的字符","link":"#_55-字符流中第一个不重复的字符","children":[]},{"level":3,"title":"56. 链表中环的入口节点","slug":"_56-链表中环的入口节点","link":"#_56-链表中环的入口节点","children":[]},{"level":3,"title":"57. 删除链表中重复的节点","slug":"_57-删除链表中重复的节点","link":"#_57-删除链表中重复的节点","children":[]},{"level":3,"title":"58. 二叉树的下一个节点","slug":"_58-二叉树的下一个节点","link":"#_58-二叉树的下一个节点","children":[]},{"level":3,"title":"59. 对称的二叉树","slug":"_59-对称的二叉树","link":"#_59-对称的二叉树","children":[]},{"level":3,"title":"60. 按之字形顺序打印二叉树","slug":"_60-按之字形顺序打印二叉树","link":"#_60-按之字形顺序打印二叉树","children":[]},{"level":3,"title":"61. 把二叉树打印成多行","slug":"_61-把二叉树打印成多行","link":"#_61-把二叉树打印成多行","children":[]},{"level":3,"title":"62. 序列化二叉树","slug":"_62-序列化二叉树","link":"#_62-序列化二叉树","children":[]},{"level":3,"title":"63. 二叉搜索树的第K个节点","slug":"_63-二叉搜索树的第k个节点","link":"#_63-二叉搜索树的第k个节点","children":[]},{"level":3,"title":"64. 数据流中的中位数","slug":"_64-数据流中的中位数","link":"#_64-数据流中的中位数","children":[]},{"level":3,"title":"65. 滑动窗口的最大值","slug":"_65-滑动窗口的最大值","link":"#_65-滑动窗口的最大值","children":[]},{"level":3,"title":"66. 矩阵中的路径","slug":"_66-矩阵中的路径","link":"#_66-矩阵中的路径","children":[]},{"level":3,"title":"67. 机器人的运动范围","slug":"_67-机器人的运动范围","link":"#_67-机器人的运动范围","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/algorithm/offer-java3.md"}');export{c as comp,t as data};
