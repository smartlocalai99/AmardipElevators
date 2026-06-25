export default function ProductTabs({
  tabs,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="space-y-3 lg:space-y-4">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex w-full items-center gap-3 lg:gap-4 rounded-full px-5 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-left font-bold transition-all text-base sm:text-lg ${
            activeTab === tab.id
              ? 'bg-[#E10600] text-white shadow-md'
              : 'bg-black text-white'
          }`}
        >

          <span
            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 rounded-full ${
              activeTab === tab.id
                ? 'bg-black'
                : 'bg-white'
            }`}
          />

          <span className="leading-tight">
            {tab.label}
          </span>

        </button>
      ))}

    </div>
  )
}