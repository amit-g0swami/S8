import axios from "axios";
import React from "react";
import {AiOutlineLeft} from "react-icons/ai";
import {useParams, useNavigate} from "react-router-dom";
import {CgMore} from "react-icons/cg";

const MainCategory = (props) => {
  const fetchCategory = async (link) => {
    await axios.get(link).then((res) => "");
  };
  const navigate = useNavigate();
  return (
    <div className="flex w-full font-worksans flex-col cursor-pointer flex-1 border-b border-[#FCB512] lg:mb-16 lg:justify-center lg:pb-10">
      <div className="flex w-full items-center font-worksans font-bold text-4xl p-6">
        <AiOutlineLeft onClick={() => navigate(-1)} className="mr-3" />
        Categories
      </div>
      <div className="flex w-full overflow-x-scroll items-center py-3">
        {props.categories.map((category) => (
          <div
            key={category.name + category.cid}
            onClick={() => props.fetchSubCategories(category.cid)}
            className="flex-none items-center mx-2 h-48 w-48 bg-red-200 rounded-xl overflow-hidden flex-col">
            <div
              style={{backgroundImage: `url(${category.image})`}}
              className="flex w-full h-full bg-cover text-center items-center justify-center bg-gray-400">
              <div className="flex justify-center items-center text-center bg-black h-full w-full bg-opacity-25 text-white font-bold p-5">
                {category.name}
              </div>
            </div>
          </div>
        ))}
        {props.nextLink ? (
          <div
            onClick={() => fetchCategory(props.nextLink)}
            className="flex-none items-center mx-2 h-48 w-48 rounded-xl overflow-hidden flex-col">
            <div className="flex w-full h-full bg-cover text-center items-center justify-center border">
              <div className="flex flex-col justify-center items-center text-sm text-center h-full w-full bg-opacity-25 p-5">
                <CgMore size="40" />
                See More
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainCategory;
