# 빌드 시 404 에러

> `npm run build` 후 `npx run -s build` 하여 빌드된 html 파일을 열어 실행해보면, ...chunk.css 파일이 로드되지 않는다는 오류가 난다.

## 해결

package.json 에 homepage 경로를 상대경로로 지정해준다.
`"homepage": "."`
