import React from 'react'

export default function ResumeTile(props) {
  const educationData = props.educationData;
  const experienceData = props.experienceData;
  // console.log(educationData);
  // console.log(experienceData);
  const educationList = educationData.map((item) =>
    <div className="bg-white dark:bg-dark-brown rounded-lg p-4 my-4 shadow-2xl" key={item.name}>
      <div className="flex flex-row"><span className="fa fa-calendar-o pr-1"></span> {item.date}</div>
      <h4 className="text-xl text-light-green md:text-light-blue dark:text-cream py-2">{item.name}</h4>
      <div>{ item.body }</div>
      <a href={item.link} target="_blank" rel="noreferrer" className="py-2 text-sm"> <span className="fa fa-certificate pr-1"></span> { item.school } </a>
    </div>
  )

  const experienceList = experienceData.map((item) =>
    <div className="bg-white dark:bg-dark-brown rounded-lg p-4 my-4 shadow-2xl" key={item.name}>
      <div className="flex flex-row"><span className="fa fa-calendar-o pr-1"></span> {item.date}</div>
      <h4 className="text-xl text-light-green md:text-light-blue dark:text-cream py-2">{item.name}</h4>
      <div className="py-1">{ item.body }</div>
      <a href={item.link} target="_blank" rel="noreferrer" className="py-2 text-sm"> <span className={`${props.name==="Work Experience" ? "fa-briefcase" : "fa-certificate"} " fa pr-1"`}></span> { item.organization }</a>
    </div>
  )


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center text-2xl">{ props.name }</div>
          { props.name==="Work Experience" ? experienceList : educationList }
        </div>
    )
}
