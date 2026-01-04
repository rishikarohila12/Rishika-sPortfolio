import Groq from "groq-sdk";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    // 🔹 Validation
    if (!message) {
      return res.json({ reply: "Please enter a message." });
    }

    const lowerMsg = message.toLowerCase().trim();

    // 🔹 Greeting handling
    const greetings = ["hi", "hii", "hello", "hey", "hey there"];
    if (greetings.includes(lowerMsg)) {
      return res.json({
        reply: `Hi 👋  
I’m Rishika Rohila’s AI portfolio assistant.

What would you like to know?
• About Rishika  
• Skills  
• Projects  
• Education  
• Experience  
• Contact details`
      });
    }

    // 🔹 EXPERIENCE
    if (lowerMsg.includes("experience") || lowerMsg.includes("internship")) {
      return res.json({
        reply: `Rishika has worked as a Web Development Intern at MahakalInfra Esolutions Private Limited (July 2024 – December 2024).

She assisted in maintaining web-based applications for a Toll Management System and worked on frontend tasks such as updating UI components and fixing bugs to improve usability.`
      });
    }

    // 🔹 PROJECTS
    if (lowerMsg.includes("project")) {
      return res.json({
        reply: `Here are some projects developed by Rishika:

1. Talkiee – Real-Time Chat Application (MERN Stack)
- One-to-one real-time chat using Socket.IO
- JWT authentication and MongoDB
- React.js + Tailwind CSS UI, deployed on Vercel

2. ImageCrafter – AI Image Generation Platform (MERN Stack)
- Text-to-image generation using ClipDrop API
- Credit-based system with Razorpay integration
- Secure authentication and responsive UI

3. Vibgyor – E-Commerce Clothing Website
- Built using PHP, MySQL, HTML, CSS, JavaScript
- Features include authentication, product listing, cart, and filtering`
      });
    }
    // 🔹 LINKEDIN (direct intent)
if (
  lowerMsg.includes("linkedin") ||
  lowerMsg.includes("linked in")
) {
  return res.json({
    reply: `You can find Rishika Rohila on LinkedIn here:
🔗 https://www.linkedin.com/in/rishika-rohila-a83527260`
  });
}
// 🔹 GITHUB
if (lowerMsg.includes("github")) {
  return res.json({
    reply: `Rishika Rohila's GitHub profile:
💻 https://github.com/rishikarohila12`
  });
}

// 🔹 LEETCODE
if (lowerMsg.includes("leetcode")) {
  return res.json({
    reply: `Rishika Rohila's LeetCode profile:
🧠 https://leetcode.com/u/rishroh`
  });
}


    // 🔹 CONTACT
    if (lowerMsg.includes("contact")) {
      return res.json({
        reply: `You can contact Rishika here:

📧 Email: ruhelarishika@gmail.com   
🔗 LinkedIn: https://linkedin.com/in/rishika-rohila-a83527260  
💻 GitHub: https://github.com/rishikarohila12  
🧠 LeetCode: https://leetcode.com/u/rishroh`
      });
      
    }

    // 🔹 AI call ONLY when needed
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
  role: "system",
  content: `
You are Rishika Rohila's personal portfolio assistant.

STRICT RULES (VERY IMPORTANT):
- DO NOT invent, assume, or hallucinate any experience, projects, internships, or companies.
- If experience or projects are NOT provided, clearly say:
  "This information is not available yet."

- NEVER create fake project names or descriptions.
- NEVER assume internships, freelancing, or job roles.

CONTACT DETAILS RULE:
- When user asks for contact details, ONLY return the fixed links provided below.
- Do NOT modify, rephrase, or add extra links.

FIXED CONTACT LINKS:
- LinkedIn: https://www.linkedin.com/in/rishika-rohila
- GitHub: https://github.com/ruhelarishika
- LeetCode: https://leetcode.com/ruhelarishika

ALLOWED:
- Education summary
- Skills summary (ONLY from list)
- Professional background using education + skills (NO experience invention)


PERSONALITY & OPINION RULE (IMPORTANT):
- For questions about personality, nature, or character
  (e.g. "Is Rishika a good person/girl?"),
  respond in a polite, positive, and professional way.
- Use general traits based on learning attitude, discipline, and professionalism.
- Do NOT claim facts that cannot be proven.
- Do NOT exaggerate.

Example traits you MAY use:
- dedicated
- disciplined
- hardworking
- positive learner
- respectful and professional

EDUCATION:
- Schooling: Chhauni Children's Academy
  - Class 10: 86.8%
  - Class 12: 88.4%
- BCA: Shriram Institute of Management and Technology, Kashipur
  - Percentage: 78.5%
  - Rank: 1st
- MCA: Graphic Era Hill University, Dehradun
  - Current CGPA: 8.83

SKILLS (ONLY THESE):
- Programming Languages: PHP, C, C++, Python, JavaScript, Java
- Frontend: HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js
- Backend: Node.js, Express.js, PHP
- Databases: MySQL, MongoDB
- Tools: Git, GitHub, VS Code, Postman, Vercel
- Core Subjects: DSA, OOP, DBMS, Computer Networks

ROLE:
- Web Developer
`
},
        { role: "user", content: message }
      ]
    });

    return res.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error("Groq Error:", error.message);
    res.status(500).json({ reply: "AI service unavailable" });
  }
};
