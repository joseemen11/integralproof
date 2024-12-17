import React, { Fragment, useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useRouter } from "next/router";
import Footer from "../../components/footer/Footer";
import Cases from "../../api/case";
import Sidebar from "./Sidebar";
import RecentCase from "./Recent";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";

const CaseSinglePage = (props) => {
  const router = useRouter();
  const caseDetails = Cases.find((item) => item.slug === router.query.slug);
  const [expandedContent, setExpandedContent] = useState(null);
  const [expandedSection, setExpandedSection] = useState({});
  const actual = caseDetails?.cTitle;
  const toggleContent = (index) => {
    setExpandedContent((prev) => (prev === index ? null : index));
  };

  const toggleSection = (contentIndex, sectionIndex) => {
    setExpandedSection((prev) => ({
      ...prev,
      [`${contentIndex}-${sectionIndex}`]:
        !prev[`${contentIndex}-${sectionIndex}`],
    }));
  };

  return (
    <Fragment>
      <Navbar />
      <PageTitle
        pageTitle={caseDetails?.cTitle}
        pagesub={caseDetails?.cTitle}
        img={caseDetails?.cImg}
      />
      <div className="pt-[50px] md:py-[30px]">
        <div className="wraper">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-8 md:col-span-12 order-1">
              {caseDetails?.casecontent.map((content, contentIndex) => (
                <div
                  key={contentIndex}
                  className="mb-6 border-b border-gray-200 pb-4"
                >
                  {/* Content Title */}
                  <div
                    className="flex justify-between items-center cursor-pointer text-xl font-semibold text-gray-800 hover:text-verde1 transition"
                    onClick={() => toggleContent(contentIndex)}
                  >
                    {content.contentTitle}
                    {expandedContent === contentIndex ? (
                      <ChevronUpIcon className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  {expandedContent === contentIndex && (
                    <div className="pl-4 mt-3">
                      {/* Content Subtitle */}
                      <p className="text-lg font-medium text-black mb-3 text-justify">
                        {content.contentSubtitle}
                      </p>
                      {/* Sections */}
                      {content.content.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-4">
                          {/* Section Name */}
                          <div
                            className="flex justify-between items-center cursor-pointer text-md font-semibold text-azul1 hover:text-verde1 transition"
                            onClick={() =>
                              toggleSection(contentIndex, sectionIndex)
                            }
                          >
                            {section.name}
                            {expandedSection[
                              `${contentIndex}-${sectionIndex}`
                            ] ? (
                              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                          {expandedSection[
                            `${contentIndex}-${sectionIndex}`
                          ] && (
                            <ul className="pl-6 mt-2 space-y-2">
                              {section.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="text-gray-700 flex flex-col"
                                >
                                  <span className="font-bold ">
                                    {point.title}
                                  </span>
                                  <span className="text-justify">{point.subtitle}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Sidebar actual={actual} />
          </div>
          <RecentCase actual={actual} />
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CaseSinglePage;
