/** Please write the sample code to debounce handleOnChange (Do not use any 3th party libs other than react) **/

import React, { useRef } from "react";

const SearchBox = () => {
	const debounceTimeout = useRef(null);

	const handleOnChange = (event) => {
		const value = event.target.value;

		if (debounceTimeout.current) {
			clearTimeout(debounceTimeout.current);
		}

		debounceTimeout.current = setTimeout(() => {
			console.log("make ajax call", value);
		}, 300);
	};

	return <input type="search" name="p" onChange={handleOnChange} />;
};

export default SearchBox;
