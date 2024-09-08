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
} from "@/components/Icons";

/* Data */
import experience from "@/data/experience.json";

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

  return (
    <>
      <h2 className="h5 title">About</h2>

      <div className="about__inner">
        <div className="inner__top">
          <div className="top__portrait">
            <GatsbyImage
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
                <a href="mailto:jacobmcmichael@gmail.com" target="_blank">
                  <Google />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jacobmcmichael/"
                  target="_blank"
                >
                  <LinkedIn />
                </a>
              </li>
              <li>
                <a href="https://github.com/jacobmcmichael" target="_blank">
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
                          <p className="company__position subtitle h6">
                            {item.position}
                          </p>
                          <a
                            className="subtitle company__name"
                            href={item.company_url}
                            target="_blank"
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
            <h4>Skills</h4>
            <div className="block__skills">
              <div className="block__item">Skill 1</div>
              <div className="block__item">Skill 1</div>
              <div className="block__item">Skill 1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
