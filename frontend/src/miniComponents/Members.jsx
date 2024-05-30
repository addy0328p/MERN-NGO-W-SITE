import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: " PM Modi",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Rahul Gandhi",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "S Jaishankar",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Addy",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Jeff Singh",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p><strong>PM Modi</strong> - Visionary leader and guiding force.</p>
<p><strong>Rahul Gandhi</strong> - Strategic thinker and advocate for change.</p>
<p><strong>S Jaishankar</strong> - Expert diplomat and global strategist.</p>
<p><strong>Addy</strong> - Dynamic innovator and problem-solver.</p>
<p><strong>Siri</strong> - Dedicated volunteer coordinator.</p>
<p><strong>Jeff Singh</strong> - Community outreach specialist.</p>

          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
