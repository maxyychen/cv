
export const CVData = {
  personalData: {
    name: 'Max Chen',
    title: 'Architector\nDeveloper\nData Scientist',
    image: 'https://maxyychen.github.io/cv/max.png',
    contacts: [
      { type: 'email', value: 'maxyychen@gmail.com' },      
      { type: 'location', value: 'Taipei' },            
      { type: 'github', value: 'github.com/maxyychen' }
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: `**I have a passion for staying on the cutting edge of technology, leveraging new advancements to solve problems. I particularly enjoy software architecture design, development, and data analysis—these are my areas of expertise and enthusiasm.`,
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Physics (MA)',
          authority: 'National Central University',
          authorityWebSite: 'https://www.ncu.edu.tw',
          rightSide: '1998 - 2000'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: 'from developing software to managing IT teams',
      icon: 'archive',
      items: [
        {
          title: 'Chief (Department of Computing and Information)',
          company: 'Sun Yat-Sen Cancer Center',
          description: 'I\'m working as a head of the IT teams in a cancer hospital.',
          companyWebSite: 'https://www.kfsyscc.org',
          companyMeta: '',
          datesBetween: '2017.7 - Present',
          descriptionTags: ['Micro Services', 'Kubernetes', 'AI', 'Machine Learning']
        },
        {
          title: 'IT Specialist',
          company: 'Sun Yat-Sen Cancer Center',
          description: 'Assist in information transformation, transitioning from traditional applications to web applications.',          
          datesBetween: '2015.5 - 2017.6',
          descriptionTags: ['React', 'Python', 'R']
        },
        {
          title: 'Technology Head',
          company: 'Risksoft',
          description: 'I lead a team and responsible for the development of the company\'s core products.',
          companyWebSite: 'https://www.risksoft.com',          
          datesBetween: '2013.7 - 2015.4',
          descriptionTags: ['Quantitative', 'Algorithm', 'Data Warehouse', 'Machine Learning']
        },
        {
          title: 'Strategist',
          company: 'ICE Technology',
          description: 'I was responsible for the development of the company\'s core products.',
          companyWebSite: 'http://www.icetech.com.tw/',          
          datesBetween: '2009.8 - 2013.2'
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'Chinese',
          authorityMeta: 'Professional'
        },
        {
          authority: 'English',
          authorityMeta: 'Professional'
        },
        {
          authority: 'Spanish',
          authorityMeta: 'Beginner'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Skills Proficiency',
      icon: 'rocket',
      items: ['React', 'Python', 'CSS', 'SQL', 'SomeTech', 'CoolTech']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Hiking', 'Cycling', 'Trraveling']
    }
  ]
}
