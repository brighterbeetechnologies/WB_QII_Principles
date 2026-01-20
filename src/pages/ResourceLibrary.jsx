import React, { useState, useEffect } from "react";
import "./ResourceLibrary.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterDropDown from "../components/FilterDropDown";
import CardBox from "../components/CardBox";
import { principles } from "../slices/appDataSlice";
// import { principles1 } from "../slices/appDataSlice";
import { ConfigProvider, Pagination } from "antd";

export default function ResourceLibrary({ subPages, preSelected }) {
  const principleArray = useSelector(principles);
  // const principleArray1 = useSelector(principles1);

  const available_learning = useSelector((state) => state.appData.learningPath);
  const fPrinciples = useSelector((state) => state.appData.fPrinciples);
  const industry = useSelector((state) => state.appData.industry);
  const stage = useSelector((state) => state.appData.stage);
  const format = useSelector((state) => state.appData.format);
  const region = useSelector((state) => state.appData.region);
  const income = useSelector((state) => state.appData.income);

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedPrinciple, setSelectedPrinciple] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState({});

  const dispatch = useDispatch();

  // Create filter data structure
  const filterData = [
    ...fPrinciples.map((f) => ({
      show: true,
      category: "QII Principle",
      title: f.title,
      id: f.id,
    })),
    ...format.map((f) => ({
      show: true,
      category: "Media Type",
      title: f.title,
      id: f.id,
    })),
    // ...stage.map((f) => ({
    //   show: true,
    //   category: "Project Stage",
    //   title: f.title,
    //   id: f.id,
    // })),
    ...region.map((f) => ({
      show: true,
      category: "Region",
      title: f.title,
      id: f.id,
    })),
    ...income.map((f) => ({
      show: true,
      category: "Income Group",
      title: f.title,
      id: f.id,
    })),
    ...industry.map((f) => ({
      show: true,
      category: "Sector",
      title: f.title,
      id: f.id,
    })),
  ];

  // Add status to courses
  const allCourses = available_learning.map((course) => {
    return {
      ...course,
      icon: (format.find((f) => f.id === course.format) || {}).icon,
    };
  });
  const togglePrinciple = (id) => {
    setSelectedPrinciple((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  // useEffect(() => {
  //   if (preSelected) {
  //     setSelectedPrinciple(preSelected);
  //   }
  // }, []);

  // Apply filter logic
  useEffect(() => {
    const principleFilters = selectedFilters
      .filter((f) => f.category === "QII Principle")
      .map((f) => f.id);
    const mediaTypeFilters = selectedFilters
      .filter((f) => f.category === "Media Type")
      .map((f) => f.id);
    const regionFilters = selectedFilters
      .filter((f) => f.category === "Region")
      .map((f) => f.id);
    const projectStageFilters = selectedFilters
      .filter((f) => f.category === "Project Stage")
      .map((f) => f.id);
    const industryFilters = selectedFilters
      .filter((f) => f.category === "Sector")
      .map((f) => f.id);

    const filtered = allCourses.filter((course) => {
      const matchIndustry =
        industryFilters.length === 0 ||
        industryFilters.includes(course.industry);
      const matchFormat =
        mediaTypeFilters.length === 0 ||
        mediaTypeFilters.includes(course.format);
      const matchStage =
        projectStageFilters.length === 0 ||
        projectStageFilters.includes(course.stage);
      const matchRegion =
        regionFilters.length === 0 || regionFilters.includes(course.region);
      const matchPrinciple =
        principleFilters.length === 0 ||
        principleFilters.includes(course.principles);
      // const matchPrinciple =
      //   selectedPrinciple.length === 0 ||
      //   selectedPrinciple.includes(course.principles);

      return (
        matchFormat &&
        matchStage &&
        matchIndustry &&
        matchRegion &&
        matchPrinciple
      );
    });

    setFilteredCourses(filtered);
    setIndex(0);
  }, [selectedFilters, selectedPrinciple]);

  const itemsPerSlide = 6;
  const slides = [];
  for (let i = 0; i < filteredCourses.length; i += itemsPerSlide) {
    slides.push(filteredCourses.slice(i, i + itemsPerSlide));
  }

  const handleOptionSelect = (slideIndex, optionIndex) => {
    setSelected((prev) => ({ ...prev, [slideIndex]: optionIndex }));
  };

  const goToSlide = (newIndex) => {
    if (newIndex >= 0 && newIndex < slides.length) {
      setIndex(newIndex);
    }
  };

  const handleFilterChange = (selectedItems) => {
    setSelectedFilters(selectedItems);
  };

  return (
    <div className="container resource_page">
      <div className="circle-bg">
        <img src="images/circle_left.png" />
      </div>
      <h2 className="section-title light-font">QII Principles and Resources</h2>
      {/* <div className="principles-btn-cnt">
        {principleArray.map((p, idx) => (
          <button
            className={`btn primary principle_btn ${
              selectedPrinciple.includes(p.id) ? "selected" : ""
            }`}
            key={idx}
            onClick={() => {
              togglePrinciple(p.id);
            }}
          >
            {p.title}
          </button>
        ))}
      </div> */}
      {/* <div className="principles-btn-cnt">
        {subPages?.map((pages) => {
          return (
            <Link to={pages.path} className="btn primary">
              {pages.title} <span className="icon-arrow">&#xe900;</span>
            </Link>
          );
        })}
      </div> */}
      <div className="brk-line"></div>
      <div className="filter-cnt">
        <FilterDropDown
          filterData={filterData}
          preSelected={preSelected}
          onChange={handleFilterChange}
        />
        <div className="search-box">
          <input type="text" placeholder="Search query" />
          <button className="icon-search">&#xe90a;</button>
        </div>
      </div>

      <div className="resource-carousel-container">
        <div className="resource-carousel-wrapper">
          <div
            className="resource-carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div className="resource-carousel-slide" key={i}>
                <div className="resource-card-container">
                  {slide.map((card, j) => (
                    <CardBox key={j} card={card}></CardBox>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {slides.length > 0 && (
            <>
              {/* <div className="resource-carousel-footer">
                <button
                  className={`resource-carousel-btn icon-back ${
                    index === 0 ? "disabled" : ""
                  }`}
                  onClick={() => goToSlide(index - 1)}
                  disabled={index === 0}
                >
                  &#xe90e;
                </button>
                <div className="resource-carousel-dots">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === index ? "active" : ""}`}
                      onClick={() => goToSlide(i)}
                    />
                  ))}
                </div>
                <button
                  className={`resource-carousel-btn icon-next ${
                    index === slides.length - 1 || slides.length == 0
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() => goToSlide(index + 1)}
                  disabled={index === slides.length - 1 || slides.length == 0}
                >
                  &#xe90d;
                </button>
              </div> */}
              <ConfigProvider
                theme={{
                  token: {
                    // Seed Token
                    colorPrimary: "#00a996",
                    borderRadius: 100,

                    // Alias Token
                    colorBgContainer: "#e5f5fb",
                  },
                }}
              >
                <Pagination
                  align="center"
                  pageSize={1}
                  showQuickJumper={false}
                  showPrevNextJumpers={false}
                  total={slides?.length}
                  showSizeChanger={false}
                  //   current={index}
                  onChange={(data) => {
                    goToSlide(data - 1);
                  }}
                  className="resource-pagination"
                />
              </ConfigProvider>
            </>
          )}
          {slides.length === 0 && (
            <p className="no-resource">
              Resources are not available for selected filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
