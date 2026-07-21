import { Question } from "./types";

export const QUESTIONS_FOCUS_SECURITY: Question[] = [
  {
    id: 1201,
    text: "Which of the following describes the security practice of Multi-Factor Authentication (MFA)?",
    options: [
      { key: "A", text: "Requiring users to change their password once every 30 days" },
      { key: "B", text: "Validating user identity using at least two independent credentials from different categories: something you know, something you have, or something you are" },
      { key: "C", text: "Encrypting the database backup file with multiple public keys" },
      { key: "D", text: "Using multiple routers to distribute login traffic" }
    ],
    correctAnswer: "B",
    explanation: "MFA blocks unauthorized entry by requiring multiple validation parameters (e.g., password + physical authenticator key).",
    section: "Security"
  },
  {
    id: 1202,
    text: "How does a SQL Injection (SQLi) attack occur?",
    options: [
      { key: "A", text: "The attacker floods the network with malicious database queries, crashing the server" },
      { key: "B", text: "An attacker inserts malicious SQL code into input fields, which is then concatenated directly and executed by the database interpreter" },
      { key: "C", text: "The attacker intercepts passwords sent in plain text over HTTP" },
      { key: "D", text: "The attacker registers duplicate user records with administrative privileges" }
    ],
    correctAnswer: "B",
    explanation: "SQLi exploits poor input sanitization, letting hackers run arbitrary SQL queries to read, edit, or wipe complete databases.",
    section: "Security"
  },
  {
    id: 1203,
    text: "What is the primary countermeasure against SQL Injection vulnerabilities?",
    options: [
      { key: "A", text: "Using symmetric encryption to encrypt user input fields" },
      { key: "B", text: "Using parameterized queries (prepared statements) and input validation to separate user data from SQL code" },
      { key: "C", text: "Setting up a hardware firewall in front of the database server" },
      { key: "D", text: "Replacing SQL databases with NoSQL document stores" }
    ],
    correctAnswer: "B",
    explanation: "Parameterized queries ensure the database driver treats user input strictly as a parameter literal, never executing it as executable code.",
    section: "Security"
  },
  {
    id: 1204,
    text: "In cybersecurity, what does the principle of 'Least Privilege' dictate?",
    options: [
      { key: "A", text: "All users should have administrative privileges to prevent access bottlenecks" },
      { key: "B", text: "Users and systems should be granted only the minimum level of access necessary to perform their specific job functions" },
      { key: "C", text: "Junior developers should write code with minimal complexity to reduce security bugs" },
      { key: "D", text: "Passwords should have a low complexity requirement to avoid user locking" }
    ],
    correctAnswer: "B",
    explanation: "Least privilege minimizes the potential impact of accidental errors or account compromise by limiting access boundaries.",
    section: "Security"
  },
  {
    id: 1205,
    text: "What is Cross-Site Scripting (XSS) and how is it exploited?",
    options: [
      { key: "A", text: "An attacker gains administrative terminal access by cracking SSH keys" },
      { key: "B", text: "An attacker injects malicious client-side scripts (usually JavaScript) into trusted websites, which then execute in the victim's browser" },
      { key: "C", text: "An attacker forces a router to loop packets indefinitely" },
      { key: "D", text: "An attacker modifies database rows using SQL injection" }
    ],
    correctAnswer: "B",
    explanation: "XSS occurs when web applications reflect unsanitized input, allowing hackers to steal session cookies, hijack accounts, or deface websites.",
    section: "Security"
  },
  {
    id: 1206,
    text: "What is the key difference between Symmetric and Asymmetric encryption?",
    options: [
      { key: "A", text: "Symmetric encryption is only used in offline applications, while Asymmetric is used in cloud environments" },
      { key: "B", text: "Symmetric encryption uses the same key for both encryption and decryption, whereas Asymmetric uses a public key to encrypt and a private key to decrypt" },
      { key: "C", text: "Symmetric encryption cannot be decrypted, whereas Asymmetric can" },
      { key: "D", text: "Asymmetric encryption is significantly faster and uses less CPU overhead than Symmetric encryption" }
    ],
    correctAnswer: "B",
    explanation: "Symmetric (e.g., AES) is fast and uses one key. Asymmetric (e.g., RSA) uses a mathematically linked keypair, which is ideal for secure key exchanges.",
    section: "Security"
  },
  {
    id: 1207,
    text: "What does adding a 'Salt' to password hashes protect against?",
    options: [
      { key: "A", text: "SQL Injection vulnerabilities" },
      { key: "B", text: "Precomputed hash attacks like Rainbow Tables, and ensures identical passwords have unique hashes" },
      { key: "C", text: "Man-In-The-Middle network interception" },
      { key: "D", text: "Denial of Service exploits" }
    ],
    correctAnswer: "B",
    explanation: "Salting appends unique random strings to passwords before hashing, meaning duplicate passwords result in distinct hashes and making rainbow table lookups useless.",
    section: "Security"
  },
  {
    id: 1208,
    text: "What type of attack involves an adversary positioning themselves between a client and a server to intercept, read, or modify active data streams?",
    options: [
      { key: "A", text: "DDoS (Distributed Denial of Service)" },
      { key: "B", text: "Man-in-the-Middle (MITM) attack" },
      { key: "C", text: "Cross-Site Request Forgery (CSRF)" },
      { key: "D", text: "Brute Force attack" }
    ],
    correctAnswer: "B",
    explanation: "MITM attacks intercept traffic on public Wi-Fi networks or ARP spoofed subnets. This risk is mitigated by using HTTPS with robust TLS certificate pinning.",
    section: "Security"
  },
  {
    id: 1209,
    text: "Which protocol secures web browser sessions by encrypting all HTTP traffic, verifying server certificates, and establishing secure handshakes?",
    options: [
      { key: "A", text: "SSH" },
      { key: "B", text: "HTTPS (HTTP over TLS/SSL)" },
      { key: "C", text: "SFTP" },
      { key: "D", text: "DNSSEC" }
    ],
    correctAnswer: "B",
    explanation: "HTTPS encrypts the request URL, headers, and payload data using TLS, protecting traffic from eavesdropping and modification.",
    section: "Security"
  },
  {
    id: 1210,
    text: "What is Cross-Site Request Forgery (CSRF)?",
    options: [
      { key: "A", text: "An exploit that steals database credentials using SQL queries" },
      { key: "B", text: "An attack that tricks an authenticated browser into submitting unauthorized requests to a web application where the user is logged in" },
      { key: "C", text: "A physical security breach involving tailgating into a server room" },
      { key: "D", text: "An attack that crashes a server using malformed packets" }
    ],
    correctAnswer: "B",
    explanation: "CSRF exploits the automatic inclusion of session cookies in browser requests. Attacks are prevented by using anti-CSRF tokens or SameSite cookie attributes.",
    section: "Security"
  },
  {
    id: 1211,
    text: "Which of the following is an example of a secure cryptographic hashing algorithm commonly used for verifying file integrity?",
    options: [
      { key: "A", text: "MD5" },
      { key: "B", text: "SHA-256" },
      { key: "C", text: "DES" },
      { key: "D", text: "AES" }
    ],
    correctAnswer: "B",
    explanation: "SHA-256 is a modern, secure cryptographic hashing algorithm. MD5 is legacy and vulnerable to collision exploits, and DES/AES are encryption algorithms, not hashing algorithms.",
    section: "Security"
  },
  {
    id: 1212,
    text: "What is the primary purpose of a Web Application Firewall (WAF)?",
    options: [
      { key: "A", text: "To encrypt local database storage drives" },
      { key: "B", text: "To filter, monitor, and block malicious HTTP/HTTPS traffic destined for web applications based on custom security rules" },
      { key: "C", text: "To automatically assign secure IP addresses to local clients" },
      { key: "D", text: "To prevent physical entry into a corporate office" }
    ],
    correctAnswer: "B",
    explanation: "WAFs operate at Layer 7 to inspect web payloads and block common attack patterns like SQLi, XSS, and local file inclusion (LFI).",
    section: "Security"
  },
  {
    id: 1213,
    text: "Which security model operates on the principle of 'Never Trust, Always Verify', requiring continuous validation of every user and device?",
    options: [
      { key: "A", text: "Perimeter Security Model" },
      { key: "B", text: "Zero Trust Architecture" },
      { key: "C", text: "Defense in Depth" },
      { key: "D", text: "Open System Security" }
    ],
    correctAnswer: "B",
    explanation: "Zero Trust removes the concept of an implicitly trusted local network boundary, validating identity, device posture, and session permissions on every request.",
    section: "Security"
  },
  {
    id: 1214,
    text: "How does a brute force attack work?",
    options: [
      { key: "A", text: "By physically breaking the locked door of a data center" },
      { key: "B", text: "By systematically trying every possible combination of passwords or cryptographic keys until the correct one is found" },
      { key: "C", text: "By exploiting a memory buffer overflow in the application" },
      { key: "D", text: "By tricking a user into sharing their password over email" }
    ],
    correctAnswer: "B",
    explanation: "Brute force attacks attempt to guess credentials. They are mitigated by enforcing account lockout policies, rate-limiting, and complex password requirements.",
    section: "Security"
  },
  {
    id: 1215,
    text: "What does 'Phishing' refer to?",
    options: [
      { key: "A", text: "Using automated tools to scan server ports for vulnerabilities" },
      { key: "B", text: "A social engineering attack where attackers masquerade as trustworthy entities in emails or messages to trick victims into sharing sensitive data" },
      { key: "C", text: "Injecting malicious scripts into database rows" },
      { key: "D", text: "Cracking cryptographic keys using high-performance computers" }
    ],
    correctAnswer: "B",
    explanation: "Phishing uses deception to compromise credentials. Targeted variants include 'Spear Phishing' and 'Whaling' (targeting executives).",
    section: "Security"
  },
  {
    id: 1216,
    text: "What is the purpose of a digital SSL/TLS Certificate?",
    options: [
      { key: "A", text: "To encrypt local files on a desktop machine" },
      { key: "B", text: "To bind a cryptographic public key to an organization's identity, verifying website authenticity and enabling secure HTTPS connections" },
      { key: "C", text: "To scan server code for vulnerabilities before deployment" },
      { key: "D", text: "To register a domain name with a domain registrar" }
    ],
    correctAnswer: "B",
    explanation: "TLS certificates are issued by trusted Certificate Authorities (CAs) to verify a website's identity and support encrypted communications.",
    section: "Security"
  },
  {
    id: 1217,
    text: "Which of the following describes a 'Buffer Overflow' vulnerability?",
    options: [
      { key: "A", text: "A physical server running out of storage space" },
      { key: "B", text: "A program writing more data to a block of memory than it is allocated to hold, which can overwrite adjacent memory and execute malicious code" },
      { key: "C", text: "An database table reaching its maximum row capacity" },
      { key: "D", text: "A router dropping packets due to heavy network congestion" }
    ],
    correctAnswer: "B",
    explanation: "Buffer overflows occur in languages without memory management (like C/C++). They can be prevented by using safe string libraries and memory-safe languages.",
    section: "Security"
  },
  {
    id: 1218,
    text: "In Identity and Access Management, what is the role of Role-Based Access Control (RBAC)?",
    options: [
      { key: "A", text: "Enforcing complex password rotation rules" },
      { key: "B", text: "Assigning access permissions to specific defined roles, and then assigning users to those roles to simplify permission management" },
      { key: "C", text: "Encrypting session cookies using symmetric keys" },
      { key: "D", text: "Limiting network connections based on IP addresses" }
    ],
    correctAnswer: "B",
    explanation: "RBAC simplifies access control by granting permissions to roles (e.g., 'Billing Specialist') rather than managing individual users.",
    section: "Security"
  },
  {
    id: 1219,
    text: "What is an 'Intrusion Detection System' (IDS)?",
    options: [
      { key: "A", text: "A physical lock that alerts security guards when breached" },
      { key: "B", text: "A system that monitors network or host traffic for malicious activity or policy violations and alerts administrators" },
      { key: "C", text: "A secure sandbox used to compile untrusted code" },
      { key: "D", text: "A tool used to scan code repositories for hardcoded credentials" }
    ],
    correctAnswer: "B",
    explanation: "An IDS analyzes traffic patterns for known attack signatures or anomalies, while an IPS (Intrusion Prevention System) actively blocks detected threats.",
    section: "Security"
  },
  {
    id: 1220,
    text: "What does 'SSO' stand for in identity management?",
    options: [
      { key: "A", text: "Symmetric Security Option" },
      { key: "B", text: "Single Sign-On" },
      { key: "C", text: "Secure Storage Outlet" },
      { key: "D", text: "System Shutdown Override" }
    ],
    correctAnswer: "B",
    explanation: "Single Sign-On (SSO) allows a user to log in once and access multiple independent applications within an organization.",
    section: "Security"
  },
  {
    id: 1221,
    text: "What is the primary security risk of storing passwords in plain-text inside a database?",
    options: [
      { key: "A", text: "It slows down user login times" },
      { key: "B", text: "If the database is compromised, an attacker gains immediate, readable access to all user accounts and passwords" },
      { key: "C", text: "It causes database indexes to corrupt" },
      { key: "D", text: "It prevents users from using Multi-Factor Authentication" }
    ],
    correctAnswer: "B",
    explanation: "Plain-text passwords expose accounts to massive risks. Passwords should always be securely hashed using salted algorithms like bcrypt or Argon2.",
    section: "Security"
  },
  {
    id: 1222,
    text: "Which of the following OWASP vulnerabilities occurs when an application includes untrusted data in a path without proper verification, allowing attackers to access arbitrary local files?",
    options: [
      { key: "A", text: "SQL Injection" },
      { key: "B", text: "Path Traversal (Directory Traversal)" },
      { key: "C", text: "Cross-Site Scripting" },
      { key: "D", text: "Broken Authentication" }
    ],
    correctAnswer: "B",
    explanation: "Path traversal uses dot-dot-slash characters (../) to escape web root folders, allowing attackers to read sensitive files like /etc/passwd.",
    section: "Security"
  },
  {
    id: 1223,
    text: "What is the purpose of a 'Penetration Test' (Pen Test)?",
    options: [
      { key: "A", text: "To test hardware durability by applying physical stress to servers" },
      { key: "B", text: "A simulated cyberattack against an organization's systems, authorized by management, to identify and remediate security vulnerabilities" },
      { key: "C", text: "To measure how fast developers can write secure code" },
      { key: "D", text: "To monitor network bandwidth utilization" }
    ],
    correctAnswer: "B",
    explanation: "Penetration testing proactively identifies security weaknesses, testing security postures and incident response processes.",
    section: "Security"
  },
  {
    id: 1224,
    text: "What does 'SSRF' stand for in web security vulnerabilities?",
    options: [
      { key: "A", text: "Symmetric Security Registration Flow" },
      { key: "B", text: "Server-Side Request Forgery" },
      { key: "C", text: "Secure System Router Framework" },
      { key: "D", text: "Session State Replication Folder" }
    ],
    correctAnswer: "B",
    explanation: "SSRF (Server-Side Request Forgery) occurs when an attacker forces a server to submit requests to internal or external systems on their behalf.",
    section: "Security"
  },
  {
    id: 1225,
    text: "How can you protect a web application's session cookies from being accessed by malicious client-side JavaScript (e.g., via XSS)?",
    options: [
      { key: "A", text: "By setting the 'Secure' attribute on cookies" },
      { key: "B", text: "By setting the 'HttpOnly' attribute on cookies" },
      { key: "C", text: "By encrypting the cookies with a public key" },
      { key: "D", text: "By storing cookies in local storage" }
    ],
    correctAnswer: "B",
    explanation: "The HttpOnly flag prevents browser JavaScript from reading the cookie, mitigating cookie-theft risks from XSS exploits.",
    section: "Security"
  },
  {
    id: 1226,
    text: "What does the 'SameSite' cookie attribute protect against?",
    options: [
      { key: "A", text: "Symmetric encryption key compromises" },
      { key: "B", text: "Cross-Site Request Forgery (CSRF) attacks" },
      { key: "C", text: "SQL Injection vulnerabilities" },
      { key: "D", text: "Server crashes due to memory leaks" }
    ],
    correctAnswer: "B",
    explanation: "SameSite restricts cookies from being sent along with cross-site requests, mitigating CSRF risks.",
    section: "Security"
  },
  {
    id: 1227,
    text: "What is 'Defense in Depth'?",
    options: [
      { key: "A", text: "Using deep logical indexes in databases" },
      { key: "B", text: "A strategy that uses multiple layered security controls to protect system resources, ensuring that if one control fails, others are in place to block the attack" },
      { key: "C", text: "Ensuring servers are physically located deep underground" },
      { key: "D", text: "Using 256-bit keys for all encryption layers" }
    ],
    correctAnswer: "B",
    explanation: "Defense in Depth layers firewalls, IDS, strong authorization, encryption, and physical security to minimize single points of failure.",
    section: "Security"
  },
  {
    id: 1228,
    text: "Which of the following is an example of an Asymmetric encryption algorithm?",
    options: [
      { key: "A", text: "AES" },
      { key: "B", text: "RSA" },
      { key: "C", text: "DES" },
      { key: "D", text: "Blowfish" }
    ],
    correctAnswer: "B",
    explanation: "RSA is an asymmetric algorithm using keypairs. AES, DES, and Blowfish are symmetric algorithms.",
    section: "Security"
  },
  {
    id: 1229,
    text: "What is 'IP Spoofing'?",
    options: [
      { key: "A", text: "Configuring a local default gateway using a private IP" },
      { key: "B", text: "The creation of Internet Protocol (IP) packets with a forged source IP address to impersonate a trusted system" },
      { key: "C", text: "Mapping multiple hostnames to a single public IP" },
      { key: "D", text: "Routing network packets over secondary cables" }
    ],
    correctAnswer: "B",
    explanation: "IP spoofing forged source IPs to bypass IP-based filters, which is common in DDoS attacks or trust-exploitation attempts.",
    section: "Security"
  },
  {
    id: 1230,
    text: "What does the term 'Social Engineering' describe?",
    options: [
      { key: "A", text: "Developing applications designed to run on social media platforms" },
      { key: "B", text: "Manipulating individuals into performing actions or divesting confidential information through psychological deception" },
      { key: "C", text: "Normalizing table columns to improve database joins" },
      { key: "D", text: "Managing server priorities based on user roles" }
    ],
    correctAnswer: "B",
    explanation: "Social engineering targets the human element, using phishing, tailgating, or pretexting to compromise security systems.",
    section: "Security"
  },
  {
    id: 1231,
    text: "What does 'SSRF' stand for and exploit?",
    options: [
      { key: "A", text: "Symmetric Security Registration Flow; exploits authentication configurations" },
      { key: "B", text: "Server-Side Request Forgery; exploits a server's trust to access internal-only systems or APIs that are not exposed to the public" },
      { key: "C", text: "System State Recovery Folder; exploits system memory layouts" },
      { key: "D", text: "Session Storage Remote Filter; exploits cookie configurations" }
    ],
    correctAnswer: "B",
    explanation: "SSRF occurs when a server accepts user-supplied URLs and fetches them without proper validation, potentially exposing private local endpoints (e.g., cloud metadata APIs).",
    section: "Security"
  },
  {
    id: 1232,
    text: "Which header can be used to protect a web application from Clickjacking attacks by instructing the browser not to render the page inside an iframe?",
    options: [
      { key: "A", text: "X-Frame-Options" },
      { key: "B", text: "Content-Type" },
      { key: "C", text: "Strict-Transport-Security" },
      { key: "D", text: "Referrer-Policy" }
    ],
    correctAnswer: "A",
    explanation: "X-Frame-Options (DENY or SAMEORIGIN) prevents websites from being embedded in iframes, protecting users from clickjacking.",
    section: "Security"
  },
  {
    id: 1233,
    text: "What is 'Ransomware'?",
    options: [
      { key: "A", text: "A tool used to scan server ports for vulnerabilities" },
      { key: "B", text: "Malware that encrypts a victim's files, demanding a ransom payment in exchange for the decryption key" },
      { key: "C", text: "A physical lock used to secure server racks" },
      { key: "D", text: "A network router that blocks incoming traffic" }
    ],
    correctAnswer: "B",
    explanation: "Ransomware locks down files using strong encryption, demanding payments (usually in cryptocurrency) for access.",
    section: "Security"
  },
  {
    id: 1234,
    text: "What is the primary difference between Authentication and Authorization?",
    options: [
      { key: "A", text: "Authentication checks who you are (identity), while Authorization checks what you are allowed to do (permissions)" },
      { key: "B", text: "Authentication is client-side, while Authorization is server-side" },
      { key: "C", text: "Authentication uses symmetric keys, while Authorization uses asymmetric keys" },
      { key: "D", text: "There is no functional difference between the two" }
    ],
    correctAnswer: "A",
    explanation: "Authentication verifies identity (e.g., logging in). Authorization grants or denies access to specific resources based on permissions.",
    section: "Security"
  },
  {
    id: 1235,
    text: "Which of the following describes a 'Zero-Day' vulnerability?",
    options: [
      { key: "A", text: "A vulnerability that has been resolved for zero days" },
      { key: "B", text: "A security vulnerability that is unknown to the vendor, leaving zero days to create a patch before it can be exploited in the wild" },
      { key: "C", text: "An exploit that only target offline servers" },
      { key: "D", text: "A bug that has zero impact on system operations" }
    ],
    correctAnswer: "B",
    explanation: "Zero-days are highly dangerous because no defenses or patches exist yet, leaving systems exposed until a fix is released.",
    section: "Security"
  },
  {
    id: 1236,
    text: "What is the primary role of a Certificate Authority (CA)?",
    options: [
      { key: "A", text: "To encrypt local databases" },
      { key: "B", text: "To verify, issue, and manage digital security certificates, acting as a trusted third party in PKI systems" },
      { key: "C", text: "To monitor network adapters for unauthorized ports" },
      { key: "D", text: "To audit company financial registers" }
    ],
    correctAnswer: "B",
    explanation: "CAs act as trusted third parties, signing certificates to verify website ownership and secure browser sessions.",
    section: "Security"
  },
  {
    id: 1237,
    text: "What does the term 'Salting' mean in credential security?",
    options: [
      { key: "A", text: "Using randomized key codes to establish SSH terminal sessions" },
      { key: "B", text: "Adding unique random data to a password before hashing to protect against precomputed lookup tables" },
      { key: "C", text: "Rotating administrative passwords once every 30 days" },
      { key: "D", text: "Adding physical security locks to server racks" }
    ],
    correctAnswer: "B",
    explanation: "Salting ensures that identical passwords yield completely different hashes, neutralizing rainbow table attacks.",
    section: "Security"
  },
  {
    id: 1238,
    text: "Which type of social engineering attack specifically targets high-profile executives or individuals with significant administrative control?",
    options: [
      { key: "A", text: "Phishing" },
      { key: "B", text: "Whaling" },
      { key: "C", text: "Vishing" },
      { key: "D", text: "Tailgating" }
    ],
    correctAnswer: "B",
    explanation: "Whaling is highly targeted phishing aimed at senior executives to steal sensitive credentials or authorize large transactions.",
    section: "Security"
  },
  {
    id: 1239,
    text: "What does the term 'Principle of Separation of Duties' mean in security operations?",
    options: [
      { key: "A", text: "Requiring developers to write code in separate offices" },
      { key: "B", text: "Dividing critical tasks among multiple users to ensure no single individual has absolute control or the ability to commit fraud undetected" },
      { key: "C", text: "Placing web and database servers in different geographical zones" },
      { key: "D", text: "Restricting users to only one active login session" }
    ],
    correctAnswer: "B",
    explanation: "Separation of duties requires multiple people to complete high-risk tasks (e.g., one to write code, another to deploy), preventing fraud or unauthorized changes.",
    section: "Security"
  },
  {
    id: 1240,
    text: "What is 'ARP Spoofing'?",
    options: [
      { key: "A", text: "forging DNS records to redirect users to malicious websites" },
      { key: "B", text: "Sending forged ARP messages to associate an attacker's MAC address with a target IP address, enabling Man-in-the-Middle exploits on local networks" },
      { key: "C", text: "Using random IP addresses to flood a web server" },
      { key: "D", text: "Replacing default gateway configurations with physical loop cards" }
    ],
    correctAnswer: "B",
    explanation: "ARP spoofing tricks local switches into routing traffic through an attacker's machine, enabling eavesdropping or data modification on the subnet.",
    section: "Security"
  },
  {
    id: 1241,
    text: "What does 'IAM' stand for in enterprise IT security?",
    options: [
      { key: "A", text: "Internet Access Monitor" },
      { key: "B", text: "Identity and Access Management" },
      { key: "C", text: "Internal Audit Method" },
      { key: "D", text: "Integrity Assurance Module" }
    ],
    correctAnswer: "B",
    explanation: "IAM stands for Identity and Access Management, which manages user identities, access rights, and permission boundaries.",
    section: "Security"
  },
  {
    id: 1242,
    text: "Which of the following describes a 'SQL Injection' vulnerability?",
    options: [
      { key: "A", text: "A user entering numeric values instead of text" },
      { key: "B", text: "An application concatenating unsanitized user inputs directly into SQL command strings, letting attackers execute arbitrary database queries" },
      { key: "C", text: "A database server running out of available connections" },
      { key: "D", text: "An attacker accessing physical database backup tapes" }
    ],
    correctAnswer: "B",
    explanation: "SQLi executes malicious SQL payloads via unsanitized inputs, potentially exposing or modifying database records.",
    section: "Security"
  },
  {
    id: 1243,
    text: "What is 'Symmetric' encryption?",
    options: [
      { key: "A", text: "Encryption that uses different keys for locking and unlocking data" },
      { key: "B", text: "Encryption that uses the same single key for both encrypting and decrypting data" },
      { key: "C", text: "Encryption that cannot be reversed" },
      { key: "D", text: "Symmetric is a NoSQL hashing format" }
    ],
    correctAnswer: "B",
    explanation: "Symmetric encryption uses a shared key to encrypt and decrypt data, making it fast and efficient for bulk data encryption.",
    section: "Security"
  },
  {
    id: 1244,
    text: "What does 'MFA' stand for?",
    options: [
      { key: "A", text: "Multiple Firewall Adapters" },
      { key: "B", text: "Multi-Factor Authentication" },
      { key: "C", text: "Mainframe File Access" },
      { key: "D", text: "Metropolitan Filtering Association" }
    ],
    correctAnswer: "B",
    explanation: "MFA stands for Multi-Factor Authentication, requiring multiple forms of validation to verify identity.",
    section: "Security"
  },
  {
    id: 1245,
    text: "What security boundary prevents websites on different domains from reading each other's data (such as local storage or cookies) within the browser?",
    options: [
      { key: "A", text: "Same-Origin Policy (SOP)" },
      { key: "B", text: "Content Security Policy (CSP)" },
      { key: "C", text: "Cross-Origin Resource Sharing (CORS)" },
      { key: "D", text: "SameSite Cookie Policy" }
    ],
    correctAnswer: "A",
    explanation: "SOP is a core browser security model. It prevents scripts on site A from accessing data on site B without explicit authorization.",
    section: "Security"
  },
  {
    id: 1246,
    text: "What does 'Defense in Depth' encourage security engineers to do?",
    options: [
      { key: "A", text: "Implement deep file indexing routines" },
      { key: "B", text: "Design multiple independent layers of security controls so that if one layer is bypassed, others are ready to contain the threat" },
      { key: "C", text: "Place active directories on underground physical servers" },
      { key: "D", text: "Use 512-bit keys for all encryption layers" }
    ],
    correctAnswer: "B",
    explanation: "Defense in depth layers firewalls, endpoint security, strong encryption, and continuous monitoring to remove single points of failure.",
    section: "Security"
  },
  {
    id: 1247,
    text: "What is the primary risk of using unencrypted Telnet over a network for system administration?",
    options: [
      { key: "A", text: "It slows down terminal load times" },
      { key: "B", text: "All command strings, usernames, and passwords are sent in plain text, making them easily interceptable by anyone on the network" },
      { key: "C", text: "It corrupts the remote server's filesystem" },
      { key: "D", text: "It restricts logins to a single user session" }
    ],
    correctAnswer: "B",
    explanation: "Telnet is unencrypted. Using it sends credentials in plain text, exposing them to capture via simple packet sniffers. It has been replaced by SSH.",
    section: "Security"
  },
  {
    id: 1248,
    text: "Which of the following is a secure way to transmit passwords over a network?",
    options: [
      { key: "A", text: "Encrypting with Base64" },
      { key: "B", text: "Using HTTPS (Hypertext Transfer Protocol Secure) to encrypt the transport channel" },
      { key: "C", text: "Sending them in plain text over private IP ranges" },
      { key: "D", text: "Using URL parameters over unencrypted HTTP" }
    ],
    correctAnswer: "B",
    explanation: "HTTPS uses TLS to encrypt the complete session channel, protecting passwords and sensitive payloads from interception.",
    section: "Security"
  },
  {
    id: 1249,
    text: "What does a 'Same-Origin Policy' check to determine if two URLs have the same origin?",
    options: [
      { key: "A", text: "The Domain only" },
      { key: "B", text: "The Protocol, Hostname, and Port" },
      { key: "C", text: "The IP address and Subnet Mask" },
      { key: "D", text: "The browser version and user role" }
    ],
    correctAnswer: "B",
    explanation: "The Same-Origin Policy requires the Protocol (e.g., https), Hostname (e.g., example.com), and Port (e.g., 443) to match exactly.",
    section: "Security"
  },
  {
    id: 1250,
    text: "What does a 'Salt' protect password databases against?",
    options: [
      { key: "A", text: "SQL Injection vulnerabilities" },
      { key: "B", text: "Precomputed rainbow table lookups and identical hashes for duplicate user passwords" },
      { key: "C", text: "Port scanning activities" },
      { key: "D", text: "Denial of Service exploits" }
    ],
    correctAnswer: "B",
    explanation: "Salting ensures identical passwords have unique hash representations, rendering precomputed lookup maps (rainbow tables) useless.",
    section: "Security"
  }
];
