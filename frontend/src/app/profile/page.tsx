'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import api from '@/app/services/api'

const Profile = () => {
  const { data: session } = useSession()
  const [editable, setEditable] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    dob: ''
  })

  useEffect(() => {
    const fetchProfile = async () => {
      if (session?.user?.email) {
        const res = await api.get(`/users/profile?email=${session.user.email}`)
        setFormData(res.data)
      }
    }
    fetchProfile()
  }, [session])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = async () => {
    await api.put(`/users/profile/${session?.user?.id}`, formData)
    setEditable(false)
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="space-y-4">
        {['name', 'email', 'phone', 'location', 'dob'].map((field) => (
          <input
            key={field}
            name={field}
            value={(formData as any)[field]}
            onChange={handleChange}
            disabled={!editable}
            placeholder={field}
            className="w-full px-4 py-2 border rounded"
          />
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        {!editable ? (
          <button
            onClick={() => setEditable(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default Profile
