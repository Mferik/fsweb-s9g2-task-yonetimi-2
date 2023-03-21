import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
const Task = ({ taskObj, onComplete }) => {
  const deadLine = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
    addSuffix: true,
  });

  const diffDays =
    differenceInDays(new Date(taskObj.deadline), new Date()) >= 0 &&
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3
      ? true
      : false;

  const biggerThan3Days =
    differenceInDays(new Date(taskObj.deadline), new Date())
  ;

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        <span className="bg-slate-800 text-white mr-2 rounded-xl ">Son Teslim{":"}</span>
        <span
          className={
            diffDays
              ? "bg-[#ffd9d4]"
              : biggerThan3Days > 3
              ? " bg-[#d4d7ff]"
              : "bg-green-500"
          }
        >
          {deadLine}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
