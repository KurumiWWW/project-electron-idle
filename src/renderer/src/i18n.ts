import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  // 通过HTTP加载翻译文件（路径默认是public/locales/{lang}/translation.json）
  .use(Backend)
  // 检测浏览器语言
  .use(LanguageDetector)
  // 将i18n实例绑定到React
  .use(initReactI18next)
  // 初始化配置
  .init({
    fallbackLng: 'zh-CN',
    debug: true, // 开发时可以设为true，查看调试日志
    interpolation: {
      escapeValue: false // React会自动转义，无需额外处理
    }
  })

export default i18n
