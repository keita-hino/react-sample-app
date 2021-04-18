import React from "react"
import { useState } from "react"

type Props = {
  addTask: Function
}

const InputTask: React.VFC<Props> = (props) => {
  const [name, setName]  = useState('')

  return (
    <>
      <input 
        className="input-field" 
        placeholder="入力してください" 
        value={name}
        onChange={e => { setName(e.target.value) }}
      />
      <button 
        type="submit" 
        className="sumit-button" 
        onClick={() => { 
          props.addTask(name);
          setName('');
        }}
      >保存する
      </button>
    </>
  )
}

export default InputTask