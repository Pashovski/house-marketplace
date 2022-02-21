import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const [message, setMessage] = useState('')
  const [landlord, setLandlord] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {}
  }, [params.landlord])
  return <div>Contact</div>
}

export default Contact
