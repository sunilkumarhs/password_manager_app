import { PiPasswordFill } from "react-icons/pi";
import { FaNoteSticky } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";

export const totalValues = [
  {
    title: "Passwords",
    description: "this is the totalk number of passwords you have created.",
    symbol: (
      <PiPasswordFill className="text-2xl text-muted-foreground text-orange-600" />
    ),
    content: 10,
  },
  {
    title: "Secure-Notes",
    description: "this is the totalk number of passwords you have created.",
    symbol: (
      <FaNoteSticky className="text-2xl text-muted-foreground text-orange-600" />
    ),
    content: 6,
  },
  {
    title: "PaymentCards",
    description: "this is the totalk number of passwords you have created.",
    symbol: (
      <RiSecurePaymentFill className="text-2xl text-muted-foreground text-orange-600" />
    ),
    content: 4,
  },
  {
    title: "BankAccounts",
    description: "this is the totalk number of passwords you have created.",
    symbol: (
      <MdAccountBalance className="text-2xl text-muted-foreground text-orange-600" />
    ),
    content: 2,
  },
];

export const riskData = [
  {
    title: "At-risk passwords",
    count: "0",
    link: "ViewPasswords",
    description:
      "Passwords in your vault that are unsafe because they are weak, missing or reused on multiple sites",
  },
  {
    title: "MultifactorAuthentication",
    count: "Inactive",
    link: "Activate",
    description:
      "Boost your score by adding extra layer of protection to your securepass account.",
  },
  {
    title: "Trusted devices",
    count: "0",
    link: "Manage",
    description:
      "The number of devices where you've choosen to skip multifacter authentication for 30 days.",
  },
  {
    title: "Permitted mobile devices",
    count: "0",
    link: "Manage",
    description:
      "The number of devices that you've allowed to be used to access your securepass account.",
  },
];

export const months = [
  "01-January",
  "02-February",
  "03-March",
  "04-April",
  "05-May",
  "06-June",
  "07-July",
  "08-August",
  "09-September",
  "10-October",
  "11-November",
  "12-December",
];