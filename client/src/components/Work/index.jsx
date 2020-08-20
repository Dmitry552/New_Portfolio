import React from 'react'
import './Work.scss'
import work from './index.json'

export const Work = () => {
  return (
    <section className="works d">
      <div className="container">
        <h1>Мои работы</h1>
        <div className="work">
          {work.map((work) => {
            return (
              <div className="work-img">
                <a href={work.url} target="_blank" key={work.id} rel="noopener noreferrer">
                  <img src={require(`${work.img}`)} alt="Сдесь должен был быть скрин"/>
                  <p>{work.title}</p>
                </a>
              </div>
              
            )
          })}
        </div>
      </div>
    </section>
  )
}