export const useIndexStore = defineStore('index', {
  state: () => ({
    timeoutForPageScroll: 1000,
    screenSize: { width: 0, height: 0 },
  }),
  actions: {},
});
