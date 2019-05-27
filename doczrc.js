import doczPluginNetlify from 'docz-plugin-netlify'

export default {
  title: 'MobX with React',
  description: 'Make your components truly reactive with MobX',
  src: 'content',
  files: 'content/**/*.mdx',
  typescript: true,
  propsParser: false,
  codeSandbox: false,
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/blackboard.css',
        },
      ],
    },
  },
  themeConfig: {
    mode: 'dark',
    codemirrorTheme: 'blackboard',
    showPlaygroundEditor: false,
    linesToScrollEditor: 50,
    colors: {
      codeColor: '#8DA6CE',
      codeBg: '#0C1021',
    },
  },
  plugins: [doczPluginNetlify()],
}
