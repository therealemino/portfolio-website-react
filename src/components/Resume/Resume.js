import React from 'react'
import ResumeTile from "./ResumeTile";

export default function Resume(props) {
  const educationData = [
    {
      date: "October 2015 - Present",
      name: "B.Eng, Electronic Engineering",
      school: "University of Nigeria",
      link: "https://www.unn.edu.ng/"
    },
    {
      date: "May 2020",
      name: "Fundamentals of Digital Marketing",
      school: "Google Digital Skills for Africa",
      link: "https://drive.google.com/file/d/1EFqM8CvSEjOFkvZpyxkGpA_SjLrKyzTg/view?usp=sharing"
    },
    {
      date: "April 2020",
      name: "How to Build Digital Products",
      school: "Product School",
      link: "https://drive.google.com/file/d/1LQYkR_Gqxe0XdBHhtaANDj2SaoRDrjis/view?usp=sharing"
    },
    {
      date: "August 2020",
      name: "HTML,CSS & Javascript for Web Developers",
      school: "John Hopkins University / Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/HLRN2UX6WSZA"
    },
    {
      date: "October 2020",
      name: "Python for Everybody Specialization",
      school: "University of Michigan, Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2RT38WHU7595"
    },
    {
      date: "November 2020",
      name: "AI for Everyone",
      school: "DeepLearning.ai",
      link: "https://www.coursera.org/account/accomplishments/certificate/RLRPXLUESB5B"
    },
    {
      date: "October 2020",
      name: "Creative Problem Solving",
      school: "University of Minnesota / Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/J7CHXUA9HMYU"
    }
  ]

  const experienceData = [
    {
      date: "August 2019 - Present",
      name: "Brand Ambassador",
      body: "Conduct day-to-day coordination, planning, and implementation of all activities involved in speaking about the company to the public as well as working closely with webapp clients of the company",
      organization: "Nexbuy District",
      link: "https://www.nexbuydistrict.com/"
    },
    {
      date: "January 2021 - Present",
      name: "Head of NEXSCROW",
      body: "Regulate payment of the funds required for parties involved in a given transaction by holding and ensuring security of funds and all necessary obligations are met.",
      organization: "NEXSCROW [A subsidiary of Nexbuy District]",
      link: "https://nexscrow.herokuapp.com/"
    },
    {
      date: "November 2020 - Present",
      name: "Volunteer",
      body: "Front-end web developer and 'in-person' educator",
      organization: "Coriftech Solutions Ltd",
      link: "https://coriftech.com/"
    },
    {
      date: "July 2019 - December 2019",
      name: "Student Intern",
      body: "Worked with the Drawing Engineer/Draftsman in editing drawing structures for the then-ongoing project: 'Refurbishment of a Single Point Mooring Buoy'",
      organization: "West African Oilfield Services Ltd",
      link: "https://coriftech.com/"
    }
  ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={props.resumeRefProp}>
          <div className="text-center font-semibold font-nunito text-4xl">Resume</div>
          <div className="md:grid md:grid-cols-12 gap-4">
            <div className="col-start-1 col-end-6">
              <ResumeTile name="Education / Certifications" educationData={ educationData } experienceData={ experienceData } />
            </div>
            <div className="col-start-7 col-end-12">
              <ResumeTile name="Work Experience" educationData = { educationData } experienceData={ experienceData } />
            </div>
          </div>
          <div className="text-center md:text-left px-6 "><a href="https://drive.google.com/file/d/1w_uF114aim_MgjwF2OYApCKb5G_QJCDb/view?usp=sharing" target="_blank" rel="noreferrer" className="text-medium-blue dark:text-cream hover:text-dark-blue dark:hover:text-gray-300 font-semibold">Click here to view my full resume (PDF)</a></div>
        </div>
    )
}
