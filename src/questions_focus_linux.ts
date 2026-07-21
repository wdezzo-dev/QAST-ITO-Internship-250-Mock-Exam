import { Question } from "./types";

export const QUESTIONS_FOCUS_LINUX: Question[] = [
  {
    id: 1051,
    text: "In Linux, what command is used to change the read, write, and execute permissions of a file?",
    options: [
      { key: "A", text: "chown" },
      { key: "B", text: "chmod" },
      { key: "C", text: "chgrp" },
      { key: "D", text: "perm" }
    ],
    correctAnswer: "B",
    explanation: "chmod (change mode) alters file permissions using octal (e.g., 755) or symbolic notations.",
    section: "Linux"
  },
  {
    id: 1052,
    text: "Which command in Linux displays a list of currently running processes in real-time, along with CPU and memory usage?",
    options: [
      { key: "A", text: "ps -ef" },
      { key: "B", text: "top" },
      { key: "C", text: "df -h" },
      { key: "D", text: "free" }
    ],
    correctAnswer: "B",
    explanation: "The 'top' utility provides an interactive, real-time diagnostic table showing process priority, load metrics, and active system resource shares.",
    section: "Linux"
  },
  {
    id: 1053,
    text: "What does the numeric permission '755' mean for a file in Linux?",
    options: [
      { key: "A", text: "Full access for Owner, and Read/Write access for Group and Others" },
      { key: "B", text: "Full access for Owner, and Read/Execute access for Group and Others" },
      { key: "C", text: "Read/Write for Everyone, and Execute only for the Owner" },
      { key: "D", text: "No access for anyone except root" }
    ],
    correctAnswer: "B",
    explanation: "7 (read+write+execute = 4+2+1) is for Owner; 5 (read+execute = 4+1) is for Group; 5 (read+execute = 4+1) is for Others.",
    section: "Linux"
  },
  {
    id: 1054,
    text: "Which directory in a standard Linux system contains system configuration files?",
    options: [
      { key: "A", text: "/var" },
      { key: "B", text: "/bin" },
      { key: "C", text: "/etc" },
      { key: "D", text: "/home" }
    ],
    correctAnswer: "C",
    explanation: "The /etc (et cetera) directory is the standard location for system-wide configuration files and startup scripts.",
    section: "Linux"
  },
  {
    id: 1055,
    text: "Which Linux command searches for specific text strings or regular expression patterns inside files?",
    options: [
      { key: "A", text: "find" },
      { key: "B", text: "grep" },
      { key: "C", text: "locate" },
      { key: "D", text: "sed" }
    ],
    correctAnswer: "B",
    explanation: "grep (global regular expression print) scans files for lines matching a pattern and outputs them to standard out.",
    section: "Linux"
  },
  {
    id: 1056,
    text: "How do you view the manual or documentation for a specific command (e.g., 'tar') in the terminal?",
    options: [
      { key: "A", text: "help tar" },
      { key: "B", text: "man tar" },
      { key: "C", text: "doc tar" },
      { key: "D", text: "info tar --view" }
    ],
    correctAnswer: "B",
    explanation: "The 'man' (manual) command displays formatted reference pages for tools, commands, and standard libraries.",
    section: "Linux"
  },
  {
    id: 1057,
    text: "In a Linux shell, what is the purpose of the pipe operator ( | )?",
    options: [
      { key: "A", text: "To terminate the execution of the current foreground command" },
      { key: "B", text: "To redirect the output of one command to serve as the input of another command" },
      { key: "C", text: "To append output data directly to a physical log file" },
      { key: "D", text: "To run multiple commands in parallel in the background" }
    ],
    correctAnswer: "B",
    explanation: "The pipe symbol ( | ) takes the standard output (stdout) of the command on its left and feeds it into the standard input (stdin) of the command on its right.",
    section: "Linux"
  },
  {
    id: 1058,
    text: "Which command would you use to view the available disk space on all mounted filesystems in a human-readable format?",
    options: [
      { key: "A", text: "du -sh" },
      { key: "B", text: "df -h" },
      { key: "C", text: "free -m" },
      { key: "D", text: "fdisk -l" }
    ],
    correctAnswer: "B",
    explanation: "df (disk free) with the -h flag (human-readable) shows disk utilization percentages, total sizes, and remaining space in GB or MB.",
    section: "Linux"
  },
  {
    id: 1059,
    text: "What is the purpose of the 'sudo' prefix before a command?",
    options: [
      { key: "A", text: "To execute the command with superuser (root) administrative privileges" },
      { key: "B", text: "To check the command for logical or syntax errors before executing" },
      { key: "C", text: "To accelerate execution speed by allocating extra CPU cores" },
      { key: "D", text: "To run the command in offline compatibility mode" }
    ],
    correctAnswer: "A",
    explanation: "sudo (superuser do) lets permitted users run commands as the root user or another administrator, depending on security policies.",
    section: "Linux"
  },
  {
    id: 1060,
    text: "Which command is used to terminate a runaway or unresponsive process by its Process ID (PID)?",
    options: [
      { key: "A", text: "stop" },
      { key: "B", text: "kill" },
      { key: "C", text: "end" },
      { key: "D", text: "close" }
    ],
    correctAnswer: "B",
    explanation: "The 'kill' command sends a specific signal (by default, SIGTERM) to a process ID to instruct it to terminate safely.",
    section: "Linux"
  },
  {
    id: 1061,
    text: "What does the 'chown' command stand for and do in Linux file administration?",
    options: [
      { key: "A", text: "Change owner; alters the user and/or group ownership of a file or directory" },
      { key: "B", text: "Check owner; prints security reports of folder access rights" },
      { key: "C", text: "Change override; elevates user priorities temporarily" },
      { key: "D", text: "Channel open; provisions new network listening sockets" }
    ],
    correctAnswer: "A",
    explanation: "chown alters the designated owner user and/or group belonging of target directories or file entities.",
    section: "Linux"
  },
  {
    id: 1062,
    text: "How do you search for files named 'app.log' recursively starting from the root directory in Linux?",
    options: [
      { key: "A", text: "search / -name app.log" },
      { key: "B", text: "find / -name app.log" },
      { key: "C", text: "grep app.log /" },
      { key: "D", text: "locate -all app.log" }
    ],
    correctAnswer: "B",
    explanation: "The 'find' command starting with '/' explores the complete filesystem recursively matching attributes like '-name'.",
    section: "Linux"
  },
  {
    id: 1063,
    text: "Which environment variable in Linux contains a colon-separated list of directories where the shell looks for executable commands?",
    options: [
      { key: "A", text: "$HOME" },
      { key: "B", text: "$SHELL" },
      { key: "C", text: "$PATH" },
      { key: "D", text: "$DIR" }
    ],
    correctAnswer: "C",
    explanation: "The $PATH variable tells the bash shell which directory binaries to scan when running an unpathed command (e.g., 'grep').",
    section: "Linux"
  },
  {
    id: 1064,
    text: "What does the command 'tail -f /var/log/syslog' do?",
    options: [
      { key: "A", text: "Deletes the system log to free up storage space" },
      { key: "B", text: "Displays the last 10 lines of syslog and continues to output new log lines in real-time as they are written" },
      { key: "C", text: "Counts the occurrences of errors in syslog" },
      { key: "D", text: "Edits the syslog in a terminal text interface" }
    ],
    correctAnswer: "B",
    explanation: "tail with the '-f' (follow) option keeps the stream open and automatically appends new lines to the standard output.",
    section: "Linux"
  },
  {
    id: 1065,
    text: "Which of the following describes a 'Hard Link' in the Linux filesystem?",
    options: [
      { key: "A", text: "A shortcut pointing to the file path string" },
      { key: "B", text: "A physical pointer that references the exact same underlying inode on the disk as the original file" },
      { key: "C", text: "An encrypted archive containing multiple system files" },
      { key: "D", text: "A partition boundary used to limit disk utilization" }
    ],
    correctAnswer: "B",
    explanation: "A hard link references the physical inode. Deleting the original name doesn't destroy the data as long as at least one link remains.",
    section: "Linux"
  },
  {
    id: 1066,
    text: "Which command displays the current working directory path in the terminal console?",
    options: [
      { key: "A", text: "cd" },
      { key: "B", text: "pwd" },
      { key: "C", text: "dir" },
      { key: "D", text: "where" }
    ],
    correctAnswer: "B",
    explanation: "pwd (print working directory) outputs the absolute path of the directory you are currently navigating.",
    section: "Linux"
  },
  {
    id: 1067,
    text: "What is the purpose of the '/tmp' directory in Linux?",
    options: [
      { key: "A", text: "To store system administration utility scripts" },
      { key: "B", text: "To hold temporary files, which are often cleared automatically on reboot" },
      { key: "C", text: "To host user-defined network socket properties" },
      { key: "D", text: "To store template configurations for new shell accounts" }
    ],
    correctAnswer: "B",
    explanation: "/tmp stores temporary data created by system operations and apps. It is frequently flushed upon boot or periodically.",
    section: "Linux"
  },
  {
    id: 1068,
    text: "Which keyboard shortcut sends a SIGINT (Interrupt) signal to terminate the current foreground command running in the terminal?",
    options: [
      { key: "A", text: "Ctrl + Z" },
      { key: "B", text: "Ctrl + C" },
      { key: "C", text: "Ctrl + D" },
      { key: "D", text: "Ctrl + \'" }
    ],
    correctAnswer: "B",
    explanation: "Ctrl + C issues SIGINT to stop the active process, while Ctrl + Z issues SIGTSTP to pause/suspend it.",
    section: "Linux"
  },
  {
    id: 1069,
    text: "What command creates a compressed tarball archive named 'backup.tar.gz' from a directory named '/data'?",
    options: [
      { key: "A", text: "tar -cvf backup.tar.gz /data" },
      { key: "B", text: "tar -czvf backup.tar.gz /data" },
      { key: "C", text: "tar -xzvf backup.tar.gz /data" },
      { key: "D", text: "zip backup.tar.gz /data" }
    ],
    correctAnswer: "B",
    explanation: "-c creates, -z applies gzip compression, -v is verbose, and -f specifies the output archive filename.",
    section: "Linux"
  },
  {
    id: 1070,
    text: "Which file contains the local user database, specifying usernames, user IDs, group IDs, home folders, and shell choices?",
    options: [
      { key: "A", text: "/etc/shadow" },
      { key: "B", text: "/etc/passwd" },
      { key: "C", text: "/etc/users" },
      { key: "D", text: "/etc/group" }
    ],
    correctAnswer: "B",
    explanation: "/etc/passwd stores public user identity configurations, while /etc/shadow holds secure, encrypted user passwords.",
    section: "Linux"
  },
  {
    id: 1071,
    text: "In Linux, what does a umask value of '022' do to newly created files?",
    options: [
      { key: "A", text: "Sets permissions of files to 755" },
      { key: "B", text: "Subtracts write permissions for group and others, resulting in default 644 file permissions" },
      { key: "C", text: "Forces files to be read-only for everyone" },
      { key: "D", text: "Sets file execute permissions automatically" }
    ],
    correctAnswer: "B",
    explanation: "Default file permissions are 666. Subtracting umask 022 gives 644 (rw-r--r--). Direct execute bits are not assigned by default.",
    section: "Linux"
  },
  {
    id: 1072,
    text: "What does the command 'free -m' display?",
    options: [
      { key: "A", text: "Available network interface speeds in Mbps" },
      { key: "B", text: "Available and used physical and swap memory in megabytes" },
      { key: "C", text: "Total remaining disk block storage spaces" },
      { key: "D", text: "The percentage of free CPU thread allocations" }
    ],
    correctAnswer: "B",
    explanation: "The 'free' utility displays RAM utilization statistics, with the '-m' flag specifying measurements in megabytes.",
    section: "Linux"
  },
  {
    id: 1073,
    text: "Which command allows you to change the password of a user account?",
    options: [
      { key: "A", text: "chpass" },
      { key: "B", text: "passwd" },
      { key: "C", text: "pwdmod" },
      { key: "D", text: "shadow" }
    ],
    correctAnswer: "B",
    explanation: "The 'passwd' command prompts for current and new password sequences to update user authentication structures.",
    section: "Linux"
  },
  {
    id: 1074,
    text: "What is the purpose of the 'df' command in Linux?",
    options: [
      { key: "A", text: "To search directories and find specific filenames" },
      { key: "B", text: "To report the volume of used and available disk space on mounted filesystems" },
      { key: "C", text: "To check the system memory and swap usage limits" },
      { key: "D", text: "To debug broken driver files" }
    ],
    correctAnswer: "B",
    explanation: "df (disk free) displays structural metrics of disk usage for all mounted block storage partitions.",
    section: "Linux"
  },
  {
    id: 1075,
    text: "How do you view the IP address configuration of network adapters in modern Linux?",
    options: [
      { key: "A", text: "netstat -r" },
      { key: "B", text: "ip addr" },
      { key: "C", text: "ifconfig --setup" },
      { key: "D", text: "route show" }
    ],
    correctAnswer: "B",
    explanation: "While legacy systems use 'ifconfig', modern distributions utilize 'ip addr' from the iproute2 suite as the default configuration utility.",
    section: "Linux"
  },
  {
    id: 1076,
    text: "What is the PID (Process ID) of the systemd / init process, which is the parent of all other processes?",
    options: [
      { key: "A", text: "PID 0" },
      { key: "B", text: "PID 1" },
      { key: "C", text: "PID -1" },
      { key: "D", text: "PID 100" }
    ],
    correctAnswer: "B",
    explanation: "The init or systemd process is booted first by the kernel and always takes PID 1, serving as the root of the process tree.",
    section: "Linux"
  },
  {
    id: 1077,
    text: "In a bash terminal, which character sequence appends the output of a command to an existing file without overwriting it?",
    options: [
      { key: "A", text: ">" },
      { key: "B", text: ">>" },
      { key: "C", text: "<" },
      { key: "D", text: "&&" }
    ],
    correctAnswer: "B",
    explanation: "A single '>' redirects and overwrites the target file, while '>>' appends the data stream to the end of the file.",
    section: "Linux"
  },
  {
    id: 1078,
    text: "Which command outputs the contents of a text file in reverse page order, starting from the last line?",
    options: [
      { key: "A", text: "cat" },
      { key: "B", text: "tac" },
      { key: "C", text: "rev" },
      { key: "D", text: "back" }
    ],
    correctAnswer: "B",
    explanation: "'tac' is literally 'cat' spelled backwards. It reads files and prints their lines in reverse order (bottom to top).",
    section: "Linux"
  },
  {
    id: 1079,
    text: "Which command lists files in a directory ordered by modification time, showing the newest files first with details?",
    options: [
      { key: "A", text: "ls -la" },
      { key: "B", text: "ls -lt" },
      { key: "C", text: "ls -lh" },
      { key: "D", text: "ls -lS" }
    ],
    correctAnswer: "B",
    explanation: "-l lists details (long format), and -t sorts the entries based on their last modification timestamp.",
    section: "Linux"
  },
  {
    id: 1080,
    text: "What does the command 'nice -n 10 command_name' do in process scheduling?",
    options: [
      { key: "A", text: "Saves the process session so it can run offline" },
      { key: "B", text: "Launches the process with lower scheduling priority, leaving more CPU time for other applications" },
      { key: "C", text: "Schedules the process to run 10 minutes in the future" },
      { key: "D", text: "Allocates exactly 10 megabytes of memory to the command" }
    ],
    correctAnswer: "B",
    explanation: "Nice values range from -20 (highest priority) to 19 (lowest priority). Incrementing the nice value (+10) lowers scheduling priority.",
    section: "Linux"
  },
  {
    id: 1081,
    text: "What is the purpose of the 'crontab -e' command?",
    options: [
      { key: "A", text: "To encrypt system database backups" },
      { key: "B", text: "To edit the table of scheduled automated cron jobs for the current user" },
      { key: "C", text: "To examine system clock drift" },
      { key: "D", text: "To evaluate processor clock speeds" }
    ],
    correctAnswer: "B",
    explanation: "The -e flag opens the cron configuration table in the default text editor to manage automated recurring tasks.",
    section: "Linux"
  },
  {
    id: 1082,
    text: "Which command shows the current system uptime, count of logged-in users, and system load averages?",
    options: [
      { key: "A", text: "uptime" },
      { key: "B", text: "whoami" },
      { key: "C", text: "last" },
      { key: "D", text: "load" }
    ],
    correctAnswer: "A",
    explanation: "The 'uptime' command reports how long the system has been active, along with average CPU loads over the past 1, 5, and 15 minutes.",
    section: "Linux"
  },
  {
    id: 1083,
    text: "How do you search for the word 'ERROR' in a directory's log files recursively in Linux?",
    options: [
      { key: "A", text: "grep -r 'ERROR' ." },
      { key: "B", text: "find 'ERROR' ." },
      { key: "C", text: "cat . | grep 'ERROR'" },
      { key: "D", text: "locate -r 'ERROR'" }
    ],
    correctAnswer: "A",
    explanation: "grep with the '-r' or '-R' flag searches the target string recursively down the active folder hierarchy.",
    section: "Linux"
  },
  {
    id: 1084,
    text: "Which directory contains the kernel image, bootloader configs, and temporary RAM disks needed during the initial boot phase?",
    options: [
      { key: "A", text: "/etc" },
      { key: "B", text: "/boot" },
      { key: "C", text: "/sys" },
      { key: "D", text: "/var" }
    ],
    correctAnswer: "B",
    explanation: "/boot stores GRUB startup configs, vmlinuz kernels, and initramfs files necessary to initialize hardware during startup.",
    section: "Linux"
  },
  {
    id: 1085,
    text: "What is the function of the 'ps aux' command?",
    options: [
      { key: "A", text: "To output disk partition tables" },
      { key: "B", text: "To display a snapshot of all active processes from all users in the system" },
      { key: "C", text: "To check connection response times" },
      { key: "D", text: "To check system volume levels" }
    ],
    correctAnswer: "B",
    explanation: "ps aux lists all active processes, user ownership, memory usage, CPU usage, and parent terminal states.",
    section: "Linux"
  },
  {
    id: 1086,
    text: "Which Linux signal forces a process to terminate immediately and cannot be caught, ignored, or blocked?",
    options: [
      { key: "A", text: "SIGTERM (15)" },
      { key: "B", text: "SIGKILL (9)" },
      { key: "C", text: "SIGINT (2)" },
      { key: "D", text: "SIGTSTP (20)" }
    ],
    correctAnswer: "B",
    explanation: "Unlike SIGTERM, SIGKILL (9) is handled directly by the kernel and cannot be intercepted or deferred by the process.",
    section: "Linux"
  },
  {
    id: 1087,
    text: "Which command lets you view the partition table structure of connected hard drives?",
    options: [
      { key: "A", text: "df -h" },
      { key: "B", text: "fdisk -l" },
      { key: "C", text: "mount -a" },
      { key: "D", text: "free -m" }
    ],
    correctAnswer: "B",
    explanation: "fdisk (fixed disk) with the -l (list) option displays the partition layouts, sectors, sizes, and flag statuses of all drives.",
    section: "Linux"
  },
  {
    id: 1088,
    text: "What does the command 'chgrp' do?",
    options: [
      { key: "A", text: "Changes user shell interfaces" },
      { key: "B", text: "Changes the group ownership of a file or directory" },
      { key: "C", text: "Edits system directory classifications" },
      { key: "D", text: "Changes password security groups" }
    ],
    correctAnswer: "B",
    explanation: "chgrp (change group) modifies the secondary group association assigned to a specific target file.",
    section: "Linux"
  },
  {
    id: 1089,
    text: "Which system directory contains active logs and service operational tracking records?",
    options: [
      { key: "A", text: "/etc" },
      { key: "B", text: "/var/log" },
      { key: "C", text: "/usr/share" },
      { key: "D", text: "/opt" }
    ],
    correctAnswer: "B",
    explanation: "The /var/log directory is the standard location for system logs, web server logs, and service audit trails.",
    section: "Linux"
  },
  {
    id: 1090,
    text: "In bash, what is the default behavior of the '&&' operator between two commands?",
    options: [
      { key: "A", text: "It executes both commands simultaneously in the background" },
      { key: "B", text: "It executes the second command only if the first command succeeds (exit code 0)" },
      { key: "C", text: "It executes the second command only if the first command fails (exit code non-zero)" },
      { key: "D", text: "It merges the standard outputs of both commands together" }
    ],
    correctAnswer: "B",
    explanation: "'&&' is a logical AND operator. The shell evaluates the second command only if the first exits successfully.",
    section: "Linux"
  },
  {
    id: 1091,
    text: "What does the 'du -sh /var' command do?",
    options: [
      { key: "A", text: "Deletes duplicate files in the /var directory" },
      { key: "B", text: "Displays the total disk space utilized by /var in a human-readable format" },
      { key: "C", text: "Measures network card transmission speeds" },
      { key: "D", text: "Lists hidden user folders" }
    ],
    correctAnswer: "B",
    explanation: "du (disk usage) with '-s' (summarize) and '-h' (human-readable) aggregates total file size in a single output line.",
    section: "Linux"
  },
  {
    id: 1092,
    text: "Which command displays the Linux kernel version and hardware architecture details?",
    options: [
      { key: "A", text: "uname -a" },
      { key: "B", text: "kernel -v" },
      { key: "C", text: "whoami" },
      { key: "D", text: "systemctl" }
    ],
    correctAnswer: "A",
    explanation: "The 'uname' utility prints system information, with the '-a' flag showing operating system, hostname, kernel version, and CPU architecture.",
    section: "Linux"
  },
  {
    id: 1093,
    text: "How can you view the system initialization dmesg log buffer in real-time?",
    options: [
      { key: "A", text: "cat /proc/uptime" },
      { key: "B", text: "dmesg -w" },
      { key: "C", text: "syslog -print" },
      { key: "D", text: "initshow" }
    ],
    correctAnswer: "B",
    explanation: "dmesg outputs kernel ring buffer diagnostics, and '-w' (follow/watch) waits for and displays new events in real-time.",
    section: "Linux"
  },
  {
    id: 1094,
    text: "What does the sticky bit permission (t) do on a directory like /tmp?",
    options: [
      { key: "A", text: "Prevents any file creation in the folder" },
      { key: "B", text: "Ensures that only the file owner, directory owner, or superuser can delete or rename files in that directory" },
      { key: "C", text: "Forces files to compress automatically" },
      { key: "D", text: "Encrypts all files in the folder automatically" }
    ],
    correctAnswer: "B",
    explanation: "The sticky bit prevents users from deleting or renaming files owned by others in a shared public directory.",
    section: "Linux"
  },
  {
    id: 1095,
    text: "Which command is used to control systemd services (e.g., restarting Apache web server)?",
    options: [
      { key: "A", text: "servicectl apache2 restart" },
      { key: "B", text: "systemctl restart apache2" },
      { key: "C", text: "sysrestart apache2" },
      { key: "D", text: "service restart apache2" }
    ],
    correctAnswer: "B",
    explanation: "systemctl is the standard systemd controller command. The syntax is 'systemctl action service_name'.",
    section: "Linux"
  },
  {
    id: 1096,
    text: "What does the command 'ln -s original_file shortcut_link' do?",
    options: [
      { key: "A", text: "Creates a hard copy backup on secondary disks" },
      { key: "B", text: "Creates a symbolic (soft) link to the original file" },
      { key: "C", text: "Deletes the original file and replaces it with a shortcut" },
      { key: "D", text: "Calculates file hash parity codes" }
    ],
    correctAnswer: "B",
    explanation: "The '-s' flag specifies a symbolic link, which acts as a redirect to the original file's path string on the system.",
    section: "Linux"
  },
  {
    id: 1097,
    text: "In the '/etc/fstab' file, what is configured?",
    options: [
      { key: "A", text: "System user passwords and logins" },
      { key: "B", text: "Filesystem mounting information, listing devices, mount points, types, and options" },
      { key: "C", text: "Network adapter IP assignments" },
      { key: "D", text: "Cron schedule tables" }
    ],
    correctAnswer: "B",
    explanation: "/etc/fstab (file system table) defines how local and remote storage drives are mounted into the filesystem tree during boot.",
    section: "Linux"
  },
  {
    id: 1098,
    text: "Which command counts the number of lines in a text file named 'users.txt'?",
    options: [
      { key: "A", text: "wc -l users.txt" },
      { key: "B", text: "count users.txt" },
      { key: "C", text: "grep -c users.txt" },
      { key: "D", text: "lines users.txt" }
    ],
    correctAnswer: "A",
    explanation: "wc (word count) with the '-l' flag reports the total count of newline characters found in the target file.",
    section: "Linux"
  },
  {
    id: 1099,
    text: "What does the 'nohup command_name &' command construct do?",
    options: [
      { key: "A", text: "Pauses command thread executions until a user wakes it" },
      { key: "B", text: "Runs the command in the background, immune to hangup (SIGHUP) signals when the terminal is closed" },
      { key: "C", text: "Measures system hardware resource shares" },
      { key: "D", text: "Runs the command under safe virtual sandbox environments" }
    ],
    correctAnswer: "B",
    explanation: "nohup (no hangup) routes standard outputs to nohup.out, keeping background tasks running even after you exit the SSH session.",
    section: "Linux"
  },
  {
    id: 1100,
    text: "What does the 'id' command output in a Linux shell terminal?",
    options: [
      { key: "A", text: "The CPU model and architecture identifier" },
      { key: "B", text: "The real and effective user ID (UID), group ID (GID), and groups the user belongs to" },
      { key: "C", text: "The physical MAC address of the network interface" },
      { key: "D", text: "The filesystem UUID code" }
    ],
    correctAnswer: "B",
    explanation: "The 'id' command displays numeric ID codes (UID and GIDs) associated with active shell sessions.",
    section: "Linux"
  }
];
