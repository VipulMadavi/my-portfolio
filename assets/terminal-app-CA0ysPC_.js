const p={sys_info:`
    <span class="highlight">USER:</span> Vipul Madavi [Pune, India]<br>
    <span class="highlight">HEADLINE:</span> AI, CyberSec & Cloud Tech || Enthusiastic Learner || CSE Student<br>
    <br>
    <span class="highlight">EDUCATION:</span> <br>
    B.E. Computer Science - Dr. D. Y. Patil Technical Campus (2023-2027)<br>
    [Current Grade: 9.2 CGPA]<br>
    <br>
    <span class="highlight">EXPERIENCE:</span><br>
    > Intern @ Edunet Foundation (Jan 2025 – Feb 2025)<br>
    &nbsp;&nbsp;- Cybersecurity Fundamentals, Cryptography, Network Security.<br>
    &nbsp;&nbsp;- Developed "AEStego" (AES-128 + Steganography).<br>
    <br>
    <span class="highlight">CERTIFICATIONS:</span><br>
    > IBM Cybersecurity Fundamentals (Feb 2025)<br>
    > Google Cybersecurity Specialization (Aug 2024) [ID: N2W4XDKAPKSV]<br>
    <br>
    <span class="highlight">ACHIEVEMENTS:</span> SIH 2025 Finalist<br>
    <br>
    <span class="highlight">SKILLS:</span><br>
    [Cyber/Net]: Network Security, Cloud Security, SIEM<br>
    [Tools]: Python, C++, SQL, Linux, Flutter, ML
  `,projects:`
    <div class="json-output">
      [
        {
          "name": "AEStego",
          "type": "Security Tool",
          "desc": "AES-128 Encryption + Image Steganography",
          "stack": ["Python", "Cryptography"]
        },
        {
          "name": "Cloud Monitor",
          "type": "Automation",
          "desc": "AWS S3 & IAM Posture Monitoring",
          "stack": ["AWS Boto3", "Lambdas"]
        },
        {
          "name": "SIH 2025 Finalist",
          "type": "Achievement",
          "desc": "National Level Hackathon Finalist",
          "stack": ["Innovation", "Problem Solving"]
        }
      ]
    </div>
  `,contact:`
    <span class="success">Initializing secure connection...</span><br>
    EMAIL: <a href="mailto:vipulmadavi1509@gmail.com">vipulmadavi1509@gmail.com</a><br>
    LINKEDIN: <a href="https://www.linkedin.com/in/vipul-madavi1509/" target="_blank">vipul-madavi1509</a><br>
    GITHUB: <a href="https://github.com/VipulMadavi" target="_blank">VipulMadavi</a>
  `};function g(a){a.innerHTML=`
    <div class="terminal-layout">
      <div class="terminal-header">
        <span class="term-title">cloud-shell ~ vipul -- -zsh</span>
        <div class="window-controls">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
      </div>
      <div class="terminal-window" id="term-window">
        <div class="output-log" id="output-log">
          <div class="line">
            <span class="system-msg">
              Amazon CloudShell (Amazon Linux 2023) [CloudShell-2.0.1]<br>
              <br>
              <span class="highlight">       __|  __|_  )</span><br>
              <span class="highlight">       _|  (     /   </span> Amazon Linux 2023 AMI<br>
              <span class="highlight">      ___|\\___|___|</span><br>
              <br>
              Type "help" for a list of available commands.<br>
              <br>
              <span class="cmd-echo">Available Commands:</span><br>
              &nbsp;&nbsp;<span class="cmd-name">sys_info</span>   - Display system/user information<br>
              &nbsp;&nbsp;<span class="cmd-name">projects</span>   - List active projects<br>
              &nbsp;&nbsp;<span class="cmd-name">contact</span>    - Show contact details<br>
              &nbsp;&nbsp;<span class="cmd-name">gui</span>        - Return to graphical interface<br>
            </span>
          </div>
        </div>
        <div class="input-line">
          <span class="prompt">➜  ~</span>
          <input type="text" id="term-input" autocomplete="off" autofocus />
        </div>
      </div>
    </div>
  `;const s=a.querySelector("#term-input"),t=a.querySelector("#output-log"),e=a.querySelector("#term-window");a.addEventListener("click",()=>s.focus()),s.addEventListener("keydown",n=>{if(n.key==="Enter"){const r=s.value.trim();s.value="",o(t,`➜  ~ ${r}`,"cmd-echo"),u(r,t),e.scrollTop=e.scrollHeight}}),s.focus()}function o(a,s,t=""){const e=document.createElement("div");e.className=`line ${t}`,e.innerHTML=s,a.appendChild(e)}function u(a,s){const e=a.split(" ")[0].toLowerCase();switch(e){case"help":o(s,`
        <span class="help-text">Available Commands:</span><br>
        <span class="cmd-name">sys_info</span>   - Display system/user information<br>
        <span class="cmd-name">projects</span>   - List active projects<br>
        <span class="cmd-name">contact</span>    - Show contact details<br>
        <span class="cmd-name">clear</span>      - Clear terminal screen<br>
        <span class="cmd-name">gui</span>        - Return to graphical interface<br>
        <span class="cmd-name">hack</span>       - Initiate security protocol<br>
        <span class="cmd-name">matrix</span>     - Enter the matrix<br>
      `);break;case"hack":h(s);break;case"matrix":b(s);break;case"sys_info":o(s,p.sys_info);break;case"projects":o(s,p.projects);break;case"contact":o(s,p.contact);break;case"clear":s.innerHTML="";break;case"gui":window.location.href="/";break;case"":break;default:o(s,`<span class="error">zsh: command not found: ${e}</span>`)}}function h(a){const s=["Initializing brute force attack...","Targeting mainframe...","Accessing secure vault...","Decrypting passwords...","ACCESS GRANTED.","<span style='color: #0f0'>System Control: ADMIN ACCESS ACQUIRED</span>"];let t=0;s.forEach((e,n)=>{t+=Math.random()*800+400,setTimeout(()=>{o(a,`<span class="highlight">[+] ${e}</span>`)},t)})}function b(a){a.innerHTML="",a.style.overflow="hidden";const s=document.createElement("canvas");s.width=a.clientWidth,s.height=a.clientHeight,s.style.position="absolute",s.style.top="0",s.style.left="0",a.appendChild(s);const t=s.getContext("2d"),e="010101010010101010101010101",n=14,r=s.width/n,c=Array(Math.floor(r)).fill(1);function d(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,s.width,s.height),t.fillStyle="#0F0",t.font=n+"px monospace";for(let l=0;l<c.length;l++){const m=e.charAt(Math.floor(Math.random()*e.length));t.fillText(m,l*n,c[l]*n),c[l]*n>s.height&&Math.random()>.975&&(c[l]=0),c[l]++}requestAnimationFrame(d)}d();const i=document.createElement("div");i.innerHTML="PRESS REFRESH TO EXIT MATRIX",i.style.position="absolute",i.style.bottom="10px",i.style.right="10px",i.style.color="#fff",i.style.background="#000",i.style.padding="5px",a.appendChild(i)}export{g as mount};
