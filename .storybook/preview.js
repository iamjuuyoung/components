/**
 * global하게 적용될 포맷 세팅
 */
 export const parameters = {
  // on으로 시작하는 이벤트 감지하여 action탭에서 확인가능
  actions: { argTypesRegex: "^on[A-Z].*" },
  // storybook실행시 사용자가 컨트롤 가능하게 함
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}