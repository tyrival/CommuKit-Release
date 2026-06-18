import { Activity, Braces, Calculator, ChevronRight, Cpu, Globe, Hash, Monitor, Search, Server, Shield, Wifi, Workflow, Zap } from 'lucide-react'

type Variant = 'hero' | 'protocols' | 'pipeline' | 'analyzer' | 'tools' | 'workspace' | 'utilities'

interface Props { variant: Variant }

export default function AppMockup({ variant }: Props) {
  switch (variant) {
    case 'hero': return <HeroMockup />
    case 'protocols': return <ProtocolsMockup />
    case 'pipeline': return <PipelineMockup />
    case 'analyzer': return <AnalyzerMockup />
    case 'tools': return <ToolsMockup />
    case 'workspace': return <WorkspaceMockup />
    case 'utilities': return <UtilitiesMockup />
  }
}

function HeroMockup() {
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e5ea] dark:border-[#1e2230]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] font-medium">CommuKit — Connection Workbench</div>
      </div>
      {/* Content */}
      <div className="flex h-[320px]">
        {/* Sidebar */}
        <div className="w-[180px] border-r border-[#e5e5ea] dark:border-[#1e2230] p-3 flex flex-col gap-1">
          <div className="text-[10px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider mb-2">Connections</div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-[#0085ff]/10 dark:bg-[#00bfff]/10 border border-[#0085ff]/20 dark:border-[#00bfff]/20">
            <Wifi size={12} className="text-[#0085ff] dark:text-[#00bfff]" />
            <span className="text-xs text-[#1d1d1f] dark:text-[#e8e8ed] font-medium">Modbus Device</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md">
            <Globe size={12} className="text-[#6e6e73] dark:text-[#8e8e9a]" />
            <span className="text-xs text-[#6e6e73] dark:text-[#8e8e9a]">MQTT Broker</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md">
            <Server size={12} className="text-[#6e6e73] dark:text-[#8e8e9a]" />
            <span className="text-xs text-[#6e6e73] dark:text-[#8e8e9a]">TCP Server</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md">
            <Activity size={12} className="text-[#6e6e73] dark:text-[#8e8e9a]" />
            <span className="text-xs text-[#6e6e73] dark:text-[#8e8e9a]">WebSocket API</span>
          </div>
          <div className="text-[10px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider mt-4 mb-1">Tools</div>
          <div className="flex items-center gap-2 px-2 py-1 rounded-md">
            <Search size={11} className="text-[#8e8e93]" />
            <span className="text-[11px] text-[#8e8e93]">Ping</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 rounded-md">
            <Hash size={11} className="text-[#8e8e93]" />
            <span className="text-[11px] text-[#8e8e93]">Port Scanner</span>
          </div>
        </div>
        {/* Main */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium">Connected</span>
            <span className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e]">TCP → 192.168.1.100:502</span>
          </div>
          <div className="flex-1 bg-[#f5f5f7] dark:bg-[#0d0f17] rounded-lg p-3 overflow-y-auto flex flex-col gap-2.5">
            {/* Sent message bubble */}
            <div className="flex flex-col items-end">
              <div className="text-[9px] text-[#aeaeb2] dark:text-[#5a5a6e] mb-0.5">TX · 14:32:01</div>
              <div className="max-w-[85%] bg-[#0085ff] text-white rounded-2xl rounded-br-md px-3 py-1.5 font-mono text-[11px] shadow-sm">
                01 03 00 00 00 02 C4 0B
              </div>
            </div>
            {/* Received message bubble */}
            <div className="flex flex-col items-start">
              <div className="text-[9px] text-[#aeaeb2] dark:text-[#5a5a6e] mb-0.5">RX · 14:32:01</div>
              <div className="max-w-[85%] bg-white dark:bg-[#1a1d28] border border-[#e5e5ea] dark:border-[#1e2230] rounded-2xl rounded-bl-md px-3 py-1.5 font-mono text-[11px] text-[#1d1d1f] dark:text-[#e8e8ed] shadow-sm">
                01 03 04 00 64 00 C8 FA 1D
              </div>
            </div>
            {/* Parsed system message */}
            <div className="flex flex-col items-start">
              <div className="text-[9px] text-[#30d158] mb-0.5">Parser ✓</div>
              <div className="max-w-[85%] bg-[#30d158]/8 border border-[#30d158]/20 rounded-2xl rounded-bl-md px-3 py-1.5 text-[10px] text-[#1d1d1f] dark:text-[#e8e8ed]">
                <div>Register[0] = <span className="text-[#0085ff] dark:text-[#00bfff] font-mono">100</span> (0x0064)</div>
                <div>Register[1] = <span className="text-[#0085ff] dark:text-[#00bfff] font-mono">200</span> (0x00C8)</div>
                <div className="text-[#30d158] font-mono mt-0.5">CRC-16: 0xFA1D ✓</div>
              </div>
            </div>
            {/* Another sent message */}
            <div className="flex flex-col items-end">
              <div className="text-[9px] text-[#aeaeb2] dark:text-[#5a5a6e] mb-0.5">TX · 14:32:05</div>
              <div className="max-w-[85%] bg-[#0085ff] text-white rounded-2xl rounded-br-md px-3 py-1.5 font-mono text-[11px] shadow-sm">
                01 03 00 01 00 01 D5 CA
              </div>
            </div>
          </div>
          {/* Chat input */}
          <div className="mt-3 flex items-center gap-2 bg-white dark:bg-[#1a1d28] rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] px-3 py-2">
            <div className="flex-1 text-[11px] font-mono text-[#aeaeb2] dark:text-[#5a5a6e]">
              01 03 00 02 00 02 ...
            </div>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0085ff] text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProtocolsMockup() {
  const items = [
    { icon: Wifi, label: 'TCP', active: true, color: 'text-[#0085ff] dark:text-[#00bfff]' },
    { icon: Activity, label: 'UDP', active: false, color: 'text-[#6e6e73] dark:text-[#8e8e9a]' },
    { icon: Server, label: 'MQTT', active: false, color: 'text-[#6e6e73] dark:text-[#8e8e9a]' },
    { icon: Globe, label: 'WebSocket', active: false, color: 'text-[#6e6e73] dark:text-[#8e8e9a]' },
  ]
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex gap-2 mb-4">
          {items.map((item, i) => (
            <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all
              ${item.active
                ? 'border-[#0085ff]/30 dark:border-[#00bfff]/30 bg-[#0085ff]/8 dark:bg-[#00bfff]/8'
                : 'border-[#e5e5ea] dark:border-[#1e2230]'}`}>
              <item.icon size={12} className={item.color} />
              {item.label}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] mb-1">Host</div>
            <div className="bg-[#f5f5f7] dark:bg-[#0d0f17] rounded-md px-3 py-1.5 text-xs font-mono text-[#1d1d1f] dark:text-[#e8e8ed]">192.168.1.100</div>
          </div>
          <div>
            <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] mb-1">Port</div>
            <div className="bg-[#f5f5f7] dark:bg-[#0d0f17] rounded-md px-3 py-1.5 text-xs font-mono text-[#1d1d1f] dark:text-[#e8e8ed]">502</div>
          </div>
          <div className="col-span-2">
            <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] mb-1">Encoding</div>
            <div className="flex gap-1.5 flex-wrap">
              {['UTF-8', 'ASCII', 'GB2312', 'Shift-JIS', 'Big5', 'GBK'].map((enc) => (
                <span key={enc} className={`px-2 py-0.5 rounded-md text-[10px] font-medium border
                  ${enc === 'UTF-8'
                    ? 'border-[#0085ff]/30 dark:border-[#00bfff]/30 bg-[#0085ff]/8 dark:bg-[#00bfff]/8 text-[#0085ff] dark:text-[#00bfff]'
                    : 'border-[#e5e5ea] dark:border-[#1e2230] text-[#8e8e93] dark:text-[#6a6a7a]'}`}>{enc}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-green-600 dark:text-green-400 font-medium">Connect</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PipelineMockup() {
  const steps = [
    { label: 'PARSE', desc: 'Extract registers from hex', color: 'bg-blue-400/10 border-blue-400/40 text-blue-400' },
    { label: 'FILTER', desc: 'Voltage ≥ 220', color: 'bg-amber-400/10 border-amber-400/40 text-amber-400' },
    { label: 'COMPUTE', desc: '°C = raw / 10', color: 'bg-purple-400/10 border-purple-400/40 text-purple-400' },
    { label: 'MAPPING', desc: 'Status code → Label', color: 'bg-emerald-400/10 border-emerald-400/40 text-emerald-400' },
    { label: 'COMPOSE', desc: 'Build structured JSON', color: 'bg-cyan-400/10 border-cyan-400/40 text-cyan-400' },
  ]
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Workflow size={14} className="text-[#0085ff] dark:text-[#00bfff]" />
          <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">Message Parser: Modbus Response Handler</span>
        </div>
        <div className="flex gap-4">
          {/* Left: vertical step list */}
          <div className="flex flex-col gap-1.5 w-[160px] shrink-0">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[9px] font-bold ${step.color}`}>
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-3 bg-[#e5e5ea] dark:bg-[#1e2230]" />
                  )}
                </div>
                <div className={`flex-1 px-2 py-1 rounded-md border text-[10px] ${step.color}`}>
                  <span className="font-bold">{step.label}</span>
                  <span className="block opacity-70 text-[9px] leading-tight">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Right: JSON output */}
          <div className="flex-1 bg-[#f5f5f7] dark:bg-[#0d0f17] rounded-lg p-3 font-mono text-[10px] border-l-2 border-[#30d158]">
            <div className="text-[#30d158] mb-1.5">// Parser Output</div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed]">{'{'}</div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed] ml-3">"voltage": <span className="text-[#ff9f0a]">228.5</span>,</div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed] ml-3">"current": <span className="text-[#ff9f0a]">4.23</span>,</div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed] ml-3">"temperature": <span className="text-[#ff9f0a]">24.5</span>,</div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed] ml-3">"status": <span className="text-[#30d158]">"Normal"</span>,</div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed] ml-3">"timestamp": <span className="text-[#bf5af2]">"2026-06-18T14:32:01"</span></div>
            <div className="text-[#1d1d1f] dark:text-[#e8e8ed]">{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalyzerMockup() {
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Cpu size={14} className="text-[#0085ff] dark:text-[#00bfff]" />
          <span className="text-xs font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">MODBUS RTU Detected</span>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#0085ff]/10 dark:bg-[#00bfff]/10 text-[#0085ff] dark:text-[#00bfff] font-medium">Auto</span>
        </div>
        <div className="bg-[#f5f5f7] dark:bg-[#0d0f17] rounded-lg p-3 font-mono text-[10px] mb-3">
          <div className="text-[#aeaeb2] dark:text-[#5a5a6e] mb-1">Raw Hex</div>
          <div className="text-[#1d1d1f] dark:text-[#e8e8ed]">01 03 04 00 64 00 C8 FA 1D</div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px]">
          <div className="flex justify-between py-1 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <span className="text-[#8e8e93]">Slave Address</span>
            <span className="font-mono text-[#0085ff] dark:text-[#00bfff]">0x01 (1)</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <span className="text-[#8e8e93]">Function Code</span>
            <span className="font-mono text-[#30d158]">0x03 — Read Holding Registers</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <span className="text-[#8e8e93]">Byte Count</span>
            <span className="font-mono">0x04 (4 bytes)</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <span className="text-[#8e8e93]">Register[0]</span>
            <span className="font-mono text-[#ff9f0a]">0x0064 (100) — uint16</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <span className="text-[#8e8e93]">Register[1]</span>
            <span className="font-mono text-[#ff9f0a]">0x00C8 (200) — uint16</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <span className="text-[#8e8e93]">CRC-16</span>
            <span className="font-mono text-[#30d158]">0xFA1D ✓ Verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ToolsMockup() {
  const tools = [
    { icon: Activity, label: 'Ping', host: '192.168.1.1', result: '2.3 ms', active: true },
    { icon: Search, label: 'Port Scan', host: '192.168.1.0/24', result: '3 ports open', active: false },
    { icon: Globe, label: 'DNS Query', host: 'example.com', result: '93.184.216.34', active: false },
    { icon: Shield, label: 'SSL Cert', host: 'github.com', result: 'Valid until 2027', active: false },
  ]
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="text-[10px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider mb-3">Network Tools  ·  Drag to reorder</div>
        <div className="space-y-1.5">
          {tools.map((tool, i) => (
            <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg border transition-all
              ${tool.active
                ? 'border-[#0085ff]/20 dark:border-[#00bfff]/20 bg-[#0085ff]/5 dark:bg-[#00bfff]/5'
                : 'border-[#e5e5ea] dark:border-[#1e2230]'}`}>
              <tool.icon size={14} className={tool.active ? 'text-[#0085ff] dark:text-[#00bfff]' : 'text-[#8e8e93]'} />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">{tool.label}</div>
                <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] font-mono">{tool.host}</div>
              </div>
              <span className="text-[10px] font-mono text-[#30d158]">{tool.result}</span>
              <ChevronRight size={12} className="text-[#aeaeb2]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkspaceMockup() {
  const groups = [
    { name: 'Industrial IoT', icon: Cpu, color: '#0085ff', count: 3 },
    { name: 'Smart Home', icon: Monitor, color: '#30d158', count: 2 },
    { name: 'Testing', icon: Zap, color: '#ff9f0a', count: 4 },
  ]
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="text-[10px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wider mb-3">Connection Groups</div>
        <div className="space-y-2">
          {groups.map((g, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[#e5e5ea] dark:border-[#1e2230] hover:border-[#0085ff]/20 dark:hover:border-[#00bfff]/20 transition-colors">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${g.color}15` }}>
                <g.icon size={14} style={{ color: g.color }} />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">{g.name}</div>
                <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e]">{g.count} connections</div>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0085ff]/8 dark:bg-[#00bfff]/8 text-[#0085ff] dark:text-[#00bfff] font-medium">
                {g.count} sessions
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-1.5">
          {['Tab 1', 'Tab 2', 'Tab 3'].map((tab, i) => (
            <div key={i} className={`px-3 py-1 rounded-t-lg text-[10px] border border-b-0
              ${i === 0
                ? 'border-[#0085ff]/30 dark:border-[#00bfff]/30 bg-[#0085ff]/8 dark:bg-[#00bfff]/8 text-[#0085ff] dark:text-[#00bfff] font-medium'
                : 'border-transparent text-[#8e8e93]'}`}>{tab}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function UtilitiesMockup() {
  return (
    <div className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg border border-[#e5e5ea] dark:border-[#1e2230]">
            <div className="flex items-center gap-1.5 mb-2">
              <Hash size={12} className="text-[#0085ff] dark:text-[#00bfff]" />
              <span className="text-[11px] font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">Checksum</span>
            </div>
            <div className="space-y-1 text-[10px] font-mono">
              <div className="flex justify-between"><span className="text-[#8e8e93]">CRC-16</span><span className="text-[#30d158]">0xFA1D</span></div>
              <div className="flex justify-between"><span className="text-[#8e8e93]">LRC</span><span className="text-[#30d158]">0xE4</span></div>
              <div className="flex justify-between"><span className="text-[#8e8e93]">Checksum</span><span className="text-[#30d158]">0xA3</span></div>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-[#e5e5ea] dark:border-[#1e2230]">
            <div className="flex items-center gap-1.5 mb-2">
              <Shield size={12} className="text-[#bf5af2]" />
              <span className="text-[11px] font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">Crypto</span>
            </div>
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between"><span className="text-[#8e8e93]">Base64</span><span className="text-[#30d158]">Encode / Decode</span></div>
              <div className="flex justify-between"><span className="text-[#8e8e93]">AES-128</span><span className="text-[#30d158]">ECB / CBC</span></div>
              <div className="flex justify-between"><span className="text-[#8e8e93]">AES-256</span><span className="text-[#30d158]">PKCS7</span></div>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-[#e5e5ea] dark:border-[#1e2230]">
            <div className="flex items-center gap-1.5 mb-2">
              <Calculator size={12} className="text-[#ff9f0a]" />
              <span className="text-[11px] font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">Compression</span>
            </div>
            <div className="flex gap-1.5 text-[10px]">
              <span className="px-1.5 py-0.5 rounded border border-[#e5e5ea] dark:border-[#1e2230] text-[#1d1d1f] dark:text-[#e8e8ed]">GZIP</span>
              <span className="px-1.5 py-0.5 rounded border border-[#e5e5ea] dark:border-[#1e2230] text-[#1d1d1f] dark:text-[#e8e8ed]">Deflate</span>
              <span className="px-1.5 py-0.5 rounded border border-[#e5e5ea] dark:border-[#1e2230] text-[#1d1d1f] dark:text-[#e8e8ed]">Zlib</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-[#e5e5ea] dark:border-[#1e2230]">
            <div className="flex items-center gap-1.5 mb-2">
              <Braces size={12} className="text-[#30d158]" />
              <span className="text-[11px] font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">Conversion</span>
            </div>
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between"><span className="text-[#8e8e93]">Hex → Data</span><span className="text-[#0085ff] dark:text-[#00bfff]">4 bytes</span></div>
              <div className="flex justify-between"><span className="text-[#8e8e93]">Data → Hex</span><span className="text-[#0085ff] dark:text-[#00bfff]">Upper / Lower</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
