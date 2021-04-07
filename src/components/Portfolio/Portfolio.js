import React from 'react'
import PortfolioTile from './PortfolioTile'

export default function Portfolio(props) {
  const portfolioData = [
    {
      name: "Gray2Green Movement",
      link: "https://therealemino.github.io/gray2green/index.html",
      logo: "https://github.com/therealemino/gray2green/blob/main/images/logo.png?raw=true",
      desc: "Mirrored website of Gray2green.org with Bootstrap 4"
    },
    {
      name: "Simon Game",
      link: "https://therealemino.github.io/practice-repo/simon%20game/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Simon_Electronic_Game.jpg",
      desc: "Online version of the Simon Game built with Vanilla Javascript"
    },
    {
      name: "ToDo List",
      link: "https://therealemino.github.io/vue-todo-app/index.html",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
      desc: "Single page todo list application built with Vue.js and  Tailwind.css"
    },
    {
      name: "Zettech Integrated Services",
      link: "https://therealemino.github.io/zettech/index.html",
      logo: "https://github.com/therealemino/zettech/blob/master/images/logo-sm.jpg?raw=true",
      desc: "Simple static website for a Digital agency. Built with HTML5,CSS3 and Bootstrap 4",
    },
    {
      name: "Newsletter Signup",
      link: "https://secure-coast-09059.herokuapp.com/",
      logo: "https://secure-coast-09059.herokuapp.com/images/newsletter-icon.png",
      desc: "Simple newsletter sign-up page built with Bootstrap, Node.js and Mailchimp api"
    }
  ]

  const portfolioList = portfolioData.map(item =>
    <PortfolioTile portfolioItem={item} key={item.name} />
  )

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12" ref={props.portfolioRefProp}>
          <div className="text-center font-semibold font-nunito text-4xl pt-12">Portfolio</div>
          <div className="text-center font-semibold font-nunito text-2xl pt-6">Some of my projects</div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {portfolioList}
            </div>
        </div>
    )
}
