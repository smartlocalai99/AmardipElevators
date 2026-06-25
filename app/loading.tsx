export default function Loading() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full border-4 border-gray-100" />

          <div
            className="absolute w-full h-full rounded-full border-4 border-transparent border-t-red-500 border-r-red-500"
            style={{
              animation: "spin 1.2s linear infinite",
            }}
          />
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              style={{
                animation: `pulse 0.6s ease-in-out ${i * 0.12}s infinite alternate`,
              }}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          from {
            opacity: 0.2;
            transform: scale(0.8);
          }

          to {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}