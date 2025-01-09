import { type CourseGoal as CourseGoalProps } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: Array<CourseGoalProps>;
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
