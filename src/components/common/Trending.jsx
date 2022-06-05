import React from "react";
import {Link} from "react-router-dom";
import CardView from "./CardView";
import Loader from "./Loader";
import {useSelector} from "react-redux";
import {shuffle} from "../../functions/shuffle";

const TrendingView = ({name, route}) => {
  const [items, setItems] = React.useState([]);
  const {data, isLoading} = useSelector((state) => state.trending);

  React.useEffect(() => {
    let mainData = [];
    let breakedData = [];
    if (data) {
      const copy = JSON.parse(JSON.stringify(data));
      const datas = shuffle(copy).slice(0, 4);
      for (let index = 0; index < datas.length; index++) {
        breakedData.push(datas[index]);
        if (breakedData.length === 2) {
          mainData.push(breakedData);
          breakedData = [];
        }
      }
      setItems(mainData);
    }
    console.log(items);
  }, [data]);

  return (
    <div className="flex font-worksans flex-col w-full px-6 sm:px-10 lg:px-16 lg:mb-20 mb-10 mt-10 sm:mt-24">
      <div className="flex w-full justify-center">
        <div className="flex w-full border-b border-black h-20 font-bold text-4xl lg:text-[2.2rem] items-start">
          <p>{name}</p>
        </div>
      </div>
      {isLoading ? (
        <Loader height={400} />
      ) : (
        <div className="flex flex-1 flex-col lg:flex-row py-5 pb-7 mb-2 rounded-lg items-center w-full">
          {items?.map((item) => (
            <div className="flex flex-1 sm:flex-row flex-col">
              {item?.map((data_) => (
                <Link to={`/product/${data_.sid}`} className="px-2">
                  <CardView item={data_} />
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingView;
