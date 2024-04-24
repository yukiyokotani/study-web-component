# ReactコンポーネントをWeb Component化して配布する試み

## 実装方法

- `lib/` の下に通常通りReactコンポーネントを作成する
- `lib/main.ts` でReactコンポーネントをimportして、r2wcに通してcustomElementを定義する

## 確認方法

- `npm run build` を実行する
- `dist/` に出力されるJS (ESM) をViteのpublicフォルダに配置する
  - Web Componentを利用しているのは `public/index.html`
- `npm run dev` でViteの開発サーバーを起動する
- `http://localhost:5173/index.html` にアクセスする
