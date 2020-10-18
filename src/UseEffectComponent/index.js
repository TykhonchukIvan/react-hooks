import React, { useState, useEffect } from 'react';
import './UseEffectComponent.less';

export default () => {
  const [type, setType] = useState(false)
  const [data, setData] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (type) {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(resposne => resposne.json())
        .then(json => setData(json))
    }
  }, [type])

  const mouseMoveHandler = event => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div className='posts-container'>
      <div className='posts-container__title'>Ресурс: {type}</div>
      <div className='posts-container__title'> Позиция: x-{position.x} y-{position.y}</div>
      <div className='posts-container__btn'>
        <div className='posts-container__btn-users' onClick={() => setType('users')}>Пользователи</div>
        <div className='posts-container__btn-todos' onClick={() => setType('todos')}>Todos</div>
        <div className='posts-container__btn-posts' onClick={() => setType('posts')}>Посты</div>
      </div>
      <div className='posts-container__display'>
        <pre>
          {data ? JSON.stringify(data, null, 2) : null}
        </pre>
      </div>
    </div>
  )
};