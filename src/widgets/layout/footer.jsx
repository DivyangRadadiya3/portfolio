import PropTypes from "prop-types";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="bg-gray-100 px-4 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12">
            <h4 className="text-xl font-bold text-gray-800">{title}</h4>
            <div className="mt-4 flex justify-center lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${color}-500 mx-2`}
                >
                  <i className={`fab fa-${name}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            {menus.map((menu, index) => (
              <div key={index}>
                <h5 className="text-lg font-bold text-gray-800">{menu.name}</h5>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.path}
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center text-gray-600">{copyright}</div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "D_Code",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {

      items: [
        { name: "Home", path: "#" },
        { name: "About Us", path: "#aboutUs" },
        {
          name: "Peojects",
          path: "#projects",
        },
        {
          name: "Contact Us",
          path: "#contactUs",
        },
      ],
    },

  ],
  copyright: (
    <>
      Copyright © {year} design  by{" "}
      <a
        href="#"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        D_Code
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
