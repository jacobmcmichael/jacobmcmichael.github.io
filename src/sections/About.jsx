/* Dependencies */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/* Components */
import EntranceAnimation from "@/components/EntranceAnimation";
import {
  ArrowUpRight,
  Download,
  Google,
  LinkedIn,
  Github,
  Html,
  Css,
  JavaScript,
  TypeScript,
  Vue,
  ReactIcon,
  Next,
  Node,
  Vite,
  Sass,
  Tailwind,
  Shopify,
  GraphQl,
  Figma,
} from "@/components/Icons";

/* Data */
import experience from "@/data/experience.json";
import testimonials from "@/data/testimonials.json";

/* Stylesheets */
import "@/styles/about.css";

export default function About() {
  // TODO: Make this into a hook
  // Use the `useStaticQuery` hook to fetch image data
  const data = useStaticQuery(graphql`
    query MyProjectImages {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 600
                quality: 80
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  // Create a mapping of image filenames to their data
  const images = data.allFile.edges.reduce((acc, { node }) => {
    acc[node.relativePath] = getImage(node.childImageSharp.gatsbyImageData);
    return acc;
  }, {});

  const skills = [
    { name: "Html", icon: <Html /> },
    { name: "Css", icon: <Css /> },
    { name: "JavaScript", icon: <JavaScript /> },
    { name: "TypeScript", icon: <TypeScript /> },
    { name: "Vue", icon: <Vue /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Next", icon: <Next /> },
    { name: "Node", icon: <Node /> },
    { name: "Vite", icon: <Vite /> },
    { name: "Sass", icon: <Sass /> },
    { name: "Tailwind", icon: <Tailwind /> },
    { name: "Shopify", icon: <Shopify /> },
    { name: "GraphQl", icon: <GraphQl /> },
    { name: "Figma", icon: <Figma /> },
  ];

  return (
    <>
      <h2 className="h5 title">About</h2>

      <div className="about__inner">
        <div className="inner__top">
          <div className="top__portrait">
            <GatsbyImage
              className="themed"
              image={images["portrait.png"]}
              alt="Jacob McMichael"
              placeholder="blurred"
              layout="constrained"
              width={600}
              quality={80}
            />

            <div className="portrait__info">
              <h3 className="title h6 info__title">I'm Jacob McMichael</h3>
              <p>A Frontend Web Developer based in California</p>
            </div>
          </div>

          <div className="bottom__block block block--hero">
            <ul className="block__links">
              <li>
                <a
                  href="mailto:jacobmcmichael@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Google />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jacobmcmichael/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jacobmcmichael"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </li>
              <li className="resume">
                <a
                  href="resume.pdf"
                  download="2024 - Jacob McMichael - Resume"
                  className="button button--primary"
                >
                  <span>Resume</span>
                  <Download />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="inner__bottom">
          <div className="bottom__block block block--experience">
            <h4 className="title h6">Experience</h4>

            <div className="experiences">
              {experience.map((item, index) => (
                <EntranceAnimation key={index}>
                  <div className="experience__item">
                    <div className="experience__item--inner">
                      <span className="experience__date subtitle small format--date">
                        {item.date}
                      </span>

                      <div className="experience__item--main">
                        <h5 className="experience__company">
                          <span className="company__position subtitle h6">
                            {item.position}
                          </span>
                          <a
                            className="company__name"
                            href={item.company_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.company_name}
                            <ArrowUpRight />
                          </a>
                        </h5>

                        <div className="experience__description">
                          <p className="description__item">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className="experience__tags tags__list">
                      {item.tags.map((tag, index) => (
                        <li
                          key={index}
                          className="experience__tag small tag tag--primary"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </EntranceAnimation>
              ))}
            </div>
          </div>

          <div className="bottom__block block block--skills">
            <h4 className="title h6">Skills</h4>
            <EntranceAnimation>
              <ul className="skills__list">
                {skills.map((skill, index) => (
                  <li key={index} className="block__item">
                    {skill.icon}
                  </li>
                ))}
              </ul>
            </EntranceAnimation>
          </div>

          <div className="bottom__block block block--testimonials">
            <h4 className="title h6">Testimonials</h4>
            <ul className="testimonials__list">
              {testimonials.map((testimonial, index) => (
                <EntranceAnimation key={index}>
                  <li className="block__item">
                    <div className="block__titles">
                      <h5 className="author subtitle h6">
                        {testimonial.author}
                      </h5>
                      <h6 className="position subtitle">
                        {testimonial.position}
                      </h6>
                    </div>
                    <blockquote>
                      <p>{testimonial.quote}</p>
                    </blockquote>
                  </li>
                </EntranceAnimation>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
