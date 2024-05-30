import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
      "Community development empowers individuals and groups by providing resources, fostering collaboration, and promoting sustainable growth to enhance quality of life and create resilient, self-sufficient communities. Join us in making a difference!"},
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Our Volunteer Community is dedicated to transparency. We openly share all activities, decisions, and financial information, ensuring trust and accountability. By maintaining clear communication and providing regular updates, we foster a culture of openness and integrity. Join us to be part of an honest and transparent organization committed to positive change.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "In our Volunteer Community, impact measurement is key. We rigorously track and assess our initiatives' outcomes to ensure effectiveness and continuous improvement. By using data-driven insights, we transparently showcase our achievements and areas for growth, ensuring our efforts make a meaningful difference. Join us to contribute to impactful change.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
