import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../apis";
import Loader from "./Loader";

const CategoryView = ({ name, route }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // React.useEffect(
  //   () => async () => {
  //     setIsLoading(true);
  //     const datas = await getData(route, setIsLoading, 6);
  //     let mainData = [];
  //     let breakedData = [];
  //     if (datas) {
  //       for (let index = 0; index < datas.length; index++) {
  //         breakedData.push(datas[index]);
  //         if (breakedData.length === 2) {
  //           mainData.push(breakedData);
  //           breakedData = [];
  //         }
  //       }
  //       setItems(mainData);
  //     }
  //   },
  //   []
  // );
  useEffect(() => {
    const datas = async () => {
      try {
        const datas = await getData(route);
        let mainData = [];
        let breakedData = [];
        if (datas) {
          for (let index = 0; index < datas.length; index++) {
            breakedData.push(datas[index]);
            if (breakedData.length === 2) {
              mainData.push(breakedData);
              breakedData = [];
            }
          }
          setItems(mainData);
        }
      } catch (err) {
        console.log(err)
      }
    }
    datas();
  }, []);

  return (
    <div className="flex font-worksans flex-col w-full px-6 sm:px-10 lg:px-16 lg:mb-20 mb-10 mt-10 sm:mt-24">
      <div className="flex w-full justify-center">
        <div className="flex w-full border-b border-black pb-3 font-bold text-2xl lg:text-3xl items-start">
          <p>{name}</p>
        </div>
      </div>
      {isLoading ? (
        <Loader height={400} />
      ) : (
        <div className="flex flex-1 flex-col lg:flex-row py-5 pb-7 mb-2 h-full rounded-lg items-center w-full" style={{ overflowY: 'hidden' }}>
          {items?.map((item) => (
            <div className="flex flex-1 flex-row h-full w-full">
              {item?.map((data) => (
                <Link
                  to={`/product/${data.name}/${data.scid}`}
                  className="px-2 flex-1 flex h-full">
                  <div className="flex mt-6 flex-col h-48 items-center rounded-lg w-full bg-green-50">
                    <div className="flex w-32 h-32  justify-center items-center">
                      {" "}
                      <img src={data.image} alt="hii" />
                    </div>
                    <div className="flex text-sm font-bold justify-center text-center px-6">
                      {data.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryView;
