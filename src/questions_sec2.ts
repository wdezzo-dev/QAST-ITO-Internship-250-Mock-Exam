import { Question } from "./types";

export const QUESTIONS_SEC2: Question[] = [
  {
    id: 51,
    text: "Which Linux command displays the current working directory path?",
    options: [
      { key: "A", text: "ls" },
      { key: "B", text: "pwd" },
      { key: "C", text: "cd" },
      { key: "D", text: "dir" }
    ],
    correctAnswer: "B",
    explanation: "pwd (print working directory) returns the absolute directory path where the shell is currently operating.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 52,
    text: "Which command lists files and folders inside the targeted directory?",
    options: [
      { key: "A", text: "pwd" },
      { key: "B", text: "ls" },
      { key: "C", text: "cat" },
      { key: "D", text: "mkdir" }
    ],
    correctAnswer: "B",
    explanation: "ls lists names and descriptions of content inside targeted folder paths.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 53,
    text: "Which command changes the current shell directory?",
    options: [
      { key: "A", text: "move" },
      { key: "B", text: "cd" },
      { key: "C", text: "pwd" },
      { key: "D", text: "ls" }
    ],
    correctAnswer: "B",
    explanation: "cd (change directory) moves the active CLI environment path to a specified directory.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 54,
    text: "Which command creates a new folder/directory?",
    options: [
      { key: "A", text: "touch" },
      { key: "B", text: "mkdir" },
      { key: "C", text: "cp" },
      { key: "D", text: "rm" }
    ],
    correctAnswer: "B",
    explanation: "mkdir (make directory) creates a new, empty directory at the designated path location.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 55,
    text: "Which command deletes an empty directory?",
    options: [
      { key: "A", text: "rmdir" },
      { key: "B", text: "rm" },
      { key: "C", text: "del" },
      { key: "D", text: "erase" }
    ],
    correctAnswer: "A",
    explanation: "rmdir removes directories only if they contain no files or subdirectories.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 56,
    text: "Which command displays the contents of a text file in Linux?",
    options: [
      { key: "A", text: "cat" },
      { key: "B", text: "mkdir" },
      { key: "C", text: "touch" },
      { key: "D", text: "pwd" }
    ],
    correctAnswer: "A",
    explanation: "cat (concatenate) outputs a targeted file's contents directly onto the active shell console terminal.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 57,
    text: "Which command is used to copy files or directories?",
    options: [
      { key: "A", text: "cp" },
      { key: "B", text: "mv" },
      { key: "C", text: "ls" },
      { key: "D", text: "touch" }
    ],
    correctAnswer: "A",
    explanation: "cp copies target source objects into new, specified path locations.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 58,
    text: "Which command moves or renames a target file?",
    options: [
      { key: "A", text: "cp" },
      { key: "B", text: "mv" },
      { key: "C", text: "rm" },
      { key: "D", text: "cat" }
    ],
    correctAnswer: "B",
    explanation: "mv (move) alters file path maps or reassigns file names inside the filesystem.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 59,
    text: "Which command removes or deletes a target file in Linux?",
    options: [
      { key: "A", text: "mkdir" },
      { key: "B", text: "rm" },
      { key: "C", text: "cp" },
      { key: "D", text: "pwd" }
    ],
    correctAnswer: "B",
    explanation: "rm (remove) deletes target files, and can perform recursive deletion on folders via the -r flag.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 60,
    text: "Which character represents the Linux root directory?",
    options: [
      { key: "A", text: "\\" },
      { key: "B", text: "/" },
      { key: "C", text: "~" },
      { key: "D", text: "*" }
    ],
    correctAnswer: "B",
    explanation: "The forward slash (/) character represents the absolute parent root directory of a Unix or Linux filesystem.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 61,
    text: "Which Windows utility displays running processes and hardware resource utilization?",
    options: [
      { key: "A", text: "Control Panel" },
      { key: "B", text: "Task Manager" },
      { key: "C", text: "Registry Editor" },
      { key: "D", text: "Paint" }
    ],
    correctAnswer: "B",
    explanation: "Task Manager monitors active applications, services, and system hardware loads in Windows.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 62,
    text: "Which shortcut opens Task Manager directly on Windows platforms?",
    options: [
      { key: "A", text: "Ctrl + T" },
      { key: "B", text: "Ctrl + Shift + Esc" },
      { key: "C", text: "Alt + F4" },
      { key: "D", text: "Win + D" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + Shift + Esc immediately pops open the Task Manager window without loading intermediate security option lists.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 63,
    text: "Which of the following operating systems is open source?",
    options: [
      { key: "A", text: "Windows" },
      { key: "B", text: "macOS" },
      { key: "C", text: "Linux" },
      { key: "D", text: "iOS" }
    ],
    correctAnswer: "C",
    explanation: "Linux is open-source, allowing users worldwide to inspect, modify, and distribute its core source code.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 64,
    text: "Which hardware storage device is generally the fastest for file reads?",
    options: [
      { key: "A", text: "HDD" },
      { key: "B", text: "SSD" },
      { key: "C", text: "DVD" },
      { key: "D", text: "USB 2.0" }
    ],
    correctAnswer: "B",
    explanation: "Solid-State Drives (SSDs) utilize flash memory chips, completely bypassing mechanical delay factors of Hard Disk Drives (HDDs).",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 65,
    text: "Which component executes calculations and program processes in a computer?",
    options: [
      { key: "A", text: "RAM" },
      { key: "B", text: "CPU" },
      { key: "C", text: "SSD" },
      { key: "D", text: "GPU" }
    ],
    correctAnswer: "B",
    explanation: "The Central Processing Unit (CPU) executes basic instruction sets and coordinates all hardware functions.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 66,
    text: "What does IP stand for in network terminology?",
    options: [
      { key: "A", text: "Internet Protocol" },
      { key: "B", text: "Internal Process" },
      { key: "C", text: "Internet Program" },
      { key: "D", text: "Internal Port" }
    ],
    correctAnswer: "A",
    explanation: "IP stands for Internet Protocol, which coordinates host routing schemes across web networks.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 67,
    text: "Which console command tests direct network connectivity to a target host?",
    options: [
      { key: "A", text: "ping" },
      { key: "B", text: "mkdir" },
      { key: "C", text: "pwd" },
      { key: "D", text: "dir" }
    ],
    correctAnswer: "A",
    explanation: "ping broadcasts standard ICMP echo packets to test host presence, latency, and packet loss rates.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 68,
    text: "Which network protocol represents secure web browsing?",
    options: [
      { key: "A", text: "HTTP" },
      { key: "B", text: "HTTPS" },
      { key: "C", text: "FTP" },
      { key: "D", text: "SMTP" }
    ],
    correctAnswer: "B",
    explanation: "HTTPS encrypts communications using SSL/TLS, protecting sessions from eavesdropping or alteration.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 69,
    text: "Which network component connects and routes traffic across different logical subnets?",
    options: [
      { key: "A", text: "Switch" },
      { key: "B", text: "Hub" },
      { key: "C", text: "Router" },
      { key: "D", text: "Access Point" }
    ],
    correctAnswer: "C",
    explanation: "Routers receive and forward data packets across separate subnets using IP address mapping trees.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 70,
    text: "Which port does HTTPS secure traffic use by default?",
    options: [
      { key: "A", text: "21" },
      { key: "B", text: "22" },
      { key: "C", text: "80" },
      { key: "D", text: "443" }
    ],
    correctAnswer: "D",
    explanation: "HTTPS defaults to port 443, while standard unencrypted HTTP traffic routes through port 80.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 71,
    text: "A computer is exceptionally slow upon booting up. What is the most practical first troubleshooting step?",
    options: [
      { key: "A", text: "Check startup programs" },
      { key: "B", text: "Adjust keyboard speed" },
      { key: "C", text: "Increase monitor brightness" },
      { key: "D", text: "Change desktop wallpaper" }
    ],
    correctAnswer: "A",
    explanation: "Limiting software allowed to launch on boot reduces CPU and disk bottlenecking on startup.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 72,
    text: "A PC cannot reach any websites. What should you verify first?",
    options: [
      { key: "A", text: "Speakers" },
      { key: "B", text: "Network connection status" },
      { key: "C", text: "Mouse battery levels" },
      { key: "D", text: "Screen resolution options" }
    ],
    correctAnswer: "B",
    explanation: "Verifying cables and local Wi-Fi link parameters is standard triage before assessing deeper network failures.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 73,
    text: "Which console utility displays current network adapters and local IP parameters in Windows?",
    options: [
      { key: "A", text: "ipconfig" },
      { key: "B", text: "ls" },
      { key: "C", text: "pwd" },
      { key: "D", text: "ping localhost" }
    ],
    correctAnswer: "A",
    explanation: "ipconfig displays active IP configurations, subnets, and default gateways on Windows machines.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 74,
    text: "Which command shows active network interface states in Linux?",
    options: [
      { key: "A", text: "ip addr" },
      { key: "B", text: "dir" },
      { key: "C", text: "cls" },
      { key: "D", text: "tasklist" }
    ],
    correctAnswer: "A",
    explanation: "ip addr (or the legacy ifconfig command) lists adapter interfaces and their designated IP addresses.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 75,
    text: "Which Windows system application keeps detailed logs of software crashes and system alerts?",
    options: [
      { key: "A", text: "Event Viewer" },
      { key: "B", text: "Paint" },
      { key: "C", text: "Calculator" },
      { key: "D", text: "Explorer" }
    ],
    correctAnswer: "A",
    explanation: "Event Viewer records critical error dump details, system warnings, and application logs.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 76,
    text: "What term describes programs intentionally designed to disrupt, damage, or gain unauthorized access?",
    options: [
      { key: "A", text: "Hardware" },
      { key: "B", text: "Malicious software (Malware)" },
      { key: "C", text: "Web browser" },
      { key: "D", text: "Programming language" }
    ],
    correctAnswer: "B",
    explanation: "Malware comprises viruses, trojans, spyware, and ransomware engineered to compromise target hosts.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 77,
    text: "Which tool actively scans, detects, and isolates malware threats?",
    options: [
      { key: "A", text: "Antivirus" },
      { key: "B", text: "Compiler" },
      { key: "C", text: "IDE" },
      { key: "D", text: "Driver" }
    ],
    correctAnswer: "A",
    explanation: "Antivirus solutions verify signature blocks against database lists to neutralize malware on disk storage.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 78,
    text: "What does MFA stand for in IT Security?",
    options: [
      { key: "A", text: "Multi-Factor Authentication" },
      { key: "B", text: "Multiple File Access" },
      { key: "C", text: "Main Function Access" },
      { key: "D", text: "Manual File Authentication" }
    ],
    correctAnswer: "A",
    explanation: "Multi-Factor Authentication secures access by requiring two or more distinct verification types.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 79,
    text: "What is the primary target objective of a Phishing exploit?",
    options: [
      { key: "A", text: "Speed up a computer" },
      { key: "B", text: "Steal sensitive information" },
      { key: "C", text: "Compress files" },
      { key: "D", text: "Install drivers" }
    ],
    correctAnswer: "B",
    explanation: "Phishing tricks individuals into revealing credentials or account data via fraudulent communication streams.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 80,
    text: "Which of the following passwords represents the strongest security profile?",
    options: [
      { key: "A", text: "12345678" },
      { key: "B", text: "password" },
      { key: "C", text: "Qwerty123" },
      { key: "D", text: "T8#pL!9x@2Km" }
    ],
    correctAnswer: "D",
    explanation: "Longer keys with mixed letter cases, symbols, and randomized positioning are highly resistant to brute force.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 81,
    text: "What represents the core principle of virtualization in server administration?",
    options: [
      { key: "A", text: "Running multiple virtual machines on one physical computer" },
      { key: "B", text: "Connecting printers" },
      { key: "C", text: "Compressing files" },
      { key: "D", text: "Installing Windows" }
    ],
    correctAnswer: "A",
    explanation: "Virtualization splits a single physical host's computing resources into multiple isolated guest environments.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 82,
    text: "Which of the following represents a standard virtualization software host platform?",
    options: [
      { key: "A", text: "VMware" },
      { key: "B", text: "Chrome" },
      { key: "C", text: "Photoshop" },
      { key: "D", text: "Excel" }
    ],
    correctAnswer: "A",
    explanation: "VMware creates enterprise hypervisors that coordinate guest Virtual Machines with physical server hardware.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 83,
    text: "Which cloud service tier provides raw host servers, storage arrays, and virtual networking on demand?",
    options: [
      { key: "A", text: "IaaS" },
      { key: "B", text: "SaaS" },
      { key: "C", text: "PaaS" },
      { key: "D", text: "DNS" }
    ],
    correctAnswer: "A",
    explanation: "Infrastructure as a Service (IaaS) gives administrators access to raw server resources without hardware upkeep.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 84,
    text: "What does AWS stand for?",
    options: [
      { key: "A", text: "Amazon Web Services" },
      { key: "B", text: "Automated Web System" },
      { key: "C", text: "Advanced Workstation Services" },
      { key: "D", text: "Amazon Windows Server" }
    ],
    correctAnswer: "A",
    explanation: "AWS stands for Amazon Web Services, a widely utilized comprehensive cloud hosting provider.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 85,
    text: "Which service tier delivers complete, functional client software over the web?",
    options: [
      { key: "A", text: "IaaS" },
      { key: "B", text: "SaaS" },
      { key: "C", text: "LAN" },
      { key: "D", text: "VPN" }
    ],
    correctAnswer: "B",
    explanation: "Software as a Service (SaaS) delivers final applications straight to users, typically via browsers.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 86,
    text: "What is the primary operational objective of scheduling regular system backups?",
    options: [
      { key: "A", text: "Increase CPU speed" },
      { key: "B", text: "Recover lost data" },
      { key: "C", text: "Improve monitor quality" },
      { key: "D", text: "Reduce RAM usage" }
    ],
    correctAnswer: "B",
    explanation: "Backups serve as recovery options in case data is lost due to corruption, hardware failures, or ransomware attacks.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 87,
    text: "Which backup strategy copies all selected data objects in their entirety every time?",
    options: [
      { key: "A", text: "Incremental" },
      { key: "B", text: "Differential" },
      { key: "C", text: "Full Backup" },
      { key: "D", text: "Partial" }
    ],
    correctAnswer: "C",
    explanation: "A Full Backup saves complete replicas of designated data volumes, requiring substantial time and storage spaces.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 88,
    text: "What is the primary purpose of scheduling routine preventive system maintenance?",
    options: [
      { key: "A", text: "Prevent future issues" },
      { key: "B", text: "Delete files" },
      { key: "C", text: "Increase internet speed" },
      { key: "D", text: "Format disks" }
    ],
    correctAnswer: "A",
    explanation: "Preventive maintenance handles minor warnings, applies security updates, and prevents hardware/software failures.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 89,
    text: "What is disk cleanup utility primarily utilized to achieve?",
    options: [
      { key: "A", text: "Remove unnecessary files" },
      { key: "B", text: "Increase RAM" },
      { key: "C", text: "Update BIOS" },
      { key: "D", text: "Replace hardware" }
    ],
    correctAnswer: "A",
    explanation: "Disk cleanup sweeps and deletes temporary system caches, files, and trash bins to free storage space.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 90,
    text: "What is the most critical reason why system updates should be applied routinely?",
    options: [
      { key: "A", text: "Improve security and fix bugs" },
      { key: "B", text: "Make files larger" },
      { key: "C", text: "Slow the computer" },
      { key: "D", text: "Remove drivers" }
    ],
    correctAnswer: "A",
    explanation: "Updates fix identified programming bugs and patch security vulnerabilities to prevent network exploits.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 91,
    text: "Which hardware metric reveals overall execution load on server processors?",
    options: [
      { key: "A", text: "CPU Usage" },
      { key: "B", text: "IP Address" },
      { key: "C", text: "MAC Address" },
      { key: "D", text: "Port Number" }
    ],
    correctAnswer: "A",
    explanation: "CPU usage represents the percentage of clock cycles spent handling instruction sets.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 92,
    text: "Which metrics track the volume of memory actively occupied by system operations?",
    options: [
      { key: "A", text: "RAM Usage" },
      { key: "B", text: "BIOS Version" },
      { key: "C", text: "MAC Address" },
      { key: "D", text: "DNS" }
    ],
    correctAnswer: "A",
    explanation: "RAM usage displays volume metrics of volatile memory currently dedicated to active processing states.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 93,
    text: "A support ticketing portal is primarily utilized to achieve what?",
    options: [
      { key: "A", text: "Track support requests" },
      { key: "B", text: "Watch videos" },
      { key: "C", text: "Browse the web" },
      { key: "D", text: "Write code" }
    ],
    correctAnswer: "A",
    explanation: "Ticketing portals centralize, categorize, and track resolution lifecycles for user issues.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 94,
    text: "Which of the following represents remote desktop coordination software?",
    options: [
      { key: "A", text: "TeamViewer" },
      { key: "B", text: "VLC" },
      { key: "C", text: "WinRAR" },
      { key: "D", text: "Chrome" }
    ],
    correctAnswer: "A",
    explanation: "TeamViewer lets administrators inspect, control, and configure remote computers over secure channels.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 95,
    text: "Before changing or upgrading disk storage hardware, what is a critical first step?",
    options: [
      { key: "A", text: "Backup important data" },
      { key: "B", text: "Delete Windows" },
      { key: "C", text: "Disable keyboard" },
      { key: "D", text: "Format the disk" }
    ],
    correctAnswer: "A",
    explanation: "A complete backup guarantees that user files remain protected even if physical storage modules are damaged.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 96,
    text: "Which command-line utility tests basic server accessibility over networks?",
    options: [
      { key: "A", text: "ping" },
      { key: "B", text: "mkdir" },
      { key: "C", text: "cp" },
      { key: "D", text: "cd" }
    ],
    correctAnswer: "A",
    explanation: "ping broadcasts packets and measures reply durations to confirm active endpoints.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 97,
    text: "Which hardware system bridges connections and redirects packets between separate network domains?",
    options: [
      { key: "A", text: "Switch" },
      { key: "B", text: "Router" },
      { key: "C", text: "Hub" },
      { key: "D", text: "Modem" }
    ],
    correctAnswer: "B",
    explanation: "Routers assess packet IP values to choose correct directional pathways across subnets.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 98,
    text: "Which command shows active socket links and listening TCP/UDP port parameters?",
    options: [
      { key: "A", text: "netstat" },
      { key: "B", text: "pwd" },
      { key: "C", text: "mkdir" },
      { key: "D", text: "whoami" }
    ],
    correctAnswer: "A",
    explanation: "netstat lists active system connection ports, protocol domains, and tracking states.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 99,
    text: "What does a Blue Screen of Death (BSOD) represent on Windows computers?",
    options: [
      { key: "A", text: "System-level error" },
      { key: "B", text: "Printer problem" },
      { key: "C", text: "Browser issue" },
      { key: "D", text: "Network cable unplugged" }
    ],
    correctAnswer: "A",
    explanation: "A BSOD indicates that Windows encountered a critical kernel or driver execution state from which it could not recover safely.",
    section: "IT Operations & Systems Maintenance"
  },
  {
    id: 100,
    text: "What is generally the first logical phase when troubleshooting system issues?",
    options: [
      { key: "A", text: "Restart the system and gather information" },
      { key: "B", text: "Replace the motherboard" },
      { key: "C", text: "Format the hard drive" },
      { key: "D", text: "Buy a new computer" }
    ],
    correctAnswer: "A",
    explanation: "Restarting resolves transient software conflicts, and collecting detailed diagnostic information isolates root causes.",
    section: "IT Operations & Systems Maintenance"
  }
];
