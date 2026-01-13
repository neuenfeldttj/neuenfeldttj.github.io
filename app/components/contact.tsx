import Image from 'next/image'
import SectionTitle from './section_title';

export default function Contact() {
    return (
        <div id="contact" className="min-h-screen pb-32">
            <SectionTitle>CONTACT</SectionTitle>
            <p className="text-3xl text-blackboard mx-8 mb-32 ">FEEL FREE TO CONTACT ME! CLICK BELOW TO SEE MY LINKEDIN, GITHUB AND EMAIL.</p>
            <div className="flex justify-center">
            <a
                href="https://www.linkedin.com/in/tjneuenfeldt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-16"
            >
                <Image 
                    src="/contact/linkedin_dark.png"
                    width={100}
                    height={100}
                    alt="LinkedIn link"
                />
                <p className="text-2xl text-tan pt-8">
                    LINKEDIN
                </p>
            </a>

            <a
                href="https://github.com/neuenfeldttj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-16"
            >
                <Image 
                    src="/contact/github_dark.png"
                    width={100}
                    height={100}
                    alt="Github link"
                />
                <p className="text-2xl text-tan pt-8">
                    GITHUB
                </p>
            </a>

            <a
                href="mailto:tjneuenfeldt@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-16"
            >
                <Image 
                    src="/contact/email_dark.png"
                    width={100}
                    height={100}
                    alt="Github link"
                />
                <p className="text-2xl text-tan pt-8">
                    EMAIL
                </p>
            </a>
            </div>
        </div>
    );
}