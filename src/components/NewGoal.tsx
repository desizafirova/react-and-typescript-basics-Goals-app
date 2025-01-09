import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  // HTMLFormElement built-in type in TypeScript (It is DOM base type)
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Here the exclamation mark means that this here will never be null. If it then turns out to be null at runtime the app will crash.
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    // cleaning the submited goals
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
