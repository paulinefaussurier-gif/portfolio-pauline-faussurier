export function Workflow({ steps, label }: { steps: readonly string[]; label: string }) {
  return (
    <div className="workflow" aria-label={label}>
      {steps.map((step, index) => (
        <div className="workflow-step" key={step}>
          <span>{step}</span>
          {index < steps.length - 1 && <i aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
