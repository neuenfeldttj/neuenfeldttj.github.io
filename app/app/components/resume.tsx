import SectionTitle from "./section_title";

export default function Resume() {
    return (
        <div id="resume" className="pb-32">
            <SectionTitle>RESUME</SectionTitle>
            <div className="flex justify-center">
                <iframe
                    src="/TJ_Neuenfeldt_Resume.pdf"
                    className="w-3/4 h-[75vh]"
                    title="PDF"
                />
            </div>
        </div>
    );
}