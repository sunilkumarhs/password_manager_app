import { FaRegCreditCard, FaRegShareSquare } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";


export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
);
export const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/
);
export const lowerCaseRegex = new RegExp(/[a-z]/);
export const upperCaseRegex = new RegExp(/[A-Z]/);
export const numberRegex = new RegExp(/[0-9]/);
export const specialRegex = new RegExp(/[!@#$%^&*()\-+={}[\]:;"'<>,.?/|\\]/);

export const components = [
  {
    title: "Share-Passwords",
    href: "",
    logo: <FaRegShareSquare className="text-orange-600" />,
    description:
      "Share your passwords with trusted person for access granting and view the shared passwords.",
  },
  {
    title: "Secure-Notes",
    href: "",
    logo: <FaNoteSticky className="text-orange-600" />,
    description:
      "Secure your secret or important information like notes, address, etc..",
  },
  {
    title: "Payment-Cards",
    href: "",
    logo: <FaRegCreditCard className="text-orange-600" />,
    description:
      "Adding payment cards info for secure transaction and confidentiality",
  },
  {
    title: "Bank-Accounts",
    href: "",
    logo: <MdAccountBalance className="text-orange-600" />,
    description:
      "Adding the bank deatails like acc-number, ifsc-code and other deatils to secure data.",
  },
];

export const authPoints = [
  {
    title: "Multi-Factor Authentication",
    content:
      "Secure your account with multiple layers of verification, including biometrics and one-time codes.",
  },
  {
    title: "Role-Based Access Control",
    content:
      "Granular permissions ensure the right people have the right access to your sensitive data.",
  },
  {
    title: "Audit Logging",
    content:
      "Track all account activity to monitor for suspicious behavior and ensure compliance.",
  },
];

export const passPoints = [
  {
    title: "Cross-Device Sync",
    content: "Access your passwords from any device, anytime, anywhere.",
  },
  {
    title: "Intuitive Interface",
    content:
      "Easily manage and retrieve your credentials with our user-friendly design.",
  },
];

export const passGenPoints = [
  {
    title: "Customizable Complexity",
    content: "Generate strong, unique passwords tailored to your needs.",
  },
  {
    title: "Effortless Integration",
    content: "Seamlessly integrate the generator across your apps and devices.",
  },
  {
    title: "Password Strength Analysis",
    content: "Evaluate the security of your existing passwords.g",
  },
  {
    title: "Compromise Monitoring",
    content: "Receive alerts if your passwords have been exposed in a breach.",
  },
];

export const encPassPoints = [
  {
    title: "Military-Grade Encryption",
    content:
      "Your passwords are secured with the latest encryption protocols, ensuring your data remains impenetrable.",
  },
  {
    title: "Zero-Knowledge Architecture",
    content:
      "We never have access to your plaintext passwords - your data is encrypted and decrypted locally on your device.",
  },
  {
    title: "Regular Audits and Updates",
    content:
      "Our security practices are constantly reviewed and improved to keep pace with the evolving threat landscape.",
  },
  {
    title: "Seamless Password Management",
    content:
      "Easily store, retrieve, and share your passwords across all your devices, while maintaining the highest levels of security.",
  },
  {
    title: "Proactive Security Monitoring",
    content:
      "Receive real-time alerts and notifications about potential security threats, allowing you to stay one step ahead of cybercriminals.",
  },
];

export const sharingPassPoints = [
  {
    title: "Collaborate Securely",
    content:
      "Grant controlled access to team members without revealing sensitive passwords.",
  },
  {
    title: "Cloud-Synced Sharing",
    content: "Share credentials across all your devices and stay in sync.",
  },
  {
    title: "Granular Permissions",
    content: "Manage sharing privileges and monitor access activity.",
  },
  {
    title: "Real-Time Notifications",
    content: "Get alerted when passwords are shared, viewed, or revoked.",
  },
];

export const auditPoints = [
  {
    title: "Breach Monitoring",
    content:
      "Continuous scans for data breaches that may compromise your credentials.",
  },
  {
    title: "Password Strength Analysis",
    content: "Identify weak or reused passwords that need to be updated.",
  },
  {
    title: "Suspicious Activity Alerts",
    content:
      "Receive instant notifications of any unauthorized access attempts.",
  },
];

export const securePassLinks = [
  {
    title: "SECUREPASS",
    content: [
      {
        linkName: "HomePage",
        path: "",
      },
      {
        linkName: "Download",
        path: "",
      },
      {
        linkName: "Pricing",
        path: "",
      },
      {
        linkName: "How it Works",
        path: "",
      },
      {
        linkName: "Premium vs Free",
        path: "",
      },
    ],
  },
  {
    title: "FEATURES",
    content: [
      {
        linkName: "SecurePassAuthenticator",
        path: "#page1",
      },
      {
        linkName: "Password Vault",
        path: "#page2",
      },
      {
        linkName: "Digital Wallet",
        path: "#page3",
      },
      {
        linkName: "Password Generator",
        path: "#page4",
      },
      {
        linkName: "Password Manager",
        path: "#page5",
      },
      {
        linkName: "Password Sharing",
        path: "#page6",
      },
      {
        linkName: "Dark Web Monitoring",
        path: "#page7",
      },
    ],
  },
  {
    title: "FOR BUSINESS",
    content: [
      {
        linkName: "Teams",
        path: "",
      },
      {
        linkName: "Enterprise",
        path: "",
      },
      {
        linkName: "Multi-Factor Authentication",
        path: "",
      },
      {
        linkName: "Single-Sign On",
        path: "",
      },
      {
        linkName: "Admin Login",
        path: "",
      },
      {
        linkName: "ROI Calculator",
        path: "",
      },
      {
        linkName: "Business Resources",
        path: "",
      },
    ],
  },
];

export const footerLinks = [
  {
    linkName: "Privacy",
    path: "",
  },
  {
    linkName: "Terms of Service",
    path: "",
  },
  {
    linkName: "Imprint",
    path: "",
  },
  {
    linkName: "Cookies Preferences",
    path: "",
  },
  {
    linkName: "Your Privacy Choices",
    path: "",
  },
];