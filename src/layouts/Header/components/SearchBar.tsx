import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SearchIcon } from "../../../components";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initial = params.get("q") || "";
  const [keyword, setKeyword] = useState(initial);

  const submit = () => {
    const q = keyword.trim();
    if (!q) {
      // Clear search param when empty; stay on current page
      if (location.pathname === "/shop") {
        navigate({ pathname: "/shop" }, { replace: false });
      } else {
        navigate("/shop");
      }
      return;
    }
    const search = new URLSearchParams({ q }).toString();
    navigate(`/shop?${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 w-44 lg:w-64 bg-slate-200 gap-x-2">
      <input
        type="text"
        placeholder="Search products..."
        className="bg-transparent outline-none px-3 flex-1 text-sm min-w-0"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        className="bg-green-400 hover:bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
        onClick={submit}
        aria-label="Search"
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;
