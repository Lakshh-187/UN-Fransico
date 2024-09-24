"use client";
import { useState } from 'react';

const questionsAndAnswers = [
    {
      question: "What's Happening in the Job Market?",
      answer: `
        💡 Why are Engineering, Management, and Other Job Markets So Disruptive?
        - AI Boom & Layoffs: Many jobs are affected by the rise of AI and layoffs due to geopolitics.
        - Too Many Candidates, Too Few Jobs: There are more candidates than opportunities.
        - Skills Gap: Many students focus only on marks and basic projects from the internet (like from Google or GitHub) instead of learning the right skills.
        
        🌟 Fact: Did you know? Only 1 in 10 students have the skills companies want today!
      `,
    },
    {
      question: "What Skills Matter Now?",
      answer: `
        💻 Time-Management and Efficiency Are Key!
        - AI & Automation: Companies want people who can use AI and tools to work faster.
        - Smart Coding: If you're a front-end developer, for example, you should know how to use AI to write optimized code. What used to take 10 days to write can now be done in 1 day with AI!
  
        🔑 Myth Busted: "AI will replace all jobs!"
        Reality: AI helps, but it won't replace skilled people who know how to use it!
      `,
    },
    {
      question: "What Matters Most for Jobs?",
      answer: `
        📁 Projects, Certificates vs. Internships & Competitions
        - Experience is King: Today, companies prefer candidates with practical experience over just certificates. Doing at least 4-5 internships is better than just showing projects from the internet.
        - Recognized Projects: Compete in Hackathons or Tekathons to showcase real skills. This makes your portfolio stronger and more genuine.
  
        🌟 Fact: Students who do internships are 2x more likely to get a job offer!
      `,
    },
    {
      question: "What are 3 Mistakes Students Often Make in Placements?",
      answer: `
        1. "I’ll do internships later" – Wrong!
          - Many top students start internships as early as 9th grade.
        
        2. "Getting an internship as a fresher is tough" – Not True!
          - Easy Ways to Get an Internship:
            - Use modern methods like CAF (Common Application Form) or Super Set Form.
            - Join programs like the Scholar Program.
            - Apply through referrals.
        
        3. "Paying for internships is fine" – No, it's not!
          - Paid Internships are actually just training programs and not real internships.
      `,
    },
    {
      question: "Internship and Job are the Same?",
      answer: `
        ❌ Myth: Internships and jobs serve different purposes.
        
        🔍 Reality Check:
        - A job is long-term and paid, while an internship is typically short-term and focuses on learning.
        
        Solution:
        1. 📝 Learning Opportunity: Internships are designed to gain experience, not just earn money.
        2. 📚 Training Ground: They offer a chance to develop skills and learn the ropes in a real-world setting.
        3. 🚀 Career Boost: An internship gives you exposure to work culture and helps build your network.
      `,
    },
    {
      question: "Do You Need Skills to Get an Internship?",
      answer: `
        ❌ Myth: No Skills, No Internship
        
        🔍 Reality Check:
        You don’t need a lot of skills to get an internship—it's a learning experience!
  
        Solution:
        🔑 Enthusiasm is Key:
        You don’t have to know everything! Show your excitement to learn and your eagerness to grow.
        
        🎯 Start with the Basics:
        Employers don’t expect you to be an expert. Focus on basic skills and being willing to learn more.
  
        🚀 Step-by-Step Growth:
        Start with internships that fit your current level, and as you gain confidence, your skills will grow naturally.
      `,
    },
    {
      question: "Do You Need to Be a Certain Age to Do an Internship?",
      answer: `
        ❌ Myth: You Need to Be a Certain Age/Year to Do an Internship
  
        💡 Solution: You can do an internship at any stage of education, whether you're:
        - In 9th to 12th grade
        - In college, any semester
        
        Internships are open to anyone, anytime!
      `,
    },
    {
      question: "Do You Need Multiple Internships to Get a Good Job?",
      answer: `
        ❌ Myth: You need multiple internships to get a good job
        
        💡 Solution: While internships once held weight, the rise of AI and platforms like GitHub have changed the landscape.
        - Certificates and projects were once important.
        - Now, companies know students often submit fake projects from GitHub or get certificates from platforms like LinkedIn and Coursera without completing courses.
  
        🚀 Takeaway: Don't stress over internships. Focus on building real, practical skills!
      `,
    },
    {
      question: "Why Do Internships Matter?",
      answer: `
        🚀 1. The More You Intern, the More Projects You Gain
          - 🎯 Internships = Projects
            Every internship you do provides hands-on projects. These projects build your portfolio, enhancing your skills and impressing future employers.
  
          - 🛠 Real-world Experience
            Internships teach you more than just theory. With 6-7 internships, you’ll have solid, practical experience to show off in job interviews.
  
          - 🏆 Stand Out in Your Dream Job
            More internships mean more experience and more projects to discuss. Employers look for candidates who can demonstrate what they've learned in real-life situations.
  
        📈 Why Internships Matter
        - Builds your network in the industry 🌐
        - Improves your understanding of real-world challenges 📊
        - Prepares you for future roles 💼
      `,
    },
    {
      question: "Is Getting an Internship Tough?",
      answer: `
        ❌ Myth: Getting an Internship is Tough
        
        ✅ Solution: Focus on Consistency, Not Difficulty
        - 📅 Consistency is Key
          It’s not about how hard it is, but how consistent you are in your efforts. Regular applications and follow-ups will get you closer to your internship goal.
        
        - 🧭 Awareness and Approach
          Many students simply lack the right knowledge or approach. With modern techniques, like personal branding, networking, and resume optimization, securing an internship becomes much easier.
  
        💡 Modern Techniques to Grab an Internship
        - 🔍 Research & Networking: Use LinkedIn, industry-specific platforms, and university connections to discover new opportunities.
        - ✉️ Tailor Your Resume: Highlight relevant skills, projects, and past experiences that align with the internship you’re applying for.
        - 🗣 Attend Webinars and Workshops: Engage in industry events to increase your visibility. Many companies recruit directly from these events.
      `,
    },
    {
      question: "How Can You Manage Both an Internship and College Work?",
      answer: `
        ❌ Myth: "I Can’t Manage Both an Internship and College Work"
        
        🛑 Reality Check:
        An internship doesn’t have to take up all your time. Many internships, especially online ones, are flexible and designed to fit into your schedule.
        
        💡 Solution:
        - Online Internships: 💻 You can find internships that are entirely online, requiring only a few hours each week. This allows you to handle college work during the day and complete internship tasks in your free time.
        - Time Management: ⏰ Set aside specific blocks of time for internships, like weekends or after classes.
        - Project-based Work: 🗂 Many internships offer project-based tasks, allowing you to work at your own pace.
        - Independence: 💪 An internship builds your skills, making you more self-reliant and preparing you for future challenges.
      `,
    },
  ];
  

  export default function JobMarketQA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAnswer = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          Placement Guide: <span className="text-indigo-600">Your Key to a Bright Future!</span>
          </h1>
  
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className="mb-8">
              <button
                onClick={() => toggleAnswer(index)}
                className={`w-full text-left px-8 py-6 bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
                  openIndex === index ? "bg-indigo-50" : "bg-white"
                }`}
              >
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  {qa.question}
                  <span
                    className={`ml-auto transition-transform transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </h2>
              </button>
  
              {openIndex === index && (
                <div
                  className="mt-4 px-8 py-6 bg-white bg-opacity-80 border-l-4 border-indigo-500 rounded-xl shadow-inner"
                  style={{ animation: "fadeIn 0.5s ease" }}
                >
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {qa.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
  
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }
