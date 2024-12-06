import { useEffect, useState } from 'react'
import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, content) => {
  return content
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  )
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    if (!notification) return

    if (timeoutId) clearTimeout(timeoutId)

    const newTimeoutId = setTimeout(() => {
      notificationDispatch('')
    }, 5000)
    setTimeoutId(newTimeoutId)
  }, [notification])

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

export default NotificationContext
