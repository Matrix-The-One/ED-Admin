export default {
  dev: {
    '/agency': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/agency': '' },
    },
  },
}
