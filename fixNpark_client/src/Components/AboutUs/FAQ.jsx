import { FaClipboardList, FaQuestionCircle } from "react-icons/fa";
import { useState, useEffect} from "react";
import SectionHeader from "../SectionHeader";

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('faqs.json').then(r => r.json()).then(d => setFaqs(d))
    }, [])

    console.log(faqs);

    return (
        <div className="w-2/3 mx-auto p-6">
            <SectionHeader title={"Frequently Asked Questions"} subTitle={"Your Queries, Answered – Everything You Need to Know at a Glance!"} color={"primary"}></SectionHeader>
            <div className="join join-vertical mt-4 bg-gray-100">
                {
                    faqs.map(faq =>
                        <div className="collapse collapse-arrow join-item border-base-300 border mx-auto">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-bold flex flex-row items-center gap-1"><FaQuestionCircle className="text-violet-800"/> {faq.question}</div>
                            <div className="collapse-content font-semibold text-gray-800 flex">
                                <p className="flex flex-row gap-1 text-base"><FaClipboardList className="text-orange-700"/> {faq.answer}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default FAQ;