import doczPluginNetlify from 'docz-plugin-netlify'

export default {
  title: 'MobX with React',
  description: 'Make your components truly reactive with MobX',
  themeConfig: {
    mode: 'dark',
  },
  src: 'content',
  files: 'content/**/*.mdx',
  typescript: true,
  propsParser: false,
  codeSandbox: false,
  plugins: [doczPluginNetlify()],
}
