import React, { useState, useEffect } from "react";

export const HomePage = () => {
  return (
    <div className="bg-[#0F182B] text-white min-h-screen">
      <h1>tailwind css starter </h1>
    </div>
  );
};

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://astroyantra.com/wp-json/wp/v2/posts/?per_page=1"
      );
      const res = await result.json();
      setData(res);
    };

    fetchData();
  }, []);
  console.log(data.length < 0);
  if (data.length < 0) {
    return <h1>Loading...</h1>;
  }
  console.log(data)
  return (
    <div className="bg-black min-h-screen text-white/80">
      <h1 className="text-center text-6xl py-10 ">
        Remix Basic Data fetching{" "}
      </h1>
      <div className="grid justify-center flex-col items-center  ">
        {data?.map((n) => {
          return (
            <div>
              {/* {n.content} */}
              <main dangerouslySetInnerHTML={{ __html: n.content.rendered }} />
            </div>
          );
        })}
        {/* <main dangerouslySetInnerHTML={{ __html: data.results[0].data.page_content[0].primary.rich_text[3].text}} /> */}
      </div>
    </div>
  );
}
