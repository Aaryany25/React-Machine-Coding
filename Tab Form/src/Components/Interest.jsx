import React from 'react'

function Interest({ data, setData }) {
  const { interest = [] } = data

  const handleChange = (e) => {
    const value = e.target.value
    const checked = e.target.checked

    setData(prev => ({
      ...prev,
      interest: checked
        ? [...prev.interest, value]
        : prev.interest.filter(item => item !== value),
    }))
  }

  return (
    <div className="border w-[80%] rounded-lg p-8 mt-3 space-y-3">

      <label className="flex gap-2">
        <input
          type="checkbox"
          value="Coding"
          checked={interest.includes("Coding")}
          onChange={handleChange}
        />
        Coding
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          value="Photography"
          checked={interest.includes("Photography")}
          onChange={handleChange}
        />
        Photography
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          value="Videography"
          checked={interest.includes("Videography")}
          onChange={handleChange}
        />
        Videography
      </label>

      <label className="flex gap-2">
        <input
          type="checkbox"
          value="Running"
          checked={interest.includes("Running")}
          onChange={handleChange}
        />
        Running
      </label>

    </div>
  )
}

export default Interest
