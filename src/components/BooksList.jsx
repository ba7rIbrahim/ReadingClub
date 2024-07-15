import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import Footer from "./footer";

export default function BooksList({ searchResult, loading }) {
  if (loading == true) return <Loading />;
  return (
    <div className="container my-10 bg-white pb-5">
      <h2 className="text-xl text-main font-bold mb-16">YOUR SEARCH RESULT</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-4">
        {searchResult == null || searchResult == undefined
          ? ""
          : searchResult.length == 0 
          ? <div className="text-left pl-3 text-[#444] font-semibold text-xl">No Result</div>
          : searchResult.map((singleBook) => {
              return (
                <Link
                  key={singleBook.cover_i}
                  href={`https://openlibrary.org${singleBook.key}`}
                  className="shadow-md bg-gray-100/50 p-5 text-center rounded-lg hover:shadow-xl hover:-translate-y-1 duration-500 max-w-full"
                  target="_blank"
                >
                  <Image
                    src={
                      singleBook.cover_id
                        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-M.jpg`
                        : "/cover_not_found.jpg"
                    }
                    alt=""
                    width={150}
                    height={120}
                    className="mx-auto border mb-3"
                  />
                  <div className="h-[calc(100% - 250px)] flex-col justify-between">
                    <h1 className="font-semibold text-lg mb-4 text-main">
                      {singleBook.title}
                    </h1>
                    <div>
                      <div className="flex gap-2">
                        <span className="font-semibold text-[#333]">
                          Authors:{" "}
                        </span>
                        <p className="text-gray-400 text-sm text-left">
                          {singleBook.author_name.map((author, id, array) => {
                            return (
                              <span key={id}>
                                {author}
                                {id != array.length - 1 ? "," : "."}{" "}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-[#333] my-1">
                          Total Edition:{" "}
                        </span>
                        <p className="text-gray-400 text-sm">
                          {singleBook.edition_count}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-[#333]">
                          First Publish:{" "}
                        </span>
                        <p className="text-gray-400 text-sm">
                          {singleBook.first_publish_year}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
      <Footer />
    </div>
  );
}
