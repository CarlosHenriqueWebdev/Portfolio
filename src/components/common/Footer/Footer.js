import { contactInfo } from "@/components/section-content/homepage/About/contactInfo";
import { buttonAnimationStyles } from "@/components/utils/buttonStyle";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center px-[24px] lg:px-[48px] py-[48px] text-[18px] font-medium grid gap-[24px]">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Null Null. Credits for illustrations
          on the{" "}
          <Link className="text-primaryBlue underline" href={"/"}>
            Credits Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
