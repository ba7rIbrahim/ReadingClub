export default function SearchForm({
  searchItem,
  setSearchItem,
  setSearchResult,
  setLoading,
}) {
  async function callAPI() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchItem}`
      );
      let result = await response.json();
      result = result.docs;
      setSearchResult(result);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.error("error ==> " + error);
    }
  }

  return (
    <div className="relative">
      <input
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
        type="text"
        className="bg-white rounded-full h-full w-full py-3 px-3 outline-none text-main placeholder:text-main placeholder:opacity-80"
        placeholder="Who you read ?"
      />
      <button
        onClick={(e) => {
          {
            callAPI();
          }
        }}
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-main rounded-full py-[10px] px-[12px] hover:bg-main/80"
      >
        SEARCH
      </button>
    </div>
  );
}
