var masonry = new Macy({
  container: '#macy-container',
  trueOrder: false,
  waitForImages: false,
  useOwnImageLoader: false,
  debug: true,
  mobileFirst: true,
  columns: 1,
  margin: {
      y: 15,
      x: 0,
  },
  breakAt: {
      1200: 4,
      940: 4,
      520: 3,
      400: 2
  },
});