import React from "react";
import MenuItem from "../menu-item/menu-item";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "living",
          imageUrl: "https://i.ibb.co/Mnd6tVK/living.png",
          size: "large",
          contentSize: "big-box",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus non nibh vitae scelerisque.",
          id: 1,
          linkUrl: "living"
        },
        {
          title: "kitchen",
          imageUrl: "https://i.ibb.co/hVMgRMC/kitchen.png",
          size: "large",
          contentSize: "big-box",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus non nibh vitae scelerisque.",
          id: 2,
          linkUrl: ""
        },
        {
          title: "dining",
          imageUrl: "https://i.ibb.co/3RPGsTz/dining.png",
          id: 3,
          linkUrl: ""
        },
        {
          title: "bedroom",
          imageUrl: "https://i.ibb.co/Jn4Kvkp/bedroom.png",
          id: 4,
          linkUrl: ""
        },
        {
          title: "bathroom",
          imageUrl: "https://i.ibb.co/F4XBK97/bathroom.png",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
