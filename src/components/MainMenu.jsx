import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

export default () => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu vertical>
      <Menu.Item>
        <Menu.Header>Businesses</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            name="small"
            active={activeItem === "small"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="large"
            active={activeItem === "large"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Apartments</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            name="good"
            active={activeItem === "good"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="ok"
            active={activeItem === "ok"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="bad"
            active={activeItem === "bad"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Popular</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            name="new"
            active={activeItem === "new"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="old"
            active={activeItem === "old"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Support</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            name="email"
            active={activeItem === "email"}
            onClick={handleItemClick}
          >
            E-mail Support
          </Menu.Item>

          <Menu.Item
            name="faq"
            active={activeItem === "faq"}
            onClick={handleItemClick}
          >
            FAQs
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};
