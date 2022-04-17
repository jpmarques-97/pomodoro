import React, {useState, useEffect} from 'react'


export default function Pomodoro() {

  const [focus_time, pause_time] = [24,4]
  const [minutes, setMinutes] = useState(focus_time);
  const [seconds, setSeconds] = useState(59);
  const [displayMessage, setDisplayMessage] = useState(false)
  const audioEl = document.getElementsByClassName("audio-element")[0]

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if(seconds === 0){
        if(minutes !== 0){
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? focus_time : pause_time;
          let seconds = 59;

          setMinutes(minutes);
          setSeconds(seconds);
          setDisplayMessage(!displayMessage);
          audioEl.play()
        }
      } else{
        setSeconds(seconds - 1)
      }
    },1000)
  }, [seconds])

  const time_minutes = minutes > 9 ? minutes : `0${minutes}`;
  const time_seconds = seconds > 9 ? seconds : `0${seconds}`;

  return (
    <div className="pomodoro">
      <div className='message'>
        {displayMessage && <div>Vamos descançar, próximo foco em :</div>}
      </div>
      <div className='timer'>{time_minutes}:{time_seconds}</div>
    </div>
  )
}
