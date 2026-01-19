import React, { useEffect, useState } from "react";
import "./FAQ.css";
import { useSelector } from "react-redux";
export default function FAQ() {
  //   const faqs = useSelector((state) => state.appData.faq);
  //   const [openIndex, setOpenIndex] = useState(0);
  //   const toggleFAQ = (index) => {
  //     setOpenIndex(openIndex === index ? null : index);
  //   };

  useEffect(() => {
    const accordionItems = document.querySelectorAll(".accordion-item");
    const categoryBtns = document.querySelectorAll(".category-btn");

    // Accordion toggle (single open)
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");

      header.onclick = () => {
        const isActive = item.classList.contains("active");

        accordionItems.forEach((i) => i.classList.remove("active"));

        if (!isActive) {
          item.classList.add("active");
        }
      };
    });

    // Filter by category
    function filterByCategory(category) {
      accordionItems.forEach((item) => item.classList.remove("active"));

      let firstVisible = null;

      accordionItems.forEach((item) => {
        if (item.dataset.category === category) {
          item.classList.remove("hidden");
          if (!firstVisible) firstVisible = item;
        } else {
          item.classList.add("hidden");
        }
      });

      if (firstVisible) {
        firstVisible.classList.add("active");
      }
    }

    // Category button clicks
    categoryBtns.forEach((btn) => {
      btn.onclick = () => {
        categoryBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        filterByCategory(btn.dataset.category);
      };
    });

    // Initial state
    filterByCategory("about");

    // Cleanup (important in React)
    return () => {
      accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        header && (header.onclick = null);
      });

      categoryBtns.forEach((btn) => {
        btn.onclick = null;
      });
    };
  }, []);
  return (
    // <div className='container'>
    // 	<div className='faq'>
    // 		<div className="left-box">
    // 			<div className="faq-title light-font">FAQ</div>
    // 			<p className="faq-sub-text light-font">Find quick answers to common questions about the Quality Infrastructure Investment (QII) Reference Guide</p>
    // 		</div>
    // 		<div className="right-box  " >
    // 			<div className="faq-list">
    // 				{faqs.map((faq, index) => (
    // 					<div key={index} className={`faq-item ${openIndex === index ? "selected" : ""}`} >
    // 						<button
    // 							onClick={() => toggleFAQ(index)}
    // 							className="faq-question"
    // 						>

    // 							<span className="faq-icon icon-arrow" dangerouslySetInnerHTML={{
    // 								__html: openIndex === index ? '&#xe911;' : '&#xe915;'
    // 							}}></span>
    // 							<strong>{faq.question}</strong>
    // 						</button>
    // 						<div
    // 							className={`faq-answer-wrapper ${openIndex === index ? "open" : ""
    // 								}`}
    // 						>
    // 							<p className="faq-answer">{faq.answer}</p>
    // 						</div>
    // 					</div>
    // 				))}
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
    <main className="main-content">
      <div className="left-panel">
        <h1 className="faq-title">FAQ</h1>
        <p className="faq-description">
          Find quick answers to common questions about the Quality
          Infrastructure Investment (QII) Reference Guide
        </p>

        <div className="category-filters">
          <button className="category-btn active" data-category="about">
            About the Guide
          </button>
          <button className="category-btn" data-category="using">
            Using the Guide
          </button>
          <button className="category-btn" data-category="principles">
            About QII Principles
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div className="accordion">
          <div className="accordion-item active" data-category="about">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                What is the QII Reference Guide?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The QII Reference Guide is an interactive platform designed to
                help stakeholders understand and apply the G20 Principles for
                Quality Infrastructure Investment. It provides tools, case
                studies, and resources to support sustainable and efficient
                infrastructure development.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="about">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                Who is the QII Reference Guide for?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The QII Reference Guide is intended for government officials,
                policymakers, infrastructure planners, project managers,
                development finance professionals, and other practitioners
                involved in the planning, financing, design, construction, and
                operation of infrastructure projects. It is also a valuable
                resource for researchers and students seeking to understand
                quality infrastructure investment principles and their practical
                application.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="about">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                What is the relationship between this guide and the World
                Bank/Government of Japan?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The QII Reference Guide is a product of the Quality
                Infrastructure Investment (QII) Partnership, established in 2016
                between the World Bank and the Government of Japan. This
                partnership provides grant support to integrate QII Principles
                into World Bank infrastructure projects in developing countries
                and to raise awareness of the quality dimensions of
                infrastructure investment. The guide serves as an educational
                resource to advance these objectives globally.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="about">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                How was the content curated?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The resources featured in this guide have been curated from
                leading international development institutions, including the
                World Bank, International Finance Corporation (IFC),
                Organisation for Economic Co-operation and Development (OECD),
                Global Infrastructure Hub, Asian Infrastructure Investment Bank,
                and other recognized bodies. Content is selected based on its
                relevance to the six G20 QII Principles and its practical
                applicability to infrastructure projects across diverse sectors
                and regions.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                How do I get started with the QII Reference Guide?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                Begin by exploring the six QII Principles on the homepage:
                Sustainable Growth, Economic Efficiency, Environment,
                Resilience, Social, and Governance. Select any principle to
                access relevant case studies, guidance documents, tools, and
                resources. For users new to QII concepts, we recommend clicking
                "Want to know more about the fundamentals of QII?" on the
                homepage to build foundational understanding before exploring
                specific resources.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                How do I navigate between the six QII principles?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The six QII Principles are accessible from multiple entry points
                throughout the guide. On the homepage, select any principle from
                the navigation tiles to view associated content. Within the
                resource library, use the principle tabs (Sustainable Growth,
                Economic Efficiency, Environment, Resilience, Social,
                Governance) to filter content by your area of interest. Each
                principle page provides an overview of key concepts, actionable
                aspects, and curated resources.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                How do I filter and search for resources?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The resource library includes filtering functionality to help
                locate relevant content. Use the principle tabs to narrow
                resources by QII Principle, or use the "Filter by" option to
                refine results by resource type (Case Study, Guidance, Tools,
                Resources, Programs, Reports). These filters can be combined to
                identify materials that match your specific requirements.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                What types of resources are available and how do they differ?
              </span>
            </div>
            <div className="accordion-content">
              <div className="accordion-answer">
                <p>The guide features several resource categories:</p>
                <ul>
                  <li>
                    <strong>Case Studies:</strong> Real-world examples of QII
                    Principles applied in infrastructure projects across various
                    countries and sectors.
                  </li>
                  <li>
                    <strong>Guidance:</strong> Frameworks, standards, and
                    methodological documents to inform project planning and
                    implementation.
                  </li>
                  <li>
                    <strong>Tools:</strong> Interactive instruments, assessment
                    frameworks, and calculators for practical application.
                  </li>
                  <li>
                    <strong>Resources:</strong> Reference materials,
                    publications, and research from international institutions.
                  </li>
                  <li>
                    <strong>Programs:</strong> Ongoing initiatives and
                    institutional frameworks supporting quality infrastructure.
                  </li>
                  <li>
                    <strong>Reports:</strong> Analytical publications and
                    findings on infrastructure-related topics.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                How do I find content relevant to my sector or region?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                Case studies and resources span multiple sectors including
                transport, energy, water, urban infrastructure, and digital
                technology, as well as regions across Africa, Asia, Latin
                America, the Pacific, and Europe. Browse case study titles to
                identify projects in specific countries or sectors. Many
                resources address cross-cutting themes such as climate
                adaptation, public-private partnerships, and nature-based
                solutions that apply across contexts.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                Can I download resources for offline use?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                Many resources link to external documents, publications, and
                tools hosted by partner institutions such as the World Bank,
                OECD, and Global Infrastructure Hub. Where available, these
                external resources may be downloaded directly from the source
                institution's website in PDF or other formats.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                Are new resources added regularly?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The QII Reference Guide is updated periodically to reflect new
                case studies, guidance documents, and tools as they become
                available from partner institutions. The resource library is
                organized to feature relevant and current content aligned with
                the evolving landscape of quality infrastructure investment.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="using">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                Can I suggest a resource or case study to be included?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                Suggestions for additional resources or case studies that align
                with the G20 QII Principles are welcome. Please contact the QII
                Partnership team through the World Bank QII Partnership website
                to submit recommendations for consideration.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="principles">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                What does "Quality Infrastructure Investment" mean?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                Quality Infrastructure Investment refers to an approach to
                infrastructure development that maximizes long-term benefits
                while minimizing costs across the full life cycle of an asset.
                Quality infrastructure is sustainable, inclusive, and resilient,
                integrating environmental and social considerations into
                investment decisions. This approach prioritizes value for money,
                operational efficiency, and positive developmental outcomes over
                lowest upfront cost alone.
              </p>
            </div>
          </div>

          <div className="accordion-item" data-category="principles">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                What are the G20 QII Principles?
              </span>
            </div>
            <div className="accordion-content">
              <div className="accordion-answer">
                <p>
                  The G20 Principles for Quality Infrastructure Investment are
                  six voluntary, non-binding principles endorsed by G20 Leaders
                  at the Osaka Summit in June 2019:
                </p>
                <ul>
                  <li>
                    <strong>
                      Maximizing Positive Impact of Infrastructure:
                    </strong>{" "}
                    Ensuring infrastructure contributes to sustainable growth
                    and development aligned with national strategies and the
                    Sustainable Development Goals.
                  </li>
                  <li>
                    <strong>
                      Raising Economic Efficiency in View of Life-Cycle Cost:
                    </strong>{" "}
                    Attaining value for money by considering total costs
                    including construction, operation, and maintenance.
                  </li>
                  <li>
                    <strong>Integrating Environmental Considerations:</strong>{" "}
                    Addressing impacts on ecosystems, biodiversity, and climate
                    throughout the project life cycle.
                  </li>
                  <li>
                    <strong>
                      Building Resilience Against Natural Disasters and Other
                      Risks:
                    </strong>{" "}
                    Designing and operating infrastructure to withstand, adapt
                    to, and recover from shocks and disruptions.
                  </li>
                  <li>
                    <strong>Integrating Social Considerations:</strong> Ensuring
                    infrastructure investment supports social inclusion,
                    accessibility, and community well-being.
                  </li>
                  <li>
                    <strong>Strengthening Infrastructure Governance:</strong>{" "}
                    Promoting transparency, efficiency, and accountability in
                    infrastructure planning, procurement, and management.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item" data-category="principles">
            <div className="accordion-header">
              <div className="accordion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="accordion-question">
                Where do the QII Principles come from?
              </span>
            </div>
            <div className="accordion-content">
              <p className="accordion-answer">
                The QII Principles were developed through G20 deliberations and
                endorsed at the G20 Osaka Leaders' Summit in June 2019,
                following approval by G20 Finance Ministers and Central Bank
                Governors in Fukuoka, Japan. The principles build upon earlier
                G20 efforts to close the global infrastructure gap and mobilize
                private investment for sustainable development. They are
                supported by 44 sub-principles that provide additional detail
                for implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
