import React, { useState, useRef } from "react";
import VCard from "./VCard";
import { ConfigProvider, Pagination } from "antd";

const VCardsPagination = ({ cardsData, id }) => {
  const STEP_PAGE_SIZE = 3;
  const [stepPage, setStepPage] = useState(1);
  const cardsContainerRef = useRef(null);
  const stepStart = (stepPage - 1) * STEP_PAGE_SIZE;
  const stepEnd = stepStart + STEP_PAGE_SIZE;
  const stepPaginatedCards = cardsData.slice(stepStart, stepEnd);

  const handlePageChange = (page) => {
    setStepPage(page);

    cardsContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div ref={cardsContainerRef} className="VCard-cnt col3" id={id}>
        {stepPaginatedCards.map((card, index) => (
          <VCard
            key={index}
            image={card.image}
            title={card.title}
            buttonText={card.buttonText}
            link={card.link}
            highlight={card.highlight}
            link2={card.link2}
            buttonText2={card.buttonText2}
            badgeText={card.badgeText}
            isVideo={card.isVideo}
            videoUrl={card.videoUrl}
            videoTitle={card.videoTitle}
            duration={card.duration}
            width={card.width}
            height={card.height}
            rId={card.rId}
          >
            {card.content}
          </VCard>
        ))}
      </div>
      {cardsData.length > STEP_PAGE_SIZE && (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00a996",
              borderRadius: 100,
              colorBgContainer: "#e5f5fb",
            },
          }}
        >
          <Pagination
            align="center"
            current={stepPage}
            pageSize={STEP_PAGE_SIZE}
            total={cardsData.length}
            showSizeChanger={false}
            showQuickJumper={false}
            showPrevNextJumpers={false}
            // onChange={(page) => setStepPage(page)}
            onChange={handlePageChange}
            className="resource-pagination"
          />
        </ConfigProvider>
      )}
    </>
  );
};

export default VCardsPagination;



// import React, { useState, useRef, useEffect } from "react";
// import VCard from "./VCard";
// import { ConfigProvider, Pagination } from "antd";

// const VCardsPagination = ({ cardsData, id }) => {
//   const [stepPage, setStepPage] = useState(1);
//   const [pageSize, setPageSize] = useState(3);

//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     const updatePageSize = () => {
//       if (window.innerWidth <= 767) {
//         setPageSize(1);
//       } else if (window.innerWidth <= 1199) {
//         setPageSize(2);
//       } else {
//         setPageSize(3);
//       }
//     };

//     updatePageSize();
//     window.addEventListener("resize", updatePageSize);

//     return () => window.removeEventListener("resize", updatePageSize);
//   }, []);

//   const stepStart = (stepPage - 1) * pageSize;
//   const stepEnd = stepStart + pageSize;
//   const stepPaginatedCards = cardsData.slice(stepStart, stepEnd);

//   const handlePageChange = (page) => {
//     setStepPage(page);

//     cardsContainerRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <>
//       <div ref={cardsContainerRef} className="VCard-cnt col3" id={id}>
//         {stepPaginatedCards.map((card, index) => (
//           <VCard
//             key={index}
//             image={card.image}
//             title={card.title}
//             buttonText={card.buttonText}
//             link={card.link}
//             highlight={card.highlight}
//             link2={card.link2}
//             buttonText2={card.buttonText2}
//             badgeText={card.badgeText}
//             isVideo={card.isVideo}
//             videoUrl={card.videoUrl}
//             videoTitle={card.videoTitle}
//             duration={card.duration}
//             width={card.width}
//             height={card.height}
//             rId={card.rId}
//           >
//             {card.content}
//           </VCard>
//         ))}
//       </div>

//       {cardsData.length > pageSize && (
//         <ConfigProvider
//           theme={{
//             token: {
//               colorPrimary: "#00a996",
//               borderRadius: 100,
//               colorBgContainer: "#e5f5fb",
//             },
//           }}
//         >
//           <Pagination
//             align="center"
//             current={stepPage}
//             pageSize={pageSize}
//             total={cardsData.length}
//             showSizeChanger={false}
//             showQuickJumper={false}
//             showPrevNextJumpers={false}
//             onChange={handlePageChange}
//             className="resource-pagination"
//           />
//         </ConfigProvider>
//       )}
//     </>
//   );
// };

// export default VCardsPagination;