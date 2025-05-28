// About.tsx
import React from "react";
import PersonItem from "./about-items/PersonItem";
import Blessing from "../../assets/team/blessing-musungate.png";
import Craig from "../../assets/team/craig-smith.png";
import Nazli from "../../assets/team/nazli.png";
import Dan from "../../assets/team/dan.png";

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Positive News</h1>
      <p className="text-lg mb-4">
        Positive News is the media brand for rigorous journalism about what’s
        going right.
      </p>
      <p className="text-lg mb-8">
        We report socially relevant and uplifting stories of progress – ranging
        from the global boom in renewable energy to cities that are solving
        homelessness – joining the dots between how people, communities and
        organisations are changing the world for the better.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          While most of the news overwhelms people with negative narratives,
          Positive News offers a lens on the world that helps give people a
          fuller picture of reality, supports their wellbeing, and empowers them
          to make a positive difference. In doing so, we’re showing the rest of
          the media that good news matters.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Organisation</h2>
        <p className="text-lg">
          Positive News is an independent media brand structured as a community
          benefit society—a form of social enterprise with a co-operative
          ownership structure. Owned by 1,500 readers in 33 countries, our
          profits are reinvested in creating inspiring journalism for the public
          benefit. Our directors are elected by and from our community of
          co-owners.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="flex flex-wrap justify-start gap-24 mobile:gap-12">
          <PersonItem
            imageSource={Craig}
            name="Craig Smith"
            position="CEO / Director / Co-founder"
          />
          <PersonItem imageSource={Dan} name="Daniel Miller" position="COO" />
          <PersonItem
            imageSource={Nazli}
            name="Nazlıcan Varışlı"
            position="Developer"
          />{" "}
          <PersonItem
            imageSource={Blessing}
            name="Blessing Musungate"
            position="Developer"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Board of Directors</h2>
        <div className="flex flex-wrap justify-start gap-24 mobile:gap-12">
          <PersonItem
            imageSource={Craig}
            name="Craig Smith"
            position="CEO / Director / Co-founder"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
