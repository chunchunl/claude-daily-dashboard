# 每日情報站 — Claude Cowork 每日提示
# 每天早上貼這段給 Cowork，它會自動搜尋並產出 data.js

---

請幫我搜尋今天最新資訊，產出一個 data.js 檔案，存到 ~/Desktop/claude-daily-dashboard/data.js。

產出完成後執行：
cd ~/Desktop/claude-daily-dashboard && ./update.sh ~/Desktop/claude-daily-dashboard/data.js

---

## 今天要搜尋的內容

### 1. 世界市場（來源：Yahoo Finance、TradingView、路透社）

搜尋以下指數今日收盤價與漲跌幅：
- 美國：道瓊工業、S&P 500、那斯達克
- 歐洲：FTSE 100、DAX、CAC 40
- 亞洲：日經 225、韓國 KOSPI、台股加權指數
- 匯率：美元指數 DXY、USD/TWD
- 大宗商品：WTI 原油、現貨黃金
- 今日重要財經新聞 1–2 則

根據資料判斷今天是 risk-on 還是 risk-off，用 1–2 句台灣人習慣的白話文說明。

### 2. ETF ／ 個股（來源：Yahoo Finance、台灣證交所）

搜尋以下標的今日收盤價與漲跌幅：
- 美股 ETF：SPY、QQQ、VT、VTI、ARKK
- 台股 ETF：0050、00878、00929、006208
- 個股：台積電(2330)、Nvidia(NVDA)、Apple(AAPL)、Microsoft(MSFT)、聯發科(2454)
- 債券 ETF：TLT、BND、00679B

### 3. AI 動態（來源：The Verge、Hacker News、各大 AI 公司官方部落格）

搜尋今天或最近 48 小時最重要的 AI 新聞 5 則。
涵蓋：LLM 更新、AI Agent、開發工具、研究論文、產品發布。
每則用 2–3 句白話文摘要 + 對前端工程師的實際影響。

### 4. 前端技術（來源：React Blog、MDN、Chrome Developers、Vite、TypeScript）

搜尋今天或最近 48 小時最重要的前端技術資訊 5 則。
涵蓋：React/Next.js、CSS、效能、打包工具、TypeScript。
請給具體版本號，說明對日常開發的實際影響。

### 5. 新創 ／ 產品（來源：TechCrunch、Product Hunt、數位時代、科技新報）

搜尋今天或最近 48 小時最重要的新創消息 5 則。
涵蓋：重大募資（附金額）、新產品發布、亞洲/台灣新創動態、重要併購。

---

## 輸出格式

只輸出以下 data.js 完整內容，不要有任何前言或說明文字：

