/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Database, 
  Cloud, 
  Router, 
  Shield, 
  ShieldAlert, 
  Eye, 
  ExternalLink, 
  ArrowRight, 
  BadgeCheck, 
  Network, 
  ShieldCheck, 
  Brain, 
  Mail, 
  Terminal, 
  Code, 
  User,
  Menu,
  FileText
} from "lucide-react";
import { useState } from "react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="max-w-container-max mx-auto px-6 text-center mb-16">
    {subtitle && <p className="font-headline text-xs tracking-[0.2em] text-tertiary mb-2 uppercase">{subtitle}</p>}
    <h2 className="font-headline text-3xl md:text-4xl uppercase mb-4 text-white tracking-wider">{title}</h2>
    <div className="h-1 w-24 bg-tertiary mx-auto rounded-full shadow-[0_0_10px_rgba(71,214,255,0.5)]"></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-primary/10 shadow-[0_4px_30px_rgba(3,13,37,0.5)]">
      <div className="flex justify-between items-center h-16 px-6 max-w-[1200px] mx-auto">
        <div className="font-headline text-2xl font-bold tracking-tighter text-tertiary">MERCY._CYBER</div>
        <div className="hidden md:flex gap-8 items-center font-sans text-sm font-semibold tracking-wider">
          {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-on-surface-variant hover:text-tertiary transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-tertiary/10 border border-tertiary text-tertiary px-6 py-2 rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
            Resume
          </button>
        </div>
        <button className="md:hidden text-tertiary" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-primary/10 p-4 flex flex-col gap-4 font-sans text-sm font-semibold">
          {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-on-surface-variant hover:text-tertiary"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-tertiary border border-tertiary text-on-tertiary px-6 py-2 rounded-lg">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden terminal-grid">
    <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary/10 border border-tertiary/20 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span className="font-headline text-[10px] sm:text-xs text-tertiary uppercase tracking-widest">System Status: Secure</span>
        </div>
        <h1 className="font-headline text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
          Cybersecurity & <br/>
          <span className="text-tertiary">Infrastructure Specialist</span>
        </h1>
        <p className="font-sans text-lg text-on-surface-variant mb-10 max-w-2xl">
          Architecting resilient digital fortresses. Specialist in cloud security orchestration, 
          network defense, and proactive vulnerability mitigation for modern enterprise ecosystems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bg-tertiary text-on-tertiary px-8 py-4 rounded-lg font-headline text-xs tracking-widest hover:brightness-110 transition-all uppercase font-bold">
            View Projects
          </a>
          <button className="border border-outline text-on-surface px-8 py-4 rounded-lg font-headline text-xs tracking-widest hover:border-tertiary hover:text-tertiary transition-all uppercase font-bold">
            Download Resume
          </button>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 0.3, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
    >
      <div className="glass-panel p-6 w-96 font-headline text-sm border-l-4 border-tertiary rounded-l-xl">
        <div className="flex gap-1 mb-4">
          <div className="w-2 h-2 rounded-full bg-error"></div>
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-tertiary"></div>
        </div>
        <p className="text-tertiary mb-2 font-bold">&gt; INITIALIZING_SECURE_PROTOCOL...</p>
        <p className="mb-1 text-on-surface-variant">SCANNING PORTS [80, 443, 22]... OK</p>
        <p className="mb-1 text-on-surface-variant">ENCRYPTING ASSETS: AES-256... OK</p>
        <p className="mb-1 text-on-surface-variant">VULNERABILITY LEVEL: 0.00%</p>
        <p className="text-tertiary font-bold">&gt; SYSTEM_READY</p>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section className="py-24 bg-surface-container-lowest" id="about">
    <div className="max-w-[800px] mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-headline text-3xl mb-8 uppercase tracking-wider text-white">Mission_Manifesto</h2>
        <div className="space-y-6 font-sans text-lg text-on-surface-variant">
          <p className="leading-relaxed text-center">
            I am an aspirant Security Engineer and Infrastructure Specialist dedicated to mastering the art of system hardening. Currently a student athlete in the world of competitive cybersecurity, I bridge the gap between complex network architectures and robust defensive protocols.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-6 text-left">
            <div className="glass-panel p-6 rounded-lg border border-white/5 shadow-md">
              <h4 className="font-headline text-[10px] tracking-widest text-tertiary mb-2 uppercase font-bold">Education</h4>
              <p className="font-sans text-base text-on-surface font-semibold">National Diploma</p>
              <p className="font-headline text-xs text-outline mt-1">Expected Graduation: 2026</p>
            </div>
            <div className="glass-panel p-6 rounded-lg border border-white/5 shadow-md">
              <h4 className="font-headline text-[10px] tracking-widest text-tertiary mb-2 uppercase font-bold">Objective</h4>
              <p className="font-sans text-base text-on-surface font-semibold">To engineer highly available, zero-trust cloud infrastructures.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Server Admin",
      icon: <Database className="w-12 h-12 text-tertiary" />,
      skills: ["Linux (Ubuntu, RHEL)", "Windows Server 2022", "Nginx & Reverse Proxies", "Active Directory Admin"]
    },
    {
      title: "Cloud Admin",
      icon: <Cloud className="w-12 h-12 text-tertiary" />,
      skills: ["AWS (IAM, EC2, VPC)", "Azure Sentinel", "Docker & Kubernetes", "Terraform (IaC)"]
    },
    {
      title: "Networking",
      icon: <Router className="w-12 h-12 text-tertiary" />,
      skills: ["Cisco IOS Configuration", "Firewalling (pfSense)", "Site-to-Site VPNs", "TCP/IP Forensics"]
    },
    {
      title: "Pen-Testing",
      icon: <Shield className="w-12 h-12 text-tertiary" />,
      skills: ["Kali Linux Ecosystem", "Metasploit Framework", "Wireshark Analysis", "Burp Suite Pro"]
    },
    {
      title: "App Security",
      icon: <ShieldAlert className="w-12 h-12 text-tertiary" />,
      skills: ["OWASP Top 10 Mitigation", "Secure Coding Practices", "API Security Audit", "DevSecOps Pipeline"]
    }
  ];

  return (
    <section className="py-24 terminal-grid" id="skills">
      <SectionHeader title="Tactical_Stack" />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300 border-t-2 border-t-tertiary rounded-xl"
            >
              <div className="mb-6">{cat.icon}</div>
              <h3 className="font-headline text-2xl mb-4 text-white">{cat.title}</h3>
              <ul className="space-y-2 text-on-surface-variant font-headline text-sm">
                {cat.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infra Deployment",
      desc: "Terraform-based multi-region AWS setup with hardened VPCs, Auto-scaling groups, and CloudWatch alerting.",
      tags: ["Terraform", "AWS", "Ansible"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhhl4BtSG4ZiPrjjTZl3m15tsBBX13NwSrFhaFK2UFtqrt-IGh6asfBKfpZFvrc1ABzqwZg33QiPzhwC7y68I9kzeKiLl18XWwFKjrazQYZBKH-s7uK2XFqm69ov2C7-qrty_C2uhjQW59_q52iyMRyizuSq7mh4ezfKcmhlMMvoZmL_rPgNJRQy8dqiIGXRTsOpalSXZfg_L-zK8Hc5ORGPZYyuJMg0MiwBjGL6zM_qETwhvj2P3hZAnOdi2lBIzHWEGQz4N-XA",
    },
    {
      title: "Secure Network Setup",
      desc: "Deployment of a segmented corporate network using pfSense, VLAN isolation, and WireGuard VPN tunnels.",
      tags: ["pfSense", "VPN", "Cisco"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARwCjFAUX_YIuSGvbnhn8tX49GinNSW7bwErUoFoZPGVZbukHqtH-oeSU9zyPDKYfPRWTRYPf2G-ccEzWc2ZRUXr56YE3ucDUvwKuasMZ6MtecUlnCHOz-BU9ndhKCm2zDD-kdQE64pXt4qPlf-VH_rsHlAySJ7JEDOgsf0nStsGJsOkNa9wkTkoLmt3aw_xqtH2XEGuuH9oaAWovlLQhbGYJVvpgNeNt8YfU1T70DDRst9dnzDfZZc64sjTcKQ84n2iHInjDOig",
    },
    {
      title: "Penetration Testing Lab",
      desc: "A virtualized sandbox environment featuring deliberately vulnerable machines for exploit testing and OSCP training.",
      tags: ["Kali Linux", "Metasploit", "VMware"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB8bW73EUk_Lbb0zcttATVbOaGOhdib4T-bhVuIof_uAnLhksuNlyHZLQHtHPVPDGUz82Av_xwNC4h4qwfFlR1gfrcelNE5xfZHS_vXNuswpO_1oOO5hy867bLvoL6HXaH_qfkfT8reoQKbOAEg_HbP1nbMFCceAXaO-C6SiDEYC3zCswUbSf9PPx97oaMRSFA2d7_yTvz9VAGRkjPH__KRjxRfh0NRnRF4ai5g17jw4RKXG1J2PyWK69v-7ngJu31_Wd1mM0VwQ",
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="projects">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-headline text-[10px] tracking-widest text-tertiary mb-2 uppercase font-bold">Portfolio</p>
            <h2 className="font-headline text-3xl md:text-4xl uppercase text-white tracking-wider">Project_Logs</h2>
          </div>
          <a href="#" className="text-on-surface-variant hover:text-tertiary font-headline text-[10px] tracking-widest flex items-center gap-2 transition-colors font-bold uppercase">
            VIEW_ALL_REPOS <ExternalLink size={14} />
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="glass-panel overflow-hidden group rounded-xl border border-white/5"
          >
            <div className="h-56 overflow-hidden relative">
              <img 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={proj.img}
                alt={proj.title}
              />
              <div className="absolute inset-0 bg-surface-dim/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-2xl mb-4 text-white">{proj.title}</h3>
              <p className="text-on-surface-variant font-sans text-base mb-6 line-clamp-2">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container text-tertiary font-headline text-[10px] border border-tertiary/20 uppercase rounded font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="flex items-center gap-2 text-tertiary font-headline text-[10px] tracking-widest hover:gap-4 transition-all font-bold uppercase">
                GITHUB_SOURCE <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { title: "AWS Cloud Practitioner", icon: <BadgeCheck /> },
    { title: "CCNA Networking", icon: <Network /> },
    { title: "CompTIA Security+", icon: <ShieldCheck /> },
    { title: "Certified Ethical Hacker", icon: <Brain /> }
  ];

  return (
    <section className="py-24 terminal-grid" id="certifications">
      <SectionHeader title="Verified_Credentials" />
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {certs.map((cert, idx) => (
          <motion.div 
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center group text-center"
          >
            <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-tertiary/10 rounded-full blur-xl group-hover:bg-tertiary/30 transition-all"></div>
              <div className="text-tertiary relative transition-transform group-hover:scale-110">
                {typeof cert.icon === 'string' ? null : <div className="[&>svg]:w-16 [&>svg]:h-16">{cert.icon}</div>}
              </div>
            </div>
            <p className="font-headline text-[10px] sm:text-xs tracking-widest text-on-surface uppercase font-bold">{cert.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => (
  <section className="py-24 bg-surface-container-highest">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-headline text-3xl md:text-4xl text-center uppercase mb-16 text-white tracking-widest">Operational_History</h2>
      <div className="relative border-l-2 border-outline/20 ml-4 md:mx-auto md:w-fit">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 ml-8 relative"
        >
          <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-tertiary shadow-[0_0_15px_#47d6ff]"></div>
          <p className="font-headline text-xs text-tertiary mb-1 uppercase tracking-widest font-bold">2025</p>
          <h3 className="font-headline text-2xl text-white mb-2">Network Adminstrator Internship</h3>
          <p className="font-headline text-[10px] tracking-widest text-on-surface-variant mb-4 uppercase font-bold">CyberDyne Systems</p>
          <div className="glass-panel p-6 max-w-xl rounded-lg">
            <p className="text-on-surface-variant font-sans text-base">Assisting in the automation of security audits using Python and managing identity access (IAM) for cross-functional dev teams.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 ml-8 relative"
        >
          
          
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24" id="contact">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl uppercase mb-6 text-white tracking-wider">Establish_Connection</h2>
          <p className="font-sans text-lg text-on-surface-variant mb-10">
            Looking for a junior security engineer to join your blue team? Or perhaps you need help hardening your infrastructure? Send an encrypted transmission.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <Mail className="w-6 h-6 text-tertiary group-hover:scale-110 transition-transform" />
              <span className="font-headline text-sm tracking-wider">Adetayoesther@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <Terminal className="w-6 h-6 text-tertiary group-hover:scale-110 transition-transform" />
              <span className="font-headline text-sm tracking-wider"></span>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="w-12 h-12 glass-panel flex items-center justify-center rounded-lg hover:bg-tertiary/20 transition-all text-tertiary">
                <Code size={20} />
              </button>
              <button className="w-12 h-12 glass-panel flex items-center justify-center rounded-lg hover:bg-tertiary/20 transition-all text-tertiary">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-10 rounded-xl border border-white/5"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-headline text-[10px] tracking-[0.2em] text-tertiary mb-2 block uppercase font-bold">Sender_Identity</label>
              <input 
                className="w-full bg-surface-container/50 border border-outline/20 rounded-lg focus:border-tertiary focus:ring-0 text-white p-4 font-headline text-sm transition-colors outline-none" 
                placeholder="FULL NAME" 
                type="text"
              />
            </div>
            <div>
              <label className="font-headline text-[10px] tracking-[0.2em] text-tertiary mb-2 block uppercase font-bold">Response_Endpoint</label>
              <input 
                className="w-full bg-surface-container/50 border border-outline/20 rounded-lg focus:border-tertiary focus:ring-0 text-white p-4 font-headline text-sm transition-colors outline-none" 
                placeholder="EMAIL ADDRESS" 
                type="email"
              />
            </div>
            <div>
              <label className="font-headline text-[10px] tracking-[0.2em] text-tertiary mb-2 block uppercase font-bold">Encrypted_Payload</label>
              <textarea 
                className="w-full bg-surface-container/50 border border-outline/20 rounded-lg focus:border-tertiary focus:ring-0 text-white p-4 font-headline text-sm transition-colors outline-none resize-none" 
                placeholder="YOUR MESSAGE..." 
                rows={4}
              ></textarea>
            </div>
            <button className="w-full bg-tertiary text-on-tertiary font-headline text-[10px] tracking-[0.2rem] py-4 rounded-lg font-bold uppercase hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(71,214,255,0.2)]">
              Send Transmission
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant/10">
    <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1200px] mx-auto gap-8">
      <div className="font-headline text-2xl font-bold tracking-tighter text-tertiary">MERCY._CYBER</div>
      <div className="font-headline text-[10px] text-on-surface-variant text-center opacity-60 tracking-wider">
        © 2026  
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-headline text-[10px] tracking-widest font-bold">
        {["Privacy", "Security", "Logs", "Terms"].map(link => (
          <a key={link} href="#" className="text-on-surface-variant hover:text-tertiary transition-colors uppercase underline decoration-tertiary/20 underline-offset-4">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-tertiary/30 selection:text-white">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

