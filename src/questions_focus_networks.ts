import { Question } from "./types";

export const QUESTIONS_FOCUS_NETWORKS: Question[] = [
  {
    id: 1001,
    text: "At which layer of the OSI model does a standard IP router operate?",
    options: [
      { key: "A", text: "Physical Layer (Layer 1)" },
      { key: "B", text: "Data Link Layer (Layer 2)" },
      { key: "C", text: "Network Layer (Layer 3)" },
      { key: "D", text: "Transport Layer (Layer 4)" }
    ],
    correctAnswer: "C",
    explanation: "Routers operate at the Network Layer (Layer 3) of the OSI model, using logical IP addresses to forward packets across different networks.",
    section: "Networks"
  },
  {
    id: 1002,
    text: "What is the primary function of the Domain Name System (DNS) in a network?",
    options: [
      { key: "A", text: "To encrypt web traffic between browser and server" },
      { key: "B", text: "To translate human-readable domain names into IP addresses" },
      { key: "C", text: "To dynamically allocate IP addresses to network hosts" },
      { key: "D", text: "To route packets along the shortest physical path" }
    ],
    correctAnswer: "B",
    explanation: "DNS acts as the 'phonebook' of the internet, mapping domain names (like example.com) to their computer-readable numerical IP addresses.",
    section: "Networks"
  },
  {
    id: 1003,
    text: "Which of the following transport layer protocols is connection-oriented and guarantees delivery of packets?",
    options: [
      { key: "A", text: "UDP (User Datagram Protocol)" },
      { key: "B", text: "IP (Internet Protocol)" },
      { key: "C", text: "TCP (Transmission Control Protocol)" },
      { key: "D", text: "ICMP (Internet Control Message Protocol)" }
    ],
    correctAnswer: "C",
    explanation: "TCP is connection-oriented, performing a three-way handshake to establish connections and using sequence numbers and acknowledgements to guarantee delivery.",
    section: "Networks"
  },
  {
    id: 1004,
    text: "What is the purpose of a Subnet Mask in IPv4 networking?",
    options: [
      { key: "A", text: "To identify the MAC address of the network interface" },
      { key: "B", text: "To distinguish the network portion of an IP address from the host portion" },
      { key: "C", text: "To assign a dynamic IP address to a client machine" },
      { key: "D", text: "To measure the physical length of the fiber optic link" }
    ],
    correctAnswer: "B",
    explanation: "A subnet mask (like 255.255.255.0) tells a device which bits of an IP address represent the network address and which bits represent the individual host.",
    section: "Networks"
  },
  {
    id: 1005,
    text: "Which network service automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to client devices?",
    options: [
      { key: "A", text: "DHCP (Dynamic Host Configuration Protocol)" },
      { key: "B", text: "NAT (Network Address Translation)" },
      { key: "C", text: "SMTP (Simple Mail Transfer Protocol)" },
      { key: "D", text: "ARP (Address Resolution Protocol)" }
    ],
    correctAnswer: "A",
    explanation: "DHCP automates the process of IP address configuration, preventing address conflicts and simplifying device management.",
    section: "Networks"
  },
  {
    id: 1006,
    text: "What does NAT (Network Address Translation) do to facilitate internet routing?",
    options: [
      { key: "A", text: "Converts optical light signals back into electric copper pulses" },
      { key: "B", text: "Resolves local server hostnames to their loopback configurations" },
      { key: "C", text: "Translates private IP addresses to a public IP address before sending packets outside" },
      { key: "D", text: "Calculates the checksum parity of transport-layer headers" }
    ],
    correctAnswer: "C",
    explanation: "NAT maps local private IP addresses to public-facing IPs, allowing multiple internal devices to share a single public IP and saving IPv4 space.",
    section: "Networks"
  },
  {
    id: 1007,
    text: "Which protocol is used to map an IP address (Layer 3) to a physical MAC address (Layer 2)?",
    options: [
      { key: "A", text: "DNS" },
      { key: "B", text: "ARP" },
      { key: "C", text: "DHCP" },
      { key: "D", text: "HTTP" }
    ],
    correctAnswer: "B",
    explanation: "ARP (Address Resolution Protocol) resolves logical Layer 3 IP addresses to physical Layer 2 Media Access Control (MAC) addresses on a local subnet.",
    section: "Networks"
  },
  {
    id: 1008,
    text: "In the TCP/IP suite, which port is standard for encrypted HTTPS traffic?",
    options: [
      { key: "A", text: "Port 80" },
      { key: "B", text: "Port 443" },
      { key: "C", text: "Port 22" },
      { key: "D", text: "Port 53" }
    ],
    correctAnswer: "B",
    explanation: "Port 443 is used for secure HTTPS web traffic, while port 80 is used for unencrypted HTTP traffic.",
    section: "Networks"
  },
  {
    id: 1009,
    text: "What is the primary difference between a network Hub and a network Switch?",
    options: [
      { key: "A", text: "A hub connects to the internet, while a switch only connects local computers" },
      { key: "B", text: "A hub broadcasts incoming data to all ports, while a switch directs data to the specific destination port" },
      { key: "C", text: "A hub operates at Layer 4, while a switch operates at Layer 1" },
      { key: "D", text: "A hub is wireless, whereas a switch must always use physical cables" }
    ],
    correctAnswer: "B",
    explanation: "Hubs broadcast signals indiscriminately to all connected nodes, creating collision domains. Switches look up MAC addresses to send data frames selectively to the targeted port.",
    section: "Networks"
  },
  {
    id: 1010,
    text: "What does the 'ping' command use to verify network-level connectivity between two hosts?",
    options: [
      { key: "A", text: "TCP SYN packets" },
      { key: "B", text: "ICMP Echo Request and Echo Reply messages" },
      { key: "C", text: "UDP handshake frames" },
      { key: "D", text: "DNS lookup queries" }
    ],
    correctAnswer: "B",
    explanation: "The ping command sends ICMP (Internet Control Message Protocol) Echo Requests to a target IP and listens for Echo Replies to measure round-trip time and packet loss.",
    section: "Networks"
  },
  {
    id: 1051,
    text: "Which OSI model layer is responsible for routing, logical addressing, and path determination?",
    options: [
      { key: "A", text: "Layer 2 - Data Link" },
      { key: "B", text: "Layer 3 - Network" },
      { key: "C", text: "Layer 4 - Transport" },
      { key: "D", text: "Layer 5 - Session" }
    ],
    correctAnswer: "B",
    explanation: "The Network Layer (Layer 3) handles path determination, logical IP addressing, and routing packet streams between different segments.",
    section: "Networks"
  },
  {
    id: 1052,
    text: "Which protocol is primarily used for securely logging into remote systems over a network?",
    options: [
      { key: "A", text: "Telnet" },
      { key: "B", text: "FTP" },
      { key: "C", text: "SSH" },
      { key: "D", text: "TFTP" }
    ],
    correctAnswer: "C",
    explanation: "SSH (Secure Shell) provides robust cryptographic encryption for logging into remote servers, replacing insecure protocols like Telnet.",
    section: "Networks"
  },
  {
    id: 1053,
    text: "What is the size of an IPv6 address in comparison to an IPv4 address?",
    options: [
      { key: "A", text: "IPv4 is 32 bits, IPv6 is 64 bits" },
      { key: "B", text: "IPv4 is 32 bits, IPv6 is 128 bits" },
      { key: "C", text: "IPv4 is 64 bits, IPv6 is 128 bits" },
      { key: "D", text: "IPv4 is 128 bits, IPv6 is 256 bits" }
    ],
    correctAnswer: "B",
    explanation: "IPv4 addresses are 32 bits (4 bytes) long, whereas IPv6 addresses are 128 bits (16 bytes) long, offering a massive increase in available addresses.",
    section: "Networks"
  },
  {
    id: 1054,
    text: "Which of the following describes the function of a network Default Gateway?",
    options: [
      { key: "A", text: "It resolves private DNS addresses locally" },
      { key: "B", text: "It serves as the exit point for packets destined outside the local network segment" },
      { key: "C", text: "It provides dynamic IP address leases to clients" },
      { key: "D", text: "It filters physical MAC address registrations" }
    ],
    correctAnswer: "B",
    explanation: "The default gateway is the router interface that a local host contacts when sending traffic to an external IP outside its local subnet.",
    section: "Networks"
  },
  {
    id: 1055,
    text: "What is the standard port number for the Domain Name System (DNS) service?",
    options: [
      { key: "A", text: "Port 21" },
      { key: "B", text: "Port 53" },
      { key: "C", text: "Port 80" },
      { key: "D", text: "Port 110" }
    ],
    correctAnswer: "B",
    explanation: "DNS uses port 53 over both UDP (mostly for queries) and TCP (for zone transfers and large responses).",
    section: "Networks"
  },
  {
    id: 1056,
    text: "Which TCP flags are used to establish the standard connection-oriented three-way handshake?",
    options: [
      { key: "A", text: "SYN, SYN-ACK, ACK" },
      { key: "B", text: "SYN, FIN-ACK, ACK" },
      { key: "C", text: "RST, SYN, ACK" },
      { key: "D", text: "PSH, ACK, SYN" }
    ],
    correctAnswer: "A",
    explanation: "The TCP handshake sequence is client sends SYN (Synchronize), server replies with SYN-ACK (Synchronize-Acknowledge), and client finishes with ACK (Acknowledge).",
    section: "Networks"
  },
  {
    id: 1057,
    text: "What does a 'traceroute' command do to find the network path to a destination?",
    options: [
      { key: "A", text: "It maps physical fiber optic cabling paths using light metrics" },
      { key: "B", text: "It increments the TTL (Time to Live) value of successive packets starting from 1 to discover intermediate routers via ICMP Time Exceeded messages" },
      { key: "C", text: "It downloads intermediate DNS caches from local registers" },
      { key: "D", text: "It issues MAC lookup updates to the local switch bridge" }
    ],
    correctAnswer: "B",
    explanation: "Traceroute sends packets with increasing TTL values. Each router drops the TTL by 1; when it hits 0, the router discards it and returns an ICMP 'Time Exceeded' packet, revealing its identity.",
    section: "Networks"
  },
  {
    id: 1058,
    text: "Which subnet mask corresponds to a CIDR notation of /24?",
    options: [
      { key: "A", text: "255.0.0.0" },
      { key: "B", text: "255.255.0.0" },
      { key: "C", text: "255.255.255.0" },
      { key: "D", text: "255.255.255.240" }
    ],
    correctAnswer: "C",
    explanation: "/24 CIDR represents 24 consecutive binary '1's in the subnet mask (8+8+8 = 24 bits), which translates to 255.255.255.0 in dotted-decimal.",
    section: "Networks"
  },
  {
    id: 1059,
    text: "Which of the following is a designated Private IP address range defined in RFC 1918?",
    options: [
      { key: "A", text: "8.8.8.0 to 8.8.8.255" },
      { key: "B", text: "192.168.0.0 to 192.168.255.255" },
      { key: "C", text: "200.100.50.0 to 200.100.50.255" },
      { key: "D", text: "127.0.0.0 to 127.255.255.255" }
    ],
    correctAnswer: "B",
    explanation: "RFC 1918 defines three private ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. These are non-routable on the public internet.",
    section: "Networks"
  },
  {
    id: 1060,
    text: "What is the loopback IP address for local testing in IPv4?",
    options: [
      { key: "A", text: "192.168.1.1" },
      { key: "B", text: "10.0.0.1" },
      { key: "C", text: "127.0.0.1" },
      { key: "D", text: "0.0.0.0" }
    ],
    correctAnswer: "C",
    explanation: "127.0.0.1 is the standard loopback IP address ('localhost') used to test network software on the local machine without active network cards.",
    section: "Networks"
  },
  {
    id: 1061,
    text: "Which network device operates at Layer 2 of the OSI model and forwards frames based on hardware MAC addresses?",
    options: [
      { key: "A", text: "Repeater" },
      { key: "B", text: "Network Switch" },
      { key: "C", text: "Router" },
      { key: "D", text: "Firewall" }
    ],
    correctAnswer: "B",
    explanation: "A standard network switch operates at Layer 2 (Data Link Layer) and builds a MAC address table to forward frames to specific physical ports.",
    section: "Networks"
  },
  {
    id: 1062,
    text: "What is the primary purpose of VLAN (Virtual Local Area Network) technology?",
    options: [
      { key: "A", text: "To encrypt wireless broadcast signals" },
      { key: "B", text: "To group physical devices logically into separate broadcast domains regardless of their physical cabling locations" },
      { key: "C", text: "To accelerate WAN access speeds using hardware caching" },
      { key: "D", text: "To automatically resolve external web hostnames" }
    ],
    correctAnswer: "B",
    explanation: "VLANs segment a single physical switch network into multiple logical networks, reducing broadcast traffic and improving security boundary controls.",
    section: "Networks"
  },
  {
    id: 1063,
    text: "Which of the following is an example of a routing protocol that uses the link-state algorithm?",
    options: [
      { key: "A", text: "RIP (Routing Information Protocol)" },
      { key: "B", text: "OSPF (Open Shortest Path First)" },
      { key: "C", text: "BGP (Border Gateway Protocol)" },
      { key: "D", text: "SMTP" }
    ],
    correctAnswer: "B",
    explanation: "OSPF is a link-state routing protocol that maintains a complete topology database of the network to calculate the shortest path to destinations.",
    section: "Networks"
  },
  {
    id: 1064,
    text: "Which protocol is utilized to send and transfer email messages between mail servers?",
    options: [
      { key: "A", text: "POP3" },
      { key: "B", text: "IMAP" },
      { key: "C", text: "SMTP" },
      { key: "D", text: "SNMP" }
    ],
    correctAnswer: "C",
    explanation: "SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending and pushing email messages from clients to servers and between servers.",
    section: "Networks"
  },
  {
    id: 1065,
    text: "What is the purpose of the Address Resolution Protocol (ARP) cache?",
    options: [
      { key: "A", text: "To store public IP to DNS host mapping entries" },
      { key: "B", text: "To temporarily store IP-to-MAC address mappings, reducing broadcast queries on the local segment" },
      { key: "C", text: "To save encrypted session cookies for HTTPS web browsing" },
      { key: "D", text: "To track active TCP sessions between network card bridges" }
    ],
    correctAnswer: "B",
    explanation: "The ARP cache remembers recently resolved IP-to-MAC associations so devices do not need to broadcast ARP request packets for every frame they transmit.",
    section: "Networks"
  },
  {
    id: 1066,
    text: "What port does the SSH (Secure Shell) protocol use by default?",
    options: [
      { key: "A", text: "Port 20" },
      { key: "B", text: "Port 22" },
      { key: "C", text: "Port 23" },
      { key: "D", text: "Port 25" }
    ],
    correctAnswer: "B",
    explanation: "Port 22 is the standard port reserved for SSH connection streams.",
    section: "Networks"
  },
  {
    id: 1067,
    text: "What is the primary role of the ICMP (Internet Control Message Protocol)?",
    options: [
      { key: "A", text: "To securely transfer hypermedia files over the web" },
      { key: "B", text: "To send error reports, diagnostic information, and operational control data within a network" },
      { key: "C", text: "To assign dynamic IP address details to host terminals" },
      { key: "D", text: "To map logical network structures to geographic databases" }
    ],
    correctAnswer: "B",
    explanation: "ICMP is used by IP network systems for diagnostics, error checking (e.g., Destination Unreachable), and ping/traceroute functions.",
    section: "Networks"
  },
  {
    id: 1068,
    text: "How does UDP (User Datagram Protocol) differ from TCP (Transmission Control Protocol)?",
    options: [
      { key: "A", text: "UDP is connectionless and does not guarantee packet delivery or order, but has lower overhead" },
      { key: "B", text: "UDP is connection-oriented and supports data retransmission, but lacks flow control" },
      { key: "C", text: "UDP operates at the Network Layer, while TCP operates at the Session Layer" },
      { key: "D", text: "UDP encrypts all raw payload data packets automatically" }
    ],
    correctAnswer: "A",
    explanation: "UDP is connectionless, dropping sequence check features for raw speed and minimal packet overhead, making it ideal for live audio/video and gaming streams.",
    section: "Networks"
  },
  {
    id: 1069,
    text: "What does the network command 'netstat' show when executed in a shell console?",
    options: [
      { key: "A", text: "Active network adapters and their physical MAC configurations" },
      { key: "B", text: "Active network connections, routing tables, and interface statistics" },
      { key: "C", text: "The response time of DNS host servers in milliseconds" },
      { key: "D", text: "Active DHCP dynamic IP assignment logs" }
    ],
    correctAnswer: "B",
    explanation: "'netstat' (network statistics) is a command-line tool that lists active TCP sockets, port bindings, routing metrics, and network system interfaces.",
    section: "Networks"
  },
  {
    id: 1070,
    text: "Which of the following is an example of an application layer protocol?",
    options: [
      { key: "A", text: "IP" },
      { key: "B", text: "TCP" },
      { key: "C", text: "HTTP" },
      { key: "D", text: "UDP" }
    ],
    correctAnswer: "C",
    explanation: "HTTP (HyperText Transfer Protocol) operates at Layer 7 (Application Layer) of the OSI stack, serving web browser content. TCP and UDP operate at Layer 4, and IP operates at Layer 3.",
    section: "Networks"
  },
  {
    id: 1071,
    text: "What is the main advantage of fiber optic cables over traditional copper Ethernet cables?",
    options: [
      { key: "A", text: "Fiber optic cables are highly flexible and can be twisted without damage" },
      { key: "B", text: "Fiber optic cables use light pulses, offering significantly higher bandwidth and immunity to electromagnetic interference" },
      { key: "C", text: "Fiber optic cables can supply direct power to connected network switches" },
      { key: "D", text: "Fiber optic cables are much cheaper and simpler to splice manually" }
    ],
    correctAnswer: "B",
    explanation: "Fiber optic cables transmit data via glass light pulses, rendering them immune to electrical interference (EMI) and allowing massive data rates over long physical spans.",
    section: "Networks"
  },
  {
    id: 1072,
    text: "In subnetting, how many usable host IP addresses are available on a /29 subnet mask?",
    options: [
      { key: "A", text: "2 usable addresses" },
      { key: "B", text: "6 usable addresses" },
      { key: "C", text: "8 usable addresses" },
      { key: "D", text: "14 usable addresses" }
    ],
    correctAnswer: "B",
    explanation: "A /29 subnet leaves 3 host bits (32 - 29 = 3). Total addresses = 2^3 = 8. Subtracting 2 for the Network ID and Broadcast address yields 6 usable host addresses.",
    section: "Networks"
  },
  {
    id: 1073,
    text: "Which of the following protocols is used for securely downloading and uploading files, wrapping commands in an encrypted SSL/TLS session?",
    options: [
      { key: "A", text: "TFTP" },
      { key: "B", text: "FTPS" },
      { key: "C", text: "Telnet" },
      { key: "D", text: "HTTP" }
    ],
    correctAnswer: "B",
    explanation: "FTPS (File Transfer Protocol Secure) adds SSL/TLS layers to the standard FTP protocol to encrypt both credential commands and data files.",
    section: "Networks"
  },
  {
    id: 1074,
    text: "What does MTU (Maximum Transmission Unit) define in a network interface?",
    options: [
      { key: "A", text: "The maximum length of physical Ethernet fiber cabling" },
      { key: "B", text: "The maximum size of a packet or frame, in bytes, that can be sent over a medium" },
      { key: "C", text: "The maximum throughput capacity of a gigabit switch port" },
      { key: "D", text: "The maximum duration of a TCP session lease" }
    ],
    correctAnswer: "B",
    explanation: "MTU (default 1500 bytes for standard Ethernet) represents the largest physical packet/frame size that can be transmitted across a network without fragmentation.",
    section: "Networks"
  },
  {
    id: 1075,
    text: "Which network utility is used to query DNS servers and return technical domain record details (such as MX, A, or TXT)?",
    options: [
      { key: "A", text: "netstat" },
      { key: "B", text: "ipconfig" },
      { key: "C", text: "nslookup" },
      { key: "D", text: "arp" }
    ],
    correctAnswer: "C",
    explanation: "nslookup (name server lookup) and 'dig' are tools used to query DNS registers, retrieve record properties, and verify domain configurations.",
    section: "Networks"
  },
  {
    id: 1076,
    text: "What does the term 'Latency' mean in computer network communication?",
    options: [
      { key: "A", text: "The volume of data successfully processed per second" },
      { key: "B", text: "The physical width of coaxial transmission pipelines" },
      { key: "C", text: "The time delay taken for a data packet to travel from its source to its destination" },
      { key: "D", text: "The percentage of corrupted frames dropped by a switch" }
    ],
    correctAnswer: "C",
    explanation: "Latency refers to the delay (usually measured in milliseconds) between the instant a packet is sent and when it is received by the destination.",
    section: "Networks"
  },
  {
    id: 1077,
    text: "Which protocol is used by network administrators to monitor and manage network devices like switches, routers, and UPS units remotely?",
    options: [
      { key: "A", text: "DHCP" },
      { key: "B", text: "SNMP (Simple Network Management Protocol)" },
      { key: "C", text: "SMTP" },
      { key: "D", text: "IMAP" }
    ],
    correctAnswer: "B",
    explanation: "SNMP lets management systems monitor device health, bandwidth loads, CPU temps, and error logs across routers and other hardware.",
    section: "Networks"
  },
  {
    id: 1078,
    text: "What is the purpose of the 3-Way Handshake in TCP?",
    options: [
      { key: "A", text: "To encrypt the physical layer copper connections" },
      { key: "B", text: "To synchronize sequence numbers, exchange window sizes, and establish a reliable session connection between host and client" },
      { key: "C", text: "To authenticate a user's remote login username and password" },
      { key: "D", text: "To measure the round-trip distance between routers" }
    ],
    correctAnswer: "B",
    explanation: "The TCP handshake initiates and synchronizes sequence and acknowledgment trackers on both sides, ensuring they are ready to reliably stream segments.",
    section: "Networks"
  },
  {
    id: 1079,
    text: "Which of the following describes a 'Collision Domain' in network architecture?",
    options: [
      { key: "A", text: "A physical site where fiber optic cables meet" },
      { key: "B", text: "A network segment where multiple devices share the same physical medium and their packets can collide during simultaneous transmission" },
      { key: "C", text: "An IP range reserved exclusively for backup database traffic" },
      { key: "D", text: "The geographical boundary of a wireless router's radio waves" }
    ],
    correctAnswer: "B",
    explanation: "Devices on a shared Ethernet segment (like those connected via a hub) share a collision domain. Switches split each physical port into a dedicated collision domain.",
    section: "Networks"
  },
  {
    id: 1080,
    text: "What standard port is reserved for unencrypted HTTP traffic?",
    options: [
      { key: "A", text: "Port 21" },
      { key: "B", text: "Port 22" },
      { key: "C", text: "Port 80" },
      { key: "D", text: "Port 443" }
    ],
    correctAnswer: "C",
    explanation: "Port 80 is the default TCP port used for raw, unencrypted Hypertext Transfer Protocol (HTTP) traffic.",
    section: "Networks"
  },
  {
    id: 1081,
    text: "What is the primary role of the MAC (Media Access Control) address?",
    options: [
      { key: "A", text: "To dynamically map geographical router coordinates" },
      { key: "B", text: "To act as a unique, hardware-level identifier burned into a network interface card (NIC) for local network framing" },
      { key: "C", text: "To allocate dynamic IP assignments via DHCP leases" },
      { key: "D", text: "To resolve local hostnames to domain servers" }
    ],
    correctAnswer: "B",
    explanation: "A MAC address is a 48-bit physical hardware address unique to each network adapter, used for frame-level deliveries on a local physical subnet.",
    section: "Networks"
  },
  {
    id: 1082,
    text: "Which technology allows a single public IP address to represent thousands of internal private IPs by tracking source port numbers?",
    options: [
      { key: "A", text: "VLAN Trunking" },
      { key: "B", text: "PAT (Port Address Translation) / NAT Overload" },
      { key: "C", text: "DHCP IP Reservation" },
      { key: "D", text: "OSPF Path Distribution" }
    ],
    correctAnswer: "B",
    explanation: "PAT (or NAT Overload) maps private IPs to a single public IP by modifying and cataloging the TCP/UDP source ports of outbound packets.",
    section: "Networks"
  },
  {
    id: 1083,
    text: "What does the 'Hop Count' metric represent in routing algorithms?",
    options: [
      { key: "A", text: "The physical length of fiber connections in miles" },
      { key: "B", text: "The number of intermediate routers a packet must pass through to reach its destination" },
      { key: "C", text: "The maximum number of concurrent active connections on a port" },
      { key: "D", text: "The time spent waiting for a port to resolve dynamic IPs" }
    ],
    correctAnswer: "B",
    explanation: "Hop count represents how many routers a packet traverses. For example, RIP uses Hop Count as its primary metric, capping viable paths at 15 hops.",
    section: "Networks"
  },
  {
    id: 1084,
    text: "Which IP protocol is used by the ping command to verify connection diagnostic responses?",
    options: [
      { key: "A", text: "TCP" },
      { key: "B", text: "UDP" },
      { key: "C", text: "ICMP" },
      { key: "D", text: "IGMP" }
    ],
    correctAnswer: "C",
    explanation: "ICMP handles error checking and diagnostic messaging, and is the protocol ping utilizes via Echo Request and Echo Reply codes.",
    section: "Networks"
  },
  {
    id: 1085,
    text: "Which of the following ports is standard for sending encrypted SMTP mail (SMTPS / SMTP over TLS)?",
    options: [
      { key: "A", text: "Port 23" },
      { key: "B", text: "Port 80" },
      { key: "C", text: "Port 465 or 587" },
      { key: "D", text: "Port 143" }
    ],
    correctAnswer: "C",
    explanation: "Port 587 is the standard for modern encrypted mail submission using STARTTLS, while port 465 was originally used for implicit SMTPS.",
    section: "Networks"
  },
  {
    id: 1086,
    text: "What is the function of a network Bridge?",
    options: [
      { key: "A", text: "To connect wireless access signals to high-power fiber backbones" },
      { key: "B", text: "To connect two separate physical LAN segments together into a single logical network segment based on MAC addresses" },
      { key: "C", text: "To dynamically translate private subnets into public IP allocations" },
      { key: "D", text: "To filter network traffic based on user passwords" }
    ],
    correctAnswer: "B",
    explanation: "A network bridge operates at Layer 2 and joins different physical wires/segments together, forwarding frames intelligently based on MAC addresses to keep traffic local where possible.",
    section: "Networks"
  },
  {
    id: 1087,
    text: "What does DHCP Stand for?",
    options: [
      { key: "A", text: "Dynamic Host Configuration Protocol" },
      { key: "B", text: "Domain Host Connection Parameter" },
      { key: "C", text: "Distributed Hardware Communication Portal" },
      { key: "D", text: "Dynamic Hypermedia Cache Provisioning" }
    ],
    correctAnswer: "A",
    explanation: "DHCP is the abbreviation for Dynamic Host Configuration Protocol, which configures client network stacks automatically.",
    section: "Networks"
  },
  {
    id: 1088,
    text: "Which network topology connects all devices to a single central hub or switch device?",
    options: [
      { key: "A", text: "Ring Topology" },
      { key: "B", text: "Bus Topology" },
      { key: "C", text: "Star Topology" },
      { key: "D", text: "Mesh Topology" }
    ],
    correctAnswer: "C",
    explanation: "In a Star Topology, all devices connect directly to a central node (usually a switch or hub), isolating line issues to individual devices.",
    section: "Networks"
  },
  {
    id: 1089,
    text: "What does a DNS 'MX' record specify?",
    options: [
      { key: "A", text: "The IPv4 address mapping for a given host domain" },
      { key: "B", text: "The mail server responsible for receiving email messages on behalf of a domain" },
      { key: "C", text: "An alias mapping one domain to a canonical target domain" },
      { key: "D", text: "A plain-text signature used for security verifications" }
    ],
    correctAnswer: "B",
    explanation: "MX (Mail Exchanger) records point to the mail servers designated to handle incoming email for a domain.",
    section: "Networks"
  },
  {
    id: 1090,
    text: "Which layer of the OSI model handles data compression, encryption, and syntax translations?",
    options: [
      { key: "A", text: "Layer 4 - Transport" },
      { key: "B", text: "Layer 5 - Session" },
      { key: "C", text: "Layer 6 - Presentation" },
      { key: "D", text: "Layer 7 - Application" }
    ],
    correctAnswer: "C",
    explanation: "The Presentation Layer (Layer 6) formats, encrypts, or compresses raw application data to ensure standard, legible structures.",
    section: "Networks"
  },
  {
    id: 1091,
    text: "Which of the following IPv4 addresses represents a Class C address?",
    options: [
      { key: "A", text: "10.50.2.1" },
      { key: "B", text: "172.16.55.10" },
      { key: "C", text: "192.168.10.25" },
      { key: "D", text: "224.0.0.1" }
    ],
    correctAnswer: "C",
    explanation: "Class C IPv4 addresses fall in the octet range of 192.0.0.0 to 223.255.255.255. Class A is 1-126, Class B is 128-191.",
    section: "Networks"
  },
  {
    id: 1092,
    text: "What protocol operates on UDP port 123 and is used to synchronize the system clocks of computer hosts over a network?",
    options: [
      { key: "A", text: "DNS" },
      { key: "B", text: "SNMP" },
      { key: "C", text: "NTP (Network Time Protocol)" },
      { key: "D", text: "DHCP" }
    ],
    correctAnswer: "C",
    explanation: "NTP (Network Time Protocol) synchronizes computer clocks to highly precise reference clocks, operating over UDP port 123.",
    section: "Networks"
  },
  {
    id: 1093,
    text: "Which mechanism prevents packet routing loops in an IP network by decrementing a numeric value on every router bounce?",
    options: [
      { key: "A", text: "ARP Verification" },
      { key: "B", text: "Time to Live (TTL) / Hop Limit" },
      { key: "C", text: "TCP Retransmission Timer" },
      { key: "D", text: "MTU Frame Buffer" }
    ],
    correctAnswer: "B",
    explanation: "The TTL field (IPv4) or Hop Limit (IPv6) is decremented by 1 at each router. If it hits 0, the packet is discarded and an error returned, preventing infinite routing loops.",
    section: "Networks"
  },
  {
    id: 1094,
    text: "What does the DNS 'A' record map?",
    options: [
      { key: "A", text: "A domain name to an IPv6 address" },
      { key: "B", text: "A domain name to an IPv4 address" },
      { key: "C", text: "An IPv4 address back to a hostname" },
      { key: "D", text: "An email exchange server mapping" }
    ],
    correctAnswer: "B",
    explanation: "An 'A' (Address) record maps a hostname domain directly to its corresponding 32-bit IPv4 address.",
    section: "Networks"
  },
  {
    id: 1095,
    text: "What is the main function of the Session Layer (Layer 5) of the OSI model?",
    options: [
      { key: "A", text: "To encrypt application traffic using cryptographic keys" },
      { key: "B", text: "To establish, manage, synchronize, and terminate communication dialogues between application sessions" },
      { key: "C", text: "To divide logical data streams into physical network frames" },
      { key: "D", text: "To route packets across the physical gateway cards" }
    ],
    correctAnswer: "B",
    explanation: "The Session Layer establishes and maintains the communication sessions between applications, handling coordination, checkpointing, and termination.",
    section: "Networks"
  },
  {
    id: 1096,
    text: "Which network card mode allows a physical adapter to inspect and read all incoming ethernet frames regardless of target MAC address?",
    options: [
      { key: "A", text: "Unicast Filtering Mode" },
      { key: "B", text: "Promiscuous Mode" },
      { key: "C", text: "Bridge Relay Mode" },
      { key: "D", text: "Passive Loop Mode" }
    ],
    correctAnswer: "B",
    explanation: "Promiscuous mode forces the network card to capture and deliver all frames seen on the wire to the system, which is crucial for network sniffers (like Wireshark).",
    section: "Networks"
  },
  {
    id: 1097,
    text: "What protocol is used by network administrators to securely manage and configure devices on TCP port 22?",
    options: [
      { key: "A", text: "Telnet" },
      { key: "B", text: "SSH" },
      { key: "C", text: "SFTP" },
      { key: "D", text: "HTTPS" }
    ],
    correctAnswer: "B",
    explanation: "SSH operates on port 22 and provides encrypted CLI terminal access for configuring switches, routers, and host servers.",
    section: "Networks"
  },
  {
    id: 1098,
    text: "What does CIDR stand for in modern IP address allocation designs?",
    options: [
      { key: "A", text: "Classless Inter-Domain Routing" },
      { key: "B", text: "Computerized Internal Diagnostic Relay" },
      { key: "C", text: "Central Internet Domain Router" },
      { key: "D", text: "Common Interface Data Resolution" }
    ],
    correctAnswer: "A",
    explanation: "CIDR stands for Classless Inter-Domain Routing, which replaced class-based boundaries with flexible prefix lengths (e.g., /22) to conserve address spaces.",
    section: "Networks"
  },
  {
    id: 1099,
    text: "What is the primary benefit of a VPN (Virtual Private Network)?",
    options: [
      { key: "A", text: "It doubles physical download and upload bandwidth speeds" },
      { key: "B", text: "It establishes an encrypted connection tunnel across public networks, securing corporate resource access" },
      { key: "C", text: "It bypasses the need for local default gateways" },
      { key: "D", text: "It replaces MAC addresses with randomized virtual tokens" }
    ],
    correctAnswer: "B",
    explanation: "VPNs create a encrypted tunnel over the internet, allowing remote users or branch offices to safely join a private intranet.",
    section: "Networks"
  },
  {
    id: 1100,
    text: "Which standard port does unencrypted FTP use for command connection channel setups?",
    options: [
      { key: "A", text: "Port 21" },
      { key: "B", text: "Port 22" },
      { key: "C", text: "Port 23" },
      { key: "D", text: "Port 25" }
    ],
    correctAnswer: "A",
    explanation: "FTP initiates its control connection channel on TCP Port 21 to coordinate and manage session commands.",
    section: "Networks"
  }
];
