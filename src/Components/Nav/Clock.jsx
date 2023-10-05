import { useEffect, useState } from "react"
import { getMinutes } from '../../modules/functions'

const Clock = (props) => {
  const [date, setDate] = useState(new Date())
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const currentTime = (getMinutes(time))
  console.log(currentTime)

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 60000)
    if ((currentTime > 420) && (currentTime < 1020)) {
      props.setDayTimeHandler(true)
    } else {
      props.setDayTimeHandler(false)
    }
  },[props.setDayTimeHandler, currentTime])
  
  return (
    <p className="display-items">
      {time}
    </p>
  )
}

export default Clock