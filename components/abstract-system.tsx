export function AbstractSystem() {
  return (
    <div className="system-visual" aria-hidden="true">
      <svg className="system-route" viewBox="0 0 620 520" fill="none">
        <path d="M34 392C120 392 117 273 203 273H318C381 273 384 178 447 178H586" />
        <path d="M110 96H254C300 96 301 142 347 142H506" />
        <path d="M586 178V326C586 360 558 388 524 388" />
        <circle cx="34" cy="392" r="5" />
        <circle cx="203" cy="273" r="5" />
        <circle cx="447" cy="178" r="5" />
        <circle cx="586" cy="178" r="5" />
        <circle cx="524" cy="388" r="5" />
      </svg>
      <div className="module module-a"><span>INPUT</span><b>Signals</b></div>
      <div className="module module-b"><span>LOGIC</span><b>Rules</b></div>
      <div className="module module-c"><span>OUTPUT</span><b>Actions</b></div>
      <div className="module module-d"><span>CONTROL</span><b>Human</b></div>
      <div className="visual-note">Système opérationnel / vue 01</div>
    </div>
  );
}
