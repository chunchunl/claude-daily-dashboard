const DAILY_DATA = {

  market: {
    date: "2026-05-23",
    generatedAt: "09:00 (台灣時間)",
    sentiment: {
      type: "risk-on",
      label: "風險偏好",
      icon: "📈",
      text: "全球股市強勁收漲，Nvidia 財報超預期點燃 AI 多頭，道瓊、日經雙雙大漲。資金積極往風險資產移動，台股雖小幅修正，但中長期多頭格局未變。"
    },
    prevDaySummary: "5/22（週五）美股收漲，S&P 500 再創歷史新高；Nvidia Q1 FY27 財報大幅超預期（EPS $1.87、營收 $81.6B）但股價因預期已充分而跌 1.75%；Apple 攻上 $309 歷史新高；日股受 AI 題材激勵大漲 2.68%；台股小幅修正 -0.4%。",
    regions: [
      {
        name: "🇺🇸 美國",
        indices: [
          { name: "道瓊工業",  price: "50,580", change: "+0.58%", raw: 0.58 },
          { name: "S&P 500",   price: "5,823",  change: "+0.40%", raw: 0.40 },
          { name: "那斯達克",  price: "19,847", change: "+0.20%", raw: 0.20 }
        ]
      },
      {
        name: "🇪🇺 歐洲",
        indices: [
          { name: "FTSE 100",  price: "10,490", change: "+0.40%", raw: 0.40 },
          { name: "DAX",       price: "24,889", change: "+1.15%", raw: 1.15 },
          { name: "CAC 40",    price: "8,127",  change: "+0.51%", raw: 0.51 }
        ]
      },
      {
        name: "🌏 亞洲",
        indices: [
          { name: "日經 225",  price: "63,339", change: "+2.68%", raw: 2.68 },
          { name: "KOSPI",     price: "7,688",  change: "+6.70%", raw: 6.70 },
          { name: "台股加權",  price: "40,911", change: "-0.40%", raw: -0.40 }
        ]
      }
    ],
    fx: [
      { label: "美元指數 DXY", value: "99.32",  change: "+0.06%", raw: 0.06,  note: "美元溫和走強，市場對美國利率預期保持謹慎" },
      { label: "USD / TWD",    value: "31.52",  change: "-0.11%", raw: -0.11, note: "新台幣小幅升值，外資持續流入台股" },
      { label: "WTI 原油",     value: "$97.00", change: "+0.67%", raw: 0.67,  note: "油價偏高，通膨壓力仍在，影響聯準會降息空間" },
      { label: "黃金 Gold",    value: "$4,524", change: "-0.42%", raw: -0.42, note: "黃金小幅回落但仍在歷史高位，避險需求未完全消退" }
    ],
    news: [
      { tag: "財報", title: "Nvidia Q1 FY27 超預期：營收 816 億美元、資料中心年增幾乎翻倍", body: "Nvidia 5/20 公布財報，EPS $1.87 超預期 $1.76，總營收年增 85%，資料中心達 752 億美元（佔總營收 92%）。CEO Jensen Huang 稱「Agentic AI 已然到來」，但股價因預期過高而財報後跌 1.75%。" },
      { tag: "市場", title: "Apple 股價攻上 309 美元歷史新高，AI 敘事引爆買盤", body: "蘋果從 52 週低點大漲 58%，市場押注 Apple Intelligence 全面落地帶動換機潮。分析師預期 WWDC 2026 將有更強 AI 功能揭露，短線估值已相當充分。" }
    ]
  },

  etf: {
    summary: "5/22 美股 ETF 全面收漲，QQQ 與 SPY 同步創高；台股 ETF 跟隨大盤小幅修正；債券 ETF TLT 小漲，顯示市場仍有降息預期。",
    groups: {
      us_etf: [
        { ticker: "SPY",   name: "SPDR S&P 500",        desc: "追蹤 S&P 500",       price: "$582.30", change: "+0.40%", raw: 0.40,  note: "S&P 500 續創歷史新高，AI 科技股強勁支撐" },
        { ticker: "QQQ",   name: "Invesco 那斯達克100",  desc: "追蹤那斯達克 100",   price: "$714.43", change: "+0.20%", raw: 0.20,  note: "科技龍頭整體溫和上漲，Nvidia 小跌略微拖累" },
        { ticker: "VT",    name: "Vanguard 全球股票",    desc: "追蹤全球股市",       price: "$142.80", change: "+0.55%", raw: 0.55,  note: "歐亞股市普漲，全球 ETF 表現優於純美股" },
        { ticker: "VTI",   name: "Vanguard 美國全市場",  desc: "追蹤美國整體市場",   price: "$277.50", change: "+0.38%", raw: 0.38,  note: "廣泛市場穩健走升，與 S&P 500 同步" },
        { ticker: "ARKK",  name: "ARK Innovation",       desc: "主動型科技創新 ETF", price: "$98.70",  change: "+0.85%", raw: 0.85,  note: "創新科技股受 AI 浪潮帶動持續反彈" }
      ],
      tw_etf: [
        { ticker: "0050",   name: "元大台灣50",          desc: "追蹤台灣前50大市值", price: "NT$448",   change: "-0.44%", raw: -0.44, note: "台積電小跌拖累，但長線仍隨 AI 趨勢向上" },
        { ticker: "00878",  name: "國泰永續高股息",      desc: "ESG 高股息策略",     price: "NT$26.35", change: "-0.26%", raw: -0.26, note: "高息 ETF 跌幅溫和，配息吸引力支撐買盤" },
        { ticker: "00929",  name: "復華台灣科技優息",    desc: "科技股高股息",       price: "NT$25.80", change: "-0.38%", raw: -0.38, note: "科技類高息 ETF 跟隨台股修正" },
        { ticker: "006208", name: "富邦台灣50",          desc: "低費用追蹤台灣50",   price: "NT$132",   change: "-0.38%", raw: -0.38, note: "與 0050 走勢相近，費用率更低適合長期定存" }
      ],
      stocks: [
        { ticker: "2330", name: "台積電",        desc: "全球最大晶圓代工",   price: "NT$1,628", change: "-0.37%", raw: -0.37, note: "高檔整理，外資目標價上看 2,330-2,400 元" },
        { ticker: "NVDA", name: "輝達 Nvidia",   desc: "AI 晶片龍頭",        price: "$215.33",  change: "-1.75%", raw: -1.75, note: "財報超預期但股價逆跌，預期已充分反映，需等下季指引" },
        { ticker: "AAPL", name: "蘋果 Apple",    desc: "iPhone / 服務生態",  price: "$309.23",  change: "+1.40%", raw: 1.40,  note: "創歷史新高，AI 換機潮預期點燃資金追捧" },
        { ticker: "MSFT", name: "微軟 Microsoft",desc: "雲端 / Copilot",     price: "$420.30",  change: "+0.60%", raw: 0.60,  note: "Azure AI 服務強勁，Copilot 商業化成效顯現" },
        { ticker: "2454", name: "聯發科",        desc: "手機晶片 / 邊緣 AI", price: "NT$2,180", change: "-0.45%", raw: -0.45, note: "邊緣 AI 晶片需求中長期看好，短線隨台股修正" }
      ],
      bond_etf: [
        { ticker: "TLT",    name: "iShares 20年期美債",  desc: "長期美國公債",      price: "$84.68",   change: "+0.55%", raw: 0.55,  note: "長債微幅回升，市場仍在押注年底降息" },
        { ticker: "BND",    name: "Vanguard 美國總體債", desc: "美國全市場債券",    price: "$72.93",   change: "+0.11%", raw: 0.11,  note: "整體債市溫和走升，保守資產配置首選" },
        { ticker: "00679B", name: "元大美債20年",        desc: "台灣掛牌美債 ETF",  price: "NT$38.20", change: "+0.26%", raw: 0.26,  note: "跟隨 TLT 方向走升，匯率影響相對中性" }
      ]
    }
  },

  ai: [
    {
      topic: "財報",
      impact: "high",
      title: "Nvidia Q1 FY27 財報：資料中心年增幾乎翻倍，Jensen Huang 宣告「Agentic AI 時代來臨」",
      summary: "Nvidia 5/20 公布 Q1 FY27 財報，EPS $1.87 超預期，總營收 $81.6B 年增 85%，資料中心達 $75.2B（佔 92%）。CEO Jensen Huang 直言 Agentic AI 已到來，AI 工廠建設「以異常速度加速」。股價雖因預期充分而微跌，長線基本面強勁。",
      source: "CNBC / Axios",
      relevance: "AI 推論成本持續下滑，前端工程師可用更低預算整合 AI 功能；Agent 需求爆發讓懂 AI 串接的工程師身價大漲。"
    },
    {
      topic: "Google I/O",
      impact: "high",
      title: "Google I/O 2026：WebMCP 標準發表，AI Agent 可結構化操作網站，Chrome 149 開放試用",
      summary: "Google I/O 2026 重磅發布 WebMCP（open web standard），讓開發者在網頁暴露結構化 JS 函式給 AI Agent 呼叫，取代傳統視覺爬蟲。同步發表 Gemini 3.5 Flash（GA、速度 4x、便宜 50%）、Gemini Spark 個人 AI Agent，Chrome 149 啟動 WebMCP Origin Trial。",
      source: "Google Developers Blog",
      relevance: "WebMCP 是前端架構的重大轉變：網站不只給人用，也要設計給 AI Agent 用。前端工程師需學習設計「Agent 友好」的介面與 API。"
    },
    {
      topic: "Anthropic",
      impact: "mid",
      title: "Anthropic 企業採用率 34.4% 首超 OpenAI，Managed Agents 自主工作流程公測上線",
      summary: "Ramp AI Index 顯示 Anthropic 企業採用率 34.4% 首超 OpenAI 的 32.3%，主要由 Claude Code 驅動。同步開放 Managed Agents 公測（長時間自主工作流程，涵蓋程式開發、財務、法務），並發布 MCP Tunnels 讓 Agent 安全呼叫內部服務。",
      source: "Ramp AI Index / Anthropic Blog",
      relevance: "Claude Code 在前端開發圈滲透率快速提升；Managed Agents 讓 AI 可跑完整 CI/CD 流程，開發工具下一個大爆發點就在眼前。"
    },
    {
      topic: "OpenAI",
      impact: "mid",
      title: "OpenAI 成立 Deployment Company 並收購 Tomoro，從賣 API 轉型企業 AI 深度服務",
      summary: "OpenAI 新設 OpenAI Deployment Company（逾 40 億美元投入），收購 AI 顧問公司 Tomoro（約 150 位工程師），從 API 供應商轉型為企業 AI 落地夥伴，提供駐點工程師與顧問服務。",
      source: "TechCrunch / Bloomberg",
      relevance: "企業 AI 部署加速，懂 AI 串接的全端工程師需求持續增加，光會 React 已不夠，AI 整合能力成職涯必備技能。"
    },
    {
      topic: "模型",
      impact: "low",
      title: "Gemini 3.5 Flash 正式 GA：Terminal-Bench 達 76.2%，MiniMax M2.7 同步上線",
      summary: "Gemini 3.5 Flash 正式 GA，定價 $1.50/$9 per 1M tokens，速度是同等級模型 4 倍，Coding 與 Agent benchmark 超越前代 Gemini 3.1 Pro。MiniMax M2.7 系列同期在 LLM Gateway 上線，競爭持續激化。",
      source: "LLM Stats / LLM Gateway",
      relevance: "前端整合 AI 時，Gemini 3.5 Flash 性價比明顯提升，可考慮取代更昂貴模型處理中等複雜任務以降低 API 成本。"
    }
  ],

  frontend: [
    {
      topic: "Chrome",
      impact: "high",
      title: "Google I/O 2026：WebMCP Origin Trial 在 Chrome 149 啟動，AI Agent 可結構化操作網頁",
      summary: "WebMCP 讓開發者在網頁定義 JS 函式與 HTML 表單供 AI Agent 精確呼叫，不再依賴視覺爬蟲。Chrome DevTools 新增 Agent 偵錯模式（支援 20+ Coding Agent），View Transitions API 同步轉為穩定版。",
      source: "Chrome for Developers Blog",
      relevance: "前端工程師未來需設計「Agent 友好」的網站結構，WebMCP 是關鍵標準；View Transitions API 穩定後可放心用於 SPA 頁面動畫，不需任何第三方庫。"
    },
    {
      topic: "Vite",
      impact: "mid",
      title: "Vite 8.0.14 最新穩定版：內建 tsconfig paths 支援、React Plugin v6 移除 Babel 依賴",
      summary: "Vite 8 最新版（8.0.14，2 天前發布）已穩定。重點：內建 TypeScript 路徑解析（resolve.tsconfigPaths: true，無需額外 plugin）；@vitejs/plugin-react v6 改用 Oxc 取代 Babel，安裝體積更小、啟動更快。",
      source: "Vite Dev Blog / npm",
      relevance: "新專案直接選 Vite 8 + React Plugin v6，可少裝 vite-tsconfig-paths；升級前確認 Oxc 與你的 Babel 設定相容性。"
    },
    {
      topic: "Next.js",
      impact: "mid",
      title: "Next.js 15.5：Turbopack Build 進入 Beta、typed routes 正式穩定、Node.js middleware 可用",
      summary: "Next.js 15.5 讓 Turbopack 建置進入 Beta（比 Webpack 快 55%+），typed routes 現已穩定（路由層完整 TypeScript 推斷），stable Node.js middleware 解除舊有 Edge Runtime 限制。",
      source: "Next.js Blog",
      relevance: "新專案建議開 Turbopack 當預設；typed routes 讓路由 typo 在編譯期就抓到；Node.js middleware 讓 auth 等邏輯不再受 Edge 限制。"
    },
    {
      topic: "CSS",
      impact: "mid",
      title: "Chrome View Transitions API 轉穩定、@scope 規則全面可用，原生 CSS 持續強化",
      summary: "Chrome 正式穩定 View Transitions API（SPA 頁面切換媲美原生 App 動畫）；@scope CSS 規則全面可用，讓樣式限定在特定 DOM 子樹而不需複雜 BEM 命名；HTML-in-Canvas API 實驗性功能同步發表。",
      source: "Chrome Developers Blog",
      relevance: "View Transitions 可不靠任何 JS 框架做出絲滑動畫；@scope 大幅降低 CSS 特異性衝突，配合 CSS Modules 使用效果最佳。"
    },
    {
      topic: "TypeScript",
      impact: "low",
      title: "2026 前端基準線：React 19.2 + TypeScript 6.0 + Vite 8 + Vitest 成業界標準配置",
      summary: "2026 年前端技術棧已高度收斂：React 19.2（Compiler 成熟、RSC 預設開啟）、TypeScript 6.0（strict mode 強制）、Vite 8、ESLint flat config、Vitest 為新專案最小可行標準。tRPC + Prisma 端到端型別推斷也進入主流。",
      source: "JavaScript Doctor Blog / WebOmnizz",
      relevance: "若你的專案還在 React 17 + Webpack，建議排進 migration roadmap；社群生態系逐漸停止為舊配置維護 plugin。"
    }
  ],

  startup: [
    {
      topic: "募資",
      impact: "high",
      title: "企業 AI 新創 Sierra 完成 9.5 億美元 D 輪，估值突破 150 億美元",
      summary: "Bret Taylor（前 Salesforce 共同 CEO）創辦的企業 AI 新創 Sierra，由 Tiger Global 與 GV 領投，完成 9.5 億美元募資，估值超過 150 億美元。Sierra 主打企業級 AI 客服與自動化，已服務多家財星 500 大企業。",
      source: "TechCrunch",
      relevance: "企業 AI 客服市場爆發，傳統 SaaS 廠商面臨 AI 原生競爭對手強烈衝擊；Bret Taylor 的背書也讓企業買單信心大增。"
    },
    {
      topic: "產品",
      impact: "mid",
      title: "OpenAI 成立 Deployment Company 並收購 Tomoro，砸逾 40 億美元轉型企業服務",
      summary: "OpenAI 新設 OpenAI Deployment Company 並收購 AI 顧問公司 Tomoro（約 150 位工程師），從 API 供應商轉型為企業 AI 落地夥伴，提供駐點工程師與顧問服務。逾 40 億美元初始投入顯示其企業市場野心。",
      source: "TechCrunch / Bloomberg",
      relevance: "AI 落地需要大量整合工程師，懂 AI 串接的全端工程師需求持續增加，是職涯加分的黃金技能。"
    },
    {
      topic: "產品",
      impact: "mid",
      title: "Google Gemini Spark 個人 AI Agent 發表，跨 App 自動執行多步驟任務",
      summary: "Google I/O 2026 發表 Gemini Spark，深度整合 Gmail、Calendar、Drive，可自主跨 App 完成複雜任務，首波向 Google AI Ultra 訂閱者開放。這是 Google 對抗 OpenAI 個人 Agent 的關鍵產品。",
      source: "CNBC / Google Blog",
      relevance: "個人 AI Agent 正式商業化，前端開發的 App 未來需考量 Agent 互動體驗設計，不只是人工操作的 UX。"
    },
    {
      topic: "亞洲／台灣",
      impact: "mid",
      title: "台灣 Q1 2026 出口年增 51%、GDP 成長 13.69%，AI 半導體出口強勁帶動",
      summary: "台灣 2026 年第一季出口達 1,957 億美元，年增率達 51%，GDP 成長 13.69%，主要由 AI 伺服器與先進晶片出口驅動。外資持續上調台積電目標價至 2,330-2,400 元，台灣科技產業在全球 AI 供應鏈中地位無可取代。",
      source: "數位時代 / 聯合新聞網",
      relevance: "台灣科技產業在 AI 浪潮中取得核心優勢，台股相關 ETF（0050、006208）中長期仍具高度吸引力。"
    },
    {
      topic: "產品",
      impact: "low",
      title: "Product Hunt 5 月新品：多 Agent 協作平台、AI UI 生成器 Stitch 2.0 引爆關注",
      summary: "Product Hunt 5 月新品以 AI Agent 工具為主軸：多 Agent 管理平台 Viberia、AI UI 生成器 Stitch 2.0（Prompt 直接轉可編輯 UI）、給 Agent 打電話能力的 PollyReach，以及 AI 設計工具 Magic Patterns 新版上線。",
      source: "Product Hunt",
      relevance: "Stitch 2.0 可把 Prompt 直接轉成可編輯的 UI 元件，前端工程師值得試用以加速原型設計流程。"
    }
  ]

};
