import { getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'

function Profile() {
  const [user, setUser] = useState(null)
  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
