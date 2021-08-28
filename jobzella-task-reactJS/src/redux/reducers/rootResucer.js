const initState = {
  // sorce of my data here type :array
  cardArray: [
    {
      id: 1,
      title: "Cercarold Laboratorise 1, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },
    {
      id: 2,
      title: "See all sources 2, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerumpudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 3,
      title: "Retro and Uncommon",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 4,
      title: "Osvaldo Laboratorise 4, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos ident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 5,
      title: "Reggie Laboratorise 5, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 6,
      title: "Powerful and Unique",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 7,
      title: "Cool and Different 7, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 8,
      title: "More Unique  8, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
    },

    {
      id: 9,
      title: "Cercarold Laboratorise 9, Inc",
      address: "Maadi , Cairo",
      descriptions:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rpudiandae provident, rerum, optieos odio eum dignissimos"
    }
  ],
  // selected item here type :js object

  item: {
    id: 1,
    title: "Cercarold 7 Laboratorise , Inc",
    address: "Maadi , Cairo",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullamarchitecto Et aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos  aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos aperiam vero repudiandae provident, rerum, optieos odio eum dignissimos"
  }
};

const reducer = (state = initState, action) => {
  if (action.type == "SETITEM") {
      // update selected item in stata 
    return { ...state, item: action.item, count: 526496 };
  }
  return state;
};

export default reducer;