const DAILY_DATA = {

  market: {
    date: "YYYY-MM-DD",
    generatedAt: "09:00 (台灣時間)",
    sentiment: {
      type: "risk-on",
      label: "風險偏好",
      icon: "📈",
      text: "..."
    },
    prevDaySummary: "...",
    regions: [
      {
        name: "🇺🇸 美國",
        indices: [
          { name:"道瓊工業",  price:"...", change:"+0.00%", raw: 0.00 },
          { name:"S&P 500",   price:"...", change:"+0.00%", raw: 0.00 },
          { name:"那斯達克",  price:"...", change:"+0.00%", raw: 0.00 }
        ]
      },
      {
        name: "🇪🇺 歐洲",
        indices: [
          { name:"FTSE 100",  price:"...", change:"+0.00%", raw: 0.00 },
          { name:"DAX",       price:"...", change:"+0.00%", raw: 0.00 },
          { name:"CAC 40",    price:"...", change:"+0.00%", raw: 0.00 }
        ]
      },
      {
        name: "🌏 亞洲",
        indices: [
          { name:"日經 225",  price:"...", change:"+0.00%", raw: 0.00 },
          { name:"KOSPI",     price:"...", change:"+0.00%", raw: 0.00 },
          { name:"台股加權",  price:"...", change:"+0.00%", raw: 0.00 }
        ]
      }
    ],
    fx: [
      { label:"美元指數 DXY", value:"...", change:"...", raw: 0.00, note:"一句話說明影響" },
      { label:"USD / TWD",   value:"...", change:"...", raw: 0.00, note:"一句話說明影響" },
      { label:"WTI 原油",    value:"...", change:"...", raw: 0.00, note:"一句話說明影響" },
      { label:"黃金 Gold",   value:"...", change:"...", raw: 0.00, note:"一句話說明影響" }
    ],
    news: [
      { tag:"分類", title:"標題", body:"2–3 句說明。" },
      { tag:"分類", title:"標題", body:"2–3 句說明。" }
    ]
  },

  etf: {
    summary: "一句話說明今天 ETF 整體表現。",
    groups: {
      us_etf: [
        { ticker:"SPY",   name:"SPDR S&P 500",        desc:"追蹤 S&P 500",       price:"$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"QQQ",   name:"Invesco 那斯達克100",  desc:"追蹤那斯達克 100",   price:"$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"VT",    name:"Vanguard 全球股票",    desc:"追蹤全球股市",       price:"$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"VTI",   name:"Vanguard 美國全市場",  desc:"追蹤美國整體市場",   price:"$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"ARKK",  name:"ARK Innovation",       desc:"主動型科技創新 ETF", price:"$...", change:"+0.00%", raw: 0.00, note:"..." }
      ],
      tw_etf: [
        { ticker:"0050",   name:"元大台灣50",          desc:"追蹤台灣前50大市值", price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"00878",  name:"國泰永續高股息",      desc:"ESG 高股息策略",     price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"00929",  name:"復華台灣科技優息",    desc:"科技股高股息",       price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"006208", name:"富邦台灣50",          desc:"低費用追蹤台灣50",   price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." }
      ],
      stocks: [
        { ticker:"2330", name:"台積電",        desc:"全球最大晶圓代工",   price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"NVDA", name:"輝達 Nvidia",   desc:"AI 晶片龍頭",        price:"$...",   change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"AAPL", name:"蘋果 Apple",    desc:"iPhone / 服務生態",  price:"$...",   change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"MSFT", name:"微軟 Microsoft",desc:"雲端 / Copilot",     price:"$...",   change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"2454", name:"聯發科",        desc:"手機晶片 / 邊緣 AI", price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." }
      ],
      bond_etf: [
        { ticker:"TLT",    name:"iShares 20年期美債",  desc:"長期美國公債",      price:"$...",   change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"BND",    name:"Vanguard 美國總體債", desc:"美國全市場債券",    price:"$...",   change:"+0.00%", raw: 0.00, note:"..." },
        { ticker:"00679B", name:"元大美債20年",        desc:"台灣掛牌美債 ETF",  price:"NT$...", change:"+0.00%", raw: 0.00, note:"..." }
      ]
    }
  },

  ai: [
    { topic:"類別", impact:"high", title:"標題", summary:"摘要。", source:"來源", relevance:"對前端工程師的影響。" },
    { topic:"類別", impact:"mid",  title:"標題", summary:"摘要。", source:"來源", relevance:"對前端工程師的影響。" },
    { topic:"類別", impact:"mid",  title:"標題", summary:"摘要。", source:"來源", relevance:"對前端工程師的影響。" },
    { topic:"類別", impact:"low",  title:"標題", summary:"摘要。", source:"來源", relevance:"對前端工程師的影響。" },
    { topic:"類別", impact:"low",  title:"標題", summary:"摘要。", source:"來源", relevance:"對前端工程師的影響。" }
  ],

  frontend: [
    { topic:"React",      impact:"high", title:"標題", summary:"摘要。", source:"來源", relevance:"影響。" },
    { topic:"CSS",        impact:"mid",  title:"標題", summary:"摘要。", source:"來源", relevance:"影響。" },
    { topic:"效能",       impact:"mid",  title:"標題", summary:"摘要。", source:"來源", relevance:"影響。" },
    { topic:"打包工具",   impact:"low",  title:"標題", summary:"摘要。", source:"來源", relevance:"影響。" },
    { topic:"TypeScript", impact:"low",  title:"標題", summary:"摘要。", source:"來源", relevance:"影響。" }
  ],

  startup: [
    { topic:"募資",       impact:"high", title:"標題", summary:"摘要，附金額。", source:"來源", relevance:"啟示。" },
    { topic:"產品",       impact:"mid",  title:"標題", summary:"摘要。",         source:"來源", relevance:"啟示。" },
    { topic:"產品",       impact:"mid",  title:"標題", summary:"摘要。",         source:"來源", relevance:"啟示。" },
    { topic:"亞洲／台灣", impact:"mid",  title:"標題", summary:"摘要。",         source:"來源", relevance:"啟示。" },
    { topic:"產品",       impact:"low",  title:"標題", summary:"摘要。",         source:"來源", relevance:"啟示。" }
  ]

};

---

## 注意事項
- 只輸出 data.js 內容，不要有任何前言或 markdown
- 全部用繁體中文，口語白話
- raw 欄位填數字（例如 1.03 或 -0.5），不含 % 符號
- 休市的指數：change 填 "休市"，raw 填 0
- 時間用台灣時間，貨幣用新台幣或美元