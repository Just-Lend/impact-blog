// About.tsx
import React from "react";
import PersonItem from "./about-items/PersonItem";
import Blessing from "../../assets/team/blessing-musungate.png";
import Craig from "../../assets/team/craig-smith.png";
import Nazli from "../../assets/team/nazli.png";
import Dan from "../../assets/team/dan.png";
import HorizontalLine from "../../components/HorizontalLine";

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-8  mx-auto">
      <h1 className="text-4xl font-bold">About Our Impact News</h1>
      <section className="my-12 ml-[5%] flex flex-col gap-y-4">
        <p>
          Impact News is a platform for celebrating grassroots action —
          spotlighting the inspiring, often overlooked, local projects that are
          making a real difference in people's lives.
        </p>
        <p>
          We share the voices, faces, and ideas behind these initiatives — from
          youth-led collectives to neighbourhood support networks — rooted in
          care, creativity, and resilience. These are stories of people stepping
          up to meet local needs, often with few resources but powerful
          determination.
        </p>
        <p>
          Each edition is a celebration of community spirit. We publish in print
          and online, with 70% of profits going directly to fund the very
          projects featured inside.a{" "}
        </p>
      </section>
      <HorizontalLine />

      <section className="my-12 ml-[5%] flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Only 7% of charitable giving reaches micro community organisations —
          and that's exactly why this zine was created.
        </p>
        <p>
          Every year, thousands of grassroots groups across the UK apply for
          funding to support vital local work — from youth services and food
          projects to creative hubs and climate action. Most don’t get the
          support they deserve.
        </p>
        <p>
          {" "}
          We exist to change that. We believe the people doing the work on the
          ground — often with no staff, no spotlight, and no safety net — are
          the ones driving real change in our communities. By buying a copy or
          subscribing online, you're not just reading about these projects —
          you’re directly helping them thrive. 70% of profits go straight back
          to the groups featured inside.
        </p>
        <p>
          {" "}
          Want to get involved? Follow these projects, volunteer your time,
          share their stories — or simply visit your local community centre and
          ask what’s happening. That’s where the real stories begin.
        </p>
      </section>

      <HorizontalLine />
      <section className="my-12 ml-[5%] flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold mb-4">Our Organisation</h2>

        <p>
          Impact News began as a simple fundraising idea. Today, it’s part of a
          wider movement to create accessible, community-powered media that
          gives back.
        </p>
        <p>
          We operate as an independent, social enterprise model — reinvesting
          the majority of profits into the local initiatives we feature. Every
          issue is co-created with grassroots groups, residents, and
          contributors committed to strengthening their communities.
        </p>
        <p>
          {" "}
          Together, we’re building a new kind of media — one rooted in trust,
          equity, and local impact.
        </p>
      </section>
      <HorizontalLine />

      <section className="my-12">
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
      <HorizontalLine />
      <section className="my-12">
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
