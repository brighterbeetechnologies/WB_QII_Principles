import React, { useState } from "react";
import VCard from "./VCard";
import { ConfigProvider, Pagination } from "antd";

const VCardsPagination = ({ cardsData }) => {
  const STEP_PAGE_SIZE = 3;
  const [stepPage, setStepPage] = useState(1);
  const stepStart = (stepPage - 1) * STEP_PAGE_SIZE;
  const stepEnd = stepStart + STEP_PAGE_SIZE;
  const stepPaginatedCards = cardsData.slice(stepStart, stepEnd);
  return (
    <>
      <div className="VCard-cnt col3">
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
            onChange={(page) => setStepPage(page)}
            className="resource-pagination"
          />
        </ConfigProvider>
      )}
    </>
  );
};

export default VCardsPagination; 
