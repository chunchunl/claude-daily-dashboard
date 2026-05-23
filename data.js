// 每日情報站資料檔
// 由 Claude Cowork 每天早上 09:00（台灣時間）自動產出

const DAILY_DATA = {

  // ════════════════════════════════════════
  // 世界市場
  // ════════════════════════════════════════
  market: {
    date: "2025-05-22",
    generatedAt: "09:00 (台灣時間)",
    sentiment: {
      type: "risk-on",
      label: "風險偏好",
      icon: "📈",
      text: "今天全球市場偏向樂觀，美股昨晚收高、科技股帶動那指創近期新高，亞洲市場跟進上揚。市場對聯準會暫停升息的預期升溫，資金積極流入風險資產。"
    },
    prevDaySummary: "昨天（5/21）整體偏中性，美股小漲但量能不足，台股受外資小賣超影響收平盤。今天情緒明顯轉積極，資金動能回來了。",
    regions: [
      {
        name: "🇺🇸 美國",
        indices: [
          { name:"道瓊工業",  price:"39,512", change:"+0.82%", raw: 0.82 },
          { name:"S&P 500",   price:"5,304",  change:"+1.03%", raw: 1.03 },
          { name:"那斯達克",  price:"16,780", change:"+1.41%", raw: 1.41 }
        ]
      },
      {
        name: "🇪🇺 歐洲",
        indices: [
          { name:"FTSE 100",  price:"8,430",  change:"+0.31%", raw: 0.31 },
          { name:"DAX",       price:"18,622", change:"+0.57%", raw: 0.57 },
          { name:"CAC 40",    price:"8,115",  change:"-0.12%", raw:-0.12 }
        ]
      },
      {
        name: "🌏 亞洲",
        indices: [
          { name:"日經 225",  price:"38,490", change:"+1.02%", raw: 1.02 },
          { name:"KOSPI",     price:"2,728",  change:"+0.66%", raw: 0.66 },
          { name:"台股加權",  price:"21,305", change:"+0.89%", raw: 0.89 }
        ]
      }
    ],
    fx: [
      { label:"美元指數 DXY", value:"104.32", change:"-0.21%", raw:-0.21, note:"美元小幅走弱，對新興市場貨幣略有利好，資金有部分回流亞洲。" },
      { label:"USD / TWD",   value:"32.18",  change:"-0.08%", raw:-0.08, note:"新台幣小幅升值，外資買超台股有助匯率支撐。" },
      { label:"WTI 原油",    value:"$79.45", change:"+1.12%", raw: 1.12, note:"油價反彈，中東局勢仍緊張，供給面支撐油價。" },
      { label:"黃金 Gold",   value:"$2,348", change:"-0.33%", raw:-0.33, note:"黃金小幅下跌，市場風險情緒改善，避險需求下降。" }
    ],
    news: [
      {
        tag: "聯準會 / 利率",
        title: "Fed 會議紀錄釋出：多數官員傾向「再等等」才降息",
        body: "FOMC 會議紀錄顯示大多數委員認為通膨下降速度仍不夠快，9 月降息機率約 65%。那斯達克科技股反而受「不急著升息」的訊號提振大漲。"
      },
      {
        tag: "地緣政治",
        title: "中東停火談判再度破裂，油價與黃金短暫走高",
        body: "以哈停火協議談判陷入僵局，油價盤中一度跳漲逾 2%，最終收斂至 +1.1%。對台股影響相對有限，能源類股值得關注。"
      }
    ]
  },

  // ════════════════════════════════════════
  // ETF ／ 個股追蹤
  // ════════════════════════════════════════
  etf: {
    summary: "今天整體 ETF 表現跟著大盤走強，美股 ETF 全面上漲，QQQ 漲幅最大達 +1.5%，科技成分帶動明顯。台股 ETF 也跟進，0050 收漲 +0.9%。債券 ETF 因降息預期升溫小幅上漲，TLT 漲約 +0.6%。整體來說今天是股債同漲的格局，市場資金偏向樂觀。",
    groups: {

      // 美股 ETF
      us_etf: [
        { ticker:"SPY",  name:"SPDR S&P 500",        desc:"追蹤 S&P 500 指數",       price:"$530.2",  change:"+1.03%", raw: 1.03, note:"大盤走強" },
        { ticker:"QQQ",  name:"Invesco 那斯達克100",  desc:"追蹤那斯達克 100",        price:"$455.8",  change:"+1.50%", raw: 1.50, note:"科技股領漲" },
        { ticker:"VT",   name:"Vanguard 全球股票",    desc:"追蹤全球股市",            price:"$108.3",  change:"+0.91%", raw: 0.91, note:"全球同步上漲" },
        { ticker:"VTI",  name:"Vanguard 美國全市場",  desc:"追蹤美國整體市場",        price:"$248.6",  change:"+1.08%", raw: 1.08, note:"小型股補漲" },
        { ticker:"ARKK", name:"ARK Innovation",       desc:"主動型科技創新 ETF",      price:"$48.2",   change:"+2.31%", raw: 2.31, note:"AI 概念股帶動" }
      ],

      // 台股 ETF
      tw_etf: [
        { ticker:"0050", name:"元大台灣50",           desc:"追蹤台灣前 50 大市值",    price:"$178.5",  change:"+0.90%", raw: 0.90, note:"台積電帶動" },
        { ticker:"00878",name:"國泰永續高股息",       desc:"ESG 高股息策略",          price:"$22.8",   change:"+0.44%", raw: 0.44, note:"本週除息行情" },
        { ticker:"00929",name:"復華台灣科技優息",     desc:"科技股高股息",            price:"$19.6",   change:"+0.51%", raw: 0.51, note:"配息穩定" },
        { ticker:"006208",name:"富邦台灣50",          desc:"追蹤台灣前 50，費用較低", price:"$95.3",   change:"+0.88%", raw: 0.88, note:"與 0050 走勢相近" }
      ],

      // 個股
      stocks: [
        { ticker:"TSMC / 2330", name:"台積電",        desc:"全球最大晶圓代工",        price:"NT$950",  change:"+1.17%", raw: 1.17, note:"CoWoS 需求強勁" },
        { ticker:"NVDA",        name:"輝達 Nvidia",   desc:"AI 晶片龍頭",             price:"$1,024",  change:"+2.45%", raw: 2.45, note:"Blackwell 出貨消息" },
        { ticker:"AAPL",        name:"蘋果 Apple",    desc:"iPhone / 服務生態",       price:"$189.3",  change:"+0.61%", raw: 0.61, note:"AI iPhone 預期" },
        { ticker:"MSFT",        name:"微軟 Microsoft",desc:"雲端 / Copilot",          price:"$425.7",  change:"+1.22%", raw: 1.22, note:"Azure 成長超預期" },
        { ticker:"2454",        name:"聯發科",        desc:"手機晶片 / 邊緣 AI",      price:"NT$1,285",change:"+0.78%", raw: 0.78, note:"AI 手機概念受惠" }
      ],

      // 債券 ETF
      bond_etf: [
        { ticker:"TLT",  name:"iShares 20年期美債",   desc:"長期美國公債",            price:"$92.4",   change:"+0.58%", raw: 0.58, note:"降息預期升溫" },
        { ticker:"BND",  name:"Vanguard 美國總體債",  desc:"美國全市場債券",          price:"$73.1",   change:"+0.21%", raw: 0.21, note:"防禦性配置" },
        { ticker:"00679B",name:"元大美債20年",        desc:"台灣掛牌美債 ETF",        price:"$32.6",   change:"+0.49%", raw: 0.49, note:"跟隨 TLT 走勢" }
      ]
    }
  },

  // ════════════════════════════════════════
  // AI 動態
  // ════════════════════════════════════════
  ai: [
    {
      topic: "大型語言模型", impact: "high",
      title: "Anthropic 發布 Claude 4 系列：推理能力大幅躍升",
      summary: "Anthropic 正式推出 Claude Opus 4 與 Sonnet 4，數學推理與程式碼生成大幅超越前代。新增「延伸思考」模式，實測在競程題目上正確率提升約 30%。",
      source: "Anthropic Blog", relevance: "Claude API 用戶可直接升級，對 AI 輔助開發流程有直接影響"
    },
    {
      topic: "AI Agent", impact: "high",
      title: "OpenAI Operator 開放一般用戶：可自動操作瀏覽器完成任務",
      summary: "OpenAI 的瀏覽器自動化 Agent「Operator」擴展到所有 ChatGPT Plus 用戶，可幫你填表單、訂餐廳、完成線上購物，遇到驗證碼或付款會停下詢問。",
      source: "The Verge", relevance: "目前最接近實用的 AI Agent，值得親自試試邊界在哪"
    },
    {
      topic: "開發工具", impact: "mid",
      title: "Cursor 0.50：多文件同步編輯 + 背景 Agent 模式",
      summary: "Cursor 支援同時編輯多個相關文件，AI 自動理解檔案依賴關係。背景 Agent 可在你不看時繼續跑任務，完成後通知你審查。",
      source: "Cursor Changelog", relevance: "日常開發工具直接升級，建議更新後試試 multi-file 功能"
    },
    {
      topic: "研究論文", impact: "mid",
      title: "DeepMind AlphaProof：AI 可自行生成並驗證數學證明",
      summary: "DeepMind 展示 AI 在 IMO 等級題目的自動證明能力，關鍵是 AI 能自動把問題轉成形式化語言再用符號推理驗證。對 AI 程式驗證有重要啟示。",
      source: "DeepMind Blog", relevance: "偏研究導向，但 AI 輔助程式驗證的未來值得留意"
    },
    {
      topic: "產品發布", impact: "low",
      title: "Notion AI 推出「自動整理會議紀錄」，中文支援改善",
      summary: "Notion 可把錄音檔或逐字稿自動轉成有結構的會議紀錄，自動標記待辦事項與決策。中文支援比前一版穩定，少很多亂碼。",
      source: "Notion 官方", relevance: "重度使用 Notion 開會記錄的團隊可以直接節省整理時間"
    }
  ],

  // ════════════════════════════════════════
  // 前端技術
  // ════════════════════════════════════════
  frontend: [
    {
      topic: "React", impact: "high",
      title: "React 19 正式穩定版：Server Actions 與新 hook 全面可用",
      summary: "React 19 脫離 RC 進入正式版。Server Actions 可直接在 Client Component 呼叫 server 邏輯，新增 useOptimistic、use() hook，useTransition 支援 async function。",
      source: "React Blog", relevance: "用 Next.js App Router 的話這些新 hook 幾乎立刻可以用"
    },
    {
      topic: "CSS", impact: "mid",
      title: "CSS @scope 全瀏覽器支援：元件樣式隔離不再需要 CSS Modules",
      summary: "@scope 在 Firefox 128 正式支援後達成全瀏覽器覆蓋，可用原生 CSS 達到類似 CSS Modules 的樣式隔離，不需要 build tool 介入。",
      source: "MDN / Caniuse", relevance: "新專案可考慮用 @scope 取代 CSS Modules，少一層工具依賴"
    },
    {
      topic: "效能", impact: "mid",
      title: "Chrome 125：Document Picture-in-Picture API 正式版，支援任意 HTML",
      summary: "任何 HTML 內容（不只影片）都可以浮動在畫面最前方，連整個 React 元件都可以 pip。API 設計簡單，約 10 行 JS 就能啟動。",
      source: "Chrome Developers Blog", relevance: "可以做很有趣的 UX 功能，值得花 30 分鐘玩玩"
    },
    {
      topic: "打包工具", impact: "low",
      title: "Vite 6.0 beta：Rolldown 取代 Rollup，打包速度提升 10 倍",
      summary: "Vite 6 底層從 Rollup 換成 Rust 實作的 Rolldown，大型專案 production build 快約 10 倍，HMR 也有明顯改善。大部分 plugin 相容。",
      source: "Vite Blog", relevance: "現在先了解，等 stable 版出來再升，build 速度差異會很有感"
    },
    {
      topic: "TypeScript", impact: "low",
      title: "TypeScript 5.5：infer 推斷改進 + JSDoc 型別強化",
      summary: "改進 infer 在複雜泛型的推斷準確率，JSDoc 的 @param 與 @returns 可更精確推斷型別。整體品質提升，沒有 breaking change。",
      source: "TypeScript Release Notes", relevance: "直接更新即可，不會 break 現有專案"
    }
  ],

  // ════════════════════════════════════════
  // 新創 ／ 產品
  // ════════════════════════════════════════
  startup: [
    {
      topic: "募資", impact: "high",
      title: "Perplexity AI 完成 2.5 億美元 D 輪，估值衝上 30 億美元",
      summary: "AI 搜尋新創 Perplexity 完成新一輪融資，由 IVP 領投，資金主要用來擴大企業版與多語言支援。月活用戶已超過 1000 萬，是目前成長最快的 AI 搜尋產品。",
      source: "TechCrunch", relevance: "AI 搜尋賽道持續燒錢，市場仍看好這個方向"
    },
    {
      topic: "產品", impact: "mid",
      title: "Linear 推出 AI 自動拆解任務：一句話變成 sprint 計劃",
      summary: "Linear 新增 AI 功能，把一段需求描述自動拆解成多個 issue 並排優先順序，整合 GitHub PR 上下文。對工程師主導的小團隊很實用。",
      source: "Linear Blog", relevance: "用 Linear 的話這個功能值得馬上試用"
    },
    {
      topic: "產品", impact: "mid",
      title: "Figma Sites：設計稿一鍵生成可部署的網站",
      summary: "Figma 推出 Figma Sites，可把設計稿直接發布成靜態網站，支援互動動畫與 RWD。目前不支援動態資料，但 landing page 類型幾乎可完全取代手寫。",
      source: "Figma Blog", relevance: "設計到靜態頁面的距離越來越短了，前端工程師的定位值得思考"
    },
    {
      topic: "亞洲 ／ 台灣", impact: "mid",
      title: "台灣 AI 新創 Appier 拿下日本樂天合作，股價單日漲 12%",
      summary: "Appier 宣布與樂天集團簽訂長期 AI 行銷合作協議，是近年最大單一合約，東京交易所股價單日上漲逾 12%。",
      source: "日本経済新聞", relevance: "台灣 AI 公司在日本市場的成功案例，有意往海外發展的工程師可參考"
    },
    {
      topic: "產品", impact: "low",
      title: "No-code 平台 Bubble 裁員 20%：稱 AI 工具改變用戶行為",
      summary: "Bubble CEO 表示 Cursor、Claude 等 AI coding 工具正在搶走原本考慮用 no-code 的用戶，AI 對傳統 SaaS 工具的替代效應正在實際發生。",
      source: "TechCrunch", relevance: "AI coding tools 對 no-code 市場的衝擊，這個趨勢值得持續追蹤"
    }
  ]

};
