const routes = [
  'M0 64H54L94 104V248L134 288H180',
  'M0 180H28L66 218V410L112 456H166',
  'M0 532H48L86 570V734L122 770H178',
  'M0 846H38L74 810V674',
  'M240 120H188L150 158V306L110 346H66',
  'M240 400H216L178 438V622L138 662H94',
  'M240 778H190L152 816V946L112 986H62',
]

export default function CircuitBackdrop() {
  return (
    <div className="circuit-backdrop" aria-hidden="true">
      {['left', 'right'].map((side) => (
        <svg key={side} className={`circuit-side circuit-${side}`} viewBox="0 0 240 1050" preserveAspectRatio="none" fill="none">
          {routes.map((route, index) => (
            <g key={route} className={`circuit-route route-${index}`}>
              <path className="circuit-track" d={route} />
              {index % 3 === 0 && (
                <path className="circuit-packet" d={route} pathLength="100" style={{ '--circuit-delay': `${-index * 3 - (side === 'right' ? 8 : 0)}s` }} />
              )}
            </g>
          ))}
          <g className="circuit-terminals">
            <circle cx="180" cy="288" r="3" /><circle cx="166" cy="456" r="3" />
            <circle cx="178" cy="770" r="3" /><circle cx="74" cy="674" r="3" />
            <circle cx="66" cy="346" r="3" /><circle cx="94" cy="662" r="3" />
            <circle cx="62" cy="986" r="3" />
          </g>
        </svg>
      ))}
    </div>
  )
}
