import React, { useState } from "react";
import { My_Project } from '../../../data/constants';
import MyProject from "./Project";

const PAGE_SIZE = 1; // Number of projects to show at a time

const PaginatedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + PAGE_SIZE, My_Project.length));
  };

  return (
    <div className="paginated-projects-container">
      <div className="case-studies-list">
        {My_Project.slice(0, visibleCount).map(caseStudy => (
          <MyProject key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>

      {visibleCount < My_Project.length && (
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: '8px 32px',
              fontSize: 16,
              borderRadius: 5,
              border: '1px solid #2291d6',
              background: 'white',
              color: '#2291d6',
              cursor: 'pointer'
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginatedProjects;

