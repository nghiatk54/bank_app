import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div
                className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className="flex flex-1 flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="HooBank"
                        className="w-[266px] h-[72px] object-contain"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                        A new way to make the payments easy, reliable and
                        secure.
                    </p>
                </div>

                <div className="flex flex-[1.5] flex-row justify-between flex-wrap w-full md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div
                            key={footerLink.title}
                            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                        >
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-6">
                                {footerLink.title}
                            </h4>
                            <ul className="list-none">
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                            index === link.length - 1
                                                ? "mb-0"
                                                : "mb-3"
                                        }`}
                                    >
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col justify-between items-center md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-poppins font-normal text-[18px] leading-[27px] text-white text-center">
                    2021 HooBank. All Rights Reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                index !== socialMedia.length - 1
                                    ? "mr-6"
                                    : "mr-0"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
