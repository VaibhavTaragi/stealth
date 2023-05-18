import React, { useState } from "react";
import { BsGearWide } from "react-icons/bs";
import { CATEGORY_API } from "../constants/constants";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const fetchCategory = async () => {
    const res = await fetch(CATEGORY_API);
    const data = await res.json();
    setCategory(data);
  };  

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  useState(() => {
    fetchCategory();
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-around gap-8 font-semibold font-nunito">
        <h1>CATEGORIES</h1>
        <BsGearWide />
      </div>
      <div>
      {category.map((category) => (
        <div key={category.id} className="my-4">
          <h3 className="font-bold mb-2">{category.Name}</h3>
          <ul>
          {category.Labels.map((label) => (
            <li key={label.id} className="flex items-center">
              <input
                type="checkbox"
                checked={checkedItems.includes(label.id)}
                onChange={() => handleCheckboxChange(label.id)}
                className="form-checkbox h-5 w-5"
              />
              <span className="ml-2">{label.Name}</span>
            </li>
          ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Categories;
