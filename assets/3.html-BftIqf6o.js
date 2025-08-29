import{_ as n,c as e,a,o as i}from"./app-D5MCHAU9.js";const l="/assets/img_20-C5KJKesk.png",t="/assets/img_21-pV5BTCv8.png",p="/assets/img_22-N91p_XBQ.png",c={};function d(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h3><h4 id="系统架构图" tabindex="-1"><a class="header-anchor" href="#系统架构图"><span>系统架构图</span></a></h4><h4 id="项目中规则树的体现" tabindex="-1"><a class="header-anchor" href="#项目中规则树的体现"><span>项目中规则树的体现</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class AiAgentEngineStarterEntity {</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 客户端ID列表</span>
<span class="line">     * </span>
<span class="line">     * 需要预热的AI客户端ID集合，这些客户端在引擎启动时</span>
<span class="line">     * 被初始化并装配相应的AI模型、工具链和顾问组件</span>
<span class="line">     */</span>
<span class="line">    private List&lt;Long&gt; clientIdList;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么是client_id</strong></p><p>因为client代表一个完整的AI智能体客户端配置单元，通过它可以关联查询到客户端的所有配置组件。 <img src="`+l+'" alt="img_20.png"></p><p>通过id获取所有配置 <img src="'+t+'" alt="img_21.png"></p><p><strong>DefaultArmoryStrategyFactory.DynamicContext - 动态上下⽂</strong></p><p>动态上下⽂在 RootNode 节点中加载，所有数据都被⼀次性加载并存储到 DynamicContext 中，并且这 ⾥是并发加载，提升了性能。后续节点都可以从参数直接获取，不⽤从数据库中找了! 过泛型方法setValue和getValue，实现了类型安全的数据存取，避免了频繁的类型转换。</p><p><strong>AI-Agent装配流程图</strong><img src="'+p+`" alt="img_22.png"></p><h4 id="promptchatmemoryadvisor" tabindex="-1"><a class="header-anchor" href="#promptchatmemoryadvisor"><span>PromptChatMemoryAdvisor</span></a></h4><p>Spring AI实现的提示词记忆顾问</p><ul><li>自动维护历史对话记录</li><li>在每次请求的时候将相关的历史消息自动注入到提示词中</li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// 项目中的实际使用</span></span>
<span class="line"><span class="token class-name">ChatClient</span> chatClient <span class="token operator">=</span> <span class="token class-name">ChatClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>chatModel<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">defaultAdvisors</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token comment">// 添加记忆顾问</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">PromptChatMemoryAdvisor</span><span class="token punctuation">(</span><span class="token class-name">MessageWindowChatMemory</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">maxMessages</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment">// 最多记住10条消息</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 调用时指定会话ID</span></span>
<span class="line"><span class="token class-name">String</span> response <span class="token operator">=</span> chatClient</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;你好，我是张三&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">advisors</span><span class="token punctuation">(</span>a <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span><span class="token function">param</span><span class="token punctuation">(</span><span class="token constant">CHAT_MEMORY_CONVERSATION_ID_KEY</span><span class="token punctuation">,</span> <span class="token string">&quot;user_123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MessageWindowChatMemory是消息窗口记忆的实现, 通过滑动窗口的形式保存maxMessages条消息。</p><h4 id="ragansweradvisor" tabindex="-1"><a class="header-anchor" href="#ragansweradvisor"><span>RagAnswerAdvisor</span></a></h4><p>自定义的RAG顾问实现。这个方法是核心的从向量数据库中获取到和提问相关的documents, 然后由此注入上下文参数, 构建一个新的增强请求</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    HashMap&lt;String, Object&gt; context = new HashMap(request.adviseContext());</span>
<span class="line">    // 1. 构建增强提示词</span>
<span class="line">    String advisedUserText = request.userText() + System.lineSeparator() + this.userTextAdvise;</span>
<span class="line">    </span>
<span class="line">    // 2. 渲染查询模板</span>
<span class="line">    String query = new PromptTemplate(request.userText(), request.userParams()).render();</span>
<span class="line">    </span>
<span class="line">    // 3. 执行向量检索</span>
<span class="line">    SearchRequest searchRequestToUse = SearchRequest.from(this.searchRequest)</span>
<span class="line">    .query(query)</span>
<span class="line">    .filterExpression(this.doGetFilterExpression(context))</span>
<span class="line">    .build();</span>
<span class="line">    List&lt;Document&gt; documents = this.vectorStore.similaritySearch(searchRequestToUse);</span>
<span class="line">    </span>
<span class="line">    // 4. 构建文档上下文</span>
<span class="line">    context.put(&quot;qa_retrieved_documents&quot;, documents);</span>
<span class="line">    String documentContext = (String)documents.stream()</span>
<span class="line">    .map(Document::getText)</span>
<span class="line">    .collect(Collectors.joining(System.lineSeparator()));</span>
<span class="line">    Map&lt;String, Object&gt; advisedUserParams = new HashMap(request.userParams());</span>
<span class="line">    </span>
<span class="line">    // 5. 注入上下文参数</span>
<span class="line">    advisedUserParams.put(&quot;question_answer_context&quot;, documentContext);</span>
<span class="line">    </span>
<span class="line">    AdvisedRequest advisedRequest = AdvisedRequest</span>
<span class="line">    .from(request)</span>
<span class="line">    .userText(advisedUserText)</span>
<span class="line">    .userParams(advisedUserParams)</span>
<span class="line">    .adviseContext(context).build();</span>
<span class="line">    return advisedRequest;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AdvisedRequest 和 AdvisedResponse 是 Spring AI 的增强请求和响应对象。这两个类的作用是在于提供一个增强的上下文，使得在处理请求和响应时可以携带额外的信息，比如用户的查询、上下文信息等。 通过增强请求和响应，可以在处理过程中注入更多的上下文信息，在before中处理请求时，可以根据用户的查询和上下文信息来构建一个更丰富的请求对象。 这里的上下文是通过知识库向量存储（VectorStore）进行检索得到的，增强请求可以包含检索到的相关文档信息。 这里的nextAroundCall和nextAroundStream方法是调用链的一部分，用于在增强请求处理完成后继续执行下一个环节的逻辑。 在aroundCall和aroundStream方法中，增强请求会被传递到下一个环节进行处理。 在处理响应时，增强响应对象可以携带更多的信息，比如检索到的文档信息、处理结果等。 也就是我能从增强相应对象中获取到rag知识库检索到的相关文档信息。</p><h4 id="ai-agent-预热-preheat-流程" tabindex="-1"><a class="header-anchor" href="#ai-agent-预热-preheat-流程"><span>ai-agent 预热（preheat）流程</span></a></h4><ul><li>我们先根据aiClientIds从RootNode节点出发, 异步从库表中查询组装出来业务中流转的VO对象, 并将它们添加到Map中</li><li>然后进入到AiClientToolMcpNode, 根据Map中的MCPVOList组转起来所有McpSyncClient然后将其注册为Bean</li><li>进入到AiClientAdvisorNode, 根据Advisor的类型, 组装rag或者chatmemory类型的bean</li><li>再到AiClientModelNode, 组装OpenAiChatModel并这个model绑定的MCP Tool添加进去</li><li>最后就是AiClientNode将chatModel, MCP, Advisor这三类Bean组装成一个对话客户端ChatClient, 然后将其注册为bean</li></ul><h4 id="ai-agent-对话和定时任务" tabindex="-1"><a class="header-anchor" href="#ai-agent-对话和定时任务"><span>ai-agent 对话和定时任务</span></a></h4><p>对话分成流式对话和普通对话两种</p><p><strong>普通对话-aiAgentChat方法</strong></p><p>获取到完整的AI回答再给出返回</p><ol><li><p>获取所有的client的ID</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">List&lt;Long&gt; aiClientIds = repository.queryAiClientIdsByAiAgentId(aiAgentId);</span>
<span class="line">String content = &quot;&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>根据clientId取出来对应的client Bean对象, 链式调用这个agent对应的client们, 渐进式提问</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">for (Long aiClientId : aiClientIds) {</span>
<span class="line">ChatClient chatClient = defaultArmoryStrategyFactory.chatClient(aiClientId);</span>
<span class="line">content = chatClient.prompt(message + &quot;，&quot; + content)</span>
<span class="line">                    .system(s -&gt; s.param(&quot;current_date&quot;, LocalDate.now().toString()))</span>
<span class="line">                    .advisors(a -&gt; a</span>
<span class="line">                    .param(CHAT_MEMORY_CONVERSATION_ID_KEY, &quot;chatId 101&quot;)</span>
<span class="line">                    .param(CHAT_MEMORY_RETRIEVE_SIZE_KEY, 100))</span>
<span class="line">                    .call().content();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里传入的advisor的参数CHAT_MEMORY_CONVERSATION_ID_KEY是用于标识这次对话的ID, 这个ID是用来区分上下文的, 不同的对话有着不同的ID、不同的上下文.</li><li>param(CHAT_MEMORY_RETRIEVE_SIZE_KEY, 100)) 这个参数的作用是将对话历史记录的数量限制在100条。</li></ul><blockquote><p>这里为什么会是链式调用, 一个问题调用一个Client进行回答不就行了吗?</p><p>注意我们的方法名不是clientChat而是agentChat, 一个agent能够串联多个client, 在这个方法中多client协作的工作共同构建最后的回答, 实现功能互补或者质量提升, 亦或是问题分解, 举例: 场景一：专业分工协作</p><p>假设有3个智能体：</p><p>// aiClientId = 1: 文本分析专家</p><p>// aiClientId = 2: 逻辑推理专家</p><p>// aiClientId = 3: 总结归纳专家</p><p>// 第一轮：分析专家处理原始问题</p><p>content = &quot;&quot;; // 初始为空</p><p>content = 分析专家.process(&quot;用户问题&quot; + &quot;，&quot; + &quot;&quot;); // 得到分析结果</p><p>// 第二轮：推理专家基于分析结果进行推理</p><p>content = 推理专家.process(&quot;用户问题&quot; + &quot;，&quot; + &quot;分析结果&quot;); // 得到推理结论</p><p>// 第三轮：总结专家整合前面的结果</p><p>content = 总结专家.process(&quot;用户问题&quot; + &quot;，&quot; + &quot;分析结果+推理结论&quot;); // 最终答案</p><p>场景二：渐进式优化</p><p>// 智能体链逐步完善答案质量</p><p>// 第一个智能体：给出初步答案</p><p>// 第二个智能体：基于初步答案进行补充和优化</p><p>// 第三个智能体：进行最终校验和润色</p></blockquote></li></ol><p><strong>流式对话-aiAgentChatStream方法</strong></p><p>获取到一部分返回以后立马呈现给用户</p><ol><li>获取配置<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 查询模型ID</span>
<span class="line">Long modelId = repository.queryAiClientModelIdByAgentId(aiAgentId);</span>
<span class="line">// 获取对话模型</span>
<span class="line">ChatModel chatModel = defaultArmoryStrategyFactory.chatModel(modelId);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>构建messages <ul><li>如果对话不携带rag, 则messages就只有传入的message</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> messages.add(new UserMessage(message));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>如果携带rag <ol><li>根据ragId获取到tag</li><li>从pg中查询到相近的documents</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SearchRequest searchRequest = SearchRequest.builder()</span>
<span class="line">                                           .query(message)</span>
<span class="line">                                           .topK(5)</span>
<span class="line">                                           .filterExpression(&quot;knowledge == &#39;&quot; + tag + &quot;&#39;&quot;)</span>
<span class="line">                                           .build();</span>
<span class="line">List&lt;Document&gt; documents = vectorStore.similaritySearch(searchRequest);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>构建结构化的rag prompt</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">String documentCollectors = documents.stream()</span>
<span class="line">                                     .map(Document::getFormattedContent)</span>
<span class="line">                                     .collect(Collectors.joining());</span>
<span class="line">Message ragMessage = new SystemPromptTemplate(&quot;&quot;&quot; .... DOCUMENTS: {documents} &quot;&quot;&quot;)</span>
<span class="line">                                             .createMessage(Map.of(&quot;documents&quot;, documentCollectors));</span>
<span class="line">messages.add(new UserMessage(message));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li>使用messages与第一步获取到的model对话</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">return chatModel.stream(Prompt.builder()</span>
<span class="line">                .messages(messages)</span>
<span class="line">                .build());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么这里又不使用链式调用多个client了?</p><p>链式调用多个client的本质是将当前client的输出 + 原问题作为下一个client的输入, 如果这样我们必须阻塞式等待client完整回答完毕, 而当前方法实现的是流式回答, 是输出了一部分就给用户呈现一部分, 所以不能链式调用.</p></blockquote><h4 id="agenttaskjob" tabindex="-1"><a class="header-anchor" href="#agenttaskjob"><span>AgentTaskJob</span></a></h4><p><strong>init方法-在Bean初始化以后执行</strong></p><p>这个方法上有个@PostConstruct注解, 这个注解的功能是在Spring容器初始化完成后执行该方法.这个方法的主要功能就是初始化了一个任务调度器.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public void init() {</span>
<span class="line">   // 初始化任务调度器</span>
<span class="line">   ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler(); // 这个类是 Spring 提供的一个线程池任务调度器</span>
<span class="line">   scheduler.setPoolSize(10);</span>
<span class="line">   scheduler.setThreadNamePrefix(&quot;agent-task-scheduler-&quot;);</span>
<span class="line">   scheduler.setWaitForTasksToCompleteOnShutdown(true); // 设置在关闭时等待任务完成</span>
<span class="line">   scheduler.setAwaitTerminationSeconds(60); // 设置等待任务完成的时间</span>
<span class="line">   scheduler.initialize();</span>
<span class="line">   this.taskScheduler = scheduler;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>executeTask方法-执行任务</strong></p><ol><li>获取任务的参数(json格式) String taskParam = task.getTaskParam();</li><li>执行任务 aiAgentChatService.aiAgentChat(task.getAgentId(), taskParam);</li></ol><blockquote><p>这里的执行任务为什么就是aiAgentChat?</p><p>在前面的xfg的mcp章节, 其实就能看到我们让AI执行一个任务就是与AI对话, 让它调用对应的MCP执行特定的任务。 这里也是一样的, 同时agent的链式调用client还能使得我们这个任务由多个client协同执行。</p></blockquote><p><strong>scheduleTask方法-调度器执行任务</strong></p><ol><li>创建任务调度器：调度器要执行的方法就是executeTask(task)；时间设置通过task的cron表达式</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ScheduledFuture&lt;?&gt; future = taskScheduler.schedule(() -&gt; executeTask(task), new CronTrigger(task.getCronExpression()));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>将这个任务放到类全局map中, 记录这个任务已经被我们调度执行成功了 scheduledTasks.put(task.getId(), future);</li></ol><p><strong>refreshTasks方法-移除invalid任务, 执行valid任务</strong></p><ol><li>从taskService中查询到所有有效的任务配置</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">List&lt;AiAgentTaskScheduleVO&gt; taskSchedules =  aiAgentTaskService.queryAllValidTaskSchedule();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>处理每个任务:将这个任务的id放入到Map中, 用于后面删除调度器中已经invalid任务;如果任务不存在调用scheduleTask(task)创建并调度新任务</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">for (AiAgentTaskScheduleVO task : taskSchedules) {</span>
<span class="line">   Long taskId = task.getId();</span>
<span class="line">   currentTaskIds.put(taskId, true);</span>
<span class="line">   // 如果任务已经存在，则跳过</span>
<span class="line">   if (scheduledTasks.containsKey(taskId)) {</span>
<span class="line">      continue;</span>
<span class="line">   }</span>
<span class="line">   // 创建并调度新任务</span>
<span class="line">   scheduleTask(task);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>移除不存在的任务:获取现在所有在调度器中的任务的keySet, 也就是所有在调度器中的任务的taskId集合A; 上面处理每个任务的时候记录的现在仍然有效的taskId集合B, 如果A不在B中, 说明这个任务已经不存在了;从调度器task集合中获取任务并将任务移除.</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">scheduledTasks.keySet().removeIf(taskId -&gt; {</span>
<span class="line">    if (!currentTaskIds.containsKey(taskId)) {</span>
<span class="line">        ScheduledFuture&lt;?&gt; future = scheduledTasks.remove(taskId);</span>
<span class="line">        if (future != null) {</span>
<span class="line">            future.cancel(true);</span>
<span class="line">            log.info(&quot;已移除任务，ID: {}&quot;, taskId);</span>
<span class="line">        }</span>
<span class="line">        return true;</span>
<span class="line">    }</span>
<span class="line">    return false;</span>
<span class="line"> });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cleanInvalidTasks方法-清理已经被标记为无效的任务</strong></p><ol><li>获取所有已经失效的任务的ID: <code>List&lt;Long&gt; invalidTaskIds = aiAgentTaskService.queryAllInvalidTaskScheduleIds()</code>;</li><li>从调度器中移除这些任务</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">for (Long taskId : invalidTaskIds) {</span>
<span class="line">    ScheduledFuture&lt;?&gt; future = scheduledTasks.remove(taskId);</span>
<span class="line">    if (future != null) {</span>
<span class="line">        future.cancel(true);</span>
<span class="line">        log.info(&quot;已移除无效任务，ID: {}&quot;, taskId);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>chat和task模块可以说是看似简单的实现, 但是具有很强的拓展性, 比如我想设置一个监控数据监控面板然后发现异常微信推送消息的组件</p><ol><li>实现能从数据监控面板获取数据的MCP工具</li><li>实现发送微信消息的MCP工具</li><li>注册一个分析数据监控面板client, 注册一个发送总结分析发送微信消息的client</li><li>将两个client串联成一个agent, 设置这个agent的定时任务</li><li>这样就实现了监控数据面板在AI分析即将出现问题的时候通知开发者的功能</li></ol>`,54)]))}const o=n(c,[["render",d]]),v=JSON.parse('{"path":"/blogs/Project/RAG/3.html","title":"AI-Agent 智能体-开发总结","lang":"en-US","frontmatter":{"title":"AI-Agent 智能体-开发总结","date":"2025/08/15","tags":["DeepSeek","前后端分离","SpringAI","Flux","ostgresql","Redis","Nginx","Docker"],"categories":["后端开发"]},"headers":[{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/Project/RAG/3.md"}');export{o as comp,v as data};
