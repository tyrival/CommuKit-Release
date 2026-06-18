import { useI18n } from '../i18n/I18nContext'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-[#e5e5ea] dark:border-[#1e2230] py-8 text-center relative z-10">
      <div className="flex justify-center gap-8 mb-3">
        <a href="https://github.com/tyrival/CommuKit-Release/releases" className="text-sm text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#0085ff] dark:hover:text-[#00bfff] transition-colors no-underline">{t.footer.changelog}</a>
        <a href="https://github.com/tyrival/CommuKit-Release/releases/latest" className="text-sm text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#0085ff] dark:hover:text-[#00bfff] transition-colors no-underline">{t.footer.download}</a>
      </div>
      <p className="text-xs text-[#aeaeb2] dark:text-[#5a5a6e]">&copy; 2026 CommuKit</p>
    </footer>
  )
}
