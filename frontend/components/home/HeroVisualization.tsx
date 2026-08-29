

export function HeroVisualization() {
  return (
    <div className="relative w-full max-w-[600px] aspect-[4/3] flex items-center justify-center overflow-hidden">
      <div className="absolute flex items-center justify-center w-[600px] h-[400px] scale-[0.55] xs:scale-[0.65] sm:scale-[0.85] md:scale-100 origin-center">
        {/* Background Dotted Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Glow Effects Behind Everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary/20 rounded-full blur-[40px]" />

        {/* SVG Connecting Lines */}
        <svg viewBox="0 0 600 400" className="absolute inset-0 w-[600px] h-[400px] pointer-events-none" style={{ zIndex: 0 }} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6600" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FF6600" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF6600" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <g stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="opacity-80">
            {/* Top Left Line */}
            <path d="M 120 120 C 180 120, 200 200, 300 200" />
            <circle cx="120" cy="120" r="3" fill="#FF6600" />

            {/* Bottom Left Line */}
            <path d="M 120 280 C 180 280, 200 200, 300 200" />
            <circle cx="120" cy="280" r="3" fill="#FF6600" />

            {/* Top Right Line */}
            <path d="M 480 120 C 420 120, 400 200, 300 200" />
            <circle cx="480" cy="120" r="3" fill="#FF6600" />

            {/* Bottom Right Line */}
            <path d="M 480 280 C 420 280, 400 200, 300 200" />
            <circle cx="480" cy="280" r="3" fill="#FF6600" />
          </g>
        </svg>

        {/* Central Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
          {/* Outer glowing rings */}
          <div className="absolute w-32 h-32 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-40 h-40 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute w-36 h-36 border-t border-b border-primary/30 rounded-full animate-[spin_8s_linear_infinite]" />

          {/* The Core */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary-dark to-primary shadow-[0_0_30px_rgba(255,102,0,0.5)] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-white/20 blur-sm rounded-full animate-pulse" />
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-transparent to-white/30 rotate-45 pointer-events-none" />
            {/* Inner dark center for contrast */}
            <div className="absolute w-10 h-10 rounded-full bg-surface shadow-inner z-10 flex items-center justify-center">
              <div className="absolute w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div>
              <div className="absolute w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>

        {/* Cards Overlay */}
        <div className="absolute inset-0 w-[600px] h-[400px] p-4 z-20 flex flex-col justify-between pointer-events-none">

          {/* Top Row */}
          <div className="flex justify-between w-full h-1/2">
            {/* Top Left: Task Lists */}
            <div className="w-[190px] h-fit bg-surface border border-border shadow-sm rounded-none p-4 transform -translate-y-2 pointer-events-auto hover:shadow-md transition-all duration-300">
              <h3 className="text-foreground text-xs font-bold mb-3 uppercase tracking-wider">Task Lists</h3>
              <div className="space-y-2">
                <div className="bg-background border border-border rounded-none px-2 py-1.5 flex items-center gap-2 w-full">
                  <span className="text-[11px] text-foreground font-medium">Draft client proposal</span>
                </div>
                <div className="flex gap-2">
                  <div className="bg-primary/5 border border-primary/20 rounded-none px-2 py-1.5 flex items-center gap-1.5 w-full">
                    <div className="w-3 h-3 bg-primary flex items-center justify-center rounded-sm">
                      <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[11px] text-primary-dark font-medium">Approved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right: Analytics */}
            <div className="w-[190px] h-fit bg-surface border border-border shadow-sm rounded-none p-4 transform -translate-y-2 pointer-events-auto hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-foreground text-xs font-bold uppercase tracking-wider">Analytics</h3>
                <div className="bg-green-100 border border-green-200 px-1.5 py-0.5 rounded-none text-[9px] text-green-700 font-bold flex items-center gap-1">
                  <span>↑</span> 60%
                </div>
              </div>
              {/* Tiny Bar Chart */}
              <div className="flex items-end gap-1.5 h-12 w-full mt-2">
                <div className="w-1/5 bg-primary/20 h-[30%] relative"></div>
                <div className="w-1/5 bg-primary/40 h-[50%] relative"></div>
                <div className="w-1/5 bg-primary/60 h-[80%] relative"></div>
                <div className="w-1/5 bg-primary/40 h-[60%] relative"></div>
                <div className="w-1/5 bg-primary h-[100%] relative shadow-[0_0_8px_rgba(255,102,0,0.4)]"></div>
              </div>
              <div className="flex justify-between w-full text-[9px] text-muted font-medium mt-2">
                <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between w-full h-1/2 items-end">
            {/* Bottom Left: Workflows */}
            <div className="w-[190px] h-fit bg-surface border border-border shadow-sm rounded-none p-4 transform translate-y-2 pointer-events-auto hover:shadow-md transition-all duration-300">
              <h3 className="text-foreground text-xs font-bold mb-3 uppercase tracking-wider">Workflows</h3>
              <div className="flex flex-col gap-2 relative">
                <div className="bg-background border border-border rounded-none px-2 py-1.5 flex items-center gap-2">
                  <div className="w-3 h-3 bg-surface border border-border flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary"></div>
                  </div>
                  <span className="text-[11px] text-foreground font-medium">Data extraction</span>
                </div>
                <div className="w-[1px] h-3 bg-primary/30 mx-auto"></div>
                <div className="bg-background border border-border rounded-none px-2 py-1.5 flex items-center gap-2 opacity-60">
                  <div className="w-3 h-3 bg-surface border border-border flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-muted"></div>
                  </div>
                  <span className="text-[11px] text-muted font-medium">Model processing</span>
                </div>
              </div>
            </div>

            {/* Bottom Right: Insights */}
            <div className="w-[190px] h-fit bg-surface border border-border shadow-sm rounded-none p-4 transform translate-y-2 pointer-events-auto hover:shadow-md transition-all duration-300">
              <h3 className="text-foreground text-xs font-bold mb-3 uppercase tracking-wider">Insights</h3>
              <div className="space-y-2">
                <div className="bg-background border border-border rounded-none px-2 py-1.5 flex items-center justify-between w-full">
                  <span className="text-[11px] text-foreground font-medium">Report ready</span>
                  <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-none px-2 py-1.5 flex items-center justify-between w-full">
                  <span className="text-[11px] text-primary-dark font-medium">Priority insight</span>
                  <div className="w-3 h-3 bg-primary/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
