import React from 'react'

function Setting({ data, setData }) {
  const { theme } = data

  const handleSetData = (e) => {
    setData(prev => ({
      ...prev,
      theme: e.target.value,
    }))
  }

  return (
    <div className="border w-[80%] rounded-lg p-8 mt-3 space-y-3">
      
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleSetData}
        />
        Dark
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={handleSetData}
        />
        Light
      </label>

    </div>
  )
}

export default Setting
