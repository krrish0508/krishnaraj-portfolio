import { motion } from "framer-motion";
import { Mail, Download, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans">
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl p-10 space-y-10 border border-gray-700"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-400">Krishnaraj Murugan</h1>
          <p className="text-lg text-gray-300">Cybersecurity Professional | Penetration Tester | Ethical Hacker</p>
          <div className="flex justify-center flex-wrap gap-3 text-sm">
            <a href="mailto:krishnarajm08@gmail.com" className="text-blue-400 hover:underline flex items-center gap-1"><Mail size={16}/> krishnarajm08@gmail.com</a>
            <span className="text-gray-500">|</span>
            <span>437-858-4508</span>
            <span className="text-gray-500">|</span>
            <a href="https://linkedin.com/in/krishnaraj-murugan05" className="text-blue-400 hover:underline flex items-center gap-1" target="_blank"><Linkedin size={16}/> LinkedIn</a>
          </div>
          <a href="/resume.pdf" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition mt-4"><Download className="mr-2" size={16}/> Download Resume</a>
        </div>

        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-6">
          <h2 className="text-3xl font-semibold text-blue-400 text-center">Blog</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {["HTB Writeup: Exploiting Bash for Privilege Escalation", "How I Found and Reported XSS on a Medical Web App", "The AI Arms Race: How Machines are Learning to Fight Alongside Us"].map((title, i) => (
              <div key={i} className="bg-gray-700 hover:bg-gray-600 transition rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-300 mb-2">{["May 2025", "Apr 2025", "Mar 2025"][i]}</p>
                <p className="text-sm text-gray-400">{["Discovered a subdomain using a public CVE, logged in as 'enzo' via SSH, then escalated privileges by exploiting a vulnerable /tmp/bash file running on port 8000...", "A short writeup on responsibly disclosing a stored XSS vulnerability on a hospital management platform and improving their overall security posture...", "AI has evolved from basic automation to becoming a predictive guardian in cybersecurity. This blog covers its role in multilayer threat detection, deception techniques, and the rise of adversarial AI..."][i]}</p>
                <a href="#" className="text-blue-400 text-sm mt-2 inline-block hover:underline">Read more</a>
              </div>
            ))}
          </div>
        </motion.section>

        <form className="bg-gray-700 p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-center text-blue-400">Contact Me</h2>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full p-3 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg">Send Message</button>
        </form>
      </motion.section>
    </main>
  );
}