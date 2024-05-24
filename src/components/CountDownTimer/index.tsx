import { FC, ReactNode } from "react";

type CountDownTimerProps = {
  minutes: number;
  seconds: number;
};

const CountDownTimer: FC<CountDownTimerProps> = ({
  minutes,
  seconds
}): ReactNode => {
  return (
    <span>
      0{minutes}:{seconds < 10 && <>0</>}
      {seconds}
    </span>
  );
};

export default CountDownTimer;
