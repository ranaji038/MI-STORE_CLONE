import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <Carousel fade>
      {banner.map((item, index) => (
        <Carousel.Item key={item.image} id="banner" interval={3000}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`${index} banner`}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read More</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const banner = [
  {
    name: "MI 11X",
    description:
      "What makes the Mi 11X a huge disruptor is its price tag. It comes with what we call “crazy Xiaomi pricing”",
    source: "TechPP",
    image:
      "https://i02.appmifile.com/708_operator_in/10/05/2021/2b7fc56c3b3c44f4b11bd9bd2b255749.jpg",
  },
  {
    name: "MI 11X PRO",
    description:
      "It is easily the most affordable device with a Snapdragon 888 chip and a 108-megapixel camera in the market right now",
    source: "TechPP",
    image:
      "https://i02.appmifile.com/191_operator_in/10/05/2021/4ccd175347800225dd6b47eb35166e2e.jpg",
  },
  {
    name: "REDMI NOTE 10 PRO MAX",
    description:
      "The Redmi Note 10 Pro Max’s macro camera captures the tiniest piece of details to stitch together some very good images.",
    source: "India Today",
    image:
      "https://i02.appmifile.com/52_operator_in/15/03/2021/7f91bdb2f227f8bd679fa96ac2a9fc1f.jpg",
  },
  {
    name: "REDMI NOTE 10",
    description:
      "The deep contrasts and the richness that AMOLED brings along add a much-needed dimension to the smartphone.",
    source: "TechPP",
    image:
      "https://i02.appmifile.com/107_operator_in/17/03/2021/fa9bab9cbad1629076b04a17a655559c.jpg",
  },
  {
    name: "MI 10I",
    description:
      "The Mi 10i clicks authentic, true-to-life photos with an abundance of details in every shot.",
    source: "91Mobiles",
    image:
      "https://i02.appmifile.com/85_operator_in/11/01/2021/b7600815ae26854c451a39ee88431098.jpg",
  },
  {
    name: "MI QLED TV 4K",
    description: "Redefining Value for Premium TVs",
    image:
      "https://i02.appmifile.com/108_operator_in/13/01/2021/3bfe5123ede27524d616f0bdaf43945a.jpg",
  },
  {
    name: "MI 10T PRO",
    description: "Mi 10T Pro is a clear winner in the premium segment",
    source: "FoneArena",
    image:
      "https://i02.appmifile.com/843_operator_in/28/12/2020/226c73c386cf35e47fa0079b3534085f.jpg",
  },
  {
    name: "REDMI 9 POWER",
    description:
      "In under an hour, the phone was charged around 80 percent plus, which is more than enough battery for two days.",
    source: "Indian Express",
    image:
      "https://i02.appmifile.com/779_operator_in/28/12/2020/55bbda7ebbb47f674213dead3c0fefdf.jpg",
  },
  {
    name: "MI SMART WATER PURIFIER",
    description: "Mi Smart Water Purifier: The Epitome Of Minimalism",
    source: "Mr.Phone",
    image:
      "https://i01.appmifile.com/webfile/globalimg/in/cms/97E65ECC-E105-9A20-6BD7-8A3235104C57.jpg",
  },
  {
    name: "MI SOUNDBAR",
    description: "We Looked Hard, But There Really Are no Faults.",
    source: "TechPP",
    image:
      "https://i01.appmifile.com/webfile/globalimg/in/cms/40F52E34-A946-E8B3-29F2-BBE4A5C7BEEE.jpg",
  },
];

export default Banner;
