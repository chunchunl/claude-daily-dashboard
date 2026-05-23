# 每日情報站

每天早上快速掌握世界市場、ETF／個股、AI 動態、前端技術與新創產品資訊的個人儀表板。資料由 [Claude Cowork](https://claude.ai) 自動搜尋整理，透過純靜態網頁呈現，無需後端或建置工具。

**線上預覽：** [https://chunchunl.github.io/claude-daily-dashboard/](https://chunchunl.github.io/claude-daily-dashboard/)（需於 GitHub 啟用 Pages）

---

## 功能概覽

| 分頁 | 內容 |
|------|------|
| **世界市場** | 美／歐／亞主要指數、匯率與大宗商品、今日情緒（risk-on / risk-off）、重點財經新聞 |
| **ETF ／ 個股** | 美股 ETF、台股 ETF、個股、債券 ETF 收盤價與漲跌幅 |
| **AI 動態** | LLM、Agent、開發工具、研究、產品等 5 則摘要 |
| **前端技術** | React、CSS、效能、打包工具、TypeScript 等 5 則摘要 |
| **新創 ／ 產品** | 募資、產品發布、亞洲／台灣動態等 5 則摘要 |

---

## 專案結構

```
claude-daily-dashboard/
├── index.html              # 儀表板介面與渲染邏輯
├── data.js                 # 每日資料（由 Cowork 產出）
├── update.sh               # 複製 data.js 並 push 到 GitHub
├── .claude/
│   └── cowork-prompt.md    # 給 Cowork 的每日搜尋提示詞
└── README.md
```

`index.html` 透過 `<script src="data.js">` 載入全域變數 `DAILY_DATA`，再依分頁渲染畫面。

---

## 本地預覽

```bash
cd ~/Desktop/claude-daily-dashboard
open index.html
```

或用任意靜態伺服器：

```bash
python3 -m http.server 8080
# 瀏覽器開啟 http://localhost:8080
```

---

## 每日更新流程

### 1. 請 Cowork 產出今日資料

將 [`.claude/cowork-prompt.md`](.claude/cowork-prompt.md) 的內容貼給 Claude Cowork。它會搜尋最新資訊並寫入 `data.js`，完成後執行：

```bash
cd ~/Desktop/claude-daily-dashboard
./update.sh ~/Desktop/claude-daily-dashboard/data.js
```

### 2. `update.sh` 會自動

1. 將新的 `data.js` 複製到專案目錄  
2. `git add data.js` 並提交（訊息含時間戳）  
3. `git push origin main`

手動更新也可以：

```bash
# 編輯或覆蓋 data.js 後
git add data.js
git commit -m "Update daily data"
git push origin main
```

---

## 資料格式（`data.js`）

檔案需匯出單一物件 `DAILY_DATA`，結構如下：

```javascript
const DAILY_DATA = {
  market: { date, generatedAt, sentiment, prevDaySummary, regions, fx, news },
  etf:    { summary, groups: { us_etf, tw_etf, stocks, bond_etf } },
  ai:      [ { topic, impact, title, summary, source, relevance }, ... ],
  frontend:[ ... ],
  startup: [ ... ]
};
```

- `impact`：`high`｜`mid`｜`low`  
- `raw`：漲跌幅數字（不含 `%`），供顏色與迷你長條圖使用  
- 休市時：`change` 填 `"休市"`，`raw` 填 `0`  

完整欄位說明見 [cowork-prompt.md](.claude/cowork-prompt.md)。

---

## GitHub Pages 部署

1. 進入 repo **Settings → Pages**  
2. **Source** 選 `Deploy from a branch`  
3. **Branch** 選 `main`，資料夾選 `/ (root)`  
4. 儲存後數分鐘內可於 `https://<username>.github.io/claude-daily-dashboard/` 存取  

每次 `git push` 更新 `data.js` 後，網站會自動反映最新內容。

---

## 技術說明

- 純 HTML / CSS / JavaScript，零依賴、零建置  
- 字型：Noto Sans TC、DM Mono、Playfair Display（Google Fonts）  
- 深色主題，響應式版面  

---

## 授權與備註

本專案為個人使用之資訊整理工具，市場與新聞資料僅供參考，不構成投資建議。資料來源標註於頁尾（Yahoo Finance、Reuters、The Verge、Hacker News 等）。

---

✦ Created by LinYuChun
