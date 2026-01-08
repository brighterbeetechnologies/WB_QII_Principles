
import React, { useState } from "react";
import './FAQ.css';
import { useSelector } from "react-redux";
export default function FAQ() {
	const faqs = useSelector((state) => state.appData.faq);
	const [openIndex, setOpenIndex] = useState(0);
	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className='container'>
			<div className='faq'>
				<div className="left-box">
					<div className="faq-title light-font">FAQ</div>
					<p className="faq-sub-text light-font">Find quick answers to common questions about the Quality Infrastructure Investment (QII) Reference Guide</p>
				</div>
				<div className="right-box  " >
					<div className="faq-list">
						{faqs.map((faq, index) => (
							<div key={index} className={`faq-item ${openIndex === index ? "selected" : ""}`} >
								<button
									onClick={() => toggleFAQ(index)}
									className="faq-question"
								>

									<span className="faq-icon icon-arrow" dangerouslySetInnerHTML={{
										__html: openIndex === index ? '&#xe911;' : '&#xe915;'
									}}></span>
									<strong>{faq.question}</strong>
								</button>
								<div
									className={`faq-answer-wrapper ${openIndex === index ? "open" : ""
										}`}
								>
									<p className="faq-answer">{faq.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
