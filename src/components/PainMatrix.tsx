import { useI18n } from '../i18n/I18nContext'

export default function PainMatrix() {
  const { t } = useI18n()
  const pm = t.painMatrix

  return (
    <section id="pain-points" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#0085ff] dark:text-[#00bfff] uppercase tracking-[0.2em] mb-3">{pm.heading}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-[#e8e8ed]">
            {pm.title} <span className="bg-gradient-to-r from-[#0085ff] to-[#00bfff] bg-clip-text text-transparent">{pm.titleHighlight}</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e5e5ea] dark:border-[#1e2230]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#ff3b30] dark:text-[#ff6961] w-[22%]">Pain Point</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#ff3b30] dark:text-[#ff6961] w-[28%]">Problem</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#30d158] w-[22%]">{pm.solution}</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#30d158] w-[28%]">How {pm.solution} Solves It</th>
              </tr>
            </thead>
            <tbody>
              {pm.items.map((item, i) => (
                <tr key={i} className="border-b border-[#e5e5ea] dark:border-[#1e2230] group hover:bg-[#f5f5f7] dark:hover:bg-[#0d0f17] transition-colors">
                  <td className="py-4 px-4">
                    <span className="text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{item.pain}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-xs text-[#6e6e73] dark:text-[#8e8e9a] leading-relaxed">{item.painDesc}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-semibold text-[#30d158]">{item.solution}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-xs text-[#6e6e73] dark:text-[#8e8e9a] leading-relaxed">{item.solnDesc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
